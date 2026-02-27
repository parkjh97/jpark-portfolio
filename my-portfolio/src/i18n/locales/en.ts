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
    exportPdf: "Save PDF",
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
          htmlCssJs: { title: "Markup & Language" },
          reactNext: { title: "Application Frameworks" },
          visualization: { title: "State & Data Visualization" },
          tooling: { title: "Build & Tooling" },
        },
      },
      backendDb: {
        title: "Back-End & DB",
        items: {
          spring: { title: "Spring Ecosystem" },
          mybatis: { title: "Persistence Layer" },
          databases: { title: "Databases" },
        },
      },
      etc: {
        title: "ETC",
        items: {
          collaboration: { title: "Collaboration" },
          infra: { title: "Ops & Infra" },
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
      portfolio: {
        name: "Personal portfolio website",
        period: "2025.07 ~ present",
        summary:
          "Portfolio site built with React 19 + TypeScript, featuring Korean/English i18n and PDF export",
        details: [
          "Designed and deployed a React 19 + TypeScript + Vite SPA to GitHub Pages",
          "Built an i18next multilingual system — browser language detection, localStorage caching",
          "Data-UI separation architecture, custom SVG icon system, @media print PDF export",
        ],
      },
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
          "Developed traffic signal optimization analysis APIs — signal cycle, phase, and TOD data queries with 5+ table JOINs",
          "Built the Smart Intersection dashboard module end-to-end — 24-hour CCTV-based occupancy/speed/volume time-series visualization",
          "Implemented MongoDB-based vehicle path simulation — paginated queries on the POINTPATH collection filtered by time range",
          "Integrated ITS OpenAPI for real-time traffic incident data filtered to Hwaseong City coordinate boundaries",
        ],
      },
      si: {
        name: "Siheung City public transit analytics system",
        period: "2023.07 ~ 2023.12",
        summary: "Public transit analytics system based on transit card big data",
        details: [
          "Built a visualization system for 10+ transit indicators (traffic volume, boarding/alighting by time slot and route, OD analysis, profit analysis)",
          "Rendered large-scale GeoJSON (up to 20,000 features) map layers using Deck.gl",
          "Processed and integrated ~106 routes, 3,000 stops, and ~10,000 boarding/alighting records into the dashboard",
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
      portfolio: {
        title: "Personal portfolio website",
        intro: [
          "A portfolio site designed, developed, and deployed using React 19 + TypeScript + Vite.",
          "All components are built from scratch without external UI libraries, with Korean/English i18n support via i18next.",
        ],
        sections: [
          {
            heading: "Tech stack",
            bullets: [
              "Framework: React 19.1.1 + TypeScript 5.9.3",
              "Build: Vite 7.1.7 + @vitejs/plugin-react",
              "Styling: Tailwind CSS v4 + CSS Modules + CSS Custom Properties",
              "i18n: i18next, react-i18next, i18next-browser-languagedetector",
              "Deploy: GitHub Pages (gh-pages)",
            ],
          },
          {
            heading: "Key implementations",
            bullets: [
              "i18n with i18next — object-type translation data cast to TypeScript interfaces via returnObjects option for type safety",
              "Custom SVG icon system — icons implemented without libraries; IconName union type prevents typos at compile time",
              "Modal accessibility — role=\"dialog\", aria-modal, ESC key close, background scroll lock",
              "PDF export — web/print layouts separated via @media print, auto-generates TOC, images, and content sections",
              "useScrollToSection custom hook — offset-corrected smooth scroll with useCallback memoization",
            ],
          },
          {
            heading: "Technical challenges",
            bullets: [
              "i18n object type safety — cast t(key, {returnObjects: true}) return values to custom interfaces to ensure runtime type safety",
              "Bundle size minimization — no icon library; only required icons written as SVG paths directly to eliminate unused bundle",
            ],
          },
        ],
        links: [
          { label: "Service", href: "https://parkjh97.github.io/jpark-portfolio/" },
          { label: "GitHub", href: "https://github.com/parkjh97/jpark-portfolio" },
        ],
      },
      erp: {
        title: "In-house ERP System",
        intro: [
          "Led the full lifecycle of an in-house ERP system — from requirements analysis through design, development, deployment, and ongoing operations.",
          "Built electronic approval (draft / approve / reject), attendance & leave management, and an admin module on Next.js 14 App Router.",
        ],
        sections: [
          {
            heading: "Tech Stack",
            bullets: [
              "Framework: Next.js 14.2.5 (App Router) + TypeScript",
              "Auth: NextAuth.js v4 + @auth/pg-adapter (PostgreSQL session)",
              "State: Zustand (sidebar), useReducer (dynamic document form)",
              "Styling: Tailwind CSS v3",
              "Notifications: web-push, Webhook (internal messaging tool integration)",
              "Utils: date-fns, jspdf, react-to-print, jszip",
            ],
          },
          {
            heading: "Key Implementations",
            bullets: [
              "Electronic approval — JSON-driven dynamic document form rendering with multi-level approver & reference line management (draft · approve · reject flow)",
              "Webhook notifications — real-time alerts to internal messaging tool on approve/reject/reference events, parallel dispatch via Promise.all",
              "Parallel Routes + Intercepting Routes — URL-based modal routing via @modal slot; back-navigation and page refresh work correctly",
              "Middleware auth guard — checks cookie session and auto-redirects unauthenticated requests to /login across all routes",
              "useReducer dynamic form — branches docBody initialisation by document type (leave / general) for centralised, consistent state management",
            ],
          },
          {
            heading: "Technical Challenges",
            bullets: [
              "JSON dynamic form state — parses server-side doc_form_data by document type, initialises each field via useReducer dispatch to keep state consistent",
              "Parallel Webhook dispatch — sends notifications to multiple reference users simultaneously with Promise.all, eliminating sequential-processing delays",
              "Intercepting Routes modal — splits modal entry into a dedicated route so direct URL access and page refresh still render the full page correctly",
            ],
          },
        ],
      },
      viewTexportX: {
        title: "Traffic and Spatial Data Web Analytics Service",
        intro: [
          "An interactive web service that visualizes and analyzes traffic and environmental indicators by road segment and administrative unit.",
          "Solely responsible for frontend architecture design, GeoServer integration, and indicator visualization.",
        ],
        sections: [
          {
            heading: "Tech Stack",
            bullets: [
              "Framework: React 19 + TypeScript + Vite",
              "State: Zustand",
              "Map: GeoServer + in-house map engine (XqbMap), WMS/VectorTile",
              "UX: DnD Kit (layer sorting · draggable modals)",
            ],
          },
          {
            heading: "Key Implementations",
            bullets: [
              "Designed and implemented the frontend architecture — React 19 + TypeScript + Vite, Zustand state management, DnD Kit for layer sorting and draggable modal UX",
              "Integrated GeoServer with the in-house map engine (XqbMap) — dynamic WMS/VectorTile updates and link/administrative-unit (view) toggle support",
              "Visualized diverse traffic and environmental indicators — estimated traffic, VKT, average speed, congestion (frequency/duration) and cost, emissions (CO/NOx/PM/VOC)",
            ],
          },
          {
            heading: "Technical Challenges",
            bullets: [
              "Designed the pipeline: analysis options → parameter auto-combination (buildParsingParam) → internal API call → map layer/legend auto-generation",
              "Dual-map comparison toggle, per-map toast alerts, global loading overlay, layer card condition summary and instant style application",
            ],
          },
        ],
      },
      viewT: {
        title: "viewT Maintenance (Traffic and Spatial Data Analytics)",
        intro: [
          "Maintained a service providing an analytics environment based on navigation, mobile, and transit card big data.",
          "Participated full-stack — from annual data refresh pipeline improvements to map visualization optimization.",
        ],
        sections: [
          {
            heading: "Tech Stack",
            bullets: [
              "Frontend: JavaScript, CSS, OpenLayers",
              "Map: GeoServer (WMS/WFS)",
              "Backend: Spring Framework, MyBatis",
              "DB: MySQL, MongoDB",
            ],
          },
          {
            heading: "Key Contributions",
            bullets: [
              "Improved the annual large-scale spatial data collection and processing pipeline — optimized MyBatis-based Batch Insert to enhance DB throughput",
              "Maintained OpenLayers + GeoServer map visualization logic and optimized WMS/WFS layer rendering",
              "Enhanced existing JavaScript-based UI features and refactored CSS",
            ],
          },
          {
            heading: "Technical Highlights",
            bullets: [
              "MyBatis Batch Insert optimization for high-throughput spatial data loading",
              "Dynamic WMS/WFS layer updates and rendering optimization with OpenLayers",
            ],
          },
        ],
      },
      hs: {
        title: "Hwaseong City signal monitoring system",
        intro: [
          "A web-based traffic signal optimization analytics system that collects, analyzes, and visualizes signal data across Hwaseong City.",
          "Built on the eGovFrame standard framework; personally responsible for developing the Smart Intersection monitoring module.",
        ],
        sections: [
          {
            heading: "Key implementations",
            bullets: [
              "Developed signal cycle and phase data query APIs — multi-table JOIN-based query structure optimized for large-scale data",
              "Built the Smart Intersection dashboard module from scratch — 24-hour time-series visualization of CCTV-based occupancy, speed, and traffic volume (owned module)",
              "Integrated the ITS OpenAPI to collect real-time accident/incident data filtered to Hwaseong City coordinate boundaries",
            ],
          },
          {
            heading: "Technical highlights",
            bullets: [
              "Advanced MyBatis dynamic SQL — dynamic table names and condition branching via <choose>/<foreach>; spatial data handling with GEOM/ASTEXT",
              "eGovFrame 3.9.0 standard 4-layer architecture (Controller → Service → ServiceImpl → DAO)",
              "HikariCP 4.0.3 connection pool, AOP-based global exception handling, LoggingInterceptor for request tracking",
            ],
          },
        ],
      },
      si: {
        title: "Siheung City public transit analytics system",
        intro: [
          "A web system that analyzes and visualizes public transit status in Siheung City based on transit card big data.",
          "Supports transport policy decision-making by presenting boarding/alighting data by route, stop, and time slot on maps and charts.",
        ],
        sections: [
          {
            heading: "Key implementations",
            bullets: [
              "Built a visualization system for 10+ transit indicators (traffic volume, boarding/alighting by time slot and route, OD analysis, profit analysis)",
              "Rendered large-scale GeoJSON (up to 20,000 features) map layers using Deck.gl",
              "Processed and integrated ~106 routes, 3,000 stops, and ~10,000 boarding/alighting records into the dashboard",
            ],
          },
          {
            heading: "Technical highlights",
            bullets: [
              "Spring + MyBatis APIs for large-scale transit data — CTE, FULL JOIN, ROW_NUMBER window function, and PERCENTILE_CONT for percentile-based statistics",
              "Integrated GeoServer WMS/WFS for dynamic spatial data layer rendering on the map",
              "Interactive map visualization using Deck.gl ScatterplotLayer and PathLayer",
            ],
          },
          {
            heading: "Security & search",
            bullets: [
              "BCrypt password hashing and CAPTCHA authentication for secure login",
              "Custom Korean character decomposition algorithm for optimized stop-name initial-consonant search",
              "Session timeout management and XSS/SQL Injection defense filters",
            ],
          },
        ],
      },
      viewTLog: {
        title: "Big data processing log dashboard",
        intro: [
          "A real-time monitoring dashboard that visualizes the status and progress of a Hadoop/YARN + MySQL traffic data pipeline.",
          "Built as a single repository combining frontend and backend using Next.js App Router.",
        ],
        sections: [
          {
            heading: "Key implementations",
            bullets: [
              "Single-repo setup combining frontend and backend with Next.js App Router + API Routes",
              "Automated condition/label generation using MySQL stored procedures and information_schema metadata",
              "Real-time job progress tracking and timeout handling via Hadoop/YARN REST API integration",
            ],
          },
          {
            heading: "Technical highlights",
            bullets: [
              "Multi-series chart with ratio-view toggle using ApexCharts for pipeline trend comparison",
              "Global dashboard filter state management with Zustand",
              "Responsive layout built with Tailwind CSS",
            ],
          },
        ],
      },
    },
    images: {
      erp: {
        title: "In-house ERP screens",
        items: [
          {
            src: "./img/project/erp/erp001.webp",
            caption: "ERP system main dashboard",
          },
          {
            src: "./img/project/erp/erp002.webp",
            caption: "Member annual leave information view",
          },
          {
            src: "./img/project/erp/erp003.webp",
            caption: "Member attendance information view",
          },
          {
            src: "./img/project/erp/erp004.webp",
            caption: "Document drafting screen",
          },
          {
            src: "./img/project/erp/erp005.webp",
            caption: "Document form template settings",
          },
          {
            src: "./img/project/erp/erp006.webp",
            caption: "Holiday settings screen",
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
            title: "In-house ERP System Development",
            period: "2024.11 ~ 2025.01",
            description:
              "Designed, built, and operated an ERP on Next.js 14 App Router — electronic approval (draft · approve · reject), attendance & leave management, and admin module (Full-stack)",
          },
          viewT: {
            title: "View-T System Maintenance",
            period: "2024.01 ~ 2025.10",
            description:
              "Developed a big-data processing monitoring dashboard and improved the annual spatial-data refresh pipeline (Full-stack)",
          },
          localBusiness: {
            title: "Traffic Big-Data Visualization Solutions",
            period: "2022.10 ~ 2025.10",
            description:
              "Built traffic visualization systems for local governments — signal monitoring for Hwaseong-si and public transit analytics for Siheung-si (Full-stack)",
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
