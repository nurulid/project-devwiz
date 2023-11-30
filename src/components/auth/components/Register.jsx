import { Input, Button } from "@nextui-org/react";
import React from 'react';
import {Link} from "@nextui-org/react";

export const Register = () => {
 
  
  return (
    <main className="space-y-4 bg-zinc-50 shadow-md p-7 rounded-lg">
        <p className="text-center text-xl tracking-wide p-4 font-semibold" >Register to create your first event ⭐</p>
        <Input  variant="flat" radius="full"
        placeholder="name" />
        <Input   isRequired
        type="email"
        label="Email"
        variant="flat"
        radius="full"
        placeholder="email@domain.com" />
        <Input 
        variant="flat"
        radius="full"
        placeholder="password" type="password" />
        <Button color="default" variant="ghost">Register</Button>
        <div className="flex gap-2">
            <div>Already have account ? </div>
            <div><Link href="/login" color="default" align="underlined">Login</Link></div>
        </div>
    </main>
  )
}
