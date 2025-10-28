import { useTranslation } from "react-i18next";

import { useScrollToSection } from "../hooks/useScrollToSection";

import "./Masthead.css";
//import { SectionTitle } from "../components/common/SectionTitle";

type MastheadProfileField = {
  label: string;
  value: string;
};

type MastheadProfile = {
  photo: {
    alt: string;
    initials?: string;
    src?: string;
  };
  fields: MastheadProfileField[];
};

export function Masthead() {
  const { t } = useTranslation();
  const scrollToAbout = useScrollToSection(80);
  const keyLine = t("masthead.keyLine");
  const profileRaw = t("masthead.profile", {
    returnObjects: true,
  }) as Partial<MastheadProfile>;
  const profile = {
    photo: {
      alt: profileRaw.photo?.alt ?? "",
      initials: profileRaw.photo?.initials ?? "",
      src: profileRaw.photo?.src,
    },
    fields: Array.isArray(profileRaw.fields) ? profileRaw.fields : [],
  } satisfies MastheadProfile;
  const hasPhotoSrc = Boolean(profile.photo.src);
  const detailHeading = t("masthead.detailHeading");
  const hasDetailHeading = detailHeading.trim().length > 0;
  const detailParagraphs = (
    t("masthead.detail", { returnObjects: true }) as string[]
  ).filter(
    (paragraph) => typeof paragraph === "string" && paragraph.trim().length > 0
  );
  const ctaLabel = t("masthead.cta");

  return (
    <section id="masthead" className="masthead">
      <div className="section__container masthead__container">
        <div className="masthead__panel">
          <div className="masthead__keyline">
            <p>{keyLine}</p>
          </div>

          <div className="masthead__profile">
            <div
              className="masthead__photo"
              role={hasPhotoSrc ? undefined : "img"}
              aria-label={hasPhotoSrc ? undefined : profile.photo.alt}
            >
              {hasPhotoSrc ? (
                <img src={profile.photo.src} alt={profile.photo.alt} />
              ) : (
                <span aria-hidden>{profile.photo.initials}</span>
              )}
            </div>
            <dl className="masthead__fields">
              {profile.fields.map((field) => (
                <div
                  key={`${field.label}-${field.value}`}
                  className="masthead__field"
                >
                  <dt>{field.label}</dt>
                  <dd>{field.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="masthead__detail">
            {hasDetailHeading && <h2>{detailHeading}</h2>}
            {detailParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="masthead__actions">
          <button
            type="button"
            className="masthead__cta"
            onClick={() => scrollToAbout("about-me")}
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
