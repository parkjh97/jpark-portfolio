import type {
  AboutField,
  ArchiveLink,
  CareerCompany,
  CareerHighlight,
  NavigationLink,
  ProjectEntry,
  SkillGroup,
} from "../types/content";

export const navigationLinks: NavigationLink[] = [
  { id: "about", labelKey: "nav.about", targetId: "about-me" },
  { id: "skills", labelKey: "nav.skills", targetId: "skills" },
  { id: "archiving", labelKey: "nav.archiving", targetId: "archiving" },
  { id: "projects", labelKey: "nav.projects", targetId: "projects" },
  { id: "career", labelKey: "nav.career", targetId: "career" },
];

export const aboutFields: AboutField[] = [
  {
    id: "name",
    icon: "user",
    labelKey: "about.fields.name.label",
    valueKey: "about.fields.name.value",
  },
  {
    id: "birth",
    icon: "calendar",
    labelKey: "about.fields.birth.label",
    valueKey: "about.fields.birth.value",
  },
  {
    id: "location",
    icon: "location",
    labelKey: "about.fields.location.label",
    valueKey: "about.fields.location.value",
  },
  {
    id: "phone",
    icon: "phone",
    labelKey: "about.fields.phone.label",
    valueKey: "about.fields.phone.value",
  },
  {
    id: "email",
    icon: "email",
    labelKey: "about.fields.email.label",
    valueKey: "about.fields.email.value",
  },
  {
    id: "education",
    icon: "education",
    labelKey: "about.fields.education.label",
    valueKey: "about.fields.education.value",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "language",
    icon: "language",
    titleKey: "skills.groups.language.title",
    chips: [
      {
        id: "typescript",
        label: "TypeScript",
        background: "#1f6feb",
        color: "#ffffff",
      },
      {
        id: "javascript",
        label: "JavaScript",
        background: "#f7df1e",
        color: "#111111",
      },
      { id: "java", label: "Java", background: "#d13b28", color: "#ffffff" },
    ],
  },
  {
    id: "frontend",
    icon: "frontend",
    titleKey: "skills.groups.frontend.title",
    chips: [
      {
        id: "next-react",
        label: "Next.js / React",
        background: "#111111",
        color: "#ffffff",
      },
      {
        id: "zustand",
        label: "Zustand",
        background: "#5d4037",
        color: "#ffffff",
      },
      {
        id: "recoil",
        label: "Recoil",
        background: "#0ea5e9",
        color: "#ffffff",
      },
      {
        id: "react-router",
        label: "React Router",
        background: "#f97316",
        color: "#ffffff",
      },
      {
        id: "apollo",
        label: "Apollo Client",
        background: "#311b92",
        color: "#ffffff",
      },
      {
        id: "react-hook-form",
        label: "React Hook Form",
        background: "#111827",
        color: "#ffffff",
      },
      { id: "sass", label: "Sass", background: "#cc6699", color: "#ffffff" },
      {
        id: "tailwind",
        label: "Tailwind CSS",
        background: "#0ea5e9",
        color: "#ffffff",
      },
      {
        id: "emotion",
        label: "Emotion",
        background: "#d946ef",
        color: "#ffffff",
      },
      { id: "vite", label: "Vite", background: "#8b5cf6", color: "#ffffff" },
    ],
  },
  {
    id: "backend",
    icon: "backend",
    titleKey: "skills.groups.backend.title",
    chips: [
      {
        id: "django",
        label: "Django",
        background: "#092e20",
        color: "#ffffff",
      },
      {
        id: "spring",
        label: "Spring (Boot)",
        background: "#6db33f",
        color: "#ffffff",
      },
      {
        id: "gradle",
        label: "Gradle",
        background: "#02303a",
        color: "#ffffff",
      },
      {
        id: "firebase",
        label: "Firebase",
        background: "#ffca28",
        color: "#111111",
      },
      {
        id: "supabase",
        label: "Supabase",
        background: "#3ecf8e",
        color: "#ffffff",
      },
    ],
  },
  {
    id: "devops",
    icon: "devops",
    titleKey: "skills.groups.devops.title",
    chips: [
      {
        id: "docker",
        label: "Docker",
        background: "#0db7ed",
        color: "#ffffff",
      },
      {
        id: "aws",
        label: "AWS (ECS, EB)",
        background: "#f97316",
        color: "#ffffff",
      },
      {
        id: "kubernetes",
        label: "Kubernetes",
        background: "#326ce5",
        color: "#ffffff",
      },
      { id: "redis", label: "Redis", background: "#dc2626", color: "#ffffff" },
      {
        id: "elasticsearch",
        label: "Elastic Search",
        background: "#059669",
        color: "#ffffff",
      },
      {
        id: "vercel",
        label: "Vercel",
        background: "#111111",
        color: "#ffffff",
      },
    ],
  },
];

