import { Footer } from "@/components/footer";
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button";
import { FaUserGraduate } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function AlunoDefault() {
  return (
    <>
      <Header/>
        <main className="bg-red-500 h-[96rem]">
          <section className="bg-green-500 mt-24">
            <div className=" float-end flex justify-center items-center item p-1 bg-gray-200 rounded-sm text-xs gap-2 border border-solid border-gray-500 ">
              <FaUserGraduate  className="w-10 h-10"/>
              <div className="grid grid-cols-2 ">
                <p className="col-span-1">Olá, <span className="font-semibold">Vinicius</span></p>
                <p>Curso: <span className="font-semibold">Sistema de informação</span></p>
                <p className="col-span-1">RA: <span className="font-semibold">xxxxxxx</span></p>
              </div>
              <div className="flex gap-1">
                <NavLink to="/aluno">
                  <Button className="h-7 bg-slate-500 border-none text-xs">Área do aluno</Button>
                </NavLink>
                <NavLink to="/">
                  <Button className="h-7 bg-red-700 border-none text-xs hover:bg-red-800 ">Sair</Button>
                </NavLink>
              </div>

            </div>
          </section>
          <section className="bg-purple-500 p-2">
            <div className="bg-blue-500">
              {/* <ul>
                <li>Carteirinha de estudante</li>
                <li>Secretaria online</li>
                <li>Financeiro online</li>
                <li>Biblioteca</li>
                <li>Monitoria</li>
                <li>Pai</li>
                <li>CPA</li>
                <li>Atividades complementares</li>
                <li>Ouvidoria</li>
                <li>Requerimentos</li>
                <li>Contato dos professores</li>
                <li>Acesse também</li>
              </ul> */}
            </div>
            <div className="bg-yellow-500">resto</div>
          </section>
        </main>
      <Footer/>
    </>
  )
}