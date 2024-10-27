import { AsideMenu } from "@/components/aside-menu";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { UserInfo } from "@/components/userInfo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useFontSize } from "@/context/fontContext";

export default function Boletim(){
  const { fontSize } = useFontSize();
  return (
    <>
      <Header />
      <main style={{ fontSize: `${fontSize}px` }}>
        <UserInfo />
        <section className="px-2 sm:px-5 pb-4 flex flex-col md:flex-row md:justify-center w-full">
          <AsideMenu />
          <div className="w-full">
            <section>
              <h2 className="uppercase text-[#002953] text-xl sm:text-3xl font-semibold text-center md:text-left">Notas e faltas</h2>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/aluno">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/notas-faltas">Notas e faltas</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Financeiro</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </section>
            <div className="bg-gray-100 rounded-sm p-4">
              <section className="flex flex-col gap-4 w-[20rem] md:w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  <p><span className="font-semibold">Nome:</span> Vinicius</p>
                  <p><span className="font-semibold">RA:</span> xxxxxxx</p>
                  <p><span className="font-semibold">Ano:</span> 2024/2</p>
                  <p><span className="font-semibold">Curso:</span> Sistema de informação</p>
                  <p><span className="font-semibold">Semestre:</span> 8º</p>
                  <p><span className="font-semibold">Turma:</span> SI 8A NOITE</p>
                </div>
                <div className="w-full md:w-auto md:self-end overflow-x-auto">
                  <Table style={{ fontSize: `${fontSize}px` }}>
                    <TableHeader>
                      <TableRow>
                        <TableHead></TableHead>
                        <TableHead>Map</TableHead>
                        <TableHead>Prova</TableHead>
                        <TableHead>Pai</TableHead>
                        <TableHead>
                          <Button className="py-3 h-0 w-full md:w-auto">Ver nota ponderada</Button>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Com pai</TableCell>
                        <TableCell>30%</TableCell>
                        <TableCell>40%</TableCell>
                        <TableCell>30%</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Sem pai</TableCell>
                        <TableCell>50%</TableCell>
                        <TableCell>50%</TableCell>
                        <TableCell>0%</TableCell>
                        <TableCell>Final</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="w-full overflow-x-auto">
                  <Table style={{ fontSize: `${fontSize}px` }}>
                    <TableCaption>Observações: Média mínima para aprovação 6,0 (seis) com 75% de frequência.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Disciplinas</TableHead>
                        <TableHead>Turma</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>C.H</TableHead>
                        <TableHead>MAP</TableHead>
                        <TableHead>PR</TableHead>
                        <TableHead>SUB</TableHead>
                        <TableHead>PAI</TableHead>
                        <TableHead>BO</TableHead>
                        <TableHead>TF</TableHead>
                        <TableHead>MF</TableHead>
                        <TableHead>Situação</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableCell>Atividades Complementares</TableCell>
                        <TableCell>SI 8A NOITE</TableCell>
                        <TableCell>Regular</TableCell>
                        <TableCell>80</TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell></TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell>Aprovado</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Trabalho de Graduação de SI - II</TableCell>
                        <TableCell>SI 8A NOITE</TableCell>
                        <TableCell>Regular</TableCell>
                        <TableCell>160</TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell></TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell>Aprovado</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Estágio Supervisionado IV</TableCell>
                        <TableCell>SI 8A NOITE</TableCell>
                        <TableCell>Regular</TableCell>
                        <TableCell>80</TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell></TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>10,00</TableCell>
                        <TableCell>Aprovado</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div>
                  <p className="text-sm md:text-base">Legendas:</p>
                  <ul className="w-full md:w-4/6 p-1 grid grid-cols-1 sm:grid-cols-2 text-xs md:text-sm border border-gray-300">
                    <li>AP - Avaliações Parciais do Professor</li>
                    <li>PR - Prova</li>
                    <li>BO - Bônus</li>
                    <li>MF - Média Final</li>
                    <li>IF - Insatisfatório</li>
                    <li> - Participante do PAI</li>
                    <li>MAP - Média das Avaliações Parciais do Professor</li>
                    <li>SUB - Prova Substitutiva</li>
                    <li>TF - Total de Faltas</li>
                    <li>SF - Satisfatório</li>
                    <li> - Composição da Nota</li>
                  </ul>
                </div>
                <div className="w-full md:w-96 overflow-x-auto">
                  <p>Frequência:</p>
                  <Table>
                    <TableCaption>Quantidade de faltas permitidas por disciplina conforme carga horária</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Carga horária</TableHead>
                        <TableHead>Faltas</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>36</TableCell>
                        <TableCell>9</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>40</TableCell>
                        <TableCell>10</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>72</TableCell>
                        <TableCell>18</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>80</TableCell>
                        <TableCell>20</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>120</TableCell>
                        <TableCell>30</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>160</TableCell>
                        <TableCell>40</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}