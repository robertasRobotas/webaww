import Image from "next/image";
import Link from "next/link";

import { Nav } from "../../components/navbar";
import { useTranslation } from "react-i18next";
import aiSolutions from "../../assets/ai-solutions-compressed.png";
import arrow from "../../assets/arrow.png";
import { Footer } from "@/components/footer";

export default function React() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] pb-8">
        <Nav />
        <div className="grid gap-8 md:grid-cols-2 md:pb-8">
          <div className="flex gap-3 flex-col md:pt-12 md:pl-12 lg:pt-16 lg:pl-16 xl:pt-28">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-medium mb-3">
              {t("aiSolutions")}
            </h1>
            <h4 className="max-w-[320px] font-medium">
              {t("aiSolutionsSubtitle")}
            </h4>
          </div>
          <div className="flex justify-center">
            <img
              alt="responsive screens"
              src={aiSolutions.src}
              className="object-cover max-w-sm w-[70%] md:w-full"
            />
          </div>
        </div>
      </div>

      {/* bg-white */}
      <div className="max-w-full py-12">
        <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
          {/* <div className="grid gap-8 md:grid-cols-2">
            <div className="md:flex md:flex-col md:pt-4 xl:pt-24 grid md:grid-cols-2 md:pl-12 lg:pl-16">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-medium pb-4">
                {t("reactComponents")}
              </h1>
              <h4 className="md:max-w-[320px] font-medium">
                {t("reactComponentsText")}
              </h4>
              <div className="flex pt-2">
                <Link
                  href="/contacts"
                  className="flex text-sm items-center gap-2 font-medium tracking-wider border-b border-black"
                >
                  {t("discoverComponents")}
                  <Image alt="arrow" src={arrow} className="h-3 w-3.5" />
                </Link>
              </div>
            </div>
            <div>
              <img
                alt="responsive screens"
                src={aiSolutions.src}
                className="col-start-9 col-end-13 h-full object-cover w-[70%] md:w-[90%] lg:w-[70%] m-auto"
              />
            </div>
          </div> */}
          <div className="flex pt-2">
            <Link
              href="/react"
              className="flex text-sm items-center gap-2 font-medium tracking-wider border-b border-black"
            >
              {t("callToActionContacted")}
              <Image alt="arrow" src={arrow} className="h-3 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer isGrey />
    </>
  );
}
