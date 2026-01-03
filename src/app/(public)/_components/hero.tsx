import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "../../../../public/doctor-hero.png"

export function Hero(){
    return(
        <section className="bg-white">
            <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">

                <main className="flex items-center justify-center">
                    <article className="max-w-2xl space-y-8 flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-5xl font-bold max-2xl: tracking-tight">Encontre os melhores profissionais em um único local</h1>
                        <p className="text-base md:text-lg text-gray-600">
                            Nós somos uma plataforma para profissionais de saúde com foco em
                            agilizar seu atendimento de forma simplificada e organizada.
                        </p>

                        <Button className="font-semibold px-7 bg-emerald-500 hover:bg-emerald-400 w-fit">
                            Encontre uma Clínica
                        </Button>
                    </article>

                    <div className="hidden lg:block">
                        <Image 
                        src={doctorImg} 
                        alt="foto ilustrativa de um profissional da saúde"
                        width={340}
                        height={400}
                        className="object-contain"
                        quality={100}
                        priority/>
                    </div>
                </main>

            </div>
        </section>
    )
}