import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/mahajan/admin/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = {
  matcher: [
    /*
     * Match all admin paths EXCEPT the login page to avoid potential loops
     */
    "/mahajan/admin((?!/login).*)",
    "/api/seed/:path*"
  ],
};
