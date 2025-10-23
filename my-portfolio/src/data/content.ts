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
    id: "frontend",
    icon: "frontend",
    titleKey: "skills.groups.frontend.title",
    items: [
      {
        id: "html-css-js",
        titleKey: "skills.groups.frontend.items.htmlCssJs.title",
        descriptionKey: "skills.groups.frontend.items.htmlCssJs.description",
      },
      {
        id: "react-next",
        titleKey: "skills.groups.frontend.items.reactNext.title",
        descriptionKey: "skills.groups.frontend.items.reactNext.description",
      },
      {
        id: "visualization",
        titleKey: "skills.groups.frontend.items.visualization.title",
        descriptionKey:
          "skills.groups.frontend.items.visualization.description",
      },
      {
        id: "tooling",
        titleKey: "skills.groups.frontend.items.tooling.title",
        descriptionKey: "skills.groups.frontend.items.tooling.description",
      },
    ],
  },
  {
    id: "backendDb",
    icon: "backend",
    titleKey: "skills.groups.backendDb.title",
    items: [
      {
        id: "spring",
        titleKey: "skills.groups.backendDb.items.spring.title",
        descriptionKey: "skills.groups.backendDb.items.spring.description",
      },
      {
        id: "mybatis",
        titleKey: "skills.groups.backendDb.items.mybatis.title",
        descriptionKey: "skills.groups.backendDb.items.mybatis.description",
      },
      {
        id: "databases",
        titleKey: "skills.groups.backendDb.items.databases.title",
        descriptionKey: "skills.groups.backendDb.items.databases.description",
      },
    ],
  },
  {
    id: "etc",
    icon: "stack",
    titleKey: "skills.groups.etc.title",
    items: [
      {
        id: "collaboration",
        titleKey: "skills.groups.etc.items.collaboration.title",
        descriptionKey: "skills.groups.etc.items.collaboration.description",
      },
      {
        id: "infra",
        titleKey: "skills.groups.etc.items.infra.title",
        descriptionKey: "skills.groups.etc.items.infra.description",
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
    id: "erp",
    url: "https://www.npmjs.com/package/react-bulk-form",
    repoUrl: "https://github.com/hjcdg1/react-bulk-form",
    readmeKey: "projects.readmes.erp",
    imagesKey: "projects.images.erp",
    techStack: [
      "TypeScript",
      "Next.js",
      "Tailwind css",
      "zustand",
      "Next-auth",
      "PostgreSQL",
    ],
    isFeatured: true,
  },
  {
    id: "viewTexportX",
    url: "https://it-eldorado.com",
    repoUrl: "https://github.com/hjcdg1/it-eldorado-blog",
    readmeKey: "projects.readmes.viewTexportX",
    imagesKey: "projects.images.viewTexportX",
    techStack: [
      "TypeScript",
      "React",
      "Zustand",
      "SCSS",
      "openLayers",
      "GeoServer",
    ],
    isFeatured: true,
  },
  {
    id: "viewT",
    url: "https://viewt.ktdb.go.kr/cong/map/page.do",
    repoUrl: "https://github.com/opensourceway/FOSSLight-Hub",
    readmeKey: "projects.readmes.viewT",
    imagesKey: "projects.images.viewT",
    techStack: [
      "JavaScript",
      "css",
      "openLayers",
      "GeoServer",
      "spring",
      "Java11",
      "mySQL",
      "mongoDB",
    ],
    isFeatured: true,
  },
  {
    id: "hs",
    url: "https://maplealimi.com",
    repoUrl: "https://github.com/hjcdg1/maple-alimi",
    readmeKey: "projects.readmes.hs",
    imagesKey: "projects.images.hs",
    techStack: [
      "JavaScript",
      "css",
      "Deck.gl",
      "GeoServer",
      "spring",
      "Java11",
      "mySQL",
    ],
    isFeatured: true,
  },
  {
    id: "si",
    url: "http://103.7.190.62:8083/",
    readmeKey: "projects.readmes.si",
    imagesKey: "projects.images.si",
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
    id: "viewTLog",
    url: "https://viewt.ktdb.go.kr/note/log/main",
    readmeKey: "projects.readmes.viewTLog",
    imagesKey: "projects.images.viewTLog",
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

const qbicwareHighlights: CareerHighlight[] = [
  {
    id: "qbicwareThreeTab",
    titleKey: "career.companies.qbicware.highlights.erp.title",
    periodKey: "career.companies.qbicware.highlights.erp.period",
    descriptionKey: "career.companies.qbicware.highlights.erp.description",
  },
  {
    id: "qbicwareviewT",
    titleKey: "career.companies.qbicware.highlights.viewT.title",
    periodKey: "career.companies.qbicware.highlights.viewT.period",
    descriptionKey: "career.companies.qbicware.highlights.viewT.description",
  },
  {
    id: "qbicwareLocalBusiness",
    titleKey: "career.companies.qbicware.highlights.localBusiness.title",
    periodKey: "career.companies.qbicware.highlights.localBusiness.period",
    descriptionKey:
      "career.companies.qbicware.highlights.localBusiness.description",
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
    id: "qbicware",
    logoTextKey: "career.companies.qbicware.logoText",
    periodKey: "career.companies.qbicware.period",
    descriptionKey: "career.companies.qbicware.description",
    rolesKeys: [
      "career.companies.qbicware.roles.frontend",
      "career.companies.qbicware.roles.backend",
    ],
    logoSrc: "./img/logo/qbicware_ci.svg",
    highlights: qbicwareHighlights,
  },
  // {
  //   id: "opengallery",
  //   logoTextKey: "career.companies.opengallery.logoText",
  //   periodKey: "career.companies.opengallery.period",
  //   descriptionKey: "career.companies.opengallery.description",
  //   rolesKeys: [
  //     "career.companies.opengallery.roles.development",
  //     "career.companies.opengallery.roles.techLead",
  //     "career.companies.opengallery.roles.backoffice",
  //   ],
  //   highlights: opengalleryHighlights,
  // },
];
