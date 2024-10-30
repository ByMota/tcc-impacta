import { Button } from "@/components/ui/button";
import { useFontSize } from "@/context/fontContext";
import { FaUserGraduate } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export function UserInfo(){
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();
  return(
  <main className="sm:mt-24 md:mr-1 flex flex-col gap-2" style={{fontSize: `${fontSize}px`}}>
    <section>
      <div 
        className="§ float-end sm:float-end flex flex-row justify-center sm:items-center p-1 bg-gray-200 rounded-sm text-xs gap-2 border border-solid border-gray-500 "
        style={{ fontSize: `${fontSize}px` }}
      >
        <FaUserGraduate className="hidden md:block md:w-10 md:h-10" />
        <div className="sm:grid grid-cols-2">
          <p className="col-span-1 text-xs sm:text-base">
            Olá, <span className="font-semibold">Aluno</span>
          </p>
          <p className="text-xs sm:text-base">
            Curso: <span className="font-semibold">Sistema de informação</span>
          </p>
          <p className="col-span-1 text-xs sm:text-base">
            RA: <span className="font-semibold">xxxxxxx</span>
          </p>
        </div>
        <div className="flex flex-col items-end sm:flex-row gap-1">
            <Button className="h-7 bg-slate-500 border-none text-xs">
            <NavLink to="/aluno" className="text-current">
                Área do aluno
            </NavLink>
            </Button>
            <Button className="h-7 bg-red-700 border-none text-xs hover:bg-red-800 ">
            <NavLink to="/" className="text-current">
                Sair
            </NavLink>
            </Button>
        </div>
      </div>
  	</section>
    <section className="hidden md:flex justify-end gap-2">
      <Button onClick={increaseFontSize}>A+</Button>
      <Button onClick={decreaseFontSize}>A-</Button>
    </section>
  </main>
  )
}