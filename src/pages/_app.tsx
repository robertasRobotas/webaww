import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationLt } from "../translations/translationsLt";
import { translationEn } from "../translations/translationsEn";
import detector from "i18next-browser-languagedetector";

export default function App({ Component, pageProps }: AppProps) {
  i18next
    .use(detector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: translationEn },
        lt: { translation: translationLt },
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Component {...pageProps}></Component>
    </>
  );
}
