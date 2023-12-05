"use client"
import { useState, useEffect } from "react"
import { Else, If, Then } from "react-if";

interface TitleProps {
  municipio: string;
  ano: string;
}

export default function Title({ municipio, ano }: TitleProps) {
  const [titleText, setTitleText] = useState("Alagoas");
  const buildTitle = (municipio: string) => {
    if (municipio !== "geral") {
      fetch(`https://raw.githubusercontent.com/exoonero/extrator/main/docs/site/dados/${municipio}.json`, {})
        .then((response) =>
          response.json()
        )
        .then((data) => {
          const title = data.nome as string;
          setTitleText(title);
        })
    }



  };
  useEffect(() => {
    buildTitle(municipio as string);
  }, []);
  return (
    <h1 className=" text-2xl 2xl:text-3xl 3xl:text-[2.4375rem]  font-semibold lg:w-[42.93rem] leading-10 mt-5">
      <If condition={ano === "geral"}>
        <Then>
          Acompanhe as licitações e gastos que aconteceram em
          <span className="text-[#b156c8]">{(" " + titleText) as string}</span>
        </Then>
        <Else>
          Acompanhe as licitações e gastos que aconteceram em
          <span className="text-[#b156c8]">{(" " + titleText) as string} - {(" " + ano) as string}</span>
        </Else>
      </If>

    </h1>
  )
}