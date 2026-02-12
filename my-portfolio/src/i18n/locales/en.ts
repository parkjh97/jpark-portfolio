const en = {
  brand: "Jpark's Portfolio",
  language: {
    current: "English",
    switchLabel: "Change language",
    options: {
      ko: "한국어",
      en: "English",
    },
  },
  nav: {
    about: "About me",
    skills: "Skills",
    archiving: "Archiving",
    projects: "Projects",
    career: "Career",
  },
  navToggle: "Toggle navigation",
  masthead: {
    keyLine: "I pursue problems over technology, and value over features.",
    profile: {
      photo: {
        alt: "Portrait photo of Park Jeong Hyeon",
        initials: "Jpark",
        src: "./img/profile/jpark.webp",
      },
      fields: [
        { label: "Name", value: "Park Jeong Hyeon" },
        { label: "Date of birth", value: "1997.05.06" },
        { label: "Address", value: "Siheung-si, Gyeonggi-do" },
        { label: "Education", value: "Korea National Open University (Statistics)" },
        { label: "E-mail", value: "vlrnrhd02@naver.com" },
        { label: "Phone", value: "010-6428-5059" },
      ],
    },
    detailHeading: "A closer look",
    detail: [
      "Over three years across multiple projects, I became most convinced that answers do not live only inside the technology. I started by building fast with JS, CSS, and string templates, learning how browsers behave and where users pause. Later I adopted tools like React, Next.js, Tailwind, and Spring Boot as needed to make products sturdier. For me, technology is not the goal; it is the most efficient way to solve today's problem.",
      "When starting a project, I first ask, \"Is this truly needed by customers?\" I form a hypothesis, test it in the lightest way, and adjust direction using data and feedback. When confident, I scale the structure, increase reuse, and organize operations and deployment. I followed the same approach for our in-house ERP. By mapping departmental requests into user journeys, I prioritized work and directly designed and implemented much of the system while keeping a rhythm of \"show fast, fix fast.\" That helped us find answers in real workplaces rather than conference rooms, and build a flow the team could trust.",
      "In collaboration, I often act as a \"translator.\" I translate business language into development language, and development constraints back into customer value so everyone can aim at the same goal. When debates arise, I choose evidence over preference, and I pick the right balance between speed and quality for the current stage. Starting light, then changing boldly when evidence accumulates, this is how I stay steady.",
      "I will keep technology from becoming the objective itself. I want to remain a developer who puts product and customers first, then chooses the most economical method. Even when environments change or constraints appear, I want to be the person who structures problems and delivers answers through execution—this is the developer I strive to be every day.",
    ],
    cta: "Discover more ↓",
  },
  about: {
    title: "ABOUT ME",
    fields: {
      name: { label: "Name", value: "Park Jeong Hyeon" },
      birth: { label: "Date of birth", value: "1997.05.06" },
      location: { label: "Location", value: "Siheung-si, Gyeonggi-do" },
      phone: { label: "Phone", value: "010-6428-5059" },
      email: { label: "Email", value: "vlrnrhd02@naver.com" },
      education: {
        label: "Education",
        value: "Korea National Open University (Statistics)",
      },
    },
  },
  skills: {
    title: "SKILLS",
    groups: {
      frontend: {
        title: "Front-End",
        items: {
          htmlCssJs: {
            title: "Markup & Language",
            description:
              "HTML, CSS(SCSS, Tailwind CSS), JavaScript(ES6), TypeScript",
          },
          reactNext: {
            title: "Application Frameworks",
            description: "React.js, Next.js",
          },
          visualization: {
            title: "State & Data Visualization",
            description: "Zustand, Apache ECharts, D3.js, deck.gl, OpenLayers",
          },
          tooling: {
            title: "Build & Tooling",
            description: "Vite, Webpack, npm",
          },
        },
      },
      backendDb: {
        title: "Back-End & DB",
        items: {
          spring: {
            title: "Spring Ecosystem",
            description: "Spring Framework (Java 11), Spring Boot (Java 21)",
          },
          mybatis: {
            title: "Persistence Layer",
            description: "MyBatis",
          },
          databases: {
            title: "Databases",
            description: "PostgreSQL, MySQL",
          },
        },
      },
      etc: {
        title: "ETC",
        items: {
          collaboration: {
            title: "Collaboration",
            description: "Git, Notion",
          },
          infra: {
            title: "Ops & Infra",
            description: "Docker, Jenkins, Nginx, Apache",
          },
        },
      },
    },
  },
  archiving: {
    title: "ARCHIVING",
    items: {
      github: {
        title: "github.com/hjcdg1",
        description: "Source code repository",
      },
      blog: {
        title: "it-eldorado.com",
        description: "Blog for studying and sharing knowledge",
      },
    },
  },
  projects: {
    title: "PROJECTS",
    filterLabel: "Show featured projects only",
    printTitle: "Projects Portfolio",
    printDateLabel: "Date",
    printTocTitle: "Contents",
    ctas: {
      readme: "Read more",
      images: "Images",
      pdf: "Download PDF",
    },
    imageControls: {
      prev: "Previous image",
      next: "Next image",
    },
    items: {
      erp: {
        name: "In-house ERP system",
        period: "2024.11 ~ 2025.01",
        summary:
          "Built an in-house ERP on Next.js 14 (App Router) with approvals, attendance, and admin modules",
        details: [
          "Led the entire lifecycle from requirements analysis to design, development, and deployment",
          "Developed modules including HR (attendance, leave, time tracking), approvals, and webhook alerts",
          "Built extras such as canvas-based PDF export and database auto-backup batch scripts",
        ],
      },
      viewTexportX: {
        name: "Traffic and spatial data web analytics service",
        period: "2025.04 ~ 2025.05",
        summary:
          "Interactive web service that visualizes and analyzes indicators by road and administrative unit",
        details: [
          "Designed and implemented frontend architecture: React 19 + TypeScript + Vite, Zustand state, DnD Kit for layer sorting and draggable modals",
          "Integrated GeoServer with in-house map engine (XqbMap) for dynamic WMS/VectorTile updates and link/administrative view toggles",
          "Supported indicators such as estimated traffic, VKT, average speed, congestion (frequency/time) and cost, emissions (CO/NOx/PM/VOC)",
        ],
      },
      viewT: {
        name: "viewT maintenance (traffic and spatial data analytics)",
        period: "2024.01 ~ 2025.10",
        summary:
          "Service providing an analytics environment based on navigation, mobile, and transit card big data",
        details: [
          "Automated annual data refresh processes and applied new datasets",
          "Maintained OpenLayers + GeoServer-based map visualization",
          "Ran tests for new data analysis modules",
        ],
      },
      hs: {
        name: "Hwaseong City signal monitoring system",
        period: "2022.12 - 2023.04",
        summary: "UI development and maintenance for Hwaseong City signal monitoring",
        details: [
          "Built from an idea by a friend who loves MapleStory",
          "Adopted Next.js 13 on React 18 to learn and apply the latest stack",
          "Handled API requests and forms with React Query and React Hook Form",
          "Used the Next.js server as a reverse proxy to hide IPs and resolve CORS issues",
        ],
      },
      si: {
        name: "Siheung City public transit analytics system",
        period: "2023.07 ~ 2023.12",
        summary: "Public transit analytics system based on transit card big data",
        details: [
          "Built to avoid the recurring dilemma about what to sing whenever going to karaoke",
          "Implemented social login with Firebase Auth (OAuth 2.0)",
          "Authored queries on Firebase Realtime Database (NoSQL)",
          "Styled without separate CSS files using Tailwind CSS",
        ],
      },
      viewTLog: {
        name: "Big data processing log dashboard",
        period: "2024.11 ~ 2025.01",
        summary:
          "Dashboard visualizing status and progress of a Hadoop/YARN + MySQL traffic data pipeline",
        details: [
          "Monorepo with Next.js App Router + API Routes for frontend and backend",
          "Auto-generated conditions/labels with MySQL stored procedures and schema metadata (information_schema)",
          "Tracked job progress and handled timeouts via Hadoop/YARN REST integration",
          "Compared trends using ApexCharts multi-series charts and ratio toggles",
        ],
      },
      personalityByFriends: {
        name: "How do friends see my personality?",
        period: "2021.05 - 2021.06 (2-person team)",
        summary:
          "Website that compares how I see my personality vs. how friends see it",
        details: [
          "Built from the idea of doing MBTI tests for each other",
          "First collaboration with clearly split backend roles",
          "Implemented background animation and pentagon charts with requestAnimationFrame and Canvas",
          "Designed pages with CSR/SSR/SSG in Next.js to balance usability",
        ],
      },
      onepick: {
        name: "Onepick homepage",
        period: "2021.03 (Solo project)",
        summary: "Homepage for the Onepick PT center",
        details: [
          "Built to support a brother working at the PT center",
          "Planned SEO and UI/UX for promotional purposes",
          "Surfaced latest blog posts via RSS",
        ],
      },
      portfolioNext: {
        name: "Portfolio website (Next.js)",
        period: "2021.01 (Solo project)",
        summary: "Portfolio website",
        details: [
          "Migrated React to Next.js to enable SSR and improve SEO",
          "Implemented modal back-navigation with the History API",
        ],
      },
      portfolioReact: {
        name: "Portfolio website (React)",
        period: "2021.01 (Solo project)",
        summary: "Portfolio website",
        details: [
          "Built a personal portfolio website",
          "Implemented an infinite carousel with vanilla JavaScript only",
        ],
      },
      haetbongWikiReact: {
        name: "Haetbong Wiki (React, Django)",
        period: "2020.08 - 2020.11 (Solo project)",
        summary:
          "Website documenting information about the SNU Haetbit volunteer club",
        details: [
          "Migrated a Django full-stack app to a React + Django combo",
          "Used Redux, Redux-Thunk, and Redux-Saga for global state and API requests",
          "Manually built an AWS deployment environment with split frontend/backend",
        ],
      },
      haetbongWikiDjango: {
        name: "Haetbong Wiki (Django full stack)",
        period: "2020.05 - 2020.06 (Solo project)",
        summary:
          "Website documenting information about the SNU Haetbit volunteer club",
        details: [
          "Built because the club lacked a proper archiving site relative to its history and scale",
          "Deepened understanding of technologies and environments used at work",
          "Realized the need for Docker, now widely used",
        ],
      },
      snuMoyeo: {
        name: "SNU Moyeo",
        period: "2019.03 - 2019.06 (4-person team)",
        summary:
          "Web service that helps SNU students form and join short- or long-term groups",
        details: [
          "Built to help students find peers for shared goals",
          "First web development experience (HTML, CSS, JS, React, Django)",
          "First collaboration experience (Git)",
          "The pivotal moment that set me on the web development path",
        ],
      },
    },
    readmes: {
      erp: {
        title: "react-bulk-form",
        intro: [
          "A lightweight utility to manage complex form state in React with consistent patterns.",
          "It abstracts repetitive logic for many fields and validations so developers can focus on core UX.",
        ],
        sections: [
          {
            heading: "Key features",
            bullets: [
              "Central store to track field values and error states together",
              "Minimized re-renders through field/form-level subscriptions",
              "Lightweight design that can be used alongside React Hook Form or Formik",
            ],
          },
          {
            heading: "Why it was built",
            bullets: [
              "Form complexity grew rapidly in internal projects with dynamic structures",
              "Repackaged shared custom hooks into a library for team-wide reuse",
            ],
          },
        ],
        links: [
          {
            label: "NPM",
            href: "https://www.npmjs.com/package/react-bulk-form",
          },
          {
            label: "GitHub",
            href: "https://github.com/hjcdg1/react-bulk-form",
          },
        ],
      },
      viewTexportX: {
        title: "IT Eldorado (Blog)",
        intro: [
          "Personal tech blog built on the Notion API, aimed at automating both content management and deployment.",
        ],
        sections: [
          {
            heading: "Implementation highlights",
            bullets: [
              "Notion Database sync via Next.js 13 App Router server components",
              "SEO tuning with Open Graph and Schema markup",
              "Automated weekly deploy pipeline and visit/view dashboards",
            ],
          },
          {
            heading: "Outcome",
            bullets: [
              "Migrated 40+ major documents and reorganized categories/tags",
              "Reduced end-to-end publishing to under five minutes",
            ],
          },
        ],
        links: [
          { label: "Service", href: "https://it-eldorado.com" },
          {
            label: "GitHub",
            href: "https://github.com/hjcdg1/it-eldorado-blog",
          },
        ],
      },
      viewT: {
        title: "viewT",
        intro: [
          "A lightweight, user-focused version of LG Electronics' open-source license management platform.",
        ],
        sections: [
          {
            heading: "Role",
            bullets: [
              "Led Next.js-based frontend development",
              "Defined Swagger-backed API documentation and integration test scenarios",
            ],
          },
          {
            heading: "Results",
            bullets: [
              "Redefined key UX flows such as sorting, filtering, and modals",
              "Minimized migration costs by planning coexistence with the existing project",
            ],
          },
        ],
        links: [
          {
            label: "GitHub",
            href: "https://github.com/opensourceway/FOSSLight-Hub",
          },
        ],
      },
      hs: {
        title: "Hwaseong City signal monitoring system",
        intro: [
          "A service that tracks MapleStory auction listings in real time and sends Discord webhook alerts.",
        ],
        sections: [
          {
            heading: "Key implementation",
            bullets: [
              "Resolved CORS issues by using the Next.js server as a proxy for auction API calls",
              "Reduced traffic with React Query caching for identical conditions",
              "Designed a form UX that supports multi-condition alert rules",
            ],
          },
          {
            heading: "Operational experience",
            bullets: [
              "Added retry/backoff when Discord alerts were delayed",
              "Authored monitoring metrics based on daily alert traffic",
            ],
          },
        ],
        links: [
          { label: "Service", href: "https://maplealimi.com" },
          { label: "GitHub", href: "https://github.com/hjcdg1/maple-alimi" },
        ],
      },
      si: {
        title: "Siheung City public transit analytics system",
        intro: ["A system that analyzes public transit based on transit card data."],
        sections: [
          {
            heading: "Key features",
            bullets: [
              "Supports Kakao and Google login via Firebase Auth",
              "Auto-sorts favorites and recently sung songs",
              "Responsive UI built entirely with Tailwind CSS",
            ],
          },
        ],
        links: [
          { label: "Service", href: "https://what-to-sing.kr" },
          { label: "GitHub", href: "https://github.com/hjcdg1/what-to-sing" },
        ],
      },
      viewTLog: {
        title: "Big data processing log dashboard",
        intro: [
          "Dashboard visualizing status and progress of a Hadoop/YARN + MySQL traffic data pipeline.",
        ],
        sections: [
          {
            heading: "Key features",
            bullets: [
              "Supports Kakao and Google login via Firebase Auth",
              "Auto-sorts favorites and recently sung songs",
              "Responsive UI built entirely with Tailwind CSS",
            ],
          },
        ],
        links: [
          { label: "Service", href: "https://what-to-sing.kr" },
          { label: "GitHub", href: "https://github.com/hjcdg1/what-to-sing" },
        ],
      },
    },
    images: {
      erp: {
        title: "In-house ERP screens",
        items: [
          {
            src: "./img/project/erp/erp001.webp",
            caption: "Check field values and errors at a glance in the status panel",
          },
          {
            src: "./img/project/erp/erp002.webp",
            caption: "Check field values and errors at a glance in the status panel",
          },
          {
            src: "./img/project/erp/erp003.webp",
            caption: "Check field values and errors at a glance in the status panel",
          },
          {
            src: "./img/project/erp/erp004.webp",
            caption: "Check field values and errors at a glance in the status panel",
          },
          {
            src: "./img/project/erp/erp005.webp",
            caption: "Check field values and errors at a glance in the status panel",
          },
          {
            src: "./img/project/erp/erp006.webp",
            caption: "Check field values and errors at a glance in the status panel",
          },
        ],
      },
      viewTexportX: {
        title: "Traffic and spatial data analytics screens",
        items: [
          {
            src: "./img/project/view-t-new/view-t-new-001.webp",
            caption: "Hero area and latest posts section",
          },
          {
            src: "./img/project/view-t-new/view-t-new-002.webp",
            caption: "Hero area and latest posts section",
          },
          {
            src: "./img/project/view-t-new/view-t-new-003.webp",
            caption: "Hero area and latest posts section",
          },
          {
            src: "./img/project/view-t-new/view-t-new-004.webp",
            caption: "Hero area and latest posts section",
          },
        ],
      },
      viewT: {
        title: "Traffic and spatial data analytics screens",
        items: [
          {
            src: "./img/project/view-t/view-t-001.webp",
            caption: "Hero area and latest posts section",
          },
          {
            src: "./img/project/view-t/view-t-002.webp",
            caption: "Hero area and latest posts section",
          },
          {
            src: "./img/project/view-t/view-t-003.webp",
            caption: "Hero area and latest posts section",
          },
        ],
      },
      hs: {
        title: "Hwaseong City signal monitoring UI",
        items: [
          {
            src: "./img/project/hs/hs001.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
          {
            src: "./img/project/hs/hs002.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
          {
            src: "./img/project/hs/hs003.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
        ],
      },
      si: {
        title: "Siheung City public transit analytics system",
        items: [
          {
            src: "./img/project/si/si001.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
          {
            src: "./img/project/si/si002.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
          {
            src: "./img/project/si/si003.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
          {
            src: "./img/project/si/si004.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
          {
            src: "./img/project/si/si005.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
          {
            src: "./img/project/si/si006.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
          {
            src: "./img/project/si/si007.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
          {
            src: "./img/project/si/si008.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
        ],
      },
      viewTLog: {
        title: "Big data processing log dashboard",
        items: [
          {
            src: "./img/project/view-t-log/view-t-log-001.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
          {
            src: "./img/project/view-t-log/view-t-log-002.webp",
            caption: "Condition builder and multi-alert settings screen",
          },
        ],
      },
    },
  },
  career: {
    title: "CAREER",
    companies: {
      qbicware: {
        logoText: "Qbicware",
        period: "2022.10 - 2025.10 (3 years)",
        description:
          '"An IT company developing traffic solutions using transportation big data and GIS"',
        roles: {
          frontend: "Frontend development",
          backend: "Backend development",
        },
        highlights: {
          erp: {
            title: "In-house ERP system development",
            period: "2H 2024 - 1H 2025",
            description:
              "Developed an in-house ERP system (approvals, HR, attendance) (FULLSTACK)",
          },
          viewT: {
            title: "View-T system maintenance",
            period: "1H 2024 ~ 1H 2025",
            description:
              "Big data processing monitoring solution and annual data refresh (FULLSTACK)",
          },
          localBusiness: {
            title: "Traffic big-data visualization solution",
            period: "2H 2022 ~ 2H 2025",
            description:
              "Developed signal monitoring and public transit monitoring systems (FULLSTACK)",
          },
        },
      },
    },
  },
  footer: {
    caption: "© 2025. Park Jeong Hyeon. All rights reserved.",
  },
};

export default en;
