import { Header } from "./_components/Header"
import {Hero } from "./_components/hero"

export default function home(){
  return(
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div>
          <Hero></Hero>
      </div>
    </div>
  )
}