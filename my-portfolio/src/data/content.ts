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
    icon: "language",
    titleKey: "skills.groups.languages.title",
    items: [
      {
        id: "core-languages",
        titleKey: "skills.groups.languages.items.core.title",
        techs: [
          { name: "Java", iconSlug: "openjdk", iconColor: "007396" },
          { name: "JavaScript", iconSlug: "javascript", iconColor: "F7DF1E" },
          { name: "TypeScript", iconSlug: "typescript", iconColor: "3178C6" },
          { name: "CSS", iconSlug: "css3", iconColor: "1572B6" },
          { name: "HTML", iconSlug: "html5", iconColor: "E34F26" },
          //{ name: "SCSS", iconSlug: "sass", iconColor: "CC6699" },
          { name: "Tailwind CSS", iconSlug: "tailwindcss", iconColor: "06B6D4" },
          { name: "JSP", iconSlug: "openjdk", iconColor: "007396" },
        ],
      },
    ],
  },
  {
    id: "frontend",
    icon: "frontend",
    titleKey: "skills.groups.frontend.title",
    items: [
      {
        id: "react-next",
        titleKey: "skills.groups.frontend.items.reactNext.title",
        techs: [
          { name: "React.js", iconSlug: "react", iconColor: "61DAFB" },
          { name: "Next.js", iconSlug: "nextdotjs", iconColor: "ffffff" },
        ],
      },
      {
        id: "visualization",
        titleKey: "skills.groups.frontend.items.visualization.title",
        techs: [
          { name: "Zustand", iconSlug: "redux", iconColor: "764ABC" },
          { name: "Apache ECharts", iconSlug: "apacheecharts", iconColor: "AA344D" },
          { name: "D3.js", iconSlug: "d3", iconColor: "F9A03C" },
          { name: "deck.gl", iconSlug: "mapbox", iconColor: "ffffff" },
          { name: "OpenLayers", iconSlug: "openlayers", iconColor: "1F6B75" },
        ],
      },
      {
        id: "tooling",
        titleKey: "skills.groups.frontend.items.tooling.title",
        techs: [
          { name: "Vite", iconSlug: "vite", iconColor: "646CFF" },
          { name: "Webpack", iconSlug: "webpack", iconColor: "8DD6F9" },
          { name: "npm", iconSlug: "npm", iconColor: "CB3837" },
        ],
      },
    ],
  },
  {
    id: "backendOps",
    icon: "backend",
    titleKey: "skills.groups.backendOps.title",
    items: [
      {
        id: "spring",
        titleKey: "skills.groups.backendOps.items.spring.title",
        techs: [
          { name: "Spring Framework", iconSlug: "spring", iconColor: "6DB33F" },
          { name: "Spring Boot", iconSlug: "springboot", iconColor: "6DB33F" },
        ],
      },
      {
        id: "mybatis",
        titleKey: "skills.groups.backendOps.items.mybatis.title",
        techs: [
          { name: "MyBatis", iconSlug: "apache", iconColor: "D22128" },
        ],
      },
      {
        id: "databases",
        titleKey: "skills.groups.backendOps.items.databases.title",
        techs: [
          { name: "PostgreSQL", iconSlug: "postgresql", iconColor: "4169E1" },
          { name: "MySQL", iconSlug: "mysql", iconColor: "4479A1" },
        ],
      },
      {
        id: "collaboration",
        titleKey: "skills.groups.backendOps.items.collaboration.title",
        techs: [
          { name: "Git", iconSlug: "git", iconColor: "F05032" },
          { name: "Notion", iconSlug: "notion", iconColor: "ffffff" },
        ],
      },
      {
        id: "infra",
        titleKey: "skills.groups.backendOps.items.infra.title",
        techs: [
          { name: "Docker", iconSlug: "docker", iconColor: "2496ED" },
          { name: "Jenkins", iconSlug: "jenkins", iconColor: "D24939" },
          { name: "Nginx", iconSlug: "nginx", iconColor: "009639" },
          { name: "Apache", iconSlug: "apache", iconColor: "D22128" },
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
    //url: "",//"https://www.npmjs.com/package/react-bulk-form",,
    //repoUrl: "https://github.com/hjcdg1/react-bulk-form",
    readmeKey: "projects.readmes.erp",
    imagesKey: "projects.images.erp",
    techStack: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "NextAuth.js",
      "PostgreSQL",
    ],
    isFeatured: true,
  },
  {
    id: "si",
    //url: "http://103.7.190.62:8083/",
    readmeKey: "projects.readmes.si",
    imagesKey: "projects.images.si",
    techStack: [
      "JavaScript",
      "CSS",
      "deck.gl",
      "GeoServer",
      "Spring",
      "Java 11",
      "MySQL",
    ],
    isFeatured: true,
  },
  {
    id: "viewT",
    //url: "https://viewt.ktdb.go.kr/cong/map/page.do",
    //repoUrl: "https://github.com/opensourceway/FOSSLight-Hub",
    readmeKey: "projects.readmes.viewT",
    imagesKey: "projects.images.viewT",
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
    isFeatured: true,
  },
  {
    id: "hs",
    url: "",
    //repoUrl: "https://github.com/hjcdg1/maple-alimi",
    readmeKey: "projects.readmes.hs",
    imagesKey: "projects.images.hs",
    techStack: [
      "JavaScript",
      "CSS",
      "deck.gl",
      "GeoServer",
      "Spring",
      "Java 11",
      "MySQL",
    ],
    isFeatured: true,
  },
  {
    id: "viewTexportX",
    //url: "https://it-eldorado.com",
    repoUrl: "https://github.com/hjcdg1/it-eldorado-blog",
    readmeKey: "projects.readmes.viewTexportX",
    imagesKey: "projects.images.viewTexportX",
    techStack: [
      "TypeScript",
      "React",
      "Zustand",
      "SCSS",
      "OpenLayers",
      "GeoServer",
    ],
    isFeatured: false,
  },
  {
    id: "viewTLog",
    //url: "https://viewt.ktdb.go.kr/note/log/main",
    readmeKey: "projects.readmes.viewTLog",
    imagesKey: "projects.images.viewTLog",
    techStack: [
      "TypeScript",
      "Next.js",
      "MySQL",
      "Zustand",
      "Tailwind CSS",
      "ApexCharts",
    ],
  },
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
