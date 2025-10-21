const en = {
  brand: "CDG's Portfolio",
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
    title: "- Choi Deok Gyeong -",
    subtitle: "Front-end Developer Portfolio",
    intro: [
      "Hello.",
      "I'm Choi Deok Gyeong, a front-end developer",
      "who focuses on what truly matters.",
    ],
    cta: "Discover more ↓",
  },
  about: {
    title: "ABOUT ME",
    fields: {
      name: { label: "Name", value: "Choi Deok Gyeong" },
      birth: { label: "Birthday", value: "1997.01.17" },
      location: { label: "Location", value: "Gwanak-gu, Seoul, Republic of Korea" },
      phone: { label: "Phone", value: "+82 10-4582-5037" },
      email: { label: "Email", value: "hjcdg197@gmail.com" },
      education: {
        label: "Education",
        value: "Seoul National University (Computer Science and Engineering)",
      },
    },
  },
  skills: {
    title: "SKILLS",
    groups: {
      language: { title: "Language" },
      frontend: { title: "Frontend" },
      backend: { title: "Backend" },
      devops: { title: "DevOps" },
    },
  },
  archiving: {
    title: "ARCHIVING",
    items: {
      github: {
        title: "github.com/hjcdg1",
        description: "Primary source-code repository",
      },
      blog: {
        title: "it-eldorado.com",
        description: "Blog for sharing learnings and insights",
      },
    },
  },
  projects: {
    title: "PROJECTS",
    filterLabel: "Show featured projects only",
    ctas: {
      readme: "README",
      images: "Images",
    },
    items: {
      reactBulkForm: {
        name: "react-bulk-form",
        period: "2025.03",
        summary: "A lightweight React utility for bulk form-state management",
        details: [
          "Manage form field values and validation errors together with declarative rules",
          "Track form or field-level status changes at a glance",
          "Minimize extra UI layers by abstracting form-state driven UX",
        ],
      },
      itEldorado: {
        name: "IT Eldorado (Blog)",
        period: "2024.09 (Solo project)",
        summary: "Personal blog powered by the Notion API and database",
        details: [
          "Built to resolve the limitations of my previous Tistory-powered blog",
          "Eliminated the need for a dedicated DB server by integrating directly with Notion",
          "Strengthened SEO and executed a search-engine migration plan",
          "Implemented infinite scroll, visit and view tracking, comments, and reactions",
        ],
      },
      fosslightHubLite: {
        name: "FOSSLight Hub Lite",
        period: "2023.09 - 2023.12 (2-person team)",
        summary: "A streamlined user-facing remake of LG Electronics' FOSSLight Hub",
        details: [
          "Commissioned to deliver a simplified experience for non-admin users",
          "Integrated into the existing FOSSLight Hub environment to preserve accessibility",
          "Implemented sorting and filtering synchronized with URL query parameters plus modal UX",
          "Redesigned UI and UX end to end to improve overall usability",
        ],
      },
      mapleAuctionAlarm: {
        name: "Maple Auction Notifier",
        period: "2023.08 - 2023.09 (2-person team)",
        summary:
          "Web app that alerts users when MapleStory auction listings match desired conditions",
        details: [
          "Inspired by a friend's idea as an avid MapleStory player",
          "Adopted Next.js 13 on React 18 to explore the latest frontend stack",
          "Handled API calls and forms with React Query and React Hook Form",
          "Used Next.js as a reverse proxy to hide IPs and resolve CORS issues",
        ],
      },
      whatToSing: {
        name: "What Should I Sing?",
        period: "2022.10 (Solo project)",
        summary: "Web app for organizing go-to karaoke songs",
        details: [
          "Created to eliminate the recurring dilemma of choosing karaoke tracks",
          "Implemented social login with Firebase Auth (OAuth 2.0)",
          "Built queries on top of Firebase Realtime Database's NoSQL model",
          "Styled the entire experience with Tailwind CSS without separate stylesheets",
        ],
      },
      smartDutchPay: {
        name: "Smart Dutch Pay (React Native)",
        period: "2022.02 (Solo project)",
        summary:
          "Mobile app that calculates who owes what in complex cost-splitting scenarios",
        details: [
          "Ported an existing Android native app to React Native for a better UX",
          "Managed global state with Recoil using React-friendly patterns",
        ],
      },
      personalityByFriends: {
        name: "How Do Friends See Me?",
        period: "2021.05 - 2021.06 (2-person team)",
        summary: "Web app comparing self vs. friend perceptions of personality",
        details: [
          "Born from the idea of exchanging MBTI tests with friends",
          "First collaboration with clearly split frontend and backend roles",
          "Crafted background animation and pentagon charts with requestAnimationFrame and Canvas",
          "Combined CSR, SSR, and SSG in Next.js to balance performance with UX",
        ],
      },
      onepick: {
        name: "Onepick Landing Page",
        period: "2021.03 (Solo project)",
        summary: "Marketing site for the Onepick personal training center",
        details: [
          "Built to support my brother's work at the training center",
          "Planned UX and SEO to improve local search exposure",
          "Surfaced fresh blog posts automatically via RSS integration",
        ],
      },
      portfolioNext: {
        name: "Portfolio Website (Next.js)",
        period: "2021.01 (Solo project)",
        summary: "Personal portfolio site",
        details: [
          "Migrated from React to Next.js for server-side rendering and better SEO",
          "Implemented modal history handling with the History API",
        ],
      },
      portfolioReact: {
        name: "Portfolio Website (React)",
        period: "2021.01 (Solo project)",
        summary: "Personal portfolio site",
        details: [
          "First dedicated portfolio built from the ground up",
          "Implemented an infinite carousel with vanilla JavaScript only",
        ],
      },
      haetbongWikiReact: {
        name: "Haetbong Wiki (React & Django)",
        period: "2020.08 - 2020.11 (Solo project)",
        summary:
          "Knowledge base for the SNU Haetbit volunteer club, rebuilt with a modern stack",
        details: [
          "Migrated the original Django full-stack app to a React and Django REST combo",
          "Handled global state and API requests with Redux, Redux Thunk, and Redux Saga",
          "Manually configured a split frontend/backend deployment on AWS",
        ],
      },
      haetbongWikiDjango: {
        name: "Haetbong Wiki (Django full stack)",
        period: "2020.05 - 2020.06 (Solo project)",
        summary:
          "Knowledge base for the SNU Haetbit volunteer club, delivered as a full-stack app",
        details: [
          "Built because the club lacked a proper archiving website despite its long history",
          "Gained deeper understanding of the technologies and environment used at work",
          "Recognized the value of Docker, which later became part of my daily toolkit",
        ],
      },
      snuMoyeo: {
        name: "SNU Moyeo",
        period: "2019.03 - 2019.06 (4-person team)",
        summary:
          "Campus service that helps SNU students form short or long-term groups effortlessly",
        details: [
          "Created to make it easy to find peers for shared goals within the university",
          "First ever web development experience (HTML, CSS, JS, React, Django)",
          "First team project using Git for collaboration",
          "The pivotal project that set me on the path of web development",
        ],
      },
    },
  },
  career: {
    title: "CAREER",
    companies: {
      daangn: {
        logoText: "DAANGN",
        period: "Nov 2024 - Present",
        description: "\"Building warmer neighborhoods by bringing neighbors closer\"",
        roles: {
          frontend: "Frontend development",
          backend: "Backend development",
        },
        highlights: {
          threeTab: {
            title: "Daangn 3-tab service built on business profiles",
            period: "1H 2025 - Ongoing",
            description:
              "Developing services that drive traffic to the map tab using business profile data (Frontend & Backend)",
          },
          webviewPlatform: {
            title: "Business profile webview platform",
            period: "1H 2024",
            description:
              "Improved productivity, stability, and performance of the business profile webview platform (Frontend)",
          },
          localBusiness: {
            title: "Local business experience improvements",
            period: "2H 2024",
            description:
              "Built features that connect local owners with neighbors more effectively through business profiles (Frontend)",
          },
        },
      },
      opengallery: {
        logoText: "OPEN GALLERY",
        period: "Aug 2019 - Sep 2023 (4 yrs 1 mo)",
        description:
          "Art rental platform connecting customers who rent artwork with the artists who create it",
        roles: {
          development: "Next.js & Django development",
          techLead: "Technical leadership",
          backoffice: "Back-office planning",
        },
        highlights: {
          artistSite: {
            title: "Artist website revamp (Next.js)",
            period: "1H 2022",
            description:
              "Migrated the artist microsite from a Django full-stack app to a Next.js + Django REST architecture",
          },
          deploy: {
            title: "Deployment platform migration (AWS ECS)",
            period: "2H 2021",
            description:
              "Moved deployments from AWS Elastic Beanstalk to Dockerized AWS ECS and aligned local environments",
          },
          cleanup: {
            title: "Large-scale server cleanup initiative",
            period: "Mid 2020 - Mid 2021",
            description:
              "Led a company-wide cleanup to refactor and stabilize the entire backend codebase",
          },
          beyondDev: {
            title: "Responsibilities beyond feature work",
            period: "Mid 2020 - Departure",
            description:
              "Handled hiring, mentoring, and code reviews while fostering documentation and knowledge sharing",
          },
          backoffice: {
            title: "Back-office ownership",
            period: "Late 2019 - Departure",
            description:
              "Redesigned and implemented the Django-based back office to dramatically improve operational efficiency",
          },
        },
      },
    },
  },
  footer: {
    caption: "© 2021. Choi Deok Gyeong. All rights reserved.",
  },
};

export default en;
