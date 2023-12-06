"use client";
import React from "react";
import { Input, Button } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";

export const Register = () => {
 const {loading, handleChange, handleSubmitRegister} = useRegister();
  
  return (
    <main className="space-y-4 bg-zinc-50 shadow-md p-7 rounded-lg">
        <p className="text-center text-xl tracking-wide p-4 font-semibold" >Register to create your first event ⭐</p>
        <Input name="name" variant="flat" radius="full"
        placeholder="name" onChange={handleChange}/>
        <Input  name="email" isRequired
        type="email"
        label="Email"
        variant="flat"
        radius="full"
        placeholder="email@domain.com" onChange={handleChange}/>
        <Input name="password"
        variant="flat"
        radius="full"
        placeholder="password" type="password" onChange={handleChange}/>
        <Button isLoading={loading} isDisabled={loading} color="warning" variant="ghost" radius="full" className="w-full" onClick={handleSubmitRegister}>Register</Button>
        <div className="flex gap-2">
            <div>Already have account ? </div>
            <div><Link href="/login" color="default" align="underlined">Login</Link></div>
        </div>
    </main>
  )
}
