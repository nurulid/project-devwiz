import React from 'react';
import Image from 'next/image';



export const AuthLayout = ({children}) => {
  return (
    <main className="h-screen grid grid cols-1 lg:grid-cols-2">
    <div className="hidden lg:block py-10 pr-px-10 items-center bg-zinc-100 ">
      <section className=" flex justify-center items-centerw-[640px]">
        <Image 
        src="/logo.jpg"
        width={620}
        height={420}
        alt="logo"
        />
        </section>
        </div>
     <div className="flex justify-center items-center">
    <section className="w-[320px]">
    {children}
    </section></div>
    </main>
  )
}
