import { NextRequest, NextResponse } from 'next/server';
import {
  badRequest,
  getRequestId,
  isValidEmail,
  logApiEvent,
  normalizeText,
  serverError,
  validateRequiredFields,
} from '@/lib/api';
import { saveNewsletterSubscriber, savePcfResponsePackRequest } from '@/lib/admin-store';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const requestId = getRequestId();

  try {
    const body = await request.json();
    const email = normalizeText(body?.email).toLowerCase();
    const company = normalizeText(body?.company);
    const role = normalizeText(body?.role);
    const industry = normalizeText(body?.industry);
    const marketingOptIn = body?.marketingOptIn === true;

    const missingFields = validateRequiredFields({ email, company, role }, ['email', 'company', 'role']);

    if (missingFields.length > 0) {
      return badRequest(requestId, `Missing required fields: ${missingFields.join(', ')}`);
    }

    if (!isValidEmail(email)) {
      return badRequest(requestId, 'Please provide a valid email address');
    }

    await savePcfResponsePackRequest({
      id: requestId,
      submittedAt: new Date().toISOString(),
      email,
      company,
      role,
      industry,
      marketingOptIn,
    });

    if (marketingOptIn) {
      try {
        await saveNewsletterSubscriber({
          id: requestId,
          subscribedAt: new Date().toISOString(),
          email,
          source: 'pcf_response_pack',
        });
      } catch (error) {
        logApiEvent('request-pcf-response-pack', requestId, 'marketing-opt-in-save-failed', {
          message: error instanceof Error ? error.message : 'unknown error',
        });
      }
    }

    logApiEvent('request-pcf-response-pack', requestId, 'saved', { marketingOptIn });

    return NextResponse.json({
      success: true,
      requestId,
      downloadUrl: '/downloads/climateseal-pcf-3-day-response-pack.pdf',
    });
  } catch (error) {
    logApiEvent('request-pcf-response-pack', requestId, 'unhandled-error', {
      message: error instanceof Error ? error.message : 'unknown error',
    });
    return serverError(requestId);
  }
}
