import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  badRequest,
  escapeHtml,
  escapeHtmlWithLineBreaks,
  getRequestId,
  isValidEmail,
  isValidPhone,
  logApiEvent,
  normalizeText,
  serverError,
  validateRequiredFields,
} from '@/lib/api';
import { findReferralOwnerByCode, saveContactSubmission, saveReferralUse } from '@/lib/admin-store';

export const runtime = 'nodejs';

// 初始化Resend（如果有API key的话）
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FALLBACK_CONTACT = {
  email: 'xuguang.ma@climate-seal.net',
  phone: '+86 15652618365',
};

function getEmailRecipients() {
  const recipients = (process.env.EMAIL_TO || '')
    .split(',')
    .map((email) => email.trim())
    .filter(isValidEmail);

  return Array.from(new Set(recipients));
}

function hasSmtpConfig() {
  return Boolean(
    process.env.EMAIL_HOST &&
    process.env.EMAIL_PORT &&
    process.env.EMAIL_USER &&
    process.env.EMAIL_PASS &&
    process.env.EMAIL_FROM
  );
}

function hasResendConfig() {
  return Boolean(resend && process.env.RESEND_FROM_EMAIL);
}

function getResendClient() {
  return resend && process.env.RESEND_FROM_EMAIL ? resend : null;
}

function hasEmailConfig() {
  return getEmailRecipients().length > 0 && (hasResendConfig() || hasSmtpConfig());
}

function emailUnavailable(requestId: string, detail: string) {
  const message = 'Contact email is not available right now. Please email us directly.';

  return NextResponse.json(
    {
      success: false,
      error: message,
      message,
      detail,
      contactInfo: FALLBACK_CONTACT,
      requestId,
    },
    { status: 503 }
  );
}

function emailDeliveryFailed(requestId: string, detail: string) {
  const message = 'Contact form received, but email delivery failed. Please email us directly.';

  return NextResponse.json(
    {
      success: false,
      error: message,
      message,
      detail,
      contactInfo: FALLBACK_CONTACT,
      requestId,
    },
    { status: 502 }
  );
}

async function trySaveSubmission(
  requestId: string,
  submission: Parameters<typeof saveContactSubmission>[0]
) {
  try {
    await saveContactSubmission(submission);
    logApiEvent('send-contact-email', requestId, 'contact-submission-saved');
  } catch (error) {
    logApiEvent('send-contact-email', requestId, 'contact-submission-save-failed-nonblocking', {
      message: error instanceof Error ? error.message : 'unknown error',
    });
  }
}

async function trySaveReferralUse(
  requestId: string,
  referralUse: Parameters<typeof saveReferralUse>[0]
) {
  try {
    await saveReferralUse(referralUse);
    logApiEvent('send-contact-email', requestId, 'referral-use-saved');
  } catch (error) {
    logApiEvent('send-contact-email', requestId, 'referral-use-save-failed-nonblocking', {
      message: error instanceof Error ? error.message : 'unknown error',
    });
  }
}

