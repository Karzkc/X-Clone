// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathSegment = pathname.split('/').filter(Boolean).pop() || 'home';

  const response = NextResponse.next();
  response.headers.set('x-page-title', pathSegment);

  return response;
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
