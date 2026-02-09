import Footer from "./_components/Footer"
import { Header } from "./_components/Header"
import {Hero } from "./_components/hero"
import { Professionals } from "./_components/professionals"
import { getProfessionals } from "./_data-access/get-professionals"

export const revalidate = 120;

export default async function home(){
  
  const professionals = await getProfessionals();

  

  return(
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div>
          <Hero/>
          <Professionals professionals={professionals || []}/>
      </div>
      <Footer/>
    </div>
  )
}