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
    return NextResponse.redirect(
      new URL(
        // `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
        //   reqUrl?.pathname
        // )}`,
        `${BASE_PATH}/signin`,
        req.url
      )
    );
  }
});
