"use client";

import React, { useEffect, useState } from "react";
import useDisableTransitionOnResize from "../hooks/userResize";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Nav = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const isResizing = useDisableTransitionOnResize();

  const onLanguageChange = (event: any) => {
    setOpen(false);
    i18next.changeLanguage(event.target.value);
  };

  return (
    <div className="w-full md:flex justify-between mb-12 md:mb-28">
      <div className="bg-background relative z-50 flex items-center justify-between py-6">
        <Link href="/">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 italic">
            webAww .
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer md:hidden"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="main"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <ul
        className={`bg-white md:bg-transparent md:flex justify-end md:items-center md:pb-0 pb-4 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 pt-4 md:pt-0 z-10 h-screen md:h-auto ${
          open ? "left-0" : "left-[-100vw]"
        }  ${isResizing ? "transition-none" : "transition-all duration-200"}`}
      >
        <li className="md:ml-6 text-sm md:my-0 my-3 font-medium">
          <Link
            href="/"
            className="text-gray-800 hover:text-gray-400 duration-500"
          >
            {t("home")}
          </Link>
        </li>

        <li className="md:ml-6 text-sm md:my-0 my-3 font-medium">
          <Link
            href="/services"
            className="text-gray-800 hover:text-gray-400 duration-500"
          >
            {t("services")}
          </Link>
        </li>

        <li className="md:ml-6 text-sm md:my-0 my-3 font-medium">
          <Link
            href="/contacts"
            className="text-gray-800 hover:text-gray-400 duration-500"
          >
            {t("contacts")}
          </Link>
        </li>

        <li className="md:ml-6 text-sm md:my-0 my-3 font-medium">
          <select
            name="language"
            id="mzp-c-language-switcher-select"
            onChange={onLanguageChange}
            className="bg-transparent cursor-pointer outline-0"
            value={i18next.language}
          >
            <option value="en">EN</option>
            <option value="lt">LT</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export { Nav };
