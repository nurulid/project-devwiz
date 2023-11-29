import React from 'react';
import Image from 'next/image';



export const AuthLayout = ({children}) => {
  return (
    <main className="h-screen grid grid cols-1 lg:grid-cols-2">
    <div className="hidden lg:block py-12 px-10 bg-gradient-to-r from-slate-100 to-slate-700">
      <section className="w-[640px]">
    <Image 
        src="/logo.jpg"
        width={640}
        height={640}
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
