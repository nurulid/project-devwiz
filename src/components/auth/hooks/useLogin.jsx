"use client"
import { useState } from "react";
import { API_URL } from "@/config/apiURL";

export const useLogin = () => {
  /*/function login/*/
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
  if(!data){
    setLoading(false);
    console.log("error");
    return;
  }
  setLoading(false);
  console.log(data);
 }
 return {loading, handleChange, handleSubmitLogin};
};
