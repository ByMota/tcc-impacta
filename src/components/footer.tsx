import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import qrcodeBanner from "../assets/qrcode_banner4.png"
import logoFaculdade from '../assets/logo-faculdade-branco.png'

export function Footer() {
  return (
    <footer className="bg-footer-color w-full">
      <main className="mx-12 py-5">
        <section className="grid grid-cols-4 gap-4">
          <div>
            <img src={logoFaculdade} alt="Logo Impacta" className="w-44"/>
            <img src={qrcodeBanner} alt="QRCode consulta no e-MEC" className="w-auto"/>
          </div>
          <ul className="list-disc text-white  text-sm">
            <li className="text-2xl list-none font-bold -ml-4 mb-2 uppercase">A Impacta</li>
            <li>Sobre</li>
            <li>Vestibular</li>
            <li>Transferência</li>
            <li>Blog</li>
            <li>Materiais Educativos</li>
            <li>Biblioteca</li>
          </ul>
          <ul className="list-disc text-white  text-sm">
            <li className="text-xl list-none font-bold -ml-4 mb-2 uppercase">Cursos</li>
            <li>Graduação</li>
            <li>Pós-Graduação</li>
            <li>Cursos técnicos</li>
          </ul>
          <ul className="list-disc text-white  text-sm">
            <li className="text-xl list-none font-bold -ml-4 mb-2 uppercase">Contato</li>
            <li><span className="font-semibold">Central de Atendimento:</span> (11) 5593 - 5344</li>
            <li><span className="font-semibold">Secretaria da Graduação:</span> De segunda a sexta - das 10h às 20h Sábado - Não teremos atendimento presencial</li>
            <li><span className="font-semibold">Secretaria de Pós Graduação:</span> De segunda a sexta - das 10h às 20h Sábado - Não teremos atendimento presencial</li>
          </ul>
        </section>
        <section className="flex flex-col items-center gap-5">
          <p className="text-[#eec457] text-xl uppercase">Siga a Impacta</p>
          <ul className="flex flex-row justify-center items-center gap-4">
            <li className="text-white"><FaFacebook /></li>
            <li className="text-white"><FaInstagram /></li>
            <li className="text-white"><FaLinkedin /></li>
            <li className="text-white"><FaTwitter /></li>
            <li className="text-white"><FaYoutube /></li>
          </ul>
          <p className="text-white text-sm"> © IMPACTA 2024. Todos os direitos reservados. Tel.: (11) 5593 - 5344 / Unidade Paraíso (Nova) - Rua Cubatão, 726 - Metrô Paraíso - São Paulo / SP</p>
        </section>
      </main>
    </footer>
  )
}