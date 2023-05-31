import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Nav } from "../../components/navbar";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import services from "../../assets/services.jpg";
import webPages from "../../assets/web-pages.jpg";
import emailPhoto from "../../assets/email.png";
import aiSolutions from "../../assets/ai-solutions.jpg";
import arrow from "../../assets/arrow.png";
import plane from "../../assets/plane.svg";

import { Footer } from "@/components/footer";
import { translationLt } from "../../translations/translationsLt";
import { translationEn } from "../../translations/translationsEn";

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
  const [name, useName] = useState<string>();
  const [email, useEmail] = useState<string>();
  const [company, useCompany] = useState<string>();
  const [message, useMessage] = useState<string>();

  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] pb-8">
        <Nav />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex gap-3 flex-col">
            <h1 className="text-2xl md:text-4xl font-medium">
              {t("contactsTitle")}
            </h1>
            <h4 className="font-medium">{t("contactsSubtitle")}</h4>
            <input
              placeholder={t("yourName") as string}
              className="py-2 px-4 mt-4 rounded-lg text-sm"
              value={name}
              onChange={(e) => useName(e.target.value)}
            />
            <input
              placeholder={t("yourEmail") as string}
              className="py-2 px-4 rounded-lg text-sm"
              value={email}
              onChange={(e) => useEmail(e.target.value)}
            />
            <input
              placeholder={t("companyName") as string}
              className="py-2 px-4 rounded-lg text-sm"
              value={company}
              onChange={(e) => useCompany(e.target.value)}
            />
            <textarea
              placeholder={t("yourMessage") as string}
              className="py-2 px-4 rounded-lg resize-none h-28 text-sm"
              value={message}
              onChange={(e) => useMessage(e.target.value)}
            />

            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <span>I would like to get a free consultation.</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <span>I agree with your privacy policy.</span>
            </div>
            <button className="bg-white w-28 py-1 rounded-lg flex gap-2 items-center justify-center">
              <span>Send</span>
              <img src={plane.src} className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center">
            <Image alt="email" src={emailPhoto} />
          </div>
        </div>
      </div>

      <Footer isGrey />
    </>
  );
}
