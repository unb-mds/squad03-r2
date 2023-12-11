"use client";
import Footer from "@/components/Footer";
import { MainLayout } from "@/layouts/MainLayout";
import Link from "next/link";
import OKBRIcon from "@/assets/svgs/okbr-icon";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import 'toastr/build/toastr.css'; // Importe o arquivo CSS do Toastr
import toastr from 'toastr';

export default function Mais() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function enviaEmail(e: React.FormEvent<HTMLFormElement>){  
    e.preventDefault();

    const templateParams = {
      nome: nome,
      message: message,
      email: email
    }
    emailjs.send("service_bbza6m4","template_rpknht7", templateParams, "WuPfoC3iextGSpFZy")
    .then((response) => {
      toastr.success('Mensagem enviada', 'Sucesso!');
      setEmail('');
      setMessage('');
      setNome('');

    }, (error)=>{
      toastr.error('Não foi possivel enviar mensagem', 'Erro!');
    })
  }

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

      <section className="bg-[#b156c8] mt-10 rounded-lg">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Nos contate!</h2>
            <p className="mb-8 lg:mb-16 font-light text-center dark:text-white sm:text-xl">Tem um problema técnico? Quer enviar alguma sujestão sobre um recurso? Nos informe.</p>
            <form action="#" className="space-y-8" onSubmit={enviaEmail}>
            <div>
                <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seu Nome</label>
                <input onChange={(e) => setNome(e.target.value)} value={nome} type="text" id="nome" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="João da Silva Sauro" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="seuEmail@gmail.com" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sua Mensagem</label>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Escreva sua mensagem..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white dark:rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-purple-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:border dark:border-purple-900">Enviar Mensagem</button>
            </form>
          </div>
        </section>

      <div className="mt-[30px]">
      <Footer />
      </div>
    </MainLayout>

  );
}
