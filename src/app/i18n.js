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
          mainTitle: "Napptilus Mobile Store",
          pagenotfound: "Page not found",
          goback: "Go back",
          error: "Oh no, there was an error",
          currency: "$",
          brand: "Brand",
          model: "Model",
          price: "Price",
          cpu: "CPU",
          ram: "RAM",
          operativeSystem: "Operative System",
          screenResolution: "Screen resolution",
          battery: "Battery",
          camera: "Camera",
          dimensions: "Dimensions",
          weight: "Weight",
          addToCart: "Add to Cart",
          actions: "Actions",
          description: "Description",
          firstCamera: "Main Camera",
          secondCamera: "Secondary Camera",
          color: "Color",
          internalMemory: "Internal Memory",
          search: "Search..."
        },
      },
      es: {
        translation: {
          mainTitle: "Napptilus Tienda de móviles",
          pagenotfound: "Página no encontrada",
          goback: "Volver atrás",
          error: "Oh no, debe haber algún error",
          currency: "€",
          brand: "Marca",
          model: "Modelo",
          price: "Precio",
          cpu: "CPU",
          ram: "RAM",
          operativeSystem: "Sistema operativo",
          screenResolution: "Resolución de pantalla",
          battery: "Batería",
          camera: "Cámara",
          dimensions: "Dimensiones",
          weight: "Peso",
          addToCart: "Añadir a la cesta",
          actions: "Acciones",
          description: "Descripción",
          firstCamera: "Cámara principal",
          secondCamera: "Cámara secundaria",
          color: "Color",
          internalMemory: "Memoria interna",
          search: "Buscar..."
        },
      },
    },
  });

export default i18n;
