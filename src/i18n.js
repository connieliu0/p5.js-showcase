import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
import en from './locales/en/translation.json'
import es from './locales/es/translation.json'
import zh_Hans from './locales/zh_Hans/translation.json'
import ko from './locales/ko/translation.json'

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({
    whitelist: ['es', 'en', 'zh_Hans', 'ko'],
    nonExplicitWhitelist: true,
    load: 'languageOnly',
    resources: {
        en: {
          translations: en
        },
        es: {
          translations: es
        },
        zh_Hans: {
          translations: zh_Hans
        }
        ko: {
          translations: ko
        }
      },
      ns: ["translations"],
      defaultNS: "translations",
  
      keySeparator: false, // we use content as keys
      interpolation: {
        escapeValue: false
      },
      fallbackLng: "en",
      debug: true,
  });


export default i18n;