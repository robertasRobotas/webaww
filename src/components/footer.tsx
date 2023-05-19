"use client";

import React, { useState } from "react";
import useDisableTransitionOnResize from "../hooks/userResize";
import i18next from "i18next";
import { SocialIcons } from "./socialIcons";

const Footer = () => {
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
            <h4 className="text-center">Get in touch info@webaww.com</h4>
          </li>
          <li>
            <h4 className="text-center">Or say hello +370 60987 494</h4>
          </li>
          <li className="flex justify-center">
            <SocialIcons />
          </li>
        </ul>
      </div>

      <div className="hidden bg-white md:block md:py-8">
        <div className="md:flex md:justify-between items-center container mx-auto max-w-screen-xl md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
          <div>
            <ul className="flex flex-col gap-4">
              <li className="text-center text-sm">
                <a>HOME</a>
              </li>
              <li className="text-center text-sm">
                <a>SERVICES</a>
              </li>
              <li className="text-center text-sm">
                <a>CONTACT</a>
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
              <h4 className="text-center text-sm">
                Get in touch info@webaww.com
              </h4>
            </li>
            <li>
              <h4 className="text-center text-sm">
                Or say hello +370 60987 494
              </h4>
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