export async function POST(request: NextRequest) {
  const requestId = getRequestId();

  try {
    const body = await request.json();
    const name = normalizeText(body?.name);
    const email = normalizeText(body?.email).toLowerCase();
    const phone = normalizeText(body?.phone);
    const company = normalizeText(body?.company);
    const industry = normalizeText(body?.industry);
    const message = normalizeText(body?.message);
    const referralCode = normalizeText(body?.referralCode).toUpperCase();

    const missingFields = validateRequiredFields(
      { name, email, phone, company, industry, message },
      ['name', 'email', 'phone', 'company', 'industry', 'message']
    );

    if (missingFields.length > 0) {
      return badRequest(requestId, `Missing required fields: ${missingFields.join(', ')}`);
    }

    if (!isValidEmail(email)) {
      return badRequest(requestId, 'Please provide a valid email address');
    }

    if (!isValidPhone(phone)) {
      return badRequest(requestId, 'Please provide a valid phone number');
    }

    let referralOwner = null;

    if (referralCode) {
      try {
        referralOwner = await findReferralOwnerByCode(referralCode);

        if (!referralOwner) {
          logApiEvent('send-contact-email', requestId, 'referral-code-not-found-nonblocking', {
            referralCode,
          });
        }
      } catch (error) {
        logApiEvent('send-contact-email', requestId, 'referral-owner-lookup-failed-nonblocking', {
          referralCode,
          message: error instanceof Error ? error.message : 'unknown error',
        });
      }
    }

    const submittedAtIso = new Date().toISOString();

    await trySaveSubmission(requestId, {
      id: requestId,
      submittedAt: submittedAtIso,
      name,
      email,
      phone,
      company,
      industry,
      message,
      referralCode: referralOwner?.referralCode,
      referralOwnerId: referralOwner?.id,
      referralOwnerName: referralOwner?.name,
    });

    if (referralOwner) {
      await trySaveReferralUse(requestId, {
        id: `${requestId}-ref`,
        createdAt: submittedAtIso,
        referralCode: referralOwner.referralCode,
        referralOwnerId: referralOwner.id,
        referralOwnerName: referralOwner.name,
        referredName: name,
        referredEmail: email,
        referredCompany: company,
        source: 'contact_form',
        contactSubmissionId: requestId,
        status: 'new',
        rewardValueUsd: 200,
      });
    }

    logApiEvent('send-contact-email', requestId, 'received', {
      hasResendConfig: hasResendConfig(),
      hasSmtpConfig: hasSmtpConfig(),
      industry,
      hasReferral: Boolean(referralOwner),
      recipients: getEmailRecipients(),
      hasDatabaseConfig: Boolean(process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL),
    });

    if (!hasEmailConfig()) {
      logApiEvent('send-contact-email', requestId, 'failed-no-email-config');
      return emailUnavailable(
        requestId,
        'Missing EMAIL_TO plus RESEND_API_KEY/RESEND_FROM_EMAIL, or EMAIL_TO plus complete SMTP EMAIL_HOST/EMAIL_PORT/EMAIL_USER/EMAIL_PASS/EMAIL_FROM configuration.'
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company);
    const safeIndustry = escapeHtml(industry);
    const safeMessage = escapeHtmlWithLineBreaks(message);
    const safeReferralCode = escapeHtml(referralOwner?.referralCode ?? referralCode ?? '');
    const safeReferralOwnerName = escapeHtml(referralOwner?.name ?? '');
    const submittedAt = new Date().toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0;">Climate Seal - 新的联系表单提交</h2>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px;">
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #333; margin-top: 0;">客户信息</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">姓名:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">邮箱:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">
                  <a href="mailto:${safeEmail}" style="color: #667eea; text-decoration: none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">电话:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">
                  <a href="tel:${safePhone}" style="color: #667eea; text-decoration: none;">${safePhone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">公司:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${safeCompany}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">行业:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${safeIndustry}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">推荐码:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${safeReferralCode || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">推荐人:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${safeReferralOwnerName || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555;">留言:</td>
                <td style="padding: 10px 0; color: #333;">${safeMessage}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f2ff; border-left: 4px solid #667eea; border-radius: 4px;">
              <p style="margin: 0; color: #555; font-size: 14px;">
                📅 提交时间: ${submittedAt}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>此邮件由 Climate Seal 网站自动发送</p>
          </div>
        </div>
      </div>
    `;

    const recipients = getEmailRecipients();

    // 如果配置了Resend，优先使用 Resend 发送。
    const resendClient = getResendClient();

    if (resendClient) {
      try {
        const { data, error } = await resendClient.emails.send({
          from: process.env.RESEND_FROM_EMAIL!,
          to: recipients,
          subject: `新的联系表单提交 - ${safeName}`,
          html: emailTemplate,
          replyTo: email,
        });

        if (error) {
          logApiEvent('send-contact-email', requestId, 'resend-error', {
            message: error.message,
          });
          throw new Error('Failed to send with Resend');
        }

        logApiEvent('send-contact-email', requestId, 'sent-via-resend');
        return NextResponse.json(
          { success: true, deliveryProvider: 'resend', data },
          { status: 200 }
        );
      } catch (resendError) {
        logApiEvent('send-contact-email', requestId, 'resend-fallback-to-smtp', {
          message: resendError instanceof Error ? resendError.message : 'unknown error',
        });
      }
    }

    if (!hasSmtpConfig()) {
      logApiEvent('send-contact-email', requestId, 'failed-no-smtp-config-after-resend', {
        recipients,
      });
      return emailDeliveryFailed(
        requestId,
        'Resend delivery failed and SMTP fallback is not fully configured.'
      );
    }

    // 回退到 nodemailer SMTP。
    try {
      const nodemailer = await import('nodemailer');
      
      // 创建邮件传输器
      const transporter = nodemailer.default.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_PORT === '465',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // 邮件内容
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: recipients,
        replyTo: email,
        subject: `新的联系表单提交 - ${safeName}`,
        html: emailTemplate,
      };

      // 发送邮件
      await transporter.sendMail(mailOptions);

      logApiEvent('send-contact-email', requestId, 'sent-via-smtp');
      return NextResponse.json(
        { success: true, deliveryProvider: 'smtp' },
        { status: 200 }
      );
    } catch (nodemailerError) {
      logApiEvent('send-contact-email', requestId, 'smtp-send-failed', {
        message: nodemailerError instanceof Error ? nodemailerError.message : 'unknown error',
      });
      return emailDeliveryFailed(
        requestId,
        nodemailerError instanceof Error ? nodemailerError.message : 'SMTP delivery failed.'
      );
    }

  } catch (error) {
    logApiEvent('send-contact-email', requestId, 'unhandled-error', {
      message: error instanceof Error ? error.message : 'unknown error',
    });
    return serverError(requestId);
  }
}
