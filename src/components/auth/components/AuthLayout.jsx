import React from "react";
import Image from "next/image";
import Link from "next/link";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block py-10 pr-px-10 items-center bg-zinc-100 ">
        <section className=" flex justify-center items-center w-[640px] h-full mx-auto">
          <Image src="/logo.jpg" width={620} height={420} alt="logo" />
        </section>
      </div>
      <div className="flex flex-col justify-center items-center">
        <section className="w-[320px]">
          <Link href={"/"} className="text-md underline mb-6 block">
            Back to Homepage
          </Link>
          {children}
        </section>
      </div>
    </main>
  );
};
