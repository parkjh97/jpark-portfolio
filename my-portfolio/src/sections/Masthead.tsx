import { useTranslation } from "react-i18next";

import { useScrollToSection } from "../hooks/useScrollToSection";

export function Masthead() {
  const { t } = useTranslation();
  const introLines = t("masthead.intro", { returnObjects: true }) as string[];
  const scrollToAbout = useScrollToSection(80);

  return (
    <section id="masthead" className="masthead">
      <div className="masthead__content">
        <h1 className="masthead__title">
          <span>{t("masthead.title")}</span>
          <span>{t("masthead.subtitle")}</span>
        </h1>
        <hr className="masthead__divider" />
        <h2 className="masthead__subtitle">
          {introLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <button
          type="button"
          className="masthead__cta"
          onClick={() => scrollToAbout("about-me")}
        >
          {t("masthead.cta")}
        </button>
      </div>
    </section>
  );
}
