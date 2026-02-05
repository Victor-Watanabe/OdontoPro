import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import fotoImg from "../../../../public/foto1.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { User } from "@/generated/prisma/client";

interface ProfessionalsProps{
  professionals: User[]
}

export function Professionals({professionals} : ProfessionalsProps) {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-center mb-12 font-bold">
          Clínicas Disponíveis
        </h2>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {professionals.map((clinic)=>(
            <Card className="overflow-hidden hover:shadow-lg duration-300" key={clinic.id}>
            <CardContent className="p-0">
              {/* IMAGEM */}
              <div className="relative h-50 w-full">
                <Image
                  src={clinic.image ?? fotoImg}
                  alt="Foto da Clínica"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* CONTEÚDO */}
              <div className="p-4 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold leading-tight">
                      {clinic.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {clinic.address ?? "Endereço não informado."}
                    </p>
                  </div>
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                </div>

                <Link
                  target="_blank"
                  href={`/clinica/${clinic.id}`}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm md:text-base font-medium transition-colors"
                >
                  Agendar Horário
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
          ))}

        </section>
      </div>
    </section>
  );
}
