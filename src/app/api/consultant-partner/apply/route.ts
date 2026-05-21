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
import { saveConsultantPartnerApplication } from '@/lib/admin-store';

function normalizeList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean);
}

export async function POST(request: NextRequest) {
  const requestId = getRequestId();

  try {
    const body = await request.json();
    const name = normalizeText(body?.name);
    const email = normalizeText(body?.email).toLowerCase();
    const company = normalizeText(body?.company);
    const countryRegion = normalizeText(body?.countryRegion);
    const consultantType = normalizeText(body?.consultantType) as
      | 'carbon'
      | 'esg'
      | 'lca'
      | 'sustainability'
      | 'boutique_firm'
      | 'other';
    const teamSize = normalizeText(body?.teamSize);
    const expectedProjectsNext3Months = normalizeText(body?.expectedProjectsNext3Months);
    const website = normalizeText(body?.website);
    const linkedin = normalizeText(body?.linkedin);
    const message = normalizeText(body?.message);
    const clientIndustries = normalizeList(body?.clientIndustries);
    const projectTypes = normalizeList(body?.projectTypes);
    const wantsReferralAccess = Boolean(body?.wantsReferralAccess);

    const missingFields = validateRequiredFields(
      {
        name,
        email,
        company,
        countryRegion,
        consultantType,
        teamSize,
        expectedProjectsNext3Months,
      },
      ['name', 'email', 'company', 'countryRegion', 'consultantType', 'teamSize', 'expectedProjectsNext3Months']
    );

    if (missingFields.length > 0) {
      return badRequest(requestId, `Missing required fields: ${missingFields.join(', ')}`);
    }

    if (!isValidEmail(email)) {
      return badRequest(requestId, 'Please provide a valid email address');
    }

    if (clientIndustries.length === 0) {
      return badRequest(requestId, 'Please select at least one client industry');
    }

    if (projectTypes.length === 0) {
      return badRequest(requestId, 'Please select at least one project type');
    }

    if (!['carbon', 'esg', 'lca', 'sustainability', 'boutique_firm', 'other'].includes(consultantType)) {
      return badRequest(requestId, 'Please choose a valid consultant type');
    }

    await saveConsultantPartnerApplication({
      id: requestId,
      submittedAt: new Date().toISOString(),
      name,
      email,
      company,
      countryRegion,
      consultantType,
      teamSize,
      clientIndustries,
      projectTypes,
      expectedProjectsNext3Months,
      wantsReferralAccess,
      website,
      linkedin,
      message,
      status: 'new',
    });

    logApiEvent('consultant-partner-apply', requestId, 'received', {
      consultantType,
      clientIndustryCount: clientIndustries.length,
      projectTypeCount: projectTypes.length,
      wantsReferralAccess,
    });

    return NextResponse.json({ success: true, requestId }, { status: 200 });
  } catch (error) {
    logApiEvent('consultant-partner-apply', requestId, 'error', {
      message: error instanceof Error ? error.message : 'unknown error',
    });
    return serverError(requestId);
  }
}
