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
        <div className="skills-showcase">
          {skillGroups.map((group, index) => (
            <article key={group.id} className="skill-panel">
              <header className="skill-panel__top">
                <span className="skill-panel__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="skill-panel__title">
                  <Icon name={group.icon} size={26} />
                  <h3>{t(group.titleKey)}</h3>
                </div>
              </header>
              <div className="skill-panel__body">
                {group.items.map((item) => (
                  <div key={item.id} className="skill-lane">
                    <p className="skill-lane__label">{t(item.titleKey)}</p>
                    <div className="skill-lane__techs">
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
