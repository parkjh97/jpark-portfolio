import { useTranslation } from "react-i18next";

import { Icon } from "../components/common/Icon";
import { SectionTitle } from "../components/common/SectionTitle";
import { aboutFields } from "../data/content";

import "./AboutSection.css";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about-me" className="section section--light">
      <div className="section__container">
        <SectionTitle title={t("about.title")} textColor="#0f172a" />
        <div className="about-grid">
          {aboutFields.map((field) => (
            <div key={field.id} className="about-card">
              <div className="about-card__icon">
                <Icon name={field.icon} size={28} />
              </div>
              <div className="about-card__body">
                <span className="about-card__label">{t(field.labelKey)}</span>
                <span className="about-card__value">{t(field.valueKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
