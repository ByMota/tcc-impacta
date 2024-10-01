import { Footer } from "@/components/footer";
import { Header } from "@/components/header"

export default function AlunoDefault() {
  return (
    <>
      <main className='h-screen w-screen'>
        <Header/>
        <section className="bg-red-500 h-[96rem]">
        </section>
        <Footer/>
      </main>
    </>
  )
}