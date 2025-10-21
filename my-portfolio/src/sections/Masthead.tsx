import { useTranslation } from "react-i18next";

import { useScrollToSection } from "../hooks/useScrollToSection";

import "./Masthead.css";

export function Masthead() {
  const { t } = useTranslation();
  const introLines = t("masthead.intro", { returnObjects: true }) as string[];
  const highlights = t("masthead.highlights", {
    returnObjects: true,
  }) as Array<{ label: string; value: string }>;
  const scrollToAbout = useScrollToSection(80);

  return (
    <section id="masthead" className="masthead">
      <div className="section__container masthead__container">
        <div className="masthead__panel">
          <div className="masthead__job-badges">
            <span className="masthead__badge">{t("masthead.badge1")}</span>
            <span className="masthead__badge">{t("masthead.badge2")}</span>
            <span className="masthead__badge">{t("masthead.badge3")}</span>
          </div>

          <h1 className="masthead__title">
            <span>{t("masthead.title")}</span>
            <span>{t("masthead.subtitle")}</span>
          </h1>
          <p className="masthead__description">{t("masthead.description")}</p>
          <div className="masthead__intro">
            {introLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div className="masthead__actions">
            <button
              type="button"
              className="masthead__cta"
              onClick={() => scrollToAbout("about-me")}
            >
              {t("masthead.cta")}
            </button>
          </div>
        </div>
        <div className="masthead__highlights">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="masthead__highlight">
              <span className="masthead__highlight-label">
                {highlight.label}
              </span>
              <strong className="masthead__highlight-value">
                {highlight.value}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
