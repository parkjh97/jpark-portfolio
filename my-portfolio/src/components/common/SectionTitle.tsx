import type { ReactNode } from "react";

import { Icon } from "./Icon";
import type { IconName } from "../../types/content";

import "./SectionTitle.css";

interface SectionTitleProps {
  title: string;
  accentColor?: string;
  textColor?: string;
  subtitle?: ReactNode;
  actionIcon?: IconName;
  actionLabel?: string;
  onActionClick?: () => void;
}

export function SectionTitle({
  title,
  subtitle,
  accentColor = "var(--text-strong)",
  textColor = "var(--text-strong)",
  actionIcon = "external",
  actionLabel,
  onActionClick,
}: SectionTitleProps) {
  return (
    <div className="section-title">
      <div className="section-title__text" style={{ color: textColor }}>
        <h3 style={{ borderBottomColor: accentColor }}>{title}</h3>
        {subtitle ? <div className="section-title__subtitle">{subtitle}</div> : null}
      </div>
      {actionLabel ? (
        <button
          type="button"
          className="section-title__action"
          onClick={onActionClick}
          aria-label={actionLabel}
        >
          <Icon name={actionIcon} size={20} />
        </button>
      ) : null}
    </div>
  );
}
