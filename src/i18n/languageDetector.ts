import AsyncStorage from "@react-native-async-storage/async-storage";
import { LanguageDetectorAsyncModule, LanguageDetectorModule } from "i18next";
import { NativeModules, Platform } from "react-native";

import { EStoreKeys } from "../constants";

const { SettingsManager, I18nManager } = NativeModules;

const getDeviceLanguage = (): string => {
  const deviceLocale =
    Platform.OS === "ios"
      ? SettingsManager.settings.AppleLocale ||
        SettingsManager.settings.AppleLanguages[0]
      : I18nManager.localeIdentifier;

  return deviceLocale?.split("_")?.[0]?.toLowerCase() || "en";
};

export const languageDetectorPlugin: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  init: () => {},
  async: true,
  detect: (callback) => {
    AsyncStorage.getItem(EStoreKeys.language).then((language) => {
      if (language) {
        callback(language);
      }
      callback(getDeviceLanguage());
    });
  },
  cacheUserLanguage: () => {}
};

// export const languageDetectorPlugin: LanguageDetectorModule = {
//   type: 'languageDetector',
//   init: () => {},
//   detect: () => {
//     return 'en';
//   }
// }
