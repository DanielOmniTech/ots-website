import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const existing = request.cookies.get("ots-locale")?.value;
  if (existing === "en" || existing === "nl") {
    return NextResponse.next();
  }

  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const locale = accept.startsWith("nl") ? "nl" : "en";
  const response = NextResponse.next();
  response.cookies.set("ots-locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
