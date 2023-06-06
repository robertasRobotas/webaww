import Image from "next/image";
import Link from "next/link";

import { Nav } from "../../components/navbar";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import services from "../../assets/services.jpg";
import webPages from "../../assets/web-pages.jpg";
import reactComponents from "../../assets/react-components.jpg";
import aiSolutions from "../../assets/ai-solutions.jpg";
import arrow from "../../assets/arrow.png";
import { Footer } from "@/components/footer";
// import { translationLt } from "../../translations/translationsLt";
// import { translationEn } from "../../translations/translationsEn";

// i18next.use(initReactI18next).init({
//   resources: {
//     en: { translation: translationEn },
//     lt: { translation: translationLt },
//   },
//   lng: "en",
//   fallbackLng: "en",
// });

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] pb-8">
        <Nav />
        <div className="grid gap-8 md:grid-cols-2 md:pb-8">
          <div className="flex gap-3 flex-col md:pt-12 md:pl-12 lg:pt-16 lg:pl-16 xl:pt-28">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-medium">
              {t("servicesTitle")}
            </h1>
            <h4 className="max-w-[320px] font-medium">
              {t("servicesSubtitle")}{" "}
            </h4>
          </div>
          <div>
            <img
              alt="responsive screens"
              src={services.src}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-full bg-white py-12">
        <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="md:flex md:flex-col md:pt-4 xl:pt-24 grid md:grid-cols-2 md:pl-12 lg:pl-16">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-medium pb-4">
                {t("webPages")}
              </h1>
              <h4 className="md:max-w-[320px] font-medium">
                {t("webPagesText")}
              </h4>
              <div className="flex pt-2">
                <Link
                  href="/webpages"
                  className="flex text-sm items-center gap-2 font-medium tracking-wider border-b border-black"
                >
                  {t("seeExamples")}
                  <Image alt="arrow" src={arrow} className="h-3 w-3.5" />
                </Link>
              </div>
            </div>
            <div>
              <img
                alt="responsive screens"
                src={webPages.src}
                className="col-start-9 col-end-13 h-full object-cover w-[70%] md:w-[90%] lg:w-[70%] m-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full bg-white py-12">
        <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-2">
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
                src={reactComponents.src}
                className="col-start-9 col-end-13 h-full object-cover w-[70%] md:w-[90%] lg:w-[70%] m-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-full bg-white py-12">
        <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="md:flex md:flex-col md:pt-4 xl:pt-24 grid md:grid-cols-2 md:pl-12 lg:pl-16">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-medium pb-4">
                {t("aiSolutions")}
              </h1>
              <h4 className="md:max-w-[320px] font-medium">
                {t("aiSolutionsText")}
              </h4>
              <div className="flex pt-2">
                <Link
                  href="/contacts"
                  className="flex text-sm items-center gap-2 font-medium tracking-wider border-b border-black"
                >
                  {t("findSolutions")}
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
          </div>
        </div>
      </div>

      <Footer isGrey />
    </>
  );
}
