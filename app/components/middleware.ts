import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.hostname === "centex-serwis.pl") {
    url.hostname = "www.centex-serwis.pl";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}
