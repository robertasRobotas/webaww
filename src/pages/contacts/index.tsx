import Image from "next/image";
import { useState, useRef } from "react";
import { Nav } from "../../components/navbar";
import throttle from "lodash/throttle";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import emailPhoto from "../../assets/email.png";
import plane from "../../assets/plane.svg";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

import { Footer } from "@/components/footer";
// import { translationLt } from "../../translations/translationsLt";
// import { translationEn } from "../../translations/translationsEn";

// i18next.use(initReactI18next).init({
//   resources: {
//     en: { translation: translationEn },
//     lt: { translation: translationLt },
//   },
//   lng: "en",
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

export default function Home() {
  const { t } = useTranslation();
  const [name, useName] = useState<string>("");
  const [email, useEmail] = useState<string>("");
  const [company, useCompany] = useState<string>("");
  const [message, useMessage] = useState<string>("");
  const [freeConsultation, setFreeConsultation] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);

  const form = useRef<any>();

  const showSuccessAlert = () =>
    toast.success("Sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const showErrorAlert = () =>
    toast.error("Please agree with terms & conditions", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const showFillDataAlert = () =>
    toast.error("Please fill all the data", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const onSubmitMessage = (e: any) => {
    if (!name || !email || !company || !message) {
      showFillDataAlert();
      return;
    }

    if (terms) {
      e.preventDefault();
      emailjs
        .sendForm(
          process.env.EMAILJS_SERVICE_ID as string,
          process.env.EMAILJS_TEMPLATE_ID as string,
          form.current,
          process.env.EMAILJS_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            console.log("Sent");
            useName("");
            useEmail("");
            useCompany("");
            useMessage("");
            showSuccessAlert();
          },
          (error) => {
            // console.log(error.text);
          }
        );
    } else {
      showErrorAlert();
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="container mx-auto max-w-screen-xl px-6 md:px-8 md:max-w-[880px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1440px] pb-8">
        <Nav />
        <div className="grid gap-8 md:grid-cols-2 md:min-h-[calc(100vh-378px)]">
          <div className="flex gap-3 flex-col">
            <h1 className="text-2xl md:text-4xl font-medium">
              {t("contactsTitle")}
            </h1>
            <h4 className="font-medium">{t("contactsSubtitle")}</h4>
            <form ref={form} className="flex flex-col gap-3">
              <input
                name="name"
                placeholder={t("yourName") as string}
                className="py-2 px-4 mt-4 rounded-lg text-sm"
                value={name}
                onChange={(e) => useName(e.target.value)}
              />
              <input
                name="email"
                placeholder={t("yourEmail") as string}
                className="py-2 px-4 rounded-lg text-sm"
                value={email}
                onChange={(e) => useEmail(e.target.value)}
              />
              <input
                name="company"
                placeholder={t("companyName") as string}
                className="py-2 px-4 rounded-lg text-sm"
                value={company}
                onChange={(e) => useCompany(e.target.value)}
              />
              <textarea
                name="message"
                placeholder={t("yourMessage") as string}
                className="py-2 px-4 rounded-lg resize-none h-28 text-sm"
                value={message}
                onChange={(e) => useMessage(e.target.value)}
              />

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  name="isConsultation"
                  id="isConsultation"
                  checked={freeConsultation}
                  onChange={() =>
                    setFreeConsultation((prevState) => !prevState)
                  }
                />
                <span>{t("freeConsultation")}</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={terms}
                  onChange={() => setTerms((prevState) => !prevState)}
                />
                <span>{t("privacyPolicy")}</span>
              </div>
              <button
                type="button"
                onClick={throttle(onSubmitMessage, 2000)}
                className="bg-white w-28 py-1 rounded-lg flex gap-2 items-center justify-center border-2 border-main"
              >
                <span>{t("sendButton")}</span>
                <img src={plane.src} className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="flex items-center">
            <Image alt="email" src={emailPhoto} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
