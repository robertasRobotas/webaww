import Image from "next/image";
import Link from "next/link";

import { Nav } from "../components/navbar";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import responsiveImage from "../assets/ComponentsPhoto.jpg";
import computerImage from "../assets/ComputerPhoto.jpg";
import arrow from "../assets/arrow.png";
import { SocialIcons } from "@/components/socialIcons";
import { Footer } from "@/components/footer";
// import { translationLt } from "../translations/translationsLt";
// import { translationEn } from "../translations/translationsEn";

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
      <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] md:min-h-[calc(100vh-158px)]">
        <Nav />
        <div className="flex flex-col md:grid md:grid-container md:grid-cols-12 gap-16 justify-between md:pb-24">
          <div className="flex flex-col gap-8 col-span-7 justify-between">
            <h1 className="!important text-xl sm:text-2xl sm:leading-9 md:text-3xl md:leading-10 tracking-wide font-medium">
              {t("headingText")}
            </h1>
            <img alt="responsive screens" src={responsiveImage.src} />
            <div className="md:hidden">
              <Link
                href="/contacts"
                className="text-sm inline-flex items-center gap-2 font-medium tracking-wider border-b border-black"
              >
                <div>{t("callToAction")}</div>
                <Image alt="arrow" src={arrow} className="h-3 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="col-start-9 col-end-13 flex">
            <img
              alt="responsive screens"
              src={computerImage.src}
              className=" h-full object-cover"
            />
          </div>
          <div className="w-full hidden md:flex  col-start-1 col-end-13 justify-between items-center">
            <SocialIcons />
            <div>
              <Link
                href="/contacts"
                className="flex text-sm items-center gap-2 font-medium tracking-wider border-b border-black"
              >
                {t("callToAction")}
                <Image alt="arrow" src={arrow} className="h-3 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
