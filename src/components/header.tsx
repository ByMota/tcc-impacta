import logoFaculdade from '../assets/logo-faculdade-branco.png'

export function Header(){
  return (
    <header className="bg-black/55 p-3 fixed w-full z-50">
      <img src={logoFaculdade} alt="Logo faculdade" className="w-52 my-0 mx-auto" />
    </header>
  )
}