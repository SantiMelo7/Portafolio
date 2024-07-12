import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const nextInTMiddleware = createMiddleware({
  locales: ['es', 'id'],
  // Used when no locale matches
  defaultLocale: 'id'
})

export default function (req: NextRequest): NextResponse {
  return nextInTMiddleware(req)
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(id|es)/:path*']
};