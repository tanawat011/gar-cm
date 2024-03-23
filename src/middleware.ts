import { NextResponse } from 'next/server'
// import { withAuth } from 'next-auth/middleware'

// export default withAuth(
//   () => {
//     console.log('xxxxxxx')

//     return NextResponse.next()
//   },
//   {
//     pages: {
//       signIn: process.env.NEXT_PUBLIC_AUTH_SIGN_IN_URI,
//     },
//     // callbacks: {
//     //   authorized: ({ token }) => token?.role === "admin",
//     // },
//   },
// )

export default function middleware() {
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (API routes)
     * - admin (Admin path)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images (public image files)
     * - favicon.ico (favicon file)
     */
    '/((?!api/auth|admin|_next/static|_next/image|images|favicon.ico).*)',
  ],
}
