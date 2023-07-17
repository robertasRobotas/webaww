import Image from "next/image";
import Link from "next/link";

import { Nav } from "../../components/navbar";
import { useTranslation } from "react-i18next";
import aiSolutions from "../../assets/ai-solutions-compressed.png";
import arrow from "../../assets/arrow.png";
import { Footer } from "@/components/footer";
import axios from "axios";
import { useState } from "react";

export default function React({ content }: any) {
  const { t } = useTranslation();

  const [suggestions, setSuggestions] = useState(content.split("\n"));

  return (
    <>
      <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] pb-8">
        <Nav />
        <div className="grid gap-8 md:grid-cols-2 md:pb-8">
          <div className="flex gap-3 flex-col md:pt-12 md:pl-12 lg:pt-16 lg:pl-16 xl:pt-28">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-medium mb-3">
              {t("aiSolutions")}
            </h1>
            <h4 className="max-w-[320px] font-medium">
              {t("aiSolutionsSubtitle")}
            </h4>
          </div>
          <div className="flex justify-center">
            <img
              alt="responsive screens"
              src={aiSolutions.src}
              className="object-cover max-w-sm w-[70%] md:w-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-full py-12 bg-white">
        <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px]">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-medium mb-8">
            With AI you can:
          </h1>

          <section className="flex gap-4 my-12 flex-wrap">
            {suggestions.map((suggestion: any) => (
              <div className="mr-4">{suggestion}</div>
            ))}
          </section>

          <h1 className="text-xl sm:text-2xl md:text-xl font-medium mb-1">
            Theese suggestions were generated with help of AI.
          </h1>
          <h3 className="text-xl sm:text-xl md:text-xl font-medium mb-3">
            AI can help to your business too.
          </h3>
          <div className="flex pt-2">
            <Link
              href="/contacts"
              className="flex text-sm items-center gap-2 font-medium tracking-wider border-b border-black"
            >
              Let me tell you how
              <Image alt="arrow" src={arrow} className="h-3 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer isGrey />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        max_tokens: 30,
        model: "gpt-3.5-turbo",
        temperature: 1,
        messages: [
          {
            role: "system",
            content:
              "Please generate a ~5 suggestions in array, on how chat GPT AI can help to the business. Give only titles. Titles should be no longer that 5 words.",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.AUTHORIZATION,
        },
      }
    );

    console.log(response.data.choices[0].message.content);

    const { data } = response;

    return { props: { content: data.choices[0].message.content } };
  } catch (err) {
    console.log("ERRRORRRR", err);
  }
}