export const archiveLinks: ArchiveLink[] = [
  {
    id: "github",
    url: "https://github.com/hjcdg1",
    titleKey: "archiving.items.github.title",
    descriptionKey: "archiving.items.github.description",
  },
  {
    id: "blog",
    url: "https://it-eldorado.com",
    titleKey: "archiving.items.blog.title",
    descriptionKey: "archiving.items.blog.description",
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    id: "reactBulkForm",
    url: "https://www.npmjs.com/package/react-bulk-form",
    repoUrl: "https://github.com/hjcdg1/react-bulk-form",
    readmeKey: "projects.readmes.reactBulkForm",
    imagesKey: "projects.images.reactBulkForm",
    techStack: ["TypeScript", "React"],
    isFeatured: true,
  },
  {
    id: "itEldorado",
    url: "https://it-eldorado.com",
    repoUrl: "https://github.com/hjcdg1/it-eldorado-blog",
    readmeKey: "projects.readmes.itEldorado",
    imagesKey: "projects.images.itEldorado",
    techStack: [
      "TypeScript",
      "Next.js",
      "Zustand",
      "React Query",
      "Tailwind CSS",
      "Notion",
      "Vercel",
    ],
    isFeatured: true,
  },
  {
    id: "fosslightHubLite",
    repoUrl: "https://github.com/opensourceway/FOSSLight-Hub",
    readmeKey: "projects.readmes.fosslightHubLite",
    techStack: [
      "TypeScript",
      "Next.js",
      "Recoil",
      "React Query",
      "React Hook Form",
      "Tailwind CSS",
    ],
    isFeatured: true,
  },
  {
    id: "mapleAuctionAlarm",
    url: "https://maplealimi.com",
    repoUrl: "https://github.com/hjcdg1/maple-alimi",
    readmeKey: "projects.readmes.mapleAuctionAlarm",
    imagesKey: "projects.images.mapleAuctionAlarm",
    techStack: [
      "TypeScript",
      "Next.js",
      "Recoil",
      "React Query",
      "React Hook Form",
      "Sass",
      "Tailwind CSS",
      "Vercel",
    ],
    isFeatured: true,
  },
  {
    id: "whatToSing",
    url: "https://what-to-sing.kr",
    repoUrl: "https://github.com/hjcdg1/what-to-sing",
    readmeKey: "projects.readmes.whatToSing",
    techStack: [
      "TypeScript",
      "Next.js",
      "Recoil",
      "Sass",
      "Tailwind CSS",
      "Firebase",
      "Vercel",
    ],
  },
  {
    id: "smartDutchPay",
    url: "https://play.google.com/store/apps/details?id=com.dutch_pay_calculator_rn",
    techStack: ["TypeScript", "React Native", "Recoil"],
  },
  {
    id: "personalityByFriends",
    url: "https://personality-test-by-friends.com",
    techStack: ["TypeScript", "Next.js", "Sass", "Vercel"],
  },
  {
    id: "onepick",
    url: "https://onepick-pt.com",
    techStack: ["TypeScript", "Next.js", "Sass", "Vercel"],
  },
  {
    id: "portfolioNext",
    url: "https://cdg-portfolio.com",
    techStack: ["TypeScript", "Next.js", "Sass", "Vercel"],
  },
  {
    id: "portfolioReact",
    techStack: ["TypeScript", "React", "Sass", "Netlify"],
  },
  {
    id: "haetbongWikiReact",
    techStack: [
      "TypeScript",
      "React",
      "Redux",
      "Redux Thunk",
      "Redux Saga",
      "Sass",
      "Django",
      "PostgreSQL",
      "AWS (EC2, RDS)",
    ],
  },
  {
    id: "haetbongWikiDjango",
    techStack: [
      "Django",
      "Vanilla JS",
      "jQuery",
      "PostgreSQL",
      "AWS (Elastic Beanstalk)",
    ],
  },
  {
    id: "snuMoyeo",
    techStack: [
      "React",
      "Redux",
      "Redux Saga",
      "Django REST Framework",
      "SQLite3",
      "AWS (EC2)",
    ],
  },
];

