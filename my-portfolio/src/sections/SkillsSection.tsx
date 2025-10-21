import { useTranslation } from "react-i18next";

import { SectionTitle } from "../components/common/SectionTitle";
import { Icon } from "../components/common/Icon";
import { skillGroups } from "../data/content";

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section section--accent">
      <div className="section__container">
        <SectionTitle title={t("skills.title")} textColor="#ffffff" accentColor="#ffffff" />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.id} className="skill-card">
              <header className="skill-card__header">
                <Icon name={group.icon} size={28} />
                <h4>{t(group.titleKey)}</h4>
              </header>
              <ul className="skill-card__chips">
                {group.chips.map((chip) => (
                  <li
                    key={chip.id}
                    style={{ backgroundColor: chip.background, color: chip.color }}
                  >
                    {chip.label}
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
