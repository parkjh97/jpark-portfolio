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
        <div className="career-list">
          {careerCompanies.map((company) => (
            <div key={company.id} className="career-company">

              {/* ── 회사 헤더 ── */}
              <div className="career-company__header">
                <div className="career-company__logo">
                  {company.logoSrc ? (
                    <img
                      src={company.logoSrc}
                      alt={company.logoAltKey ? t(company.logoAltKey) : t(company.logoTextKey ?? company.descriptionKey)}
                      loading="lazy"
                    />
                  ) : (
                    <span>{t(company.logoTextKey ?? company.descriptionKey)}</span>
                  )}
                </div>

                <div className="career-company__info">
                  <div className="career-company__name-row">
                    <h4 className="career-company__name">
                      {t(company.logoTextKey ?? company.descriptionKey)}
                    </h4>
                    <span className="career-company__period">{t(company.periodKey)}</span>
                  </div>

                  <div className="career-company__meta">
                    <span>{t(company.employmentTypeKey)}</span>
                    <span>{t(company.teamKey)}</span>
                    <span>{t(company.positionKey)}</span>
                  </div>

                  <p className="career-company__desc">{t(company.descriptionKey)}</p>
                </div>
              </div>

              {/* ── 프로젝트 목록 ── */}
              <div className="career-projects">
                <div className="career-projects__grid">
                  {company.highlights.map((highlight) => (
                    <div key={highlight.id} className="career-project">
                      <div className="career-project__header">
                        <h5 className="career-project__title">{t(`projects.items.${highlight.projectId}.name`)}</h5>
                        <span className="career-project__period">{t(`projects.items.${highlight.projectId}.period`)}</span>
                      </div>

                      <div className="career-project__body">
                        <div className="career-project__tech">
                          {highlight.techStack.map((tech) => (
                            <span key={tech} className="career-project__tech-tag">{tech}</span>
                          ))}
                        </div>

                        <ul className="career-project__bullets">
                          {(
                            t(`projects.readmes.${highlight.projectId}.details`, { returnObjects: true }) as Array<{ title: string }>
                          ).map((detail, i) => (
                            <li key={i}>{detail.title}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
