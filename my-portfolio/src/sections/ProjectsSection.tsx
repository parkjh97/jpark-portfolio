import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Icon } from "../components/common/Icon";
import { Modal } from "../components/common/Modal";
import { SectionTitle } from "../components/common/SectionTitle";
import { projectEntries } from "../data/content";
import type {
  ProjectCopy,
  ProjectImageGallery,
  ProjectReadmeV2,
} from "../types/content";

import "./ProjectsSection.css";
import "./ProjectsPrint.css";

function ProjectTechChip({ name }: { name: string }) {
  return <span className="project-tech-chip">{name}</span>;
}

type ModalType = "readme" | "images";

type ProjectCardData = (typeof projectEntries)[number] & {
  copy: ProjectCopy;
  readme?: ProjectReadmeV2;
  images?: ProjectImageGallery;
};

function getProjectAccentColor(id: string): string {
  const colorMap: Record<string, string> = {
    erp: "indigo",
    viewTLog: "indigo",
    si: "emerald",
    hs: "emerald",
    viewT: "emerald",
    viewTexportX: "cyan",
  };
  return colorMap[id] ?? "indigo";
}


export function ProjectsSection() {
  const { t, i18n } = useTranslation();
  const [printDate, setPrintDate] = useState(() =>
    new Date().toLocaleDateString(i18n.language),
  );

  useEffect(() => {
    const handler = () => {
      setPrintDate(new Date().toLocaleDateString(i18n.language));
    };
    window.addEventListener("beforeprint", handler);
    return () => window.removeEventListener("beforeprint", handler);
  }, [i18n.language]);

  const printLabels = {
    title: t("projects.printTitle", { defaultValue: "Projects Portfolio" }),
    date: t("projects.printDateLabel", { defaultValue: "Date" }),
    toc: t("projects.printTocTitle", { defaultValue: "Contents" }),
  };

  const [modal, setModal] = useState<{
    type: ModalType;
    projectId: string;
  } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [overviewImageIndex, setOverviewImageIndex] = useState(0);

  const handleModalClose = () => {
    setModal(null);
    setCurrentImageIndex(0);
    setOverviewImageIndex(0);
  };

  const openReadmeModal = (projectId: string) => {
    setModal({ type: "readme", projectId });
  };

  const projects = useMemo<ProjectCardData[]>(() => {
    return projectEntries.map((project) => {
      const copy = t(`projects.items.${project.id}`, {
        returnObjects: true,
      }) as ProjectCopy;
      const readme = project.readmeKey
        ? (t(project.readmeKey, { returnObjects: true }) as ProjectReadmeV2)
        : undefined;
      const images = project.imagesKey
        ? (t(project.imagesKey, { returnObjects: true }) as ProjectImageGallery)
        : undefined;
      return { ...project, copy, readme, images };
    });
  }, [t]);

  const activeProject = modal
    ? projects.find((project) => project.id === modal.projectId)
    : null;
  const totalImages =
    modal?.type === "images" && activeProject?.images
      ? activeProject.images.items.length
      : 0;
  const safeImageIndex = totalImages ? Math.min(currentImageIndex, totalImages - 1) : 0;
  const currentImage =
    modal?.type === "images" && totalImages && activeProject?.images
      ? activeProject.images.items[safeImageIndex]
      : null;
  const canNavigateImages = totalImages > 1;

  return (
    <section id="projects" className="section section--projects">
      <div className="section__container">
        <SectionTitle title={t("projects.title")} />

        <div className="projects-showcase">
          {projects.map((project) => {
            const hasReadme = Boolean(project.readme);
            const hasImages = Boolean(project.images);
            const accentColor = getProjectAccentColor(project.id);

            return (
              <article
                key={project.id}
                className={`project-panel project-panel--${accentColor}`}
              >
                {/* Panel Header */}
                <header className="project-panel__header">
                  <h3 className="project-panel__title">{project.copy.name}</h3>
                  <p className="project-panel__summary">{project.readme?.overview.description ?? project.copy.summary}</p>
                </header>

                {/* Panel Body: info (single column) */}
                <div className="project-panel__body">
                  <div className="project-panel__info">
                    <div className="project-panel__period-row">
                      <span className="project-panel__period-label">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        기간
                      </span>
                      <span className="project-panel__period">{project.copy.period}</span>
                    </div>
                    {/* Tech Stack */}
                    <div className="project-panel__section">
                      <h4 className="project-panel__section-title">
                        <Icon name="stack" size={14} />
                        기술 스택
                      </h4>
                      <div className="project-panel__stack">
                        {project.techStack.map((tech) => (
                          <ProjectTechChip key={tech} name={tech} />
                        ))}
                      </div>
                    </div>

                    <div className="project-panel__section">
                      <h4 className="project-panel__section-title">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <polyline points="9 11 12 14 22 4"/>
                          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                        </svg>
                        주요 구현
                      </h4>
                      <ul className="project-panel__features">
                        {(project.readme?.details.map(d => d.title) ?? project.copy.details ?? []).map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <footer className="project-panel__footer">
                  <div className="project-panel__actions">
                    <button
                      type="button"
                      className={`project-panel__btn project-panel__btn--readme${hasReadme ? " is-active" : ""}`}
                      onClick={() =>
                        hasReadme ? openReadmeModal(project.id) : undefined
                      }
                      disabled={!hasReadme}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                      {t("projects.ctas.readme")}
                    </button>
                    <button
                      type="button"
                      className={`project-panel__btn project-panel__btn--images${hasImages ? " is-active" : ""}`}
                      onClick={() => {
                        if (!hasImages) return;
                        setCurrentImageIndex(0);
                        setModal({ type: "images", projectId: project.id });
                      }}
                      disabled={!hasImages}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                      {t("projects.ctas.images")}
                    </button>
                  </div>
                  <div className="project-panel__url-row">
                    <span className="project-panel__url-label">URL</span>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noreferrer" className="project-panel__link">
                        바로가기
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    ) : (
                      <span className="project-panel__url-private">내부 프로젝트로 인한 미공개</span>
                    )}
                  </div>
                </footer>
              </article>
            );
          })}
        </div>

        {/* Print Section */}
        <div className="projects-print">
          <header className="projects-print__header">
            <div>
              <h2 className="projects-print__title">{printLabels.title}</h2>
              <span className="projects-print__date">
                {printLabels.date}: {printDate}
              </span>
            </div>
          </header>
          <section className="projects-print__toc">
            <h3>{printLabels.toc}</h3>
            <ol>
              {projects.map((project, index) => (
                <li key={`toc-${project.id}`} className={`ppc-toc-row ppc-toc-row--${getProjectAccentColor(project.id)}`}>
                  <span className="ppc-toc-num">{String(index + 1).padStart(2, "0")}</span>
                  <span className="ppc-toc-main">
                    <span className="ppc-toc-top">
                      <span className="ppc-toc-name">{project.copy.name}</span>
                      <span className="ppc-toc-period">{project.copy.period}</span>
                    </span>
                    <span className="ppc-toc-stack">{project.techStack.slice(0, 6).join(" · ")}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>
          {projects.map((project, index) => {
            const printImages = project.images?.items ?? [];
            const hasImages = Boolean(printImages.length);
            const readme = project.readme;
            const accentColor = getProjectAccentColor(project.id);
            return (
              <article key={`print-${project.id}`} className={`project-print-card project-print-card--${accentColor}`}>
                <header className="project-print-card__header">
                  <div className="ppc-header-meta">
                    <span className="ppc-header-index">#{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="ppc-header-main">
                    <h3 className="project-print-card__title">{project.copy.name}</h3>
                    <span className="project-print-card__period">{project.copy.period}</span>
                  </div>
                </header>
                <div className="project-print-card__body">
                  {readme ? (
                    <>
                      {/* 개요 */}
                      <section className="ppc-section ppc-section--overview">
                        <h4 className="ppc-section__label">개요</h4>
                        <p className="ppc-overview__desc">{readme.overview.description}</p>
                        <div className="ppc-info-grid">
                          <div className="ppc-info-row">
                            <span className="ppc-info-label">기간</span>
                            <span className="ppc-info-value">{project.copy.period}</span>
                          </div>
                          <div className="ppc-info-row">
                            <span className="ppc-info-label">인원</span>
                            <span className="ppc-info-value">{readme.overview.team}</span>
                          </div>
                          <div className="ppc-info-row">
                            <span className="ppc-info-label">역할</span>
                            <span className="ppc-info-value">{readme.overview.role}</span>
                          </div>
                        </div>
                        <div className="ppc-url-row">
                          <span className="ppc-url-label">URL</span>
                          {project.url ? (
                            <span className="ppc-url-value ppc-url-value--link">{project.url}</span>
                          ) : (
                            <span className="ppc-url-value ppc-url-value--private">내부 프로젝트로 인한 미공개</span>
                          )}
                        </div>
                        <div className="ppc-highlights">
                          <p className="ppc-sub-label">개발 주요사항</p>
                          <ol className="ppc-highlights-list">
                            {readme.details.map((d, i) => (
                              <li key={i} className="ppc-highlight-item">
                                <span className="ppc-highlight-num">{i + 1}</span>
                                <div className="ppc-highlight-content">
                                  <span className="ppc-highlight-text">{d.title}</span>
                                  {d.background && (
                                    <span className="ppc-highlight-background">{d.background}</span>
                                  )}
                                  {d.result && (
                                    <span className="ppc-highlight-result">→ {d.result}</span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </section>

                      {/* 기술 스택 */}
                      <section className="ppc-section ppc-section--stack">
                        <h4 className="ppc-section__label">기술 스택</h4>
                        <div className="ppc-stack-chips">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="ppc-stack-chip">{tech}</span>
                          ))}
                        </div>
                      </section>

                      {/* 느낀점 */}
                      {readme.reflection.length > 0 && (
                        <section className="ppc-section ppc-section--reflection">
                          <h4 className="ppc-section__label">프로젝트를 마치며</h4>
                          <ul className="ppc-reflection-list">
                            {readme.reflection.map((r, i) => (
                              <li key={i} className="ppc-reflection-item">
                                <span className="ppc-reflection-icon" aria-hidden="true" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
                    </>
                  ) : null}

                  {/* 스크린샷 */}
                  {hasImages && (
                    <section className="ppc-section ppc-section--images">
                      <h4 className="ppc-section__label">{project.images?.title ?? "스크린샷"}</h4>
                      <div className="ppc-image-grid">
                        {printImages.map((image) => (
                          <figure key={`${project.id}-${image.src}`} className="ppc-image">
                            <img
                              src={image.src}
                              alt={image.caption ?? project.copy.name}
                              loading="eager"
                              decoding="sync"
                            />
                            {image.caption ? <figcaption>{image.caption}</figcaption> : null}
                          </figure>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* README Modal v2 — 단일 스크롤 */}
      {modal?.type === "readme" && activeProject?.readme ? (() => {
        const readme = activeProject.readme;
        const accentColor = getProjectAccentColor(activeProject.id);

        return (
          <Modal title={activeProject.copy.name} onClose={handleModalClose} width="wide">
            <div className={`rmv2 rmv2--${accentColor}`}>
              <div className="rmv2__body">

                {/* 개요 */}
                <div className="rmv2__page rmv2__page--overview">
                  <div className="rmv2__overview-badge">프로젝트 개요</div>
                  <p className="rmv2__overview-desc">{readme.overview.description}</p>

                  <div className="rmv2__info-grid">
                    <div className="rmv2__info-row">
                      <span className="rmv2__info-label">기간</span>
                      <span className="rmv2__info-value">{activeProject.copy.period}</span>
                    </div>
                    <div className="rmv2__info-row">
                      <span className="rmv2__info-label">인원</span>
                      <span className="rmv2__info-value">{readme.overview.team}</span>
                    </div>
                    <div className="rmv2__info-row">
                      <span className="rmv2__info-label">역할</span>
                      <span className="rmv2__info-value">{readme.overview.role}</span>
                    </div>
                  </div>

                  <div className="rmv2__highlights">
                    <h4 className="rmv2__sub-title">개발 주요사항</h4>
                    <ol className="rmv2__highlights-list">
                      {readme.details.map((d, i) => (
                        <li key={i} className="rmv2__highlight-item">
                          <span className="rmv2__highlight-num">{i + 1}</span>
                          <div className="rmv2__highlight-content">
                            <span className="rmv2__highlight-text">{d.title}</span>
                            {d.background && (
                              <span className="rmv2__highlight-background">{d.background}</span>
                            )}
                            {d.result && (
                              <span className="rmv2__highlight-result">{d.result}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="rmv2__tech">
                    <h4 className="rmv2__sub-title">사용 기술</h4>
                    <div className="rmv2__tech-chips">
                      {activeProject.techStack.map((tech) => (
                        <ProjectTechChip key={tech} name={tech} />
                      ))}
                    </div>
                  </div>

                  {activeProject.images && activeProject.images.items.length > 0 && (() => {
                    const imgs = activeProject.images.items;
                    const total = imgs.length;
                    const safeIdx = Math.min(overviewImageIndex, total - 1);
                    const img = imgs[safeIdx];
                    return (
                      <div className="rmv2__images">
                        <h4 className="rmv2__sub-title">{activeProject.images.title ?? "스크린샷"}</h4>
                        <div className="rmv2__img-slider">
                          <button
                            type="button"
                            className="rmv2__img-nav rmv2__img-nav--prev"
                            onClick={() => setOverviewImageIndex((p) => p === 0 ? total - 1 : p - 1)}
                            disabled={total <= 1}
                            aria-label="이전 이미지"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
                          </button>
                          <figure className="rmv2__img-figure">
                            <img src={img.src} alt={img.caption ?? activeProject.copy.name} className="rmv2__img-thumb" />
                            {img.caption && <figcaption className="rmv2__img-caption">{img.caption}</figcaption>}
                          </figure>
                          <button
                            type="button"
                            className="rmv2__img-nav rmv2__img-nav--next"
                            onClick={() => setOverviewImageIndex((p) => p === total - 1 ? 0 : p + 1)}
                            disabled={total <= 1}
                            aria-label="다음 이미지"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
                          </button>
                        </div>
                        {total > 1 && (
                          <div className="rmv2__img-counter">{safeIdx + 1} / {total}</div>
                        )}
                      </div>
                    );
                  })()}
                </div>

                {/* 느낀점 */}
                <div className="rmv2__page rmv2__page--reflection">
                  <div className="rmv2__overview-badge">프로젝트를 마치며</div>
                  <ul className="rmv2__reflection-list">
                    {readme.reflection.map((item, i) => (
                      <li key={i} className="rmv2__reflection-item">
                        <span className="rmv2__reflection-icon" aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </Modal>
        );
      })() : null}

      {/* Images Modal */}
      {modal?.type === "images" && activeProject?.images && currentImage ? (
        <Modal title={activeProject.images.title} onClose={handleModalClose} width="wide">
          <div className="project-images">
            <div className="project-images__slider">
              <button
                type="button"
                className="project-images__nav project-images__nav--prev"
                onClick={() =>
                  setCurrentImageIndex((prev) => {
                    if (!canNavigateImages) return prev;
                    return prev === 0 ? totalImages - 1 : prev - 1;
                  })
                }
                disabled={!canNavigateImages}
                aria-label={t("projects.imageControls.prev", { defaultValue: "이전 이미지" })}
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <figure className="project-images__item">
                <img src={currentImage.src} alt={currentImage.caption ?? activeProject.copy.name} />
                {currentImage.caption ? (
                  <figcaption className="project-images__caption">{currentImage.caption}</figcaption>
                ) : null}
              </figure>
              <button
                type="button"
                className="project-images__nav project-images__nav--next"
                onClick={() =>
                  setCurrentImageIndex((prev) => {
                    if (!canNavigateImages) return prev;
                    return prev === totalImages - 1 ? 0 : prev + 1;
                  })
                }
                disabled={!canNavigateImages}
                aria-label={t("projects.imageControls.next", { defaultValue: "다음 이미지" })}
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </button>
            </div>
            <div className="project-images__controls">
              <span className="project-images__counter">
                {safeImageIndex + 1} / {totalImages}
              </span>
            </div>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}
