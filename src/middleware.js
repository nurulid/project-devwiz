import { NextResponse } from "next/server";
import * as jose from "jose";

export default async function middleware(request) {
  //inisialisasikan value token ke dalam variable
  const token = request.cookies.get("token")?.value; //mengambil value token
  // console.log(token); //cek value token

  //verifikasi token, ada atau tidak
  if (token) {
    //verifikasi token
    try {
      const secretKey = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_KEY);
      await jose.jwtVerify(token, secretKey);
      return NextResponse.next();
    }
    catch (error) {
      //jika error direct ke /login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  //jika token tidak ada, direct ke /login
  return NextResponse.redirect(new URL("/login", request.url));
}
export const config = {
  matcher: ["/dashboard/:path*"], //route yang di protect
};
