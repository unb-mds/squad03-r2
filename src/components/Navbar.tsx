import {
  AboutIcon,
  HomeIcon,
  NewsIcon,
  GithubIcon,
  
} from "@/assets/svgs/icons";
import clsx from "clsx";
import Link from "next/link";

interface NavbarProps {
  activeButton: "Home" | "About" | "Mais" | "News";
}



export default function Navbar({ activeButton }: NavbarProps) {
  return (
    <header className="bg-[#b156c8] w-full h-14 fixed top-0  rounded-bt">
      <div className="container h-full flex items-center justify-center lg:justify-start">
      <img src="https://github.com/unb-mds/squad03-r2/blob/main/src/assets/images/logo1.png?raw=true" alt="Logo" className="w-[7rem] mt-1 ml-1 hidden md:block" />
        <ul className="flex items-center space-x-4 w-full items-center md:justify-center">
          <li className="px-4">
            <Link href="/">
              <HomeIcon
                className={clsx(
                  activeButton === "Home"
                    ? "fill-white lg:w-8 3xl:w-auto"
                    : "fill-[#921daf] hover:fill-gray-200 lg:w-8 3xl:w-auto"
                )}
              />
            </Link>  
          </li>
          <li className="px-4">
            <Link href="/mais">
              <NewsIcon
                className={clsx(
                  activeButton === "Mais"
                    ? "fill-white lg:w-8 3xl:w-auto"
                    : "fill-[#921daf] hover:fill-gray-200 lg:w-8 3xl:w-auto"
                )}
              />
            </Link>
          </li>
          <li className="px-4">
            <Link href="/sobre">
              <AboutIcon
                className={clsx(
                  activeButton === "About"
                    ? "fill-white lg:w-[2.31rem] 3xl:w-auto"
                    : "fill-[#921daf] hover:fill-gray-200 lg:w-[2.31rem] 3xl:w-auto"
                )}
              />
            </Link>
          </li>
          <li className="px-4">
            <Link href="https://github.com/unb-mds/2023-2-Squad03" target="5">
              <GithubIcon className="fill-[#921daf] hover:fill-gray-200 lg:w-[2.31rem] 3xl:w-auto" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
