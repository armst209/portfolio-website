import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/proxy';
import { isPrivateRoute } from '@/lib/routes';

export async function proxy(request: NextRequest) {
  const { response, isAuthenticated } = await updateSession(request);

  if (!isAuthenticated && isPrivateRoute(request.nextUrl.pathname)) {
    const signInUrl = request.nextUrl.clone();
    signInUrl.pathname = '/signin';
    signInUrl.search = '';
    return NextResponse.redirect(signInUrl);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - image files in /public
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
