import Image from "next/image";
import { Nav } from "../components/navbar";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import responsiveImage from "../assets/ComponentsPhoto.jpg";
import computerImage from "../assets/ComputerPhoto.jpg";

const translationEn = {
  headingText: "Web pages, components & digital solutions for your business.",
};

const translationLt = {
  headingText:
    "Web puslapiai, komponentai & skaitmeniniai sprendimai jūsų verslui.",
};

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    lt: { translation: translationLt },
  },
  lng: "en",
  fallbackLng: "en",
});

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-2 md:px-6">
        <Nav />
        <div className="grid grid-container grid-cols-12 gap-8 justify-between">
          <div className="flex flex-col gap-8 col-span-7 justify-between">
            <h1 className="text-xl md:text-3xl">{t("headingText")}</h1>
            <img alt="responsive screens" src={responsiveImage.src} />
          </div>
          <img
            alt="responsive screens"
            src={computerImage.src}
            className="col-start-9 col-end-13 h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
