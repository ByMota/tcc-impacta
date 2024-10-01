import logoFaculdade from '../assets/logo-faculdade-branco.png'

export function Header(){
  return (
    <div className="bg-black/55 p-4 fixed w-full">
      <img src={logoFaculdade} alt="Logo faculdade" className="w-52 my-0 mx-auto" />
    </div>
  )
}