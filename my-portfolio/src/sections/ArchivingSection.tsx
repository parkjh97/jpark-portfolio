import { useTranslation } from "react-i18next";

import { SectionTitle } from "../components/common/SectionTitle";
import { Icon } from "../components/common/Icon";
import { archiveLinks } from "../data/content";

export function ArchivingSection() {
  const { t } = useTranslation();

  return (
    <section id="archiving" className="section section--dark">
      <div className="section__container">
        <SectionTitle title={t("archiving.title")} textColor="#ffffff" accentColor="#94a3b8" />
        <div className="archiving-grid">
          {archiveLinks.map((archive) => (
            <a
              key={archive.id}
              className="archiving-card"
              href={archive.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="archiving-card__icon">
                <Icon name={archive.id === "github" ? "github" : "blog"} size={36} />
              </div>
              <div className="archiving-card__body">
                <span className="archiving-card__title">{t(archive.titleKey)}</span>
                <span className="archiving-card__description">
                  {t(archive.descriptionKey)}
                </span>
              </div>
              <Icon name="external" size={20} className="archiving-card__arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
