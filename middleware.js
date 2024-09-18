import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function (req) {
    console.log("User is authenticated: ", req.nextUrl.pathname);
    console.log("User role: ", req.nextauth.token.role);

    // Allow access to the createUser route for all users
    if (req.nextUrl.pathname.startsWith("/createUser")) {
      return NextResponse.next();
    }

    if (
      req.nextUrl.pathname.startsWith("/createUser") &&
      req.nextauth.token.role !== "admin"
    ) {
      const destinationUrl = new URL("/denied", req.nextUrl.origin);
      return NextResponse.rewrite(destinationUrl);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/createUser"] };
