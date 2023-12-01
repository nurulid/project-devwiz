"use client";
import { Input, Button } from "@nextui-org/react";
import React from 'react';
import {Link} from "@nextui-org/react";
import { useLogin } from "../hooks/useLogin";



export const Login = () => {
  const {loading, handleChange, handleSubmitLogin} = useLogin();
  return (
    <main className="space-y-4 bg-zinc-50 shadow-md p-7 rounded-lg">
      <p className= "text-center text-xl tracking-wide p-4 font-semibold" >Continue your journey 🚀</p>
        <Input  name="email" 
        type="email"
        label="Email"
        variant="flat"
        radius="full"
        placeholder="email@domain.com" onChange={handleChange} />
        <Input name="password"
        variant="flat"
        radius="full"
        placeholder="password" type="password" onChange={handleChange}/>
        <Button color="default" variant="ghost" onClick={handleSubmitLogin}>Log in</Button>
        <div className="flex gap-2">
            <div>Don't have an acoount ? </div>
            <div><Link href="/register" color="default" align="underlined">Register</Link></div>
        </div>
    </main>
  )
}
