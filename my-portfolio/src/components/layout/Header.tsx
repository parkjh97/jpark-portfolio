import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { navigationLinks } from "../../data/content";
import { useScrollToSection } from "../../hooks/useScrollToSection";
import { Icon } from "../common/Icon";
import { LanguageSwitcher } from "../common/LanguageSwitcher";

import "./Header.css";

export function Header() {
  const { t } = useTranslation();
  const scrollToSection = useScrollToSection(80);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = useCallback(
    (targetId: string) => {
      setIsMenuOpen(false);
      scrollToSection(targetId);
    },
    [scrollToSection],
  );

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
          <LanguageSwitcher />
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
