"use client";

import React, { useState } from "react";
import useDisableTransitionOnResize from "../hooks/userResize";
import i18next from "i18next";

const Footer = () => {
  return (
    <div className="my-16">
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
      </ul>
    </div>
  );
};

export { Footer };
