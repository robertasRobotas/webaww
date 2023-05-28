"use client";

import React, { useState } from "react";
import Link from "next/link";
import i18next from "i18next";
import { SocialIcons } from "./socialIcons";
import { useTranslation } from "react-i18next";


type FooterProps = {
  isGrey?: boolean;
};
const Footer: React.FC<FooterProps> = ({ isGrey }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="my-16 md:hidden">
        <ul className="flex flex-col justify-center gap-4">
          <li>
            <h1 className="text-center font-bold text-2xl cursor-pointer text-gray-800 italic">
              webAww .
            </h1>
          </li>
          <li>
            <h4 className="text-center">© webAww</h4>
          </li>
          <li>
            <h4 className="text-center">{t("getInTouch")}</h4>
          </li>
          <li>
            <h4 className="text-center">{t("sayHello")}</h4>
          </li>
          <li className="flex justify-center">
            <SocialIcons />
          </li>
        </ul>
      </div>

      <div className={`hidden md:block md:py-8 ${isGrey ? "" : "bg-white"}`}>
        <div className="md:flex md:justify-between items-center container mx-auto max-w-screen-xl md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
          <div>
            <ul className="flex flex-col gap-4">
              <li className="text-center text-xs font-semibold tracking-wide">
                <Link href="/">{t("home")}</Link>
              </li>
              <li className="text-center text-xs font-semibold tracking-wide">
                <Link href="/services">{t("services")}</Link>
              </li>
              <li className="text-center text-xs font-semibold tracking-wide">
                <Link href="/contacts">{t("contacts")}</Link>
              </li>
            </ul>
          </div>

          <ul className="flex flex-col items-center gap-4">
            <li>
              <h1 className="text-center font-bold text-2xl cursor-pointer text-gray-800 italic">
                webAww .
              </h1>
            </li>
            <li>
              <h4 className="text-center">©webAww</h4>
            </li>
          </ul>

          <ul className="flex flex-col justify-center gap-4">
            <li>
              <h4 className="text-center text-sm">{t("getInTouch")}</h4>
            </li>
            <li>
              <h4 className="text-center text-sm">{t("sayHello")}</h4>
            </li>
            <li className="flex justify-center">
              <SocialIcons />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { Footer };
