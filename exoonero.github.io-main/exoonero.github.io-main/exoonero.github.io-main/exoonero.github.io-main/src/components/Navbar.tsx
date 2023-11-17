import {
  AboutIcon,
  HomeIcon,
  NewsIcon,
  GithubIcon,
} from "@/assets/svgs/icons";
import clsx from "clsx";
import Link from "next/link";

interface NavbarProps {
  activeButton: "Home" | "About" | "News";
}

export default function Navbar({ activeButton }: NavbarProps) {
  return (
    <nav className="3xl:w-[8.75rem] lg:w-[7.25rem] bg-[#b156c8]  lg:flex flex-col items-center 3xl:pt-[4.22rem] lg:pt-[3.489rem] hidden">
      <ul className="3xl:mt-[14rem] lg:mt-[11.66rem] flex flex-col 3xl:gap-y-[4.5rem] lg:gap-y-[3.90rem] items-center">
        <li>
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
        <li>
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
        <li>
          <Link href="https://github.com/unb-mds/2023-2-Squad03" target="_blank">
            <GithubIcon className="fill-[#921daf] hover:fill-gray-200 lg:w-[2.31rem] 3xl:w-auto" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
