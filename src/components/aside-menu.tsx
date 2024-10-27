import { useState } from "react";
import { useFontSize } from "@/context/fontContext";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export function AsideMenu() {
  const { fontSize } = useFontSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Botão de hambúrguer no mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 focus:outline-none"
      >
        {isOpen ? <FaTimes className="text-white" size={24} /> : <FaBars className="text-white" size={24} />}
      </button>

      {/* Menu lateral */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block bg-white p-4`}
        style={{ fontSize: `${fontSize}px` }}
      >
        <h4 className="uppercase text-[#002953] text-2xl font-bold font-eurostile-bold">
          acesso rápido
        </h4> 
        <ul>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Carteirinha de estudante
          </li>
            <li className="border-l-2 border-solid border-[#002953] my-2 pl-2 ">
            <NavLink to="/notas-faltas" className=" font-normal">
                  Secretaria online
            </NavLink>
            </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            <NavLink to="/financeiro" className=" font-normal">
              Financeiro online
            </NavLink>
          </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Biblioteca
          </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Monitoria
          </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Pai
          </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            CPA
          </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Atividades complementares
          </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Ouvidoria
          </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            <NavLink to="/requerimento" className=" font-normal">
              Requerimentos
            </NavLink>
          </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Contato dos professores
          </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Acesse também
          </li>
        </ul>
        <h4 className="uppercase text-[#002953] text-2xl font-bold font-eurostile-bold">
          smartclass
        </h4>
        <ul>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Aulas de Graduação e Pós-Graduação
          </li>
        </ul>
        <h4 className="uppercase text-[#002953] text-2xl font-bold font-eurostile-bold">
          ava
        </h4>
        <ul>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Orchestra4edu
          </li>
        </ul>
        <h4 className="uppercase text-[#002953] text-2xl font-bold font-eurostile-bold">
          cursos livres
        </h4>
        <ul>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Acessar
          </li>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Cupom
          </li>
        </ul>
        <h4 className="uppercase text-[#002953] text-2xl font-bold font-eurostile-bold">
          prova fácil
        </h4>
        <ul>
          <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
            Acessar
          </li>
        </ul>
      </div>
    </div>
  );
}
