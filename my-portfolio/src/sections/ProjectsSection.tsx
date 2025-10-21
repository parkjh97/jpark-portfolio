import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Icon } from "../components/common/Icon";
import { Modal } from "../components/common/Modal";
import { SectionTitle } from "../components/common/SectionTitle";
import { projectEntries } from "../data/content";
import type {
  ProjectCopy,
  ProjectImageGallery,
  ProjectReadmeContent,
} from "../types/content";

import "./ProjectsSection.css";

type ModalType = "readme" | "images";

type ProjectCardData = (typeof projectEntries)[number] & {
  copy: ProjectCopy;
  readme?: ProjectReadmeContent;
  images?: ProjectImageGallery;
};

export function ProjectsSection() {
  const { t } = useTranslation();
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [modal, setModal] = useState<{ type: ModalType; projectId: string } | null>(null);

  const projects = useMemo<ProjectCardData[]>(() => {
    const source = showFeaturedOnly
      ? projectEntries.filter((project) => project.isFeatured)
      : projectEntries;
    return source.map((project) => {
      const copy = t(`projects.items.${project.id}`, {
        returnObjects: true,
      }) as ProjectCopy;

      const readme = project.readmeKey
        ? (t(project.readmeKey, { returnObjects: true }) as ProjectReadmeContent)
        : undefined;
      const images = project.imagesKey
        ? (t(project.imagesKey, { returnObjects: true }) as ProjectImageGallery)
        : undefined;

      return { ...project, copy, readme, images };
    });
  }, [showFeaturedOnly, t]);

  const activeProject = modal ? projects.find((project) => project.id === modal.projectId) : null;

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
          {projects.map((project) => {
            const hasReadme = Boolean(project.readme);
            const hasImages = Boolean(project.images);
            return (
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
                  <button
                    type="button"
                    className={hasReadme ? "is-active" : undefined}
                    onClick={() =>
                      hasReadme ? setModal({ type: "readme", projectId: project.id }) : undefined
                    }
                    disabled={!hasReadme}
                  >
                    {t("projects.ctas.readme")}
                  </button>
                  <button
                    type="button"
                    className={hasImages ? "is-active" : undefined}
                    onClick={() =>
                      hasImages ? setModal({ type: "images", projectId: project.id }) : undefined
                    }
                    disabled={!hasImages}
                  >
                    {t("projects.ctas.images")}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {modal?.type === "readme" && activeProject?.readme ? (
        <Modal
          title={`${activeProject.copy.name} README`}
          onClose={() => setModal(null)}
          width="wide"
        >
          <div className="project-readme">
            <div className="project-readme__intro">
              {activeProject.readme.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {activeProject.readme.sections.map((section) => (
              <div key={section.heading} className="project-readme__section">
                <h4>{section.heading}</h4>
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
            {activeProject.readme.links?.length ? (
              <div className="project-readme__links">
                {activeProject.readme.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </Modal>
      ) : null}
      {modal?.type === "images" && activeProject?.images ? (
        <Modal title={activeProject.images.title} onClose={() => setModal(null)} width="wide">
          <div className="project-images">
            <div className="project-images__grid">
              {activeProject.images.items.map((item) => (
                <figure className="project-images__item" key={item.src}>
                  <img src={item.src} alt={item.caption ?? activeProject.copy.name} />
                  {item.caption ? (
                    <figcaption className="project-images__caption">{item.caption}</figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}
