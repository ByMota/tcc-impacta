import AsideMenu from "@/components/aside-menu";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import UserInfo from "@/components/userInfo";

export default function(){
  return(
    <>
      <Header/>
      <main>
        <UserInfo/>
        <section className="px-5 pb-4 flex justify-center w-full ">
          <AsideMenu/>
          <div className="bg-red-500 w-full">dadas</div>
        </section>
      </main>
      <Footer/>
    </>
  )
}