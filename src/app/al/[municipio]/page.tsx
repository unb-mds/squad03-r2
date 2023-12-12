'use client'
import React, { SetStateAction, useState } from 'react';
import Footer from "@/components/Footer";
import TotalAtos from "@/components/charts/TotalAtos";
import { MainLayout } from "@/layouts/MainLayout";
import Municipio from "@/components/Municipio";
import { If, Then, Else } from "react-if";
import { municipios } from './municipios';
import TotalLicitacoes from '@/components/charts/TotalLicitacoes';

interface Params {
  municipio: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return municipios;
}

interface MunicipioPageProps {
  params: Params;
}



const MunicipioPage: React.FC<MunicipioPageProps> = ({ params }) => {


  const [selectedOption, setSelectedOption] = useState('Quantidade de Licitações');
  const handleDropdownChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main>
      <MainLayout activeButton={"Home"}>
        <Municipio municipioId={params.municipio} ano={'geral'}>
          <select value={selectedOption} onChange={handleDropdownChange} className="md:w-[10 rem] h-16 md:p-4 rounded-2xl text-lg mt-3">
            <option value="Quantidade de Licitações">Quantidade de Licitações</option>
            <option value="Gastos">Gastos</option>
          </select>
          {selectedOption === 'Quantidade de Licitações' ? (
            <TotalLicitacoes municipio={params.municipio as string} ano={"todos"} />

          ) : (
            <TotalAtos municipio={params.municipio as string} ano={"todos"} />
          )}
        </Municipio>
      </MainLayout>
    </main>
  );
};

export default MunicipioPage;