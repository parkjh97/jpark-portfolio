import { useTranslation } from "react-i18next";

import { Icon } from "../components/common/Icon";
import { SectionTitle } from "../components/common/SectionTitle";
import { skillGroups } from "../data/content";

import "./SkillsSection.css";

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section section--accent">
      <div className="section__container">
        <SectionTitle
          title={t("skills.title")}
          textColor="#ffffff"
          accentColor="#ffffff"
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.id} className="skill-card">
              <header className="skill-card__header">
                <Icon name={group.icon} size={28} />
                <h3>{t(group.titleKey)}</h3>
              </header>
              <ul className="skill-card__list">
                {group.items.map((item) => (
                  <li key={item.id} className="skill-card__item">
                    <span className="skill-card__bullet" aria-hidden="true" />
                    <div className="skill-card__content">
                      <p className="skill-card__item-title">
                        {t(item.titleKey)}
                      </p>
                      <p className="skill-card__item-description">
                        {t(item.descriptionKey)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
