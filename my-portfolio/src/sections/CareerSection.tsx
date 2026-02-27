import { useTranslation } from "react-i18next";

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
                {company.logoSrc ? (
                  <img
                    src={company.logoSrc}
                    alt={
                      company.logoAltKey
                        ? t(company.logoAltKey)
                        : t(company.logoTextKey ?? company.descriptionKey)
                    }
                    loading="lazy"
                  />
                ) : (
                  <span>{t(company.logoTextKey ?? company.descriptionKey)}</span>
                )}
              </div>
              <div className="career-card__details">
                <header className="career-card__header">
                  <h4>{t(company.logoTextKey ?? company.descriptionKey)}</h4>
                  <span className="career-card__period">
                    {t(company.periodKey)}
                  </span>
                </header>
                <p className="career-card__description">
                  {t(company.descriptionKey)}
                </p>
                <div className="career-card__roles">
                  {company.rolesKeys.map((roleKey) => (
                    <span key={roleKey}>{t(roleKey)}</span>
                  ))}
                </div>

                <div className="career-timeline">
                  {company.highlights.map((highlight, index) => (
                    <div key={highlight.id} className="career-timeline__item">
                      <div className="career-timeline__marker">
                        <span className="career-timeline__dot" />
                        {index < company.highlights.length - 1 && (
                          <span className="career-timeline__line" />
                        )}
                      </div>
                      <div className="career-timeline__content">
                        <div className="career-timeline__header">
                          <h5 className="career-timeline__title">
                            {t(highlight.titleKey)}
                          </h5>
                          <span className="career-timeline__period">
                            {t(highlight.periodKey)}
                          </span>
                        </div>
                        <p className="career-timeline__description">
                          {t(highlight.descriptionKey)}
                        </p>
                      </div>
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
