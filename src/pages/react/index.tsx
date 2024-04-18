import Image from "next/image";
import Link from "next/link";

import { Nav } from "../../components/navbar";
import { useTranslation } from "react-i18next";
import reactComponents from "../../assets/react-components-compressed.png";
import arrow from "../../assets/arrow.png";
import { Footer } from "@/components/footer";
import ReactComponents from "@/components/reactComponents/reactComponents";
import { useState } from "react";

export default function React() {
  const [isReplaceComponent, setReplaceComponent] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] pb-8">
        <Nav />
        <div className="grid gap-8 md:grid-cols-2 md:pb-8">
          <div className="flex gap-3 flex-col md:pt-12 md:pl-12 lg:pt-16 lg:pl-16 xl:pt-28">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-medium mb-3">
              {t("reactComponents")}
            </h1>
            <h4 className="max-w-[320px] font-medium">{t("reactSubtitle")}</h4>
          </div>
          <div className="flex justify-center">
            <img
              alt="responsive screens"
              src={reactComponents.src}
              className="object-cover max-w-sm w-[70%] md:w-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-full mb-8 bg-white py-12">
        <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
          <h2 className="text-3xl mt-8 mb-4 font-medium">{t("reactSlogan")}</h2>

          <Link href="https://www.boardq.io/" className="underline">
            boardq
          </Link>
          <div className="flex pt-12">
            <iframe
              src="https://www.boardq.io/board/sunniest_capitals_in_europe"
              width="100%"
              height="1000"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer isGrey />
    </>
  );
}
