import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import koCommon from '../../public/locales/ko/common.json';
import enCommon from '../../public/locales/en/common.json';
import jaCommon from '../../public/locales/ja/common.json';
import zhCommon from '../../public/locales/zh/common.json';

const resources = {
  ko: {
    common: koCommon,
  },
  en: {
    common: enCommon,
  },
  ja: {
    common: jaCommon,
  },
  zh: {
    common: zhCommon,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko', // default language
    fallbackLng: 'ko',
    debug: false,
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    defaultNS: 'common',
    ns: ['common'],
  });

export default i18n; 