const daangnHighlights: CareerHighlight[] = [
  {
    id: "daangnThreeTab",
    titleKey: "career.companies.daangn.highlights.threeTab.title",
    periodKey: "career.companies.daangn.highlights.threeTab.period",
    descriptionKey: "career.companies.daangn.highlights.threeTab.description",
  },
  {
    id: "daangnWebviewPlatform",
    titleKey: "career.companies.daangn.highlights.webviewPlatform.title",
    periodKey: "career.companies.daangn.highlights.webviewPlatform.period",
    descriptionKey:
      "career.companies.daangn.highlights.webviewPlatform.description",
  },
  {
    id: "daangnLocalBusiness",
    titleKey: "career.companies.daangn.highlights.localBusiness.title",
    periodKey: "career.companies.daangn.highlights.localBusiness.period",
    descriptionKey:
      "career.companies.daangn.highlights.localBusiness.description",
  },
];

const opengalleryHighlights: CareerHighlight[] = [
  {
    id: "opengalleryArtistSite",
    titleKey: "career.companies.opengallery.highlights.artistSite.title",
    periodKey: "career.companies.opengallery.highlights.artistSite.period",
    descriptionKey:
      "career.companies.opengallery.highlights.artistSite.description",
  },
  {
    id: "opengalleryDeploy",
    titleKey: "career.companies.opengallery.highlights.deploy.title",
    periodKey: "career.companies.opengallery.highlights.deploy.period",
    descriptionKey:
      "career.companies.opengallery.highlights.deploy.description",
  },
  {
    id: "opengalleryCleanup",
    titleKey: "career.companies.opengallery.highlights.cleanup.title",
    periodKey: "career.companies.opengallery.highlights.cleanup.period",
    descriptionKey:
      "career.companies.opengallery.highlights.cleanup.description",
  },
  {
    id: "opengalleryBeyondDev",
    titleKey: "career.companies.opengallery.highlights.beyondDev.title",
    periodKey: "career.companies.opengallery.highlights.beyondDev.period",
    descriptionKey:
      "career.companies.opengallery.highlights.beyondDev.description",
  },
  {
    id: "opengalleryBackoffice",
    titleKey: "career.companies.opengallery.highlights.backoffice.title",
    periodKey: "career.companies.opengallery.highlights.backoffice.period",
    descriptionKey:
      "career.companies.opengallery.highlights.backoffice.description",
  },
];

export const careerCompanies: CareerCompany[] = [
  {
    id: "daangn",
    logoTextKey: "career.companies.daangn.logoText",
    periodKey: "career.companies.daangn.period",
    descriptionKey: "career.companies.daangn.description",
    rolesKeys: [
      "career.companies.daangn.roles.frontend",
      "career.companies.daangn.roles.backend",
    ],
    highlights: daangnHighlights,
  },
  {
    id: "opengallery",
    logoTextKey: "career.companies.opengallery.logoText",
    periodKey: "career.companies.opengallery.period",
    descriptionKey: "career.companies.opengallery.description",
    rolesKeys: [
      "career.companies.opengallery.roles.development",
      "career.companies.opengallery.roles.techLead",
      "career.companies.opengallery.roles.backoffice",
    ],
    highlights: opengalleryHighlights,
  },
];
