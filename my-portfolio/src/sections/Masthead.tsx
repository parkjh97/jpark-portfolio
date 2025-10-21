import { useTranslation } from "react-i18next";

import { useScrollToSection } from "../hooks/useScrollToSection";

import "./Masthead.css";

export function Masthead() {
  const { t } = useTranslation();
  const badges = t("masthead.badges", { returnObjects: true }) as string[];
  const summaryLines = t("masthead.summary", { returnObjects: true }) as string[];
  const narrative = t("masthead.narrative", { returnObjects: true }) as string[];
  const scrollToAbout = useScrollToSection(80);

  return (
    <section id="masthead" className="masthead">
      <div className="section__container masthead__container">
        <div className="masthead__panel">
          <div className="masthead__badges">
            {badges.map((badge) => (
              <span key={badge} className="masthead__badge">
                {badge}
              </span>
            ))}
          </div>
          <h1 className="masthead__title">
            <span>{t("masthead.title")}</span>
            <span>{t("masthead.subtitle")}</span>
          </h1>
          <div className="masthead__summary">
            {summaryLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <div className="masthead__text-block">
            <h3>{t("masthead.overviewTitle")}</h3>
            <p>{t("masthead.overviewBody")}</p>
          </div>
          <div className="masthead__text-block">
            <h3>{t("masthead.narrativeTitle")}</h3>
            {narrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
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
      </div>
    </section>
  );
}
