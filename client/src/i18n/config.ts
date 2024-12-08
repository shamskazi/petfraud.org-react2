import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en.json';
import zhTranslations from './translations/zh.json';
// Function to get initial language from URL
const getInitialLanguage = () => {
  const path = window.location.pathname;
  const langMatch = path.match(/^\/([a-z]{2})/);
  return langMatch ? langMatch[1] : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      zh: { translation: zhTranslations }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
