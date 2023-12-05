import Footer from "@/components/Footer";
import { MainLayout } from "@/layouts/MainLayout";
import Link from "next/link";

export default function Sobre() {
  return (
    <MainLayout activeButton={"About"}>
      <div className="flex flex-col gap-y-4 lg:text-base min-[1792px]:text-xl text-base mt-3">
        <header className="flex gap-x-5 font-semibold leading-10 items-center">
          <h1 className="lg:text-[2.4375rem] text-2xl w-[21.37rem]">
            Um pouco mais sobre nosso projeto!
          </h1>
        </header>
        <section className=" flex flex-col gap-y-6">
          <p className="font-normal ">
            O projeto conta com apoio da{" "}
            <span className="underline decoration-solid">
              <Link href="https://ok.org.br/sobre/">Open Knowledge Brasil (OKBR)</Link>
            </span>
            , no âmbito de uma parceria com foco no{"  "}
            <span className="underline decoration-solid">
              <Link href="https://ok.org.br/projetos/querido-diario/">projeto Querido Diário.</Link>
            </span>
            Também foi aplicado grande parte do {" "}
            <span className="underline decoration-solid">
              <Link href="https://exoonero.org/">projeto Exoonero </Link>
            </span>
            como base de nosso projeto (principalmente Front-End)
          </p>
          <h3 className="font-bold">
            O projeto conta com os seguintes integrantes:
          </h3>
          <div>
            <p className="font-normal">
              <strong>Bruno Araujo:</strong> Discente do curso Engenharia de Software | UnB - FGA
            </p>
            <p>
              <strong>Diego Leite:</strong> Discente do curso Engenharia de Software | UnB - FGA
            </p>
            <p>
              <strong>Douglas Marinho:</strong> Discente do curso Engenharia de Software | UnB - FGA
            </p>
            <p>
              <strong>Esther Silva:</strong> Discente do curso Engenharia de Software | UnB - FGA
            </p>
            <p>
              <strong>Iago Passaglia:</strong> Discente do curso Engenharia de Software | UnB - FGA
            </p>
            <p>
              <strong>Joyce Dionizio:</strong> Discente do curso Engenharia de Software | UnB - FGA
            </p>
            <p>
              <strong>Marco Tulio Soares:</strong> Discente do curso Engenharia de Software | UnB - FGA
            </p>
            <p>
              <strong>Pedro Henrique Fernandino:</strong> Discente do curso Engenharia de Software | UnB - FGA
            </p>
          </div>
        </section>
        <div className="bg-white p-9 rounded-3xl">
          <p>
            O projeto tem como principal objetivo coletar, transformar em texto
            e separar em municípios os diários oficiais municipais da Associação
            dos Municípios Alagoanos (AMA). Além da separação do conteúdo por
            município, o texto do diário de cada ente estadual é separado em
            atos normativos. Também iremos utilizar algoritmos computacionais
            para classificar e extrair informações dos atos normativos dos
            diários de cada município. Mais especificamente, o nosso foco será
            em licitações e seus gastos.
          </p>
        </div>
        <section>
          <p>
            Além destes, todo o código produzido é aberto e distribuído de forma
            livre no repositório
            <Link
              href="https://github.com/unb-mds/2023-2-Squad03"
              className="underline decoration-solid mx-1"
            >
              github
            </Link>
          </p>
        </section>
        <Footer />
      </div>
    </MainLayout>
  );
}
