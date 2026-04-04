import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // If user is authenticated but not an admin (though currently only one user)
    // they could be redirected. For now, withAuth handles the redirect to login.
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/mahajan/admin/login",
    },
  }
);

export const config = {
  matcher: ["/mahajan/admin/:path*", "/api/seed/:path*"],
};
