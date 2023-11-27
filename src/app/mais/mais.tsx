import Footer from "@/components/Footer";
import { MainLayout } from "@/layouts/MainLayout";
import Link from "next/link";

export default function Mais() {
    return (
        <MainLayout activeButton={"Mais"}>
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
                    <span className="w-full font-normal">Sobre o projeto</span>
                </Link>
            </div><div className="flex flex-row justify-between items-center ">
                <div className="flex flex-col gap-y-2">
                    <p className="text-white lg:text-base w-[7rem] font-normal">
                        Realização
                    </p>
                    <img src="https://github.com/Paxxaglia/Trabalaho-de-calango-Jogo-de-adivinhacao/blob/main/Fga-Logo.png?raw=true" className="w-[3rem]"></img>
                </div>
                <Footer />
            </div>
        </MainLayout>
    );
}
