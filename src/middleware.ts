import { NextResponse } from "next/server";
import { auth, BASE_PATH } from "@/utils/getAuth";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|event).*)"],
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
