"use client"

import { SessionProvider } from "next-auth/react"

export function SessionaAuthProvider({ children } : {children: React.ReactNode}){
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}