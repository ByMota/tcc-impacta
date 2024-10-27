import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import qrcodeBanner from "../assets/qrcode_banner4.png";
import logoFaculdade from '../assets/logo-faculdade-branco.png';
import { NavLink } from "react-router-dom";
import { useFontSize } from "@/context/fontContext";

export function Footer() {
  const { fontSize } = useFontSize();

  return (
    <footer className="bg-footer-color w-full">
      <main className="flex flex-col items-center justify-center w-full px-4 py-5 md:px-12 lg:px-24">
        <section className="flex flex-col gap-8 md:grid md:grid-cols-4 md:gap-4 lg:gap-8">
          <div className="flex flex-col items-center sm:items-start">
            <img src={logoFaculdade} alt="Logo Impacta" className="w-32 md:w-44" />
            <img src={qrcodeBanner} alt="QRCode consulta no e-MEC" className="w-24 mt-4 md:mt-6 md:w-auto" />
          </div>

          <ul className="text-white text-sm text-center" style={{ fontSize: `${fontSize}px` }}>
            <li className="text-2xl list-none font-bold mb-2 uppercase">A Impacta</li>
            <NavLink to="" className="text-current"><li>Sobre</li></NavLink>
            <NavLink to="" className="text-current"><li>Vestibular</li></NavLink>
            <NavLink to="" className="text-current"><li>Transferência</li></NavLink>
            <NavLink to="" className="text-current"><li>Blog</li></NavLink>
            <NavLink to="" className="text-current"><li>Biblioteca</li></NavLink>
            <NavLink to="" className="text-current"><li>Materiais Educativos</li></NavLink>
          </ul>

          <ul className="text-white text-sm text-center" style={{ fontSize: `${fontSize}px` }}>
            <li className="text-xl list-none font-bold mb-2 uppercase">Cursos</li>
            <NavLink to="" className="text-current"><li>Graduação</li></NavLink>
            <NavLink to="" className="text-current"><li>Cursos técnicos</li></NavLink>
            <NavLink to="" className="text-current"><li>Pós-Graduação</li></NavLink>
          </ul>

          <ul className="text-white text-sm text-center" style={{ fontSize: `${fontSize}px` }}>
            <li className="text-xl list-none font-bold mb-2 uppercase">Contato</li>
            <li><span className="font-semibold">Central de Atendimento:</span> <NavLink to="tel:1155935344" className="text-current">(11) 5593 - 5344</NavLink></li>
            <li><span className="font-semibold">Secretaria da Graduação:</span> De segunda a sexta - das 10h às 20h<br />Sábado - Não teremos atendimento presencial</li>
            <li><span className="font-semibold">Secretaria de Pós Graduação:</span> De segunda a sexta - das 10h às 20h<br />Sábado - Não teremos atendimento presencial</li>
          </ul>
        </section>

        <section className="flex flex-col items-center gap-4 mt-6 sm:mt-8">
          <p className="text-[#eec457] text-xl uppercase">Siga a Impacta</p>
          <ul className="flex justify-center items-center gap-4">
            <NavLink to=""><li className="text-white"><FaFacebook /></li></NavLink>
            <NavLink to=""><li className="text-white"><FaInstagram /></li></NavLink>
            <NavLink to=""><li className="text-white"><FaLinkedin /></li></NavLink>
            <NavLink to=""><li className="text-white"><FaTwitter /></li></NavLink>
            <NavLink to=""><li className="text-white"><FaYoutube /></li></NavLink>
          </ul>
          <p className="text-white text-xs sm:text-sm text-center" style={{ fontSize: `${fontSize}px` }}>
            © IMPACTA 2024. Todos os direitos reservados. Tel.: (11) 5593 - 5344 / Unidade Paraíso (Nova) - Rua Cubatão, 726 - Metrô Paraíso - São Paulo / SP
          </p>
        </section>
      </main>
    </footer>
  );
}
