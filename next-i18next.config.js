module.exports = {
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en', 'ja', 'zh'],
    localePath: './public/locales',
    defaultNS: 'common',
    ns: ['common'],
  },
  fallbackLng: {
    'zh-CN': ['zh'],
    'zh-TW': ['zh'],
    default: ['ko']
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
} 