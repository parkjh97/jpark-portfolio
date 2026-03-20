import { useTranslation } from "react-i18next";

import { SectionTitle } from "../components/common/SectionTitle";
import { skillGroups } from "../data/content";

import "./SkillsSection.css";

function getGroupColor(id: string): string {
  const colorMap: Record<string, string> = {
    languages: "indigo",
    frontend: "emerald",
    backendOps: "cyan",
  };
  return colorMap[id] ?? "indigo";
}

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section">
      <div className="section__container">
        <SectionTitle title={t("skills.title")} />
        <div className="skills-bands">
          {skillGroups.map((group) => {
            const color = getGroupColor(group.id);
            return (
              <div key={group.id} className={`skill-band skill-band--${color}`}>
                {/* 좌측: 카테고리 타이틀 */}
                <div className="skill-band__category">
                  <h3 className="skill-band__title">{t(group.titleKey)}</h3>
                </div>
                {/* 우측: 서브카테고리 행들 */}
                <div className="skill-band__content">
                  {group.items.map((item) => (
                    <div key={item.id} className="skill-band__row">
                      <span className="skill-band__label">{t(item.titleKey)}</span>
                      <div className="skill-band__tags">
                        {item.techs.map((tech) => (
                          <span key={tech.name} className="skill-tag">
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
