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
  // console.log(data); //cek data user
  Cookies.set("token", data.token); //store value token di cookies browser
  Cookies.set("id", data.data.id); //store value id user di cookies browser, untuk kebutuhan GET My Events by user id (user events)
  localStorage.setItem("userData", JSON.stringify(data.data)) //ambil semua value data-nya payload, lalu store ke localStorage dengan key userData
   
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
