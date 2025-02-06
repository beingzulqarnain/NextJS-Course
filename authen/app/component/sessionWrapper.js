"use client"
import { SessionProvider } from "next-auth/react";

const sessionWrapper = ({children}) => {
  return (
    <div>
            <SessionProvider>{children}</SessionProvider>
    </div>
  )
}

export default sessionWrapper