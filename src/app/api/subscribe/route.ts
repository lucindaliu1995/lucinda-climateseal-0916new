import { NextRequest, NextResponse } from 'next/server';
import {
  badRequest,
  getRequestId,
  isValidEmail,
  logApiEvent,
  normalizeText,
  serverError,
} from '@/lib/api';
import { saveNewsletterSubscriber } from '@/lib/admin-store';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const requestId = getRequestId();

  try {
    const body = await request.json();
    const email = normalizeText(body?.email).toLowerCase();
    const source = normalizeText(body?.source) || 'resource_article';

    if (!email || !isValidEmail(email)) {
      return badRequest(requestId, 'Please provide a valid email address');
    }

    await saveNewsletterSubscriber({
      id: requestId,
      subscribedAt: new Date().toISOString(),
      email,
      source: source.slice(0, 120),
    });

    logApiEvent('subscribe', requestId, 'newsletter-subscriber-saved', { source });

    return NextResponse.json({ success: true, requestId }, { status: 200 });
  } catch (error) {
    logApiEvent('subscribe', requestId, 'unhandled-error', {
      message: error instanceof Error ? error.message : 'unknown error',
    });
    return serverError(requestId);
  }
}
