import { AsideMenu } from "@/components/aside-menu";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { UserInfo } from "@/components/userInfo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DatePickerWithRange } from "@/components/ui/date-picker";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaPaperclip } from "react-icons/fa6";
import { useFontSize } from "@/context/fontContext";



export default function Requerimento(){
  const { fontSize } = useFontSize();
  const [visible, setVisible] = useState(false)
  return(
    <>
      <Header/>
      <main>
        <UserInfo/>
        <section className="px-2 sm:px-5 pb-4 flex flex-col md:flex-row justify-center w-full">
          <AsideMenu/>
          <div className="w-full">
            <section className="">
              <h2 className="uppercase text-[#002953] text-3xl font-semibold">Requerimentos</h2>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/aluno">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/requerimento">Requerimento</BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </section>
            <section className="bg-gray-100 rounded-sm p-4 flex flex-col items-center" style={{fontSize: `${fontSize}px`}}>
              <div className="w-[20rem]">
                <h3 className="uppercase font-bold">Filtre por:</h3>
                <div className="self-start flex flex-col gap-4">
                  <DatePickerWithRange/>
                  <RadioGroup defaultValue="option-one" >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one"/>
                      <Label htmlFor="option-one" style={{fontSize: `${fontSize}px`}}>Listar Pendentes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two" style={{fontSize: `${fontSize}px`}}>Listar prontos</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-three" id="option-three" />
                      <Label htmlFor="option-three" style={{fontSize: `${fontSize}px`}}>Listar indeferidos</Label>
                    </div>
                  </RadioGroup>
                  <div className="flex gap-4">
                    <Button onClick={() => setVisible(!visible)}>Listar</Button>
                    <Button className="bg-green-500 hover:bg-green-700">Nova solicitação</Button>
                  </div>
                </div>
                <div className="mt-4">
                  {
                    visible ? (
                      <Table style={{fontSize: `${fontSize}px`}}>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Nº Protocolo</TableHead>
                            <TableHead>Data de Entrada</TableHead>
                            <TableHead>Aluno</TableHead>
                            <TableHead>Solicitação</TableHead>
                            <TableHead>Situação</TableHead>
                            <TableHead></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>12345</TableCell>
                            <TableCell>12/10/2024</TableCell>
                            <TableCell>Vinicius Camargo Mota Morici</TableCell>
                            <TableCell>Entrega de Estágio Supervisionado</TableCell>
                            <TableCell>Concluído</TableCell>
                            <TableCell><Button className="bg-slate-200 text-black hover:text-white">Abrir</Button></TableCell>
                            <TableCell><Button className="bg-slate-200 text-black hover:text-white"><FaPaperclip /></Button></TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    ): null
                  }
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}