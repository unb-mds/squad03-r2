import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex md:flex-row text-xs text-[#6C6C6C] gap-x-5 items-center gap-y-5">
      <img className="w-16 md:w-12" src="https://raw.githubusercontent.com/exoonero/exoonero.github.io/091f2294c08ebcd59f26a980a8b9878b258f8f40/src/assets/svgs/logo2-exonera.svg"  />
      <p>
        Projeto feito com base no 
        <span className="underline decoration-solid">
              <Link href="https://exoonero.org/"> projeto Exoonero.</Link>
            </span>
      </p>
    </footer>
  );
}
