import Footer from "@/components/Footer";
import { MainLayout } from "@/layouts/MainLayout";
import Link from "next/link";
import OKBRIcon from "@/assets/svgs/okbr-icon";

export default function Mais() {
  return (
    <MainLayout activeButton={"Mais"}>
      <div className="w-full flex flex-col gap-y-3 3xl:gap-y-5 mt-9 flex grow">
        <h1 className="text-5xl lg:text-[2.56rem] font-semibold max-w-[22rem]">
          Confira as licitações e gastos de Alagoas
        </h1>
        <div className="flex gap-x-3 items-center">
          <p className="lg:text-base leading-4 font-normal ">
            Juntos por uma sociedade mais transparente e participativa
          </p>
        </div>
        <p className="leading-[1.625rem] lg:text-base 3xl:text-xl font-normal ">
          Coletamos os diários oficiais municipais, separamos por
          municípios e analisamos licitações e seus gastos. Com foco em
          simplicidade e replicabilidade, queremos impactar a forma como
          monitoramos atos do executivo municipal em Alagoas.
        </p>
        <Link
          href="https://unb-mds.github.io/2023-2-Squad03-LicitAL/"
          className="mt-5 bg-[#EDDA46] hover:bg-[#dac83f] 3xl:w-[15.125rem] lg:w-[12.5rem] text-center text-[#376E59] hover:text-[#f3fffa] h-[3.625rem] flex items-center rounded-[5.125rem] shadow-md shadow-black/30" target="5"
        >
          <span className="w-full font-normal">Mais sobre o projeto</span>
        </Link>
      </div>
      <div className="flex flex-row mt-9 items-center ">
        <div className="flex flex-col gap-y-2 mr-9">
          <p className="lg:text-base w-[7rem] font-normal">
            Realização
          </p>
          <img src="https://github.com/Paxxaglia/Trabalaho-de-calango-Jogo-de-adivinhacao/blob/main/fga-Logo.png?raw=true" className="w-20" alt="Logo FGA" />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="lg:text-base w-[7rem] font-normal mb-7">
            Apoio
          </p>
          <div className="w-20"> <OKBRIcon className="w-20" /></div>
         
        </div>
      </div>
    </MainLayout>
  );
}
