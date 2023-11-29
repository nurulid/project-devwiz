import { Input, Button } from "@nextui-org/react";
import React from 'react';
import {Link} from "@nextui-org/react";

export const Login = () => {
  return (
    <main className="space-y-3">
        <p className="text-center text-small p-4 font-semibold" >Register to create your first event ⭐</p>
        <Input variant="flat" radius="full"
        placeholder="name" />
        <Input  isRequired
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
