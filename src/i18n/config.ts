import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { languageDetectorPlugin } from './languageDetector';

import settingRu from './locales/ru/settings.json';
import commonRu from './locales/ru/common.json';

import settingEn from './locales/en/settings.json';
import commonEn from './locales/en/common.json';

export type TSettings = typeof settingEn;
export type TCommon = typeof commonEn;

export const en = {
  common: commonEn,
  settings: settingEn,
}

const namespaces = Object.keys(en);

export type TNamespaceStructure = typeof en;
export type TNamespaceKeys = keyof TNamespaceStructure;
export type Namespace = Array<TNamespaceKeys>;

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en,
      ru: {
        common: commonRu,
        settings: settingRu,
      },
    },
    fallbackLng: 'en',
    ns: namespaces,
    defaultNS: 'common',
  })

i18n.languages = ['en', 'ru'];

export default i18n;
