import { Input } from './components/ui/input'
import logoFaculdade from './assets/logo-faculdade-branco.png'
import { Button } from './components/ui/button'
import { NavLink } from 'react-router-dom'
function App() {

  return (
    <>
      <main className='p-0 m-0 bg-login-background bg-cover bg-no-repeat bg-fixed h-screen w-screen flex flex-col gap-6 justify-center items-center'>
        <img src={logoFaculdade} alt="Logo faculdade" className='w-64'/>
        <div className='flex flex-col gap-4 items-center w-80 '>
          <Input placeholder='Digite seu RA' className='rounded-none'/>
          <Input type='password' placeholder='Digite sua senha' className='rounded-none'/>
        
          <NavLink to="/aluno" className="text-current">
            <Button 
              className='bg-login-button font-medium text-lg w-40 rounded-none uppercase hover:bg-login-button hover:text-slate-800'
              >
                Fazer login
            </Button>
          </NavLink>
        </div>
      </main>
    </>
  )
}

export default App
