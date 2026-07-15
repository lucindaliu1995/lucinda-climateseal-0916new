import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  LANGUAGE_COOKIE,
  LANGUAGE_HEADER,
  SUPPORTED_LANGUAGES,
  resolveLanguage,
} from '@/lib/language';

const RETIRED_SAMPLE_ARTICLE_PATH = /^\/resources\/sample-article-(?:1|2|3)\/?$/;

function setLanguageCookie(response: NextResponse, language: string) {
  response.cookies.set(LANGUAGE_COOKIE, language, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
}

export function middleware(request: NextRequest) {
  const queryLanguage = request.nextUrl.searchParams.get('lang');
  const cookieLanguage = request.cookies.get(LANGUAGE_COOKIE)?.value;
  const isPageRequest =
    (request.method === 'GET' || request.method === 'HEAD') &&
    !request.nextUrl.pathname.startsWith('/api/');

  if (isPageRequest && RETIRED_SAMPLE_ARTICLE_PATH.test(request.nextUrl.pathname)) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        'Cache-Control': 'public, max-age=300',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  if (
    isPageRequest &&
    queryLanguage &&
    (queryLanguage === 'en' || !SUPPORTED_LANGUAGES.some((language) => language === queryLanguage))
  ) {
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete('lang');
    const response = NextResponse.redirect(cleanUrl, 308);
    setLanguageCookie(response, 'en');
    return response;
  }

  const language = resolveLanguage(queryLanguage || cookieLanguage);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LANGUAGE_HEADER, language);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  setLanguageCookie(response, language);

  return response;
}

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|rss.xml).*)'],
};
