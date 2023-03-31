import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector) // detects user language
  .use(initReactI18next) // passes i18n instance to react-i18next
  // init i18next
  .init({
    lng: "en", // todo:: change back to danish
    fallbackLng: "en", // todo:: change back to danish
    resources: {
      // key connection to json files
      da: {
        translation: require("./locales/da.json"),
      },
      en: {
        translation: require("./locales/en.json"),
      },
    },
  });

export default i18n;
