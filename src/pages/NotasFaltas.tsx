import { AsideMenu } from "@/components/aside-menu";
import { UserInfo } from "@/components/userInfo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { useFontSize } from "@/context/fontContext";


export default function NotasFaltas(){
  const { fontSize } = useFontSize();
  return(
    <>
      <main>
        <UserInfo />
        <section className="px-2 sm:px-5 pb-4 flex flex-col md:flex-row md:justify-center w-full">
          <AsideMenu />
          <div className="w-full">
            <section>
              <h2 className="uppercase text-[#002953] text-xl sm:text-3xl font-semibold text-center md:text-left">Notas e faltas</h2>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <NavLink to="/aluno">Home</NavLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Notas e Faltas</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </section>
            <div className="bg-gray-100 rounded-sm p-4 w-full">
              <div className="w-[20rem] md:w-full">
                <Table style={{ fontSize: `${fontSize}px` }}>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px] md:w-[100px]"></TableHead>
                      <TableHead>Período</TableHead>
                      <TableHead>Curso</TableHead>
                      <TableHead>Turma</TableHead>
                      <TableHead>Série</TableHead>
                      <TableHead className="text-right">Situação da Matrícula</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        <NavLink to="/notas-faltas/boletim">
                          <Button className="bg-slate-200 text-black hover:text-white w-full md:w-auto">Visualizar</Button>
                        </NavLink>
                      </TableCell>
                      <TableCell>2024/1</TableCell>
                      <TableCell>Curso de Sistemas de Informação</TableCell>
                      <TableCell>SI 8A NOITE</TableCell>
                      <TableCell>8º Semestre</TableCell>
                      <TableCell className="text-right">Ativa</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium"><NavLink to="/notas-faltas/boletim">
                          <Button className="bg-slate-200 text-black hover:text-white">Visualizar</Button>
                        </NavLink></TableCell>
                      <TableCell>2024/2</TableCell>
                      <TableCell>	Curso de Sistemas de Informação</TableCell>
                      <TableCell>	SI 8A NOITE</TableCell>
                      <TableCell>	7º Semestre	</TableCell>
                      <TableCell className="text-right">Concluída</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium"><NavLink to="/notas-faltas/boletim">
                          <Button className="bg-slate-200 text-black hover:text-white">Visualizar</Button>
                        </NavLink></TableCell>
                      <TableCell>2024/2</TableCell>
                      <TableCell>	Curso de Sistemas de Informação</TableCell>
                      <TableCell>	SI 8A NOITE</TableCell>
                      <TableCell>	6º Semestre	</TableCell>
                      <TableCell className="text-right">Concluída</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium"><NavLink to="/notas-faltas/boletim">
                          <Button className="bg-slate-200 text-black hover:text-white">Visualizar</Button>
                        </NavLink></TableCell>
                      <TableCell>2024/2</TableCell>
                      <TableCell>	Curso de Sistemas de Informação</TableCell>
                      <TableCell>	SI 8A NOITE</TableCell>
                      <TableCell>	5º Semestre	</TableCell>
                      <TableCell className="text-right">Concluída</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium"><NavLink to="/notas-faltas/boletim">
                          <Button className="bg-slate-200 text-black hover:text-white">Visualizar</Button>
                        </NavLink></TableCell>
                      <TableCell>2024/2</TableCell>
                      <TableCell>	Curso de Sistemas de Informação</TableCell>
                      <TableCell>	SI 8A NOITE</TableCell>
                      <TableCell>	4º Semestre	</TableCell>
                      <TableCell className="text-right">Concluída</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white">Visualizar</Button></TableCell>
                      <TableCell>2024/2</TableCell>
                      <TableCell>	Curso de Sistemas de Informação</TableCell>
                      <TableCell>	SI 8A NOITE</TableCell>
                      <TableCell>	3º Semestre	</TableCell>
                      <TableCell className="text-right">Concluída</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium"><NavLink to="/notas-faltas/boletim">
                          <Button className="bg-slate-200 text-black hover:text-white">Visualizar</Button>
                        </NavLink></TableCell>
                      <TableCell>2024/2</TableCell>
                      <TableCell>	Curso de Sistemas de Informação</TableCell>
                      <TableCell>	SI 8A NOITE</TableCell>
                      <TableCell>	2º Semestre	</TableCell>
                      <TableCell className="text-right">Concluída</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium"><NavLink to="/notas-faltas/boletim">
                          <Button className="bg-slate-200 text-black hover:text-white">Visualizar</Button>
                        </NavLink></TableCell>
                      <TableCell>2024/2</TableCell>
                      <TableCell>	Curso de Sistemas de Informação</TableCell>
                      <TableCell>	SI 8A NOITE</TableCell>
                      <TableCell>	1º Semestre	</TableCell>
                      <TableCell className="text-right">Concluída</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}