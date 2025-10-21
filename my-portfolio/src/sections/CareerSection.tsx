import { useTranslation } from "react-i18next";

import { Icon } from "../components/common/Icon";
import { SectionTitle } from "../components/common/SectionTitle";
import { careerCompanies } from "../data/content";

import "./CareerSection.css";

export function CareerSection() {
  const { t } = useTranslation();

  return (
    <section id="career" className="section section--muted">
      <div className="section__container">
        <SectionTitle title={t("career.title")} />
        <div className="career-grid">
          {careerCompanies.map((company) => (
            <article key={company.id} className="career-card">
              <div className="career-card__logo">
                <span>{t(`career.companies.${company.id}.logoText`)}</span>
              </div>
              <div className="career-card__details">
                <header>
                  <h4>{t(`career.companies.${company.id}.logoText`)}</h4>
                  <span className="career-card__period">{t(company.periodKey)}</span>
                </header>
                <p className="career-card__description">{t(company.descriptionKey)}</p>
                <div className="career-card__roles">
                  {company.rolesKeys.map((roleKey) => (
                    <span key={roleKey}>{t(roleKey)}</span>
                  ))}
                </div>
                <div className="career-card__highlights">
                  {company.highlights.map((highlight) => (
                    <div key={highlight.id} className="career-card__highlight">
                      <div className="career-card__highlight-heading">
                        <Icon name="stack" size={16} />
                        <h5>{t(highlight.titleKey)}</h5>
                      </div>
                      <span className="career-card__highlight-period">
                        {t(highlight.periodKey)}
                      </span>
                      <p>{t(highlight.descriptionKey)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
