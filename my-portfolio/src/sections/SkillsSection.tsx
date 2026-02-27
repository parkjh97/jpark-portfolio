import { useTranslation } from "react-i18next";

import { Icon } from "../components/common/Icon";
import { SectionTitle } from "../components/common/SectionTitle";
import { skillGroups } from "../data/content";
import type { SkillTech } from "../types/content";

import "./SkillsSection.css";

function TechChip({ tech }: { tech: SkillTech }) {
  const iconUrl = tech.iconSlug
    ? `https://cdn.simpleicons.org/${tech.iconSlug}/${tech.iconColor ?? "ffffff"}`
    : null;

  return (
    <span className="skill-tech-chip">
      {iconUrl ? (
        <img
          src={iconUrl}
          alt=""
          aria-hidden="true"
          className="skill-tech-chip__icon"
          width={18}
          height={18}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      ) : (
        <span className="skill-tech-chip__icon-placeholder" aria-hidden="true" />
      )}
      <span className="skill-tech-chip__name">{tech.name}</span>
    </span>
  );
}

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
                <Icon name={group.icon} size={24} />
                <h3>{t(group.titleKey)}</h3>
              </header>
              <div className="skill-card__body">
                {group.items.map((item) => (
                  <div key={item.id} className="skill-item">
                    <p className="skill-item__label">{t(item.titleKey)}</p>
                    <div className="skill-item__techs">
                      {item.techs.map((tech) => (
                        <TechChip key={tech.name} tech={tech} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
