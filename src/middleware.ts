//easy version without customization
//export { default } from "next-auth/middleware"
//export const config = { matcher: ["/planets", "/characters"] }

//custom version
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server';

export default withAuth(
    async function middleware(req: NextRequestWithAuth) {
        if (!req.nextauth.token) return NextResponse.redirect(new URL('/signin', req.url));
        return NextResponse.next()
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    },
)

export const config = { matcher: ["/planets", "/characters"] };
