import { NextResponse } from 'next/server'

export async function middleware() {
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth/{me,login,logout,callback} (API auth0 routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api/auth/me|api/auth/login|api/auth/logout|api/auth/callback|_next/static|_next/image|favicon.ico).*)',
  ],
}
