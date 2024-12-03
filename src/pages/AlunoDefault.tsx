import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import banner from "../assets/banner_saber_em_rede_.png"
import { AsideMenu } from "@/components/aside-menu";
import { UserInfo } from "@/components/userInfo";
import { NavLink } from "react-router-dom";
import { useFontSize } from "@/context/fontContext";

export default function AlunoDefault() {
  const { fontSize } = useFontSize();
  return (
    <>
      <main style={{ fontSize: `${fontSize}px` }}>
        <UserInfo />
        
        <section className="px-2 sm:px-5 pb-4 flex flex-col md:flex-row md:justify-center w-full">
          <AsideMenu />
          
          <div className="mx-auto">
            <div className="w-[20rem] p-4 grid gap-4 sm:gap-2 sm:w-full lg:grid-cols-3 lg:grid-rows-[25rem_6rem_6rem]">
              
              {/* Mural de Recados */}
              <div className="flex flex-col gap-16 lg:gap-14 lg:col-span-1">
                <h4 className="uppercase text-[#002953] text-xl sm:text-2xl font-bold text-center lg:text-left">
                  Mural de recados
                </h4>
                
                <Carousel orientation="vertical" className="mb-10 lg:col-span-1 h-[80px] w-[20rem] md:w-full md:h-[200px]">
                  <CarouselContent className="md:-mt-1 h-[100px] md:h-[200px]">
                    {["CI 08/2024 - Novo Coordenador de Curso ADS e BD Presencial", "CI 09/2024 - Novo Coordenador de Curso GTI e SI", "CI 08/2024 - Liberdade de Consciência e Crença", "Notificação Emissão Boletos"].map((item, index) => (
                      <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <Card>
                          <CardContent className="flex items-center justify-start p-6">
                            {item}
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              {/* Banner */}
              <div className="hidden lg:col-span-2 sm:flex justify-center sm:mt-14 lg:justify-start">
                <img
                  src={banner}
                  alt="Faça parte do programa de embaixadores da impacta, é gratuito e exclusivo"
                  aria-label="Banner descritivo: Faça parte do programa de embaixadores da impacta, é gratuito e exclusivo"
                  tabIndex="0"
                  className="max-w-80 md:max-w-xl"
                />
              </div>

              {/* Mais Acessados */}
              <h3 className="sm:col-span-3 font-bold uppercase text-[#002953] text-xl sm:text-2xl" aria-label="Lista de mais acessados">
                Mais acessados
              </h3>
              
              {[
                { label: "Boletim", link: "/notas-faltas/boletim" },
                { label: "Financeiro", link: "/financeiro" },
                { label: "Requerimentos", link: "/requerimento" }
              ].map((item, index) => (
                <Card key={index} className="h-16 bg-[#225b79]">
                  <NavLink to={item.link}>
                    <CardContent className="flex justify-between items-start gap-2 py-2 px-4">
                      <h4 className="uppercase font-semibold text-slate-100">
                        {item.label}
                      </h4>
                    </CardContent>
                  </NavLink>
                </Card>
              ))}

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
