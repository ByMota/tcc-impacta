import { AsideMenu } from "@/components/aside-menu";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { UserInfo} from "@/components/userInfo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IoMdPrint } from "react-icons/io";
import { FaPrint } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useFontSize } from "@/context/fontContext";

export default function Financeiro(){
  const { fontSize } = useFontSize();
  return (
    <>
      <Header />
      <main>
        <UserInfo />
        <section className="px-2 sm:px-5 pb-4 flex flex-col md:flex-row justify-center w-full">
          <AsideMenu />
          <div className="w-full">
            <section>
              <h2 className="uppercase text-[#002953] text-3xl font-semibold">Financeiro</h2>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/aluno">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Financeiro</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </section>
            <div className="mt-2 bg-gray-100 rounded-sm p-4">
              <ul className="list-disc text-sm pl-4" style={{ fontSize: `${fontSize}px` }}>
                <li>
                  As informações contidas nesta página se destinam única e exclusivamente para fins
                  informativos. Não tem validade nenhuma como documento ou comprovante de pagamento.
                </li>
                <li>
                  O boleto referente às mensalidades será disponibilizado na última semana do mês
                  antecedente ao vencimento da parcela. Exemplo: Boleto referente à parcela de setembro
                  será disponibilizado na última semana do mês de agosto e assim sucessivamente.
                </li>
                <li>O PRAZO DE BAIXA PARA OS PAGAMENTOS EFETUADOS É DE ATÉ 10 DIAS APÓS A DATA DO PAGAMENTO.</li>
              </ul>
              <span className="block w-full h-1 border-b border-solid" />
              
              {/* Tabela Responsiva */}
              <div className="w-[20rem] md:w-full overflow-x-auto mt-4">
                <Table className="relative" style={{ fontSize: `${fontSize}px` }}>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Código</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Vl. Bruto</TableHead>
                      <TableHead>Vl. Desconto</TableHead>
                      <TableHead>Vl. Previsto</TableHead>
                      <TableHead>Pago</TableHead>
                      <TableHead>Vl. Pago</TableHead>
                      <TableHead>Data pgto.</TableHead>
                      <TableHead>Recibo</TableHead>
                      <TableHead>NFe</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                        <TableCell>1495310</TableCell>
                        <TableCell>Mensalidade Sistemas de Inform - 3ª/5</TableCell>
                        <TableCell>R$ 1.177,72</TableCell>
                        <TableCell>R$ 1.000,00</TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell className="my-0 mx-auto m-0"><FaCheck /></TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell>27/09/2024</TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><IoMdPrint /></Button></TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><FaPrint /></Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1495309</TableCell>
                        <TableCell>Mensalidade Sistemas de Inform - 3ª/5</TableCell>
                        <TableCell>R$ 1.177,72</TableCell>
                        <TableCell>R$ 1.000,00</TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell><FaCheck /></TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell>27/09/2024</TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><IoMdPrint /></Button></TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><FaPrint /></Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1495308</TableCell>
                        <TableCell>Mensalidade Sistemas de Inform - 3ª/5</TableCell>
                        <TableCell>R$ 1.177,72</TableCell>
                        <TableCell>R$ 1.000,00</TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell><FaCheck /></TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell>27/09/2024</TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><IoMdPrint /></Button></TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><FaPrint /></Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1484817</TableCell>
                        <TableCell>Mensalidade Sistemas de Inform - 3ª/5</TableCell>
                        <TableCell>R$ 1.177,72</TableCell>
                        <TableCell>R$ 1.000,00</TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell><FaCheck /></TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell>27/09/2024</TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><IoMdPrint /></Button></TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><FaPrint /></Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1428274</TableCell>
                        <TableCell>Mensalidade Sistemas de Inform - 3ª/5</TableCell>
                        <TableCell>R$ 1.177,72</TableCell>
                        <TableCell>R$ 1.000,00</TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell><FaCheck /></TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell>27/09/2024</TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><IoMdPrint /></Button></TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><FaPrint /></Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>1495310</TableCell>
                        <TableCell>Mensalidade Sistemas de Inform - 3ª/5</TableCell>
                        <TableCell>R$ 1.177,72</TableCell>
                        <TableCell>R$ 1.000,00</TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell><FaCheck /></TableCell>
                        <TableCell>R$ 177,72</TableCell>
                        <TableCell>27/09/2024</TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><IoMdPrint /></Button></TableCell>
                        <TableCell className="font-medium"><Button className="bg-slate-200 text-black hover:text-white"><FaPrint /></Button></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}