import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import qrcodeBanner from "../assets/qrcode_banner4.png"
import logoFaculdade from '../assets/logo-faculdade-branco.png'
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-footer-color w-full">
      <main className="flex flex-col items-center justify-center w-1/3 sm:mx-12 py-5 md:mx-auto md:w-4/5">
        <section className="sm:grid sm:grid-cols-4 sm:gap-4">
          <div>
            <img src={logoFaculdade} alt="Logo Impacta" className="w-44"/>
            <img src={qrcodeBanner} alt="QRCode consulta no e-MEC" className="w-auto"/>
          </div>
          <ul className="list-disc text-white text-sm">
            <li className="text-2xl list-none font-bold -ml-4 mb-2 uppercase ">A Impacta</li>
            <NavLink to="" className="text-current">
              <li>Sobre</li>
            </NavLink>
            <NavLink to="" className="text-current">
              <li>Vestibular</li>
            </NavLink>
            <NavLink to="" className="text-current">
              <li>Transferência</li>
            </NavLink>
            <NavLink to="" className="text-current">
              <li>Blog</li>
            </NavLink>
            <NavLink to="" className="text-current">
              <li>Biblioteca</li>
            </NavLink>
            <NavLink to="" className="text-current">
              <li>Materiais Educativos</li>
            </NavLink>
          </ul>
          <ul className="list-disc text-white text-sm">
            <li className="text-xl list-none font-bold -ml-4 mb-2 uppercase">Cursos</li>
            <NavLink to="" className="text-current">
              <li>Graduação</li>
            </NavLink>
            <NavLink to="" className="text-current">
              <li>Cursos técnicos</li>
            </NavLink>
            <NavLink to="" className="text-current">
              <li>Pós-Graduação</li>
            </NavLink>
          </ul>
          <ul className="list-disc text-white  text-sm">
            <li className="text-xl list-none font-bold -ml-4 mb-2 uppercase">Contato</li>
              <li><span className="font-semibold">Central de Atendimento:</span>  <NavLink to="tel:1155935344" className="text-current">(11) 5593 - 5344 </NavLink></li>
              <li><span className="font-semibold">Secretaria da Graduação:</span> De segunda a sexta - das 10h às 20h Sábado - Não teremos atendimento presencial</li>
              <li><span className="font-semibold">Secretaria de Pós Graduação:</span> De segunda a sexta - das 10h às 20h Sábado - Não teremos atendimento presencial</li>
          </ul>
        </section>
        <section className="sm:flex sm:flex-col sm:items-center sm:gap-5">
          <p className="text-[#eec457] text-xl uppercase">Siga a Impacta</p>
          <ul className="flex flex-row justify-center items-center gap-4">
            <NavLink to="">
              <li className="text-white"><FaFacebook /></li>
            </NavLink>
            <NavLink to="">
              <li className="text-white"><FaInstagram /></li>
            </NavLink>
            <NavLink to="">
              <li className="text-white"><FaLinkedin /></li>
            </NavLink>
            <NavLink to="">
              <li className="text-white"><FaTwitter /></li>
            </NavLink>
            <NavLink to="">
              <li className="text-white"><FaYoutube /></li>
            </NavLink>
          </ul>
          <p className="text-white text-sm"> © IMPACTA 2024. Todos os direitos reservados. Tel.: (11) 5593 - 5344 / Unidade Paraíso (Nova) - Rua Cubatão, 726 - Metrô Paraíso - São Paulo / SP</p>
        </section>
      </main>
    </footer>
  )
}