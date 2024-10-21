import { Button } from "@/components/ui/button";
import { useFontSize } from "@/context/fontContext";
import { FaUserGraduate } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export function UserInfo(){
  const { increaseFontSize, decreaseFontSize } = useFontSize();
  return(
  <main className="mt-24 md:mr-1 flex flex-col gap-2">
    <section>
      <div className=" float-end flex justify-center items-center p-1 bg-gray-200 rounded-sm text-xs gap-2 border border-solid border-gray-500 ">
        <FaUserGraduate className="w-10 h-10" />
        <div className="grid grid-cols-2 ">
          <p className="col-span-1">
            Olá, <span className="font-semibold">Vinicius</span>
          </p>
          <p>
            Curso:{" "}
            <span className="font-semibold">Sistema de informação</span>
          </p>
          <p className="col-span-1">
            RA: <span className="font-semibold">xxxxxxx</span>
          </p>
        </div>
        <div className="flex gap-1">
          <NavLink to="/aluno">
            <Button className="h-7 bg-slate-500 border-none text-xs">
              Área do aluno
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button className="h-7 bg-red-700 border-none text-xs hover:bg-red-800 ">
              Sair
            </Button>
          </NavLink>
        </div>
      </div>
  	</section>
      <div className="flex justify-end gap-2">
        <Button onClick={increaseFontSize}>A+</Button>
        <Button onClick={decreaseFontSize}>A-</Button>
      </div>
  </main>
  )
}