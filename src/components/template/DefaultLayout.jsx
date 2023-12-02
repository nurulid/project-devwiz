"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";


export const DefaultLayout = ({ children }) => {
  const currentPath = usePathname();

  if(currentPath === "/login" || currentPath === "/register") {
    return (
      <>{children}</>
    )
  }

  return (
    <>
      <Header/>
      <main className="max-w-7xl w-full mx-auto mb-10 pt-12 px-10">{children}</main>
      <Footer />
    </>
  );
};
