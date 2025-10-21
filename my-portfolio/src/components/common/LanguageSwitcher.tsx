import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import type { SupportedLocale } from "../../i18n/resources";

import "./LanguageSwitcher.css";

interface LanguageOption {
  value: SupportedLocale;
  label: string;
}

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const options = useMemo<LanguageOption[]>(
    () => [
      { value: "ko", label: t("language.options.ko") },
      { value: "en", label: t("language.options.en") },
    ],
    [t],
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void i18n.changeLanguage(event.target.value);
  };

  const supportedValues = options.map((option) => option.value);
  const resolved = (i18n.resolvedLanguage || i18n.language || "ko").split("-")[0];
  const currentLanguage = supportedValues.includes(resolved as SupportedLocale)
    ? (resolved as SupportedLocale)
    : "ko";

  return (
    <label className="language-switcher">
      <span className="sr-only">{t("language.switchLabel")}</span>
      <select
        value={currentLanguage}
        onChange={handleChange}
        aria-label={t("language.switchLabel")}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
