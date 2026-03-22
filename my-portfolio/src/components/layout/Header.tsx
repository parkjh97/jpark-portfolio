import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { navigationLinks } from "../../data/content";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { Icon } from "../common/Icon";
//import { LanguageSwitcher } from "../common/LanguageSwitcher";

import "./Header.css";

type SectionKey = "about" | "career" | "projects";

const PRINT_SECTIONS: { key: SectionKey; label: string; bodyClass: string }[] = [
  { key: "about",    label: "About Me",  bodyClass: "print-about"    },
  { key: "career",   label: "Career",    bodyClass: "print-career"   },
  { key: "projects", label: "Projects",  bodyClass: "print-projects" },
];

export function Header() {
  const { t } = useTranslation();
  const scrollToSection = useScrollToSection(80);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPdfMenuOpen, setIsPdfMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Set<SectionKey>>(
    new Set(PRINT_SECTIONS.map((s) => s.key)),
  );
  const pdfMenuRef = useRef<HTMLDivElement>(null);

  const isAllSelected = selected.size === PRINT_SECTIONS.length;
  const isPartial = selected.size > 0 && selected.size < PRINT_SECTIONS.length;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* 패널 외부 클릭 시 닫기 */
  useEffect(() => {
    if (!isPdfMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (pdfMenuRef.current && !pdfMenuRef.current.contains(e.target as Node)) {
        setIsPdfMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPdfMenuOpen]);

  const handleNavigate = useCallback(
    (targetId: string) => {
      setIsMenuOpen(false);
      scrollToSection(targetId);
    },
    [scrollToSection],
  );

  const toggleAll = () => {
    if (isAllSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(PRINT_SECTIONS.map((s) => s.key)));
    }
  };

  const toggleSection = (key: SectionKey) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleExport = useCallback(async () => {
    if (selected.size === 0) return;

    const waitForImages = () => {
      const images = Array.from(document.querySelectorAll("img"));
      const pending = images.map((img) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();
        return new Promise<void>((resolve) => {
          img.addEventListener("load", () => resolve(), { once: true });
          img.addEventListener("error", () => resolve(), { once: true });
        });
      });
      return Promise.race([
        Promise.all(pending),
        new Promise<void>((resolve) => setTimeout(resolve, 3000)),
      ]);
    };

    const classes = PRINT_SECTIONS.filter((s) => selected.has(s.key)).map(
      (s) => s.bodyClass,
    );
    document.body.classList.add("print-full", ...classes);
    setIsPdfMenuOpen(false);
    try {
      await waitForImages();
      window.print();
    } finally {
      document.body.classList.remove("print-full", ...classes);
    }
  }, [selected]);

  return (
    <header className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <button
          type="button"
          className="site-header__brand"
          onClick={() => handleNavigate("masthead")}
        >
          {t("brand")}
        </button>
        <nav className={`site-header__nav${isMenuOpen ? " is-open" : ""}`}>
          {navigationLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className="site-header__nav-item"
              onClick={() => handleNavigate(link.targetId)}
            >
              {t(link.labelKey)}
            </button>
          ))}
        </nav>
        <div className="site-header__actions">
          {/* PDF 추출 버튼 + 드롭다운 */}
          <div className="pdf-menu-wrap" ref={pdfMenuRef}>
            <button
              type="button"
              className={`site-header__pdf-btn${isPdfMenuOpen ? " is-active" : ""}`}
              onClick={() => setIsPdfMenuOpen((prev) => !prev)}
            >
              {t("nav.exportPdf")}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{
                  marginLeft: 6,
                  transition: "transform 0.2s",
                  transform: isPdfMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isPdfMenuOpen && (
              <div className="pdf-menu">
                <p className="pdf-menu__label">추출 영역 선택</p>

                {/* 전체 */}
                <label className="pdf-menu__item pdf-menu__item--all">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={(el) => { if (el) el.indeterminate = isPartial; }}
                    onChange={toggleAll}
                  />
                  <span>전체</span>
                </label>

                <div className="pdf-menu__divider" />

                {/* 개별 섹션 */}
                {PRINT_SECTIONS.map((s) => (
                  <label key={s.key} className="pdf-menu__item">
                    <input
                      type="checkbox"
                      checked={selected.has(s.key)}
                      onChange={() => toggleSection(s.key)}
                    />
                    <span>{s.label}</span>
                  </label>
                ))}

                <button
                  type="button"
                  className="pdf-menu__export-btn"
                  disabled={selected.size === 0}
                  onClick={handleExport}
                >
                  PDF 추출
                </button>
              </div>
            )}
          </div>

          {/* <LanguageSwitcher /> */}
          <button
            type="button"
            className="site-header__menu-toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={t("navToggle")}
            aria-expanded={isMenuOpen}
          >
            <Icon
              name="chevron-down"
              size={20}
              className={isMenuOpen ? "rotate-180" : undefined}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
