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

          <ul className="text-white text-sm text-star" style={{ fontSize: `${fontSize}px` }}>
            <li className="text-2xl list-none font-bold mb-2 uppercase">A Impacta</li>
            <li className="mb-1"><NavLink to="" className="text-current">Sobre</NavLink></li>
            <li className="mb-1"><NavLink to="" className="text-current">Vestibular</NavLink></li>
            <li className="mb-1"><NavLink to="" className="text-current">Transferência</NavLink></li>
            <li className="mb-1"><NavLink to="" className="text-current">Blog</NavLink></li>
            <li className="mb-1"><NavLink to="" className="text-current">Biblioteca</NavLink></li>
            <li className="mb-1"><NavLink to="" className="text-current">Materiais Educativos</NavLink></li>
          </ul>

          <ul className="text-white text-sm text-start" style={{ fontSize: `${fontSize}px` }}>
            <li className="text-xl list-none font-bold mb-2 uppercase">Cursos</li>
            <li className="mb-1"><NavLink to="" className="text-current">Graduação</NavLink></li>
            <li className="mb-1"><NavLink to="" className="text-current">Cursos técnicos</NavLink></li>
            <li className="mb-1"><NavLink to="" className="text-current">Pós-Graduação</NavLink></li>
          </ul>

          <ul className="text-white text-sm text-start" style={{ fontSize: `${fontSize}px` }}>
            <li className="text-xl list-none font-bold mb-2 uppercase">Contato</li>
            <li className="mb-1"><span className="font-semibold">Central de Atendimento:</span> <NavLink to="tel:1155935344" className="text-current">(11) 5593 - 5344</NavLink></li>
            <li className="mb-1"><span className="font-semibold">Secretaria da Graduação:</span> De segunda a sexta - das 10h às 20h<br />Sábado - Não teremos atendimento presencial</li>
            <li className="mb-1"><span className="font-semibold">Secretaria de Pós Graduação:</span> De segunda a sexta - das 10h às 20h<br />Sábado - Não teremos atendimento presencial</li>
          </ul>
        </section>

        <section className="flex flex-col items-center gap-4 mt-6 sm:mt-8">
          <p className="text-[#eec457] text-xl uppercase">Siga a Impacta</p>
          <ul className="flex justify-center items-center gap-4">
            <li className="text-white">
                <NavLink to="" aria-label="Facebook">
                  <FaFacebook className="text-white"/>
                  <span className="sr-only">Facebook</span>
                </NavLink>
            </li>
            <li className="text-white">
              <NavLink to="" aria-label="Instagram">
                <FaInstagram className="text-white"/>
                <span className="sr-only">Instagram</span>
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink to="" aria-label="LinkedIn">
                <FaLinkedin className="text-white"/>
                <span className="sr-only">LinkedIn</span>
              </NavLink>
            </li>
            <li className="text-white">
              <NavLink to="" aria-label="Twitter">
                <FaTwitter className="text-white"/>
                <span className="sr-only">Twitter</span>
              </NavLink>
            </li>
            <li >
              <NavLink to="" aria-label="YouTube">
                <FaYoutube className="text-white"/>
                <span className="sr-only">YouTube</span>
              </NavLink>
            </li>
          </ul>
          <p className="text-white text-xs sm:text-sm text-center" style={{ fontSize: `${fontSize}px` }}>
            © IMPACTA 2024. Todos os direitos reservados. Tel.: (11) 5593 - 5344 / Unidade Paraíso (Nova) - Rua Cubatão, 726 - Metrô Paraíso - São Paulo / SP
          </p>
        </section>
      </main>
    </footer>
  );
}
