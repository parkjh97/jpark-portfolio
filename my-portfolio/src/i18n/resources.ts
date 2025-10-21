import en from "./locales/en";
import ko from "./locales/ko";

export const resources = {
  ko: { translation: ko },
  en: { translation: en },
} as const;

export type SupportedLocale = keyof typeof resources;
