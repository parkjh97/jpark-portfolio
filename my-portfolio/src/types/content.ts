export type TranslationKey = string;

export type IconName =
  | "user"
  | "calendar"
  | "location"
  | "phone"
  | "email"
  | "education"
  | "language"
  | "frontend"
  | "backend"
  | "devops"
  | "external"
  | "github"
  | "blog"
  | "chevron-down"
  | "filter"
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

export interface SkillChip {
  id: string;
  label: string;
  background: string;
  color: string;
}

export interface SkillGroup {
  id: string;
  icon: IconName;
  titleKey: TranslationKey;
  chips: SkillChip[];
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
  isFeatured?: boolean;
}

export interface ProjectCopy {
  name: string;
  period: string;
  summary: string;
  details: string[];
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
  titleKey: TranslationKey;
  periodKey: TranslationKey;
  descriptionKey: TranslationKey;
}

export interface CareerCompany {
  id: string;
  logoAltKey?: TranslationKey;
  logoTextKey?: TranslationKey;
  logoSrc?: string;
  periodKey: TranslationKey;
  descriptionKey: TranslationKey;
  rolesKeys: TranslationKey[];
  highlights: CareerHighlight[];
}
