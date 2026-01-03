import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import OdontoCompany from "../../../../public/odontocompany.jpg";
import RealceOdonto from "../../../../public/realceodonto.jpg";
import Sorridents from "../../../../public/sorridents.jpg";
import TheSmile from "../../../../public/thesmile.jpg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Professionals() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-center mb-12 font-bold">
          Clínicas Disponíveis
        </h2>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden p-0">
            <CardContent className="p-0">
              {/* IMAGEM */}
              <div className="relative h-48 w-full">
                <Image
                  src={OdontoCompany}
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
                      Clínica OdontoCompany
                    </h3>
                    <p className="text-sm text-gray-500">
                      Av. Nossa Sra. de Fátima, n° 548 - Caiçara, Praia Grande - SP
                    </p>
                  </div>
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                </div>

                <Link
                  href="/Clinica123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm md:text-base font-medium transition-colors"
                >
                  Agendar Horário
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden p-0">
            <CardContent className="p-0">
              {/* IMAGEM */}
              <div className="relative h-48 w-full">
                <Image
                  src={Sorridents}
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
                      Clinica Sorridents Praia Grande
                    </h3>
                    <p className="text-sm text-gray-500">
                      Av. Presidente Costa e Silva, n°1164 - Boqueirão, Praia Grande - SP
                    </p>
                  </div>
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                </div>

                <Link
                  href="/Clinica123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm md:text-base font-medium transition-colors"
                >
                  Agendar Horário
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden p-0">
            <CardContent className="p-0">
              {/* IMAGEM */}
              <div className="relative h-48 w-full">
                <Image
                  src={TheSmile}
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
                      Clínica The Smile
                    </h3>
                    <p className="text-sm text-gray-500">
                      Rua: Fumio Miyazi, n° 515 - Boqueirão, Praia Grande - SP
                    </p>
                  </div>
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                </div>

                <Link
                  href="/Clinica123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm md:text-base font-medium transition-colors"
                >
                  Agendar Horário
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden p-0">
            <CardContent className="p-0">
              {/* IMAGEM */}
              <div className="relative h-48 w-full">
                <Image
                  src={RealceOdonto}
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
                      Clínica Realceodonto
                    </h3>
                    <p className="text-sm text-gray-500">
                      Av. Presidente Kennedy, n° 6576 - Ocian, Praia Grande - SP
                    </p>
                  </div>
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                </div>

                <Link
                  href="/Clinica123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm md:text-base font-medium transition-colors"
                >
                  Agendar Horário
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
}
