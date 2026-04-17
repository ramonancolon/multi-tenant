import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    "/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)",
  ],
};

export default function middleware(request: NextRequest) {
  const url = request.nextUrl;
  let hostname = request.headers.get("host") || "localhost";

  if (hostname.includes(":")) {
    hostname = hostname.split(":")[0];
  }

  const newPath = `/sites/${hostname}${url.pathname}`;

  console.log(`Rewriting to: ${newPath}`);

  return NextResponse.rewrite(
    new URL(newPath, request.url)
  );
}