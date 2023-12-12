"use client";
import Footer from "@/components/Footer";
import CidadesExoneracao from "@/components/charts/CidadesExoneracao";
import CidadesNomeacao from "@/components/charts/CidadesNomeacao";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import Municipio from "@/components/Municipio";
import Head from "next/head";
import TotalLicitacoes from "@/components/charts/TotalLicitacoes";
import { SetStateAction, useState } from "react";


export default function Home() {

  const [selectedOption, setSelectedOption] = useState('Quantidade de Licitações');
  const handleDropdownChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };


  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <MainLayout activeButton={"Home"}>
        <Municipio municipioId={"geral"} backActive={false} ano={"geral"}>
          <select value={selectedOption} onChange={handleDropdownChange} className="md:w-[10 rem] h-16 md:p-4 rounded-2xl text-lg mt-3">
            <option value="Quantidade de Licitações">Quantidade de Licitações</option>
            <option value="Gastos">Gastos</option>
          </select>
          {selectedOption === 'Quantidade de Licitações' ? (
            <TotalLicitacoes municipio={'geral'} ano={'todos'} />
          ) : (
            <TotalAtos municipio={'geral'} ano={'todos'} />
          )}
          <CidadesNomeacao />
        </Municipio>
        <Footer />
      </MainLayout>
    </main>
  );
}
