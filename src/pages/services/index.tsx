import Image from "next/image";
import Link from "next/link";

import { Nav } from "../../components/navbar";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import services from "../../assets/services.jpg";
import webPages from "../../assets/web-pages.jpg";
import reactComponents from "../../assets/react-components.jpg";
import aiSolutions from "../../assets/ai-solutions.jpg";

import { Footer } from "@/components/footer";

const translationEn = {
  headingText:
    "Web pages, React components & AI solutions for your business needs.",
  callToAction: "Let's get in touch",
  home: "HOME",
  services: "SERVICES",
  contacts: "CONTACTS",
  sayHello: "Or say hello +370 60987 494",
  getInTouch: "Get in touch info@webaww.com",
};

const translationLt = {
  headingText:
    "Web puslapiai, React komponentai & dirbtinio intelekto sprendimai jūsų verslui.",
  callToAction: "Susisiekime",
  home: "PAGRINDINIS",
  services: "PASLAUGOS",
  contacts: "KONTAKTAI",
  sayHello: "Pasisveikinkime +370 60987 494",
  getInTouch: "Susisiekime info@webaww.com",
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
      <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] pb-8">
        <Nav />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex gap-3 flex-col md:pt-12 md:pl-12 lg:pt-16 lg:pl-16 xl:pt-28">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-medium">
              Services
            </h1>
            <h4 className="max-w-[320px] font-medium">
              Claim your space in the digital world stress-free.
            </h4>
          </div>
          <div>
            <img
              alt="responsive screens"
              src={services.src}
              className="col-start-9 col-end-13 h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-full bg-white py-12">
        <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="md:flex md:flex-col md:pt-4 xl:pt-24 grid md:grid-cols-2 md:pl-12 lg:pl-16">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-medium pb-4">
                Web Pages
              </h1>
              <h4 className="md:max-w-[320px] font-medium">
                We will design and build a web page that will help your clients
                to find & meet your business or service on the internet. Our aim
                is to provide the best user experience to your clients on a web
                page and save your time.
              </h4>
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
                React Components
              </h1>
              <h4 className="md:max-w-[320px] font-medium">
                We use React development to break down tricky, long-lasting
                projects into easy-to-handle component parts. With React, you
                get quicker development, better performance, and easier updates.
              </h4>
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
                AI Solutions
              </h1>
              <h4 className="md:max-w-[320px] font-medium">
                Transform customer service with AI-driven 24/7 support, enhance
                user engagement through personalized interaction, automate
                routine tasks for increased efficiency, and use advanced
                analytics to identify customer needs.
              </h4>
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
