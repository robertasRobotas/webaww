import Image from "next/image";
import Link from "next/link";
import arrow from "../../assets/arrow.png";

import { Nav } from "../../components/navbar";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { templates } from "../../../templates";
import { Footer } from "@/components/footer";
import { useState } from "react";

const WebSite = ({ template }: any) => {
  const [isShowButtons, setShowButtons] = useState(false);
  return (
    <div
      key={template.websiteId}
      className="relative group border-4 border-main"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <img
        alt="web page image"
        className="group-hover:blur-sm"
        src={template.templateAssets.desktop}
      />

      {isShowButtons && (
        <div className="absolute flex flex-col gap-4 top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[80%] items-center">
          <div className="">
            <a
              target="_blank"
              href={template.url}
              className="text-sm inline-flex items-center gap-2 font-medium tracking-wider border-b border-black"
            >
              <div>See web page</div>
              <Image alt="arrow" src={arrow} className="h-3 w-3.5" />
            </a>
          </div>

          <div className="">
            <Link
              href="/contacts"
              className="text-sm inline-flex items-center gap-2 font-medium tracking-wider border-b border-black"
            >
              <div>Contact for similar web page</div>
              <Image alt="arrow" src={arrow} className="h-3 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const { t } = useTranslation();

  console.log("templates", templates);

  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] pb-8">
        <Nav />

        <div className="grid gap-10 md:grid-cols-2 xl:md:grid-cols-3">
          {templates.map((template) => (
            <div key={template.websiteId}>
              <WebSite template={template} />
            </div>
          ))}
        </div>
      </div>

      <Footer isGrey />
    </>
  );
}
