import Navbar from "@/components/Navbar";
import Link from "next/link";
import OKBRIcon from "@/assets/svgs/okbr-icon";
import { useMemo } from "react";
import { Source_Sans_Pro } from "next/font/google";
import { IfalIcon } from "@/assets/svgs/icons";



const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

interface MainLayoutProps {
  children: React.ReactNode;
  activeButton: "Home" | "About" | "Mais" | "News";
}

export function MainLayout({ children, activeButton }: MainLayoutProps) {
  const anos = useMemo(
    () => [
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
    ],
    []
  );

  return (
    <div className={sourceSansPro.className}>
      <div className="h-screen flex">
        <div className="flex flex-1">
          <Navbar activeButton={activeButton} />
          {}
        </div>
        <main className="bg-[#F5F7FB]  w-full overflow-y-auto px-[2.875rem] pt-[3.25rem] pb-6 ">
          {children}
        </main>
      </div>
    </div>
  );
}
