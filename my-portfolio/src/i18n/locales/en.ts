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
      languages: {
        title: "Languages",
        items: {
          core: { title: "Programming Languages" },
        },
      },
      frontend: {
        title: "Front-End",
        items: {
          htmlCssJs: { title: "Markup & Language" },
          tooling: { title: "Build & Tooling" },
        },
      },
      backendOps: {
        title: "Back-End & Ops",
        items: {
          spring: { title: "Spring Ecosystem" },
          mybatis: { title: "Persistence Layer" },
          databases: { title: "Databases" },
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
      },
      viewTexportX: {
        name: "Traffic and spatial data web analytics service",
        period: "2025.04 ~ 2025.05",
      },
      viewT: {
        name: "viewT maintenance (traffic and spatial data analytics)",
        period: "2024.01 ~ 2025.10",
      },
      hs: {
        name: "Hwaseong City signal monitoring system",
        period: "2022.12 - 2023.04",
      },
      si: {
        name: "Siheung City public transit analytics system",
        period: "2023.07 ~ 2023.12",
      },
      viewTLog: {
        name: "Big data processing log dashboard",
        period: "2024.11 ~ 2025.01",
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
        overview: {
          description: "A full-stack internal ERP system designed, developed, deployed, and operated solo — covering electronic approval, attendance/leave, and admin modules built on Next.js 14 App Router with 65 API routes, 30+ pages, and 15+ tables.",
          team: "Solo development (requirements · design · dev · deploy · ops)",
          role: "Full-stack — Next.js App Router frontend, API Routes backend, PostgreSQL schema design & operations",
        },
        details: [
          {
            title: "Custom NextAuth.js PostgreSQL Adapter",
            background: "The default NextAuth adapter imposed a schema that conflicted with the existing in-house DB structure (tb_user + tb_user_log history pattern), requiring a fully custom adapter.",
            points: [
              "getSessionAndUser uses MAX(crt_date) subquery to JOIN the latest user record and returns custom session fields: admin_code, dept_code, working_hours",
              "POST /api/login Route Handler: bcrypt verify → UUID session token → httpOnly cookie",
              "Dynamic expiry: 30 days (keepLoggedIn) or 1 day",
              "Discovered NextAuth internal bug (userId undefined in updateSession) and patched by querying user_seq directly via session_token",
            ],
            result: "Adopted NextAuth session auth while preserving the existing DB schema with zero migration cost",
          },
          {
            title: "Multi-step Approval Workflow State Machine",
            background: "The system required complex state transitions: auto-activating the next approver on approval, and rolling back leave records on rejection.",
            points: [
              "PostgreSQL Stored Function fn_update_appr_status_doc() auto-activates the next approver",
              "Rejection atomically rolls back tb_user_pay_leave_log within a single transaction",
              "Document draft wraps 5 tables (tb_doc, tb_doc_state, tb_doc_rfrn_status, tb_user_pay_leave_log, tb_doc_evdnc_file) in one transaction",
            ],
            result: "Stable state transitions with zero data integrity issues across approve-reject-redraft flows",
          },
          {
            title: "HTML → PDF → ZIP Batch Download Pipeline",
            background: "Users needed to download multiple approval documents as PDFs in a single ZIP file, requiring HTML rendering → capture → PDF generation → ZIP packaging.",
            points: [
              "renderToString converts document components to HTML; input/select replaced with div for html2canvas compatibility",
              "html2canvas scale:4 high-resolution capture → jsPDF A4 PDF generation",
              "JSZip bundles multiple PDFs into a single ZIP for batch download",
              "Custom Tailwind utilities: w-a4 (793px) · h-a4 (1100px) for exact A4 sizing",
            ],
            result: "Batch PDF export at print quality with full A4 formatting",
          },
          {
            title: "Jandi Webhook + PWA Web Push Notifications",
            background: "Approval events (draft/approve/reject/reference) needed to trigger both Jandi messenger alerts and browser push notifications simultaneously.",
            points: [
              "PostgreSQL Function fn_doc_message_info() queries all recipients at once; messages composed per event type",
              "N reference users dispatched in parallel via Promise.all to minimize latency",
              "VAPID-based web-push PWA notifications — work even when the browser tab is closed",
            ],
            result: "Dual notification (Jandi + browser push) on every approval event, improving response speed",
          },
          {
            title: "Next.js Middleware Global Auth Guard",
            background: "Needed to enforce authentication across 30+ pages without duplicating auth logic in each page component.",
            points: [
              "A single middleware.ts checks cookie presence for 30+ routes in Edge Runtime with no added latency",
              "Regex matcher automatically excludes API routes, static files, and public pages",
            ],
            result: "Centralized auth logic; new pages are protected automatically without extra code",
          },
        ],
        reflection: [
          "Owning the full product lifecycle — from planning to production — forced me to deeply evaluate every technical trade-off rather than just implementing what was asked.",
          "Discovering and patching a NextAuth internal bug by reading source code taught me never to treat open-source libraries as black boxes.",
          "Designing PostgreSQL transactions and stored functions made me think carefully about where business logic should live in a system — and our data stayed consistent throughout.",
          "Knowing that bugs directly impacted coworkers' daily workflows kept me sharp about testing and error handling in ways I hadn't experienced before.",
        ],
      },
      si: {
        overview: {
          description: "A dashboard providing 11 analytics boards for Siheung City's public transit operations — built on transit-card big data with custom D3.js SVG charts and PostGIS spatial queries.",
          team: "Team project (3 people)",
          role: "Full-stack — Spring backend APIs, D3.js custom chart implementation, PostGIS spatial query authoring",
        },
        details: [
          {
            title: "PostgreSQL CTE / Window Function Analytics Queries",
            background: "Complex aggregations — peak-hour congestion by time band, profitability rankings, cumulative transfers — needed to be handled in single queries without deep subquery nesting.",
            points: [
              "CTE (WITH clause) separates multi-stage aggregation for readability and reuse",
              "Window Functions (RANK, ROW_NUMBER, SUM OVER) compute rankings and running totals in one pass",
              "CASE/WHEN builds a 4-time-band × bus-type crosstab in a single query",
              "FULL JOIN preserves all rows even when some time-slot data is missing",
            ],
            result: "Complex multi-stage aggregations handled in single queries; APIs simplified and query readability greatly improved",
          },
          {
            title: "D3.js + Web Components Custom SVG Chart Engine",
            background: "The project required charts matching custom design specs without using Chart.js or Highcharts, and components needed to be reusable across multiple dashboard pages.",
            points: [
              "Line, pie, stacked-bar, and combo charts built directly with D3.js + Web Components",
              "Horizontal/vertical orientation and axis position (start/end) handled by a single formula",
              "SMIL animate interpolates SVG paths on data update for smooth transitions",
              "Shadow DOM isolates styles; Dispatcher custom event bus handles inter-component communication",
            ],
            result: "Full chart set for 11 dashboards built without libraries; reusable component system without React/Vue",
          },
          {
            title: "PostGIS Spatial Function O/D Map Visualization",
            background: "The O/D analysis map needed center coordinates of district polygons as arrow origins — ideally derived in the DB layer without a separate GIS middleware.",
            points: [
              "ST_PointOnSurface() + ST_X()/ST_Y() extract polygon centroids inside the query",
              "Traffic volume and coordinate data returned together in one query, minimizing API round-trips",
              "No separate GIS server needed — PostGIS handles all spatial operations",
            ],
            result: "O/D map visualization built without a GIS middleware layer",
          },
          {
            title: "QMap / QRequestMappingHandlerAdapter Framework Customization",
            background: "Every controller repeated the same snake_case → camelCase conversion boilerplate for MyBatis results.",
            points: [
              "QMap (extends ListOrderedMap) auto-converts snake_case column names to camelCase",
              "QRequestMappingHandlerAdapter auto-binds QMap to all controllers",
              "Eliminated parameter-extraction boilerplate, keeping controllers concise",
            ],
            result: "Reduced repetitive code across all controllers; column-name conversion bugs eliminated at the root",
          },
        ],
        reflection: [
          "Building D3.js charts without a library gave me a deep understanding of the math and DOM manipulation that charting libraries abstract away.",
          "Working with PostGIS for the first time showed me that a database can be much more than a storage layer — it can be a spatial computation engine.",
          "Spec changes mid-project — a common SI reality — pushed me to design queries and components with extensibility in mind from the start.",
        ],
      },
      viewT: {
        overview: {
          description: "A professional analytics platform that visualizes national traffic big data (T-map GPS, field detectors, public transit) on GIS maps. Led the Java backend exclusively — 50+ REST APIs, 300+ queries.",
          team: "Team project (5 people)",
          role: "Backend lead — Java Spring, MyBatis, MySQL + MongoDB dual-DB, OpenLayers API design & development",
        },
        details: [
          {
            title: "WGS84 ↔ KATEC ↔ TM Coordinate Conversion Engine",
            background: "Korean traffic DBs use KATEC/TM coordinates, while OpenLayers requires WGS84. No free Java GIS conversion library was available.",
            points: [
              "TM projection formula (Gauss-Krüger) implemented in Java with ellipsoid parameters (semi-major axis, flattening)",
              "Bidirectional conversion: WGS84 ↔ KATEC ↔ TM, including Datum offset",
              "Iterative convergence algorithm handles the inverse transformation (map coords → KATEC)",
              "Haversine formula for geodesic distance calculation included",
            ],
            result: "All 13 traffic-indicator map visualizations enabled without a GIS library",
          },
          {
            title: "Graham Scan O(n log n) Convex Hull on the JVM",
            background: "The TimeMap feature needed a reachable-area boundary polygon generated in real time without calling GeoServer ST_ConvexHull.",
            points: [
              "Graham Scan implemented in Java: polar-angle sort + CCW stack for O(n log n) convex hull",
              "Extracts minimum vertex set for the boundary polygon",
              "Processed entirely in the JVM — no GeoServer round-trip",
            ],
            result: "Real-time reachable-area polygon generation with no GeoServer dependency",
          },
          {
            title: "MyBatis Dynamic Table Names for Dozens of Tables",
            background: "Traffic indicators and years each have separate tables, totaling dozens. Writing individual Mappers for each would cause massive duplication.",
            points: [
              "${DataBase}·${DBTable} parameters select tables at runtime; 20 Mappers cover 300+ queries",
              "Indicator type and year are passed as parameters for runtime table selection",
              "choose/when tags handle sort direction and aggregation mode as parameters",
            ],
            result: "Dozens of tables managed with 20 Mappers; adding a new year requires no code changes",
          },
          {
            title: "SXSSF Streaming Excel for Large-Scale Exports",
            background: "Exporting hundreds of thousands of traffic records with standard XSSFWorkbook caused OutOfMemoryErrors.",
            points: [
              "SXSSFWorkbook(100) flushes every 100 rows to disk, minimizing heap usage",
              "ExcelWriter · ExcelHeaderItem · TableRowHandler layer structure for separation of concerns",
              "MySQL + MongoDB results merged into a single Excel sheet",
            ],
            result: "Hundreds of thousands of rows exported with no OOM errors",
          },
        ],
        reflection: [
          "Implementing the coordinate conversion formula from first principles gave me a real appreciation for the math behind GIS — and confidence that domain knowledge can be translated into code without relying on a library.",
          "Coding Graham Scan from an algorithm textbook to solve an actual product problem made abstract CS concepts feel tangible and immediately useful.",
          "As the sole backend dev, aligning API specs with frontend teammates highlighted how critical clear communication and API documentation are in team projects.",
        ],
      },
      hs: {
        overview: {
          description: "An ITS system that collects, analyzes, and visualizes intersection signal data across Hwaseong City in real time — featuring a triple-DB architecture (MySQL + MongoDB + Tibero) and WebGL map visualization.",
          team: "Team project (4 people)",
          role: "Full-stack — Spring backend, MySQL + MongoDB + Tibero triple-DB integration, Deck.GL WebGL map layer implementation",
        },
        details: [
          {
            title: "MySQL + MongoDB + Tibero Triple-DB Architecture",
            background: "Static traffic network data (MySQL), OBU IoT trajectories (MongoDB), and smart-intersection data (Tibero) had to be unified in a single service.",
            points: [
              "Single Service method queries all three DBs and merges results in the Java layer",
              "Returns a unified JSON to the frontend — client never handles multi-source data",
              "Separate DataSources: HikariCP (MySQL), MongoDB Java Driver, Tibero JDBC",
            ],
            result: "Three heterogeneous DBs exposed through a single API; frontend data source complexity eliminated",
          },
          {
            title: "OBU IoT Vehicle Trajectory Analysis in MongoDB",
            background: "OBU devices generate trajectory data when passing intersections. The system needed real-time analysis of entry/exit direction and passage time.",
            points: [
              "$in operator batch-queries the entry link list, minimizing DB round-trips",
              "Searches the uTime array for vehicles within valid time windows (Seoul timezone)",
              "Reconstructs entry/exit direction from pdt/mdt arrays for visualization",
            ],
            result: "Real-time OBU trajectory analysis and intersection entry/exit direction visualization",
          },
          {
            title: "MyBatis Dynamic Table Names for Multi-Indicator Tables",
            background: "Dozens of tables are split by indicator type (speed/congestion/volume). Individual Mappers for each would cause severe code duplication.",
            points: [
              "${nodeTable}·${tableTnvt} parameters dynamically select the table at runtime",
              "choose/when handles sort direction and aggregation mode as parameters",
              "33 Mapper XMLs manage 5,705 SQL statements",
            ],
            result: "Dozens of tables managed with a small set of Mappers; new indicators require only parameter changes",
          },
          {
            title: "TxDeckGL WebGL Multi-Layer Rendering System",
            background: "Simultaneous rendering of link, node, real-time traffic, and zone layers on a WebGL map was required using the in-house TxDeckGL wrapper.",
            points: [
              "TxDeckGL renders VectorLine (links), Point (nodes), real-time traffic, and Polygon (zones) simultaneously",
              ".clone() pattern updates layer styles immutably to minimize re-renders",
              "Signal Ring/Phase structure parsed and structured for signal-timing visualization",
            ],
            result: "High-performance WebGL multi-layer map visualization with real-time traffic data",
          },
        ],
        reflection: [
          "Working with three heterogeneous DBs in one service deepened my appreciation for how each DB type (relational/document/legacy) has its own strengths and query strategies.",
          "Diving into WebGL map rendering sparked my curiosity about GPU-based rendering in the browser and how to efficiently visualize large spatial datasets on the client.",
          "At this scale (197 Java files, 100+ APIs), I experienced first-hand why consistent code structure and naming conventions matter enormously for a team.",
        ],
      },
      viewTexportX: {
        overview: {
          description: "A GIS web service that visualizes 13 traffic indicators on a 6-level road network, supporting link- and administrative-unit–level spatial analysis. Built the full React 19 SPA frontend solo.",
          team: "Solo development (frontend)",
          role: "Frontend — React 19 SPA, Zustand state management, OpenLayers map integration, GeoServer connectivity",
        },
        details: [
          {
            title: "Zustand Multi-Map Instance Dictionary Pattern",
            background: "Multiple map instances needed to be managed independently in a single store, with future side-by-side comparison view in mind.",
            points: [
              "{ [mapId]: XqbMap } dictionary in a single Zustand store manages multiple maps independently",
              "Targeted updates by mapId avoid affecting other map states",
              "Designed for future dual-map comparison view with minimal additional effort",
            ],
            result: "Multiple map instances managed independently from a single store; extensible for comparison views",
          },
          {
            title: "dnd-kit Dual Drag-and-Drop (Layer Sort + Modal Drag)",
            background: "Two distinct DnD patterns were needed simultaneously: sortable layer panel and freely-draggable analysis modals.",
            points: [
              "DndContext + SortableContext implements sortable layer panel",
              "useDraggable + restrictToWindowEdges implements free-position modal drag",
              "Layer reorder completion syncs actual map layer z-index via map.reorderIdx()",
            ],
            result: "Both DnD patterns from a single library; layer order and map z-index stay in sync in real time",
          },
          {
            title: "OptComponent Declarative Pipeline Pattern",
            background: "Each of the 13 traffic indicators had its own analysis condition UI and API parameter logic. Individual components per indicator would cause severe duplication.",
            points: [
              "Declaring an OptComponentProps[] array per indicator auto-renders the condition UI",
              "buildSelectedParams/buildParsingParam auto-compose API parameters",
              "anlyOptToGeoViewParam converts to GeoServer viewParam strings — full 3-stage auto-processing",
              "JSON.stringify deep-compares nested arrays containing function references for change detection",
            ],
            result: "13 indicators managed declaratively; adding a new one requires only a config array entry",
          },
          {
            title: "GeoServer SLD Real-Time Style Sync",
            background: "Color legends (5 bands, min–max) needed to update in GeoServer in real time based on API response values per indicator.",
            points: [
              "NewLayerStyleParser/UpdateLayerStyleParser auto-apply API MinMax to 5-band color ranges",
              "Speed indicators use fixed domain values (speedMinMax) for consistent legends",
              "convertStyleComponentToStyleData converts LayerStyleColorTable (nested array) to flat GeoServer geoEvn key:value string",
            ],
            result: "Per-indicator real-time color legend sync; client legend and GeoServer SLD always in agreement",
          },
        ],
        reflection: [
          "Designing the full frontend architecture solo gave me experience making every structural decision myself — from component design to state management strategy.",
          "Using dnd-kit's low-level primitives to implement two different DnD patterns showed me how a library's minimal abstraction can actually provide greater flexibility.",
          "The OptComponent pattern made me appreciate declarative programming — reducing duplication while flexibly expressing each indicator's individual characteristics.",
        ],
      },
      viewTLog: {
        overview: {
          description: "An internal operations monitoring system that collects, queries, and visualizes processing counts, errors, and timing logs across the R0→R1→S0→S1→P1 five-stage big data pipeline.",
          team: "Solo development (requirements · design · dev)",
          role: "Full-stack — Next.js BFF pattern, MySQL direct connection, ApexCharts visualization",
        },
        details: [
          {
            title: "Next.js Route Handlers BFF Pattern",
            background: "The project needed DB access and data processing without spinning up a separate Spring backend server.",
            points: [
              "10 Route Handlers connect directly to DB via mysql2 Pool (connectionLimit:10, keepAlive)",
              "Stored Procedures (ProcessTablesForProcessCd, pGetProcessConditonInfoData) delegate complex aggregations to the DB layer",
              "ApexCharts rendered client-only via next/dynamic + ssr:false to avoid window reference errors in SSR",
            ],
            result: "Full service built with Next.js alone — no separate backend server, simplified infrastructure",
          },
          {
            title: "information_schema Dynamic Column Metadata",
            background: "Every DB schema change required manual frontend code updates, creating maintenance overhead.",
            points: [
              "API queries information_schema.columns at runtime to get column names and Korean comments",
              "Frontend auto-generates table headers and column filter UI — no code change needed when DB schema evolves",
              "dynamicMapDataToCode batch-converts numeric DB codes to Korean labels via a code table",
            ],
            result: "Frontend adapts automatically to DB column changes with zero code modifications",
          },
          {
            title: "Client-Side Yearly/Monthly Data Aggregation",
            background: "Changing the aggregation granularity (daily → monthly → yearly) required API re-calls, slowing the UI response.",
            points: [
              "Initial load fetches all daily raw data; client reduces it to monthly/yearly on the fly",
              "process_time averages while count columns sum — aggregation logic branches correctly",
              "Switching granularity is instantaneous — no API re-call required",
            ],
            result: "Instant aggregation-level switching with no additional API calls",
          },
          {
            title: "requestAnimationFrame-Based Accurate Notification Timer",
            background: "setTimeout is throttled in inactive browser tabs, causing notification dismissal to be delayed or missed.",
            points: [
              "performance.now()-based rAF loop accurately detects 4-second elapsed time",
              "Works correctly regardless of browser tab activity state",
            ],
            result: "Accurate notification timer regardless of tab visibility",
          },
        ],
        reflection: [
          "Using Next.js as a BFF for the first time showed me just how productive a full-stack framework can be — shipping a complete service without a separate backend server was genuinely fast.",
          "The information_schema approach felt over-engineered at first, but when a DB column was added and the frontend just adapted with zero code change, I understood the real value of that flexibility in production.",
          "Having coworkers as users meant direct, fast feedback loops — which sharpened my instinct for what a real user actually needs versus what I assumed they needed.",
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
    caption: "© 2026. Park Jeong Hyeon. All rights reserved.",
  },
};

export default en;
