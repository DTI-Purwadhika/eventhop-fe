import { NextResponse } from "next/server";
import { auth } from "@/services/auth";
import { BASE_PATH } from "@/constants/config";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|assets|images|favicon.ico|event|sign).*)",
  ],
};

export default auth((req) => {
  const reqUrl = new URL(req.url);
  if (!req.auth && reqUrl?.pathname !== "/") {
    return NextResponse.redirect(new URL(`${BASE_PATH}/signin`, req.url));
  }
  const user: any = req.auth?.user;

  if (
    reqUrl.pathname.startsWith("/dashboard/vouchers") ||
    reqUrl.pathname.startsWith("/dashboard/events") ||
    reqUrl.pathname.startsWith("/dashboard/reports") ||
    reqUrl.pathname.startsWith("/dashboard/feedback")
  ) {
    if (!user || user.role !== "organizer") {
      return NextResponse.redirect(new URL(`/dashboard`, req.url));
    }
  }
});
