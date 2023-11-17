import Navbar from "@/components/Navbar";
import Link from "next/link";
import OKBRIcon from "@/assets/svgs/okbr-icon";
import { useMemo } from "react";
import { Source_Sans_Pro } from "next/font/google";
import { IfalIcon } from "@/assets/svgs/icons";

const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

interface MainLayoutProps {
  children: React.ReactNode;
  activeButton: "Home" | "About" | "News";
}

export function MainLayout({ children, activeButton }: MainLayoutProps) {
  const anos = useMemo(
    () => [
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
    ],
    []
  );

  return (
    <div className={sourceSansPro.className}>
      <div className="h-screen flex">
        <div className="flex flex-1">
          <Navbar activeButton={activeButton} />
          <aside className="hidden xl:w-[28.875rem] 3xl:w-[30rem] bg-[#921daf] pl-12 pr-9 3xl:pt-12 lg:pt-9 lg:flex flex-col 3xl:gap-y-[2.6175rem] lg:gap-y-[2.5rem] relative overflow-hidden ">
            <div className="w-full flex flex-col gap-y-3 3xl:gap-y-5">
              <h1 className="text-white text-5xl lg:text-[2.56rem] font-semibold max-w-[22rem]">
                <img src="https://raw.githubusercontent.com/Paxxaglia/Trabalaho-de-calango-Jogo-de-adivinhacao/main/logo-licital.png" alt="Logo" className="w-[150rem]" />
              </h1>
              <br></br>
              <p className="leading-[1.625rem] text-white lg:text-base 3xl:text-xl font-normal ">
                    Nossa rotina envolve a coleta de diários oficiais municipais, organizados por municípios para
                uma análise minuciosa dos valores destinados a licitações no estado de Alagoas.
                Buscamos simplificar e padronizar esse processo, visando transformar a forma como
                monitoramos os gastos em contratos e aquisições públicas feitos pelo executivo municipal em Alagoas.
              </p>
              <br></br>
              <Link
                href="/sobre"
                className="bg-[#EDDA46] hover:bg-[#dac83f] 3xl:w-[15.125rem] lg:w-[12.5rem] text-center text-[#b156c8] hover:text-[#f3fffa] h-[3.625rem] flex items-center rounded-[5.125rem] shadow-md shadow-black/30 "
              >
                <span className="w-full font-normal" >Sobre o projeto</span>
              </Link>
            </div>
            <div className="flex flex-row justify-between items-center ">
              <div className="flex flex-col gap-y-2">
                <p className="text-white lg:text-base w-[7rem] font-normal">
                  Realização
                </p>
                <img src="https://github.com/Paxxaglia/Trabalaho-de-calango-Jogo-de-adivinhacao/blob/main/Fga-Logo.png?raw=true" className="w-[3rem]"></img>
              </div>
            </div>
          </aside>
        </div>
        <main className="bg-[#F5F7FB]  w-full overflow-y-auto px-[2.875rem] pt-[3.25rem] pb-6 ">
          {children}
        </main>
      </div>
    </div>
  );
}
