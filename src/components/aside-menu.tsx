import { NavLink } from "react-router-dom";

export default function AsideMenu(){
  return(
    <div className="">
            <h4 className="uppercase text-[#002953] text-2xl font-bold font-eurostile-bold">
              acesso rápido
            </h4>
            <ul>
              <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
                Carteirinha de estudante
              </li>
              <NavLink to="/notas-faltas">
                <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
                    Secretaria online
                </li>
              </NavLink>
              <li className="border-l-2 border-solid border-[#002953] my-2 pl-2">
                Financeiro online
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
                Requerimentos
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
  )
}