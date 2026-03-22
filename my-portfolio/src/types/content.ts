export type TranslationKey = string;

export type IconName =
  | "user"
  | "calendar"
  | "location"
  | "phone"
  | "email"
  | "education"
  | "devops"
  | "external"
  | "github"
  | "blog"
  | "chevron-down"
  | "stack";

export interface NavigationLink {
  id: string;
  labelKey: TranslationKey;
  targetId: string;
}

export interface AboutField {
  id: string;
  icon: IconName;
  labelKey: TranslationKey;
  valueKey: TranslationKey;
}

export interface SkillTech {
  name: string;
}

export interface SkillListItem {
  id: string;
  titleKey: TranslationKey;
  techs: SkillTech[];
}

export interface SkillGroup {
  id: string;
  titleKey: TranslationKey;
  items: SkillListItem[];
}

export interface ArchiveLink {
  id: string;
  url: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}

export interface ProjectEntry {
  id: string;
  url?: string;
  repoUrl?: string;
  imageGalleryUrl?: string;
  readmeKey?: TranslationKey;
  imagesKey?: TranslationKey;
  techStack: string[];
  scaleStats?: string[];
  archSrc?: string;
}

export interface ProjectCopy {
  name: string;
  period: string;
  summary?: string;
  details?: string[];
}

export interface ProjectReadmeSection {
  heading: string;
  bullets: string[];
}

export interface ProjectReadmeContent {
  title: string;
  intro: string[];
  sections: ProjectReadmeSection[];
  links?: Array<{ label: string; href: string }>;
}

export interface ProjectReadmeDetailItem {
  title: string;
  background: string;
  points?: string[];
  result?: string;
}

export interface ProjectReadmeV2 {
  overview: {
    description: string;
    team: string;
    role: string;
  };
  details: ProjectReadmeDetailItem[];
  reflection: string[];
}

export interface ProjectImageItem {
  src: string;
  caption?: string;
}

export interface ProjectImageGallery {
  title: string;
  items: ProjectImageItem[];
}

export interface CareerHighlight {
  id: string;
  /** projects.names/readmes.{projectId} 에서 title·period·description·details 를 자동 참조 */
  projectId: string;
  techStack: string[];
}

export interface CareerCompany {
  id: string;
  logoAltKey?: TranslationKey;
  logoTextKey?: TranslationKey;
  logoSrc?: string;
  periodKey: TranslationKey;
  descriptionKey: TranslationKey;
  employmentTypeKey: TranslationKey;
  teamKey: TranslationKey;
  positionKey: TranslationKey;
  rolesKeys: TranslationKey[];
  highlights: CareerHighlight[];
}
