import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex md:flex-row text-xs text-[#6C6C6C] gap-x-5 items-center gap-y-5">
      <img className="w-30 md:w-20" src="https://github.com/unb-mds/squad03-r2/blob/main/src/assets/images/logo3.png?raw=true" />
      <p>
        Projeto feito com base no 
        <span className="underline decoration-solid">
              <Link href="https://exoonero.org/"> projeto Exoonero.</Link>
            </span>
      </p>
    </footer>
  );
}
