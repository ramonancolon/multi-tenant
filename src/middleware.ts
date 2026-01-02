import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)"],
};

export default function middleware(request: NextRequest) {
  // Check 'x-forwarded-host' because DreamHost handles the initial request
  let hostname = request.headers.get("x-forwarded-host") || request.headers.get("host");
  hostname = hostname || "localhost";

  // Cleanup
  if (hostname.includes(":")) hostname = hostname.split(":")[0];
  if (hostname.startsWith("www.")) hostname = hostname.replace("www.", "");

  const newPath = `/sites/${hostname}${request.nextUrl.pathname}`;
  return NextResponse.rewrite(new URL(newPath, request.url));
}