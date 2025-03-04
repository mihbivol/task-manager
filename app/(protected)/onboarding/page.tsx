import { Button } from '@/components/ui/button'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import React from 'react'

const page = () => {
  return (
    <div className="w-full flex flex-col h-screen items-center justify-center">
        <h1 className="text-5xl font-bold text-center">Welcome to Task Manager!</h1>
        <div className="flex gap-4 mt-6">
            <Button>
                <RegisterLink>Get started</RegisterLink>
            </Button>
            <Button asChild variant={"outline"}>
                <LoginLink>Sign in</LoginLink>
            </Button>
        </div>
    </div>
  )
}

export default page