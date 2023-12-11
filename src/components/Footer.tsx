import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex md:flex-row text-xs text-[#6C6C6C] gap-x-5 items-center gap-y-5">
      <img className="w-40 md:w-30" src="https://raw.githubusercontent.com/Paxxaglia/Trabalaho-de-calango-Jogo-de-adivinhacao/main/logo-licital.png" />
      <p>
        Projeto feito com base no 
        <span className="underline decoration-solid">
              <Link href="https://exoonero.org/"> projeto Exoonero.</Link>
            </span>
      </p>
    </footer>
  );
}
