import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
        <div></div>
          <div>
            <p>Siga a Impacta</p>
            <ul className="flex flex-row justify-center items-center">
              <li><FaFacebook /></li>
              <li><FaInstagram /></li>
              <li><FaLinkedin /></li>
              <li><FaTwitter /></li>
              <li><FaYoutube /></li>
            </ul>
          </div>
          <div>
          © IMPACTA 2024. Todos os direitos reservados. Tel.: (11) 5593 - 5344 / Unidade Paraíso (Nova) - Rua Cubatão, 726 - Metrô Paraíso - São Paulo / SP
          </div>
    </footer>
  )
}