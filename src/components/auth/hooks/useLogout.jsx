"use client"

import Cookies from "js-cookie"; //pake js-cookie kalo di client
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("token"); //remove token cookie
    Cookies.remove("id"); //remove user id cookie
    localStorage.removeItem("userData"); //remove userData on localStorage

    router.refresh();
    setTimeout(() => router.push("/login"), 1000);
  };

  return {
    handleLogout,
  };
};
