"use client"
import React, { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Detalhe {
  resumo: {
    quantidade_licitacoes: number;
  };
    quantidade_licitacoes: number;
}
interface DetalheAno {
    quantidade_licitacoes: number;
}

interface TotalAtosProps {
  municipio: string;
  ano: "todos" | string;
}

export default function TotalLicitacoes({ municipio, ano }: TotalAtosProps) {
  const [dataNomeacoes, setDataNomeacoes] = useState<number[]>([]);
  const [dataExoneracoes, setDataExoneracoes] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const mostrarTodosAnos = ano === "todos";
  function dadosGeraisAnos(){
    const url =
      municipio === "geral"
        ? "https://raw.githubusercontent.com/unb-mds/2023-2-Squad03-LicitAL/main/site/geral.json"
        : `https://raw.githubusercontent.com/unb-mds/2023-2-Squad03-LicitAL/main/site/${municipio}.json`;
    
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
        const detalhe = data.detalhe as Record<string, Detalhe>;
        const nomeacoes: number[] = [];
        const exoneracoes: number[] = [];
        const primeiroAnoComDados = Number(Object.keys(detalhe).sort()[0]);
        for (let ano = 2014; ano < primeiroAnoComDados; ano++) {
          nomeacoes.push(0);
          exoneracoes.push(0);
        }
        Object.values(detalhe).forEach((elemento) => {
          let nomeacao = elemento.resumo.quantidade_licitacoes;
          nomeacoes.push(nomeacao);
        });
        setDataNomeacoes(nomeacoes);
      });
  }
  function dadosAno() {
    const url = `https://raw.githubusercontent.com/unb-mds/2023-2-Squad03-LicitAL/main/site/${municipio}.json`;
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
          const detalhe = ano in data.detalhe ? data.detalhe[ano] as Record<string, DetalheAno> : {};
          const nomeacoes: number[] = Array(12).fill(0);
          const exoneracoes: number[] = Array(12).fill(0);
          delete detalhe.resumo;
        for (const [mes, dados] of Object.entries(detalhe)) {
          const index = Number(mes) - 1;
          nomeacoes[index] = dados.quantidade_licitacoes;
        }
        setDataNomeacoes(nomeacoes);
      });
  }
  useEffect(() => {
    mostrarTodosAnos? dadosGeraisAnos(): dadosAno()
  }, [municipio]);

  const chartData = useMemo(() => {
    return {
      options: {
        series: [
          {
            name: "Quantidade de Licitações" as const,
            data: dataNomeacoes,
          },
        ] as any,
        legend: {
          position: "top" as const,
          horizontalAlign: "center" as const,
          markers: {
            width: 8,
            height: 8,
            padding: 8,
            radius: 12,
            offsetX: -4,
          },
          itemMargin: {
            horizontal: 12,
          },
          fontSize: "16" as string,
          fontFamily: "Source Sans Pro, sans-serif",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: "60%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"],
        },
        xaxis: {
          categories: mostrarTodosAnos? [
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
          ] : ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
          labels: {
            style: {
              fontFamily: "Source Sans Pro, sans-serif",
              fontSize: "10" as const,
              fontWeight: 800,
            },
          },
        },
        yaxis: {
          labels: {
            formatter: function (val: number) {
              return val.toLocaleString();
            },
          },
        },
        tooltip: {
          intersect: false,
          shared: true,
        },
        grid: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
        colors: ["#c086f4", "#921daf"],
      },
    };
  }, [dataNomeacoes]);

  return (
    <section className="bg-white w-full 4xl:w-[31%] h-[19rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl">
      <h1 className="mb-3 font-bold text-xl text-center pt-5">
      Quantidade de licitações no período
      </h1>
      <Chart
        options={chartData.options}
        series={chartData.options.series}
        type="bar"
        width="100%"
        height="70%"
      />
    </section>
  );
}
