import { NextResponse } from "next/server";

export default function middleware(request) {
    //verifikasi token
  return NextResponse.redirect(new URL("/login"))
}
export const config = {
    matcher: ["/dashboard"],
}
