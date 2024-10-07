import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import banner from "../assets/banner_saber_em_rede_.png"
import { PiCheckBold, PiPaperclipBold, PiGearBold, PiUserBold, PiInfoBold, PiPhoneDisconnectBold   } from "react-icons/pi";
import AsideMenu from "@/components/aside-menu";
import UserInfo from "@/components/userInfo";

export default function AlunoDefault() {
  return (
    <>
      <Header />
      <main className="">
        <UserInfo/>
        <section className="px-5 pb-4 flex justify-center w-full">
          <AsideMenu/>
          <div className=" p-4 grid lg:grid-cols-3 lg:grid-rows-[25rem_6rem_6rem] lg:gap-2">
            <div className="flex flex-col gap-14">
              <h4 className="uppercase text-[#002953] text-2xl font-bold font-eurostile-bold">
                Mural de recados
              </h4>
              <Carousel orientation="vertical" className="lg:col-span-1 h-[200px] ">
                <CarouselContent className="-mt-1 h-[200px]"> 
                  <CarouselItem className="pt-1 md:basis-1/2">
                    <Card>
                      <CardContent className="flex items-center justify-start p-6">
                        CI 08/2024 - Novo Coordenador de Curso ADS e BD
                        Presencial
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="pt-1 md:basis-1/2">
                    <Card>
                      <CardContent className="flex items-center justify-start p-6">
                        CI 09/2024 - Novo Coordenador de Curso GTI e SI
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="pt-1 md:basis-1/2">
                    <Card>
                      <CardContent className="flex items-center justify-start p-6">
                        CI 08/2024 - Liberdade de Consciência e Crença
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className="pt-1 md:basis-1/2">
                    <Card>
                      <CardContent className="flex items-center justify-start p-6">
                        Notificação Emissão Boletos
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="lg:col-span-2">
              <img src={banner} alt="Banner saber em rede" className="max-w-2xl" />
            </div>
              <Card className="h-24 bg-[#225b79]">
                <CardContent className="flex justify-between items-start gap-2 py-2 px-4">
                  <PiCheckBold className="fill-slate-300 w-14 h-14"/>
                  <div>
                    <h4 className="uppercase font-semibold text-slate-300">Responda nossa pesquisa</h4>
                    <p className="text-xs font-semibold text-slate-300">Desejamos conhecê-lo e aprimorar nossos serviços</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="h-24 bg-[#225b79]">
                  <CardContent className="flex justify-between items-start gap-2 py-2 px-4">
                    <PiPaperclipBold className="fill-slate-300 w-16 h-16"/>
                    <div>
                      <h4 className="uppercase font-semibold text-slate-300">Ajude a melhorar a nossa faculdade</h4>
                      <p className="text-xs font-semibold text-slate-300">Deixe Ideias, Sugestões e Críticas</p>
                    </div>
                  </CardContent>
              </Card>
              <Card className="h-24 bg-[#225b79]">
                <CardContent className="flex justify-between items-start gap-2 py-2 px-4">
                  <PiGearBold className="fill-slate-300 w-14 h-14"/>
                  <div>
                    <h4 className="uppercase font-semibold text-slate-300">Parceria microsoft imagine</h4>
                    <p className="text-xs font-semibold text-slate-300">Clique e Saiba Mais</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="h-24 bg-[#225b79]">
                <CardContent className="flex justify-between items-start gap-2 py-2 px-4">
                  <PiUserBold className="fill-slate-300 w-14 h-14"/>
                  <div>
                    <h4 className="uppercase font-semibold text-slate-300">Núcleo de Carreiras</h4>
                    <p className="text-xs font-semibold text-slate-300">Acesse núcleo de carreiras e fique por dentro das oportunidades profissionais.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="h-24 bg-[#225b79]">
                  <CardContent className="flex justify-between items-start gap-2 py-2 px-4">
                    <PiInfoBold  className="fill-slate-300 w-16 h-16"/>
                    <div>
                      <h4 className="uppercase font-semibold text-slate-300">Ajude a melhorar a nossa faculdade</h4>
                      <p className="text-xs font-semibold text-slate-300">Deixe Ideias, Sugestões e Críticas</p>
                    </div>
                  </CardContent>
              </Card>
              <Card className="h-24 bg-[#225b79]">
                <CardContent className="flex justify-between items-start gap-2 py-2 px-4">
                  <PiPhoneDisconnectBold  className="fill-slate-300 w-14 h-14"/>
                  <div>
                    <h4 className="uppercase font-semibold text-slate-300">Parceria microsoft imagine</h4>
                    <p className="text-xs font-semibold text-slate-300">Clique e Saiba Mais</p>
                  </div>
                </CardContent>
              </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
