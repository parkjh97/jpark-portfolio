import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Icon } from "../components/common/Icon";
import { SectionTitle } from "../components/common/SectionTitle";
import { projectEntries } from "../data/content";

import "./ProjectsSection.css";

interface ProjectCopy {
  name: string;
  period: string;
  summary: string;
  details: string[];
}

export function ProjectsSection() {
  const { t } = useTranslation();
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const projects = useMemo(() => {
    const source = showFeaturedOnly
      ? projectEntries.filter((project) => project.isFeatured)
      : projectEntries;
    return source.map((project) => {
      const copy = t(`projects.items.${project.id}`, {
        returnObjects: true,
      }) as ProjectCopy;
      return { ...project, copy };
    });
  }, [showFeaturedOnly, t]);

  return (
    <section id="projects" className="section section--muted">
      <div className="section__container">
        <SectionTitle title={t("projects.title")} />
        <div className="projects-toolbar">
          <button
            type="button"
            className={`projects-toolbar__filter${showFeaturedOnly ? " is-active" : ""}`}
            onClick={() => setShowFeaturedOnly((prev) => !prev)}
          >
            <Icon name="filter" size={18} />
            <span>{t("projects.filterLabel")}</span>
          </button>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <header className="project-card__header">
                <h4>{project.copy.name}</h4>
                <span className="project-card__period">{project.copy.period}</span>
              </header>
              <div className="project-card__summary">
                <h5>{project.copy.summary}</h5>
                <ul>
                  {project.copy.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
              {project.url ? (
                <div className="project-card__link">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.url}
                  </a>
                </div>
              ) : null}
              <div className="project-card__stack">
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-card__actions">
                <button type="button" disabled>
                  {t("projects.ctas.readme")}
                </button>
                <button type="button" disabled>
                  {t("projects.ctas.images")}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
