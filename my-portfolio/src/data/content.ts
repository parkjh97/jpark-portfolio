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
  //{ id: "archiving", labelKey: "nav.archiving", targetId: "archiving" },
  { id: "career", labelKey: "nav.career", targetId: "career" },
  { id: "projects", labelKey: "nav.projects", targetId: "projects" },
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
    id: "languages",
    titleKey: "skills.groups.languages.title",
    items: [
      {
        id: "core-languages",
        titleKey: "skills.groups.languages.items.core.title",
        techs: [
          { name: "Java" },
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "CSS" },
          { name: "HTML" },
          { name: "Tailwind CSS" },
          { name: "JSP" },
        ],
      },
    ],
  },
  {
    id: "frontend",
    titleKey: "skills.groups.frontend.title",
    items: [
      {
        id: "react-next",
        titleKey: "skills.groups.frontend.items.reactNext.title",
        techs: [
          { name: "React.js" },
          { name: "Next.js" },
        ],
      },
      {
        id: "visualization",
        titleKey: "skills.groups.frontend.items.visualization.title",
        techs: [
          { name: "Zustand" },
          { name: "Apache ECharts" },
          { name: "D3.js" },
          { name: "deck.gl" },
          { name: "OpenLayers" },
        ],
      },
      {
        id: "tooling",
        titleKey: "skills.groups.frontend.items.tooling.title",
        techs: [
          { name: "Vite" },
          { name: "Webpack" },
          { name: "npm" },
        ],
      },
    ],
  },
  {
    id: "backendOps",
    titleKey: "skills.groups.backendOps.title",
    items: [
      {
        id: "spring",
        titleKey: "skills.groups.backendOps.items.spring.title",
        techs: [
          { name: "Spring Framework" },
          { name: "Spring Boot" },
        ],
      },
      {
        id: "mybatis",
        titleKey: "skills.groups.backendOps.items.mybatis.title",
        techs: [
          { name: "MyBatis" },
        ],
      },
      {
        id: "databases",
        titleKey: "skills.groups.backendOps.items.databases.title",
        techs: [
          { name: "PostgreSQL" },
          { name: "MySQL" },
        ],
      },
      {
        id: "collaboration",
        titleKey: "skills.groups.backendOps.items.collaboration.title",
        techs: [
          { name: "Git" },
          { name: "Notion" },
        ],
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
  // {
  //   id: "portfolio",
  //   //url: "https://parkjh97.github.io/jpark-portfolio/",
  //   //repoUrl: "https://github.com/parkjh97/jpark-portfolio",
  //   readmeKey: "projects.readmes.portfolio",
  //   techStack: ["TypeScript", "React", "Vite", "Tailwind CSS", "i18next"],
  //   isFeatured: true,
  // },
  {
    id: "erp",
    readmeKey: "projects.readmes.erp",
    imagesKey: "projects.images.erp",
    archSrc: "./img/project/erp/erp-arch.svg",
    techStack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Zustand",
      "NextAuth.js",
      "PostgreSQL",
      "bcryptjs",
      "html2canvas",
      "jsPDF",
      "JSZip",
      "web-push",
      "date-fns",
      "react-to-print",
    ],

    scaleStats: ["65 API Routes", "30+ 페이지", "15+ DB 테이블", "PWA + Jandi 연동"],
  },
  {
    id: "si",
    readmeKey: "projects.readmes.si",
    imagesKey: "projects.images.si",
    archSrc: "./img/project/si/si-arch.svg",
    techStack: [
      "JavaScript",
      "CSS",
      "deck.gl",
      "GeoServer",
      "Spring",
      "Java 11",
      "PostgreSQL",
    ],

    scaleStats: ["7,531+ Java 라인", "11 분석 보드", "3,963 SQL 라인", "70+ JS 파일"],
  },
  {
    id: "viewT",
    readmeKey: "projects.readmes.viewT",
    imagesKey: "projects.images.viewT",
    archSrc: "./img/project/view-t/view-t-arch.svg",
    techStack: [
      "JavaScript",
      "CSS",
      "OpenLayers",
      "GeoServer",
      "Spring",
      "Java 11",
      "MySQL",
      "MongoDB",
    ],

    scaleStats: ["300+ 쿼리", "50+ REST API", "40+ DB 테이블", "MySQL + MongoDB 이중 DB"],
  },
  {
    id: "hs",
    readmeKey: "projects.readmes.hs",
    imagesKey: "projects.images.hs",
    archSrc: "./img/project/hs/hs-arch.svg",
    techStack: [
      "JavaScript",
      "CSS",
      "deck.gl",
      "GeoServer",
      "Spring",
      "Java 11",
      "MySQL",
      "MongoDB",
    ],

    scaleStats: ["197 Java 파일", "20,097 Java 라인", "100+ API", "30+ 기능 모듈"],
  },
  {
    id: "viewTexportX",
    repoUrl: "https://github.com/hjcdg1/it-eldorado-blog",
    readmeKey: "projects.readmes.viewTexportX",
    imagesKey: "projects.images.viewTexportX",
    archSrc: "./img/project/view-t-new/view-t-new-arch.svg",
    techStack: [
      "TypeScript",
      "React",
      "Zustand",
      "SCSS",
      "OpenLayers",
      "GeoServer",
    ],

    scaleStats: ["40+ TSX 컴포넌트", "13종 교통 지표", "30+ SCSS 모듈", "GeoServer WMS/VectorTile"],
  },
  // {
  //   id: "viewTLog",
  //   readmeKey: "projects.readmes.viewTLog",
  //   imagesKey: "projects.images.viewTLog",
  //   archSrc: "./img/project/view-t-log/view-t-log-arch.svg",
  //   techStack: [
  //     "TypeScript",
  //     "Next.js",
  //     "MySQL",
  //     "Zustand",
  //     "Tailwind CSS",
  //     "ApexCharts",
  //   ],
  //   scaleStats: ["10 Route Handlers", "8+ 페이지", "5단계 공정 모니터링", "MySQL Stored Procedures"],
  // },
  // {
  //   id: "personalityByFriends",
  //   url: "https://personality-test-by-friends.com",
  //   techStack: ["TypeScript", "Next.js", "Sass", "Vercel"],
  // },
  // {
  //   id: "onepick",
  //   url: "https://onepick-pt.com",
  //   techStack: ["TypeScript", "Next.js", "Sass", "Vercel"],
  // },
  // {
  //   id: "portfolioNext",
  //   url: "https://cdg-portfolio.com",
  //   techStack: ["TypeScript", "Next.js", "Sass", "Vercel"],
  // },
  // {
  //   id: "portfolioReact",
  //   techStack: ["TypeScript", "React", "Sass", "Netlify"],
  // },
  // {
  //   id: "haetbongWikiReact",
  //   techStack: [
  //     "TypeScript",
  //     "React",
  //     "Redux",
  //     "Redux Thunk",
  //     "Redux Saga",
  //     "Sass",
  //     "Django",
  //     "PostgreSQL",
  //     "AWS (EC2, RDS)",
  //   ],
  // },
  // {
  //   id: "haetbongWikiDjango",
  //   techStack: [
  //     "Django",
  //     "Vanilla JS",
  //     "jQuery",
  //     "PostgreSQL",
  //     "AWS (Elastic Beanstalk)",
  //   ],
  // },
  // {
  //   id: "snuMoyeo",
  //   techStack: [
  //     "React",
  //     "Redux",
  //     "Redux Saga",
  //     "Django REST Framework",
  //     "SQLite3",
  //     "AWS (EC2)",
  //   ],
  // },
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

// const opengalleryHighlights: CareerHighlight[] = [
//   {
//     id: "opengalleryArtistSite",
//     titleKey: "career.companies.opengallery.highlights.artistSite.title",
//     periodKey: "career.companies.opengallery.highlights.artistSite.period",
//     descriptionKey:
//       "career.companies.opengallery.highlights.artistSite.description",
//   },
//   {
//     id: "opengalleryDeploy",
//     titleKey: "career.companies.opengallery.highlights.deploy.title",
//     periodKey: "career.companies.opengallery.highlights.deploy.period",
//     descriptionKey:
//       "career.companies.opengallery.highlights.deploy.description",
//   },
//   {
//     id: "opengalleryCleanup",
//     titleKey: "career.companies.opengallery.highlights.cleanup.title",
//     periodKey: "career.companies.opengallery.highlights.cleanup.period",
//     descriptionKey:
//       "career.companies.opengallery.highlights.cleanup.description",
//   },
//   {
//     id: "opengalleryBeyondDev",
//     titleKey: "career.companies.opengallery.highlights.beyondDev.title",
//     periodKey: "career.companies.opengallery.highlights.beyondDev.period",
//     descriptionKey:
//       "career.companies.opengallery.highlights.beyondDev.description",
//   },
//   {
//     id: "opengalleryBackoffice",
//     titleKey: "career.companies.opengallery.highlights.backoffice.title",
//     periodKey: "career.companies.opengallery.highlights.backoffice.period",
//     descriptionKey:
//       "career.companies.opengallery.highlights.backoffice.description",
//   },
// ];

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
