import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          mainTitle: "Naaptilus Mobile Store",
          pagenotfound: "Page not found",
          goback: "Go back",
          error: "Oh no, there was an error",
          currency: "$",
        },
      },
      es: {
        translation: {
          mainTitle: "Naaptilus Tienda de móviles",
          pagenotfound: "Página no encontrada",
          goback: "Volver atrás",
          error: "Oh no, debe haber algún error",
          currency: "€",
        },
      },
    },
  });

export default i18n;
