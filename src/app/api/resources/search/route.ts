import { NextRequest, NextResponse } from 'next/server';
import { searchArticleIds } from '@/lib/content';

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') || '';
  if (query.length > 300) return NextResponse.json({ error: 'Query too long' }, { status: 400 });
  return NextResponse.json({ ids: searchArticleIds(query) });
}
