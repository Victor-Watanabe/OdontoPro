import Footer from "./_components/Footer"
import { Header } from "./_components/Header"
import {Hero } from "./_components/hero"
import { Professionals } from "./_components/professionals"

export default function home(){
  return(
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div>
          <Hero/>
          <Professionals/>
      </div>
      <Footer/>
    </div>
  )
}