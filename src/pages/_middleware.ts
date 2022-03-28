import { NextRequest, NextResponse } from 'next/server';
import { privateForLoggedUsers, privateForNonLoggedUsers } from '~/utils';

export async function middleware(req: NextRequest) {
  const { 'pcx.token': token } = req.cookies;
  const { pathname, origin } = req.nextUrl;

  if (pathname) {
    if (token) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (privateForLoggedUsers.includes(pathname)) {
          return NextResponse.redirect(`${origin}/settings`);
        }
      } catch (err) {
        return NextResponse.redirect(`${origin}/signin`).clearCookie(
          'pcx.token'
        );
      }
    } else if (privateForNonLoggedUsers.includes(pathname)) {
      return NextResponse.redirect(`${origin}/signin`);
    }
  }

  return NextResponse.next();
}
