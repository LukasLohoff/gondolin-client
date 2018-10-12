import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import {appConfig} from './config/app.config';

i18n
  .use(LanguageDetector)
  .use(XHR)
  .init({
    backend: {
      loadPath: appConfig.api[process.env.NODE_ENV] + '/public/locale/{{lng}}.json'
    },
    fallbackLng: 'de',
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    // react i18next special options (optional)
    react: {
      wait: true, // set to true if you like to wait for loaded in every translated hoc
      nsMode: 'fallback' // set it to fallback to let passed namespaces to translated hoc act as fallbacks
    },

    whitelist: ['de', 'en']
  });

export default i18n;
