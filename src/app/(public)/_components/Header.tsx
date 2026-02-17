"use client"

import { useState } from "react";
import Link from "next/link";
import {
  Sheet, 
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import { handleRegster } from "../_actions/login";

export function Header(){
  const { data: session, status} = useSession();
  const [isOpen, setIsOpen] = useState(false);  
  const navItems = [
    { href: "#profissionais", label: "Profissionais" },
    { href: "/contatos", label: "Contatos" }
  ];

  async function handleLogin(){
    await handleRegster("google")
  }

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          onClick={() => setIsOpen(false)}
          key={item.href}
          asChild
          className="
            bg-transparent 
            hover:bg-zinc-100 
            text-zinc-800 
            shadow-none 
            justify-start
          "
        >
          <Link href={item.href} className="text-base">
            {item.label}
          </Link>
        </Button>
      ))}

      { status === "loading" ? (
        <></>
      ) : session ? (
        <Link 
        href="/dashboard"
        className="flex items-center justify-center gap-2 bg-zinc-900 text-white py-1 rounded-md px-4 font-semibold hover:bg-emerald-500 cursor-pointer">
            Painel da Clínica
        </Link>
      ) : (
        <Button
        onClick={handleLogin}
        className="hover:bg-emerald-500 cursor-pointer">
            <LogIn/>Portal da Clínica
        </Button>
      )
    }
    </>
  );
    
  return (
    <header className="
      fixed top-0 left-0 right-0 
      z-50 
      bg-white 
      border-b 
      py-4 px-6
    ">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/"
          className="text-3xl font-bold text-zinc-900"
        >
          Odonto<span className="text-emerald-500">Pro</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavLinks />
        </nav>

        {/* Mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-800 hover:bg-zinc-100"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="
              w-200px sm:w-250px 
              flex flex-col
            "
          >
            <SheetHeader>
              <SheetTitle className="text-lg font-semibold">
                Menu
              </SheetTitle>
              <SheetDescription className="text-sm">
                Veja nossos links
              </SheetDescription>
            </SheetHeader>

            <nav className="mt-6 grid gap-3">
              <NavLinks />
            </nav>

          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}
