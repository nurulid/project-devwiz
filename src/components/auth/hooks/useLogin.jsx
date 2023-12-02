"use client"
import { useState } from "react";
import { API_URL } from "@/config/apiURL";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  /*/function login/*/
 const router = useRouter();
 const [loading, setLoading] = useState(false)
 const [loginData, setLoginData] = useState({
    email: "",
    password: "",
 });

  function handleChange(e) {
  const {name, value} = e.target;
  setLoginData({...loginData, [name] : value});
 }

 /*/function handle submit/*/
 async function handleSubmitLogin (){
  setLoading(true);
  const {email, password} = loginData;
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    }, body: JSON.stringify({email, password}), 
  }); 
  const data = await res.json();
  Cookies.set("token", data.token);
   
  if(!data){
    setLoading(false);
    toast.error("Error try again!");
    return;
  }
  setLoading(false);
  toast.success("Success 👍, Redirecting ...");
  setTimeout(() => router.push("/dashboard"), 2000);
 }
 return {loading, handleChange, handleSubmitLogin};
};
