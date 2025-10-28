const ko = {
  brand: "Jpark's Portfolio",
  language: {
    current: "한국어",
    switchLabel: "언어 변경",
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
  navToggle: "메뉴 열기/닫기",
  masthead: {
    keyLine: "기술보다 문제를,기능보다 가치를 추구합니다.",
    profile: {
      photo: {
        alt: "박정현 증명 사진 자리",
        initials: "Jpark",
        src: "./img/profile/jpark.webp",
      },
      fields: [
        { label: "이름", value: "박정현" },
        { label: "생년월일", value: "1997.05.06" },
        { label: "주소", value: "경기도 시흥시" },
        { label: "학력", value: "방송통신대학교 (통계학과)" },
        { label: "E-mail", value: "vlrnrhd02@naver.com" },
        { label: "Phone", value: "010-6428-5059" },
      ],
    },
    detailHeading: "세부 소개",
    detail: [
      "3년 동안 여러 프로젝트를 거치며 가장 확신하게 된 건, 정답이 기술 안에만 있지는 않다는 사실이었습니다. 초반에는 JS와 CSS, 문자열 템플릿으로 몸으로 부딪히며 빠르게 만들어 보았고, 그 과정에서 브라우저가 어떻게 움직이고 사용자가 어디서 멈추는지를 가까이에서 배웠습니다. 이후에는 필요에 따라 React와 Next.js, Tailwind, Spring Boot 같은 도구들을 도입하며 제품을 더 단단하게 키웠습니다. 저에게 기술은 멋진 선택지가 아니라 지금의 문제를 가장 깔끔하게 푸는 수단입니다.",
      "프로젝트를 시작할 때 저는 먼저 “이게 정말 고객에게 필요한가?”를 묻습니다. 가설을 세우고 가장 가벼운 방법으로 실험해 본 뒤, 데이터와 사용자 피드백으로 방향을 조정합니다. 확신이 들면 구조를 키우고, 재사용을 늘리고, 운영과 배포까지 흐름을 정리합니다. 사내 ERP를 만들 때도 같은 방식이었습니다. 부서별 요구를 사용자 여정으로 엮어 우선순위를 정했고, 전체 기능 중 상당 부분을 직접 설계·구현하면서도 “빨리 보여주고, 빨리 고치는” 리듬을 유지했습니다. 덕분에 회의실이 아닌 실제 업무 현장에서 답을 찾을 수 있었고, 결과적으로 팀이 믿고 맡길 수 있는 흐름을 만들 수 있었습니다.",
      "협업에서는 ‘번역가’ 같은 역할을 자주 합니다. 비즈니스의 언어를 개발의 언어로, 개발의 제약을 고객 가치로 다시 설명하며 같은 목표를 바라보게 만드는 일을 좋아합니다. 논쟁이 생기면 개인 취향보다 근거를, 속도와 품질 사이에선 지금 단계에 맞는 균형을 선택합니다. 필요하면 가볍게 시작하고, 근거가 쌓이면 과감하게 바꾸는 태도 그게 제가 흔들리지 않게 일하는 방식입니다.",
      "앞으로도 저는 기술을 목적화하지 않겠습니다. 제품과 고객을 먼저 생각하고, 그다음에 가장 경제적인 방법을 고르는 개발자로 남고 싶습니다. 환경이 바뀌어도, 제약이 생겨도, 다양한 경험을 바탕으로 문제를 구조화하고 실행으로 답을 찾는 사람 그게 제가 되고 싶은, 그리고 지금도 매일 훈련하고 있는 개발자의 모습입니다.",
    ],
    cta: "더 알아보기 ↓",
  },
  about: {
    title: "ABOUT ME",
    fields: {
      name: { label: "이름", value: "박정현" },
      birth: { label: "생년월일", value: "1997.05.06" },
      location: { label: "위치", value: "경기도 시흥시" },
      phone: { label: "연락처", value: "010-6428-5059" },
      email: { label: "이메일", value: "vlrnrhd02@naver.com" },
      education: {
        label: "학력",
        value: "방송통신대학교 (통계학과)",
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
        description: "소스 코드 저장소",
      },
      blog: {
        title: "it-eldorado.com",
        description: "공부 및 지식 공유 목적의 블로그",
      },
    },
  },
  projects: {
    title: "PROJECTS",
    filterLabel: "주요 프로젝트만 보기",
    ctas: {
      readme: "자세히보기",
      images: "이미지",
    },
    imageControls: {
      prev: "이전 이미지",
      next: "다음 이미지",
    },
    items: {
      erp: {
        name: "사내 자체 ERP 시스템",
        period: "2024.11 ~ 2025.01",
        summary:
          "Next.js 14(App Router) 기반 사내 ERP 구축 — 전자결재·근태·관리자 모듈 설계/개발/배포",
        details: [
          "요구사항 분석부터 설계·개발·배포까지 전 단계 주도",
          "인사 관리 (출퇴, 휴가, 근태), 전자 결재, webHook 알림 등 다양한 모듈 개발",
          "canvas 기반 문서 pdf 파일 변환, database 자동 백업 batch script 등 부가 기능 개발",
        ],
      },
      viewTexportX: {
        name: "교통·공간 데이터 웹 분석 서비스",
        period: "2025.04 ~ 2025.05",
        summary:
          "도로/행정구역 단위 지표(환경 지표, 교통량 지표 등)를 시각화·분석하는 대화형 웹 서비스",
        details: [
          "프런트엔드 아키텍처 설계 및 구현: React 19 + TypeScript + Vite, Zustand 상태관리, DnD Kit로 레이어 정렬/모달 드래그 UX 구축",
          "GeoServer + 사내 지도엔진(XqbMap) 연동으로 WMS/VectorTile 동적 갱신, 링크/행정구역(view) 토글 지원",
          "지표 지원: 추정 교통량, VKT, 평균속도, 혼잡(빈도/시간)·혼잡비용, 배출량(CO/NOx/PM/VOC) 등",
          // "분석 옵션 → 파라미터 자동 조합(buildParsingParam) → 내부 API 호출 → 지도 레이어/범례 자동 생성 흐름 설계",
          // "레이어 카드 UI: 조건 요약, 보이기/숨기기, 삭제, 드래그 정렬, 스타일(색상 5단계·표출범위·라벨/두께) 즉시 적용",
          // "다중 맵 비교 토글, 맵별 토스트 알림/전역 로딩 오버레이, SCSS 디자인 토큰으로 일관된 UI 구현",
        ],
      },
      viewT: {
        name: "viewT (교통·공간 데이터 웹 분석 서비스) 유지보수",
        period: "2024.01 ~ 2025.10",
        summary:
          "네비게이션, 휴대푠, 교통카드 빅데이터를 기반으로 분석환경을 제공하는 서비스",
        details: [
          "년도별 신규 데이터 갱신 프로세스 자동화 및 적용",
          "OpenLayers + GeoServer 기반의 지도 시각화 유지보수",
          "신규 데이터 분석 모듈 test 진행",
        ],
      },
      hs: {
        name: "화성시 신호 모니터링 시스템",
        period: "2022.12 - 2023.04",
        summary: "화성시의 신호 모니터링 시스템 UI 개발 및 유지보수",
        details: [
          "메이플스토리를 좋아하는 한 친구의 아이디어에 착안하여 개발",
          "최신 기술인 React 18 기반의 Next.js 13 학습 및 적용",
          "React-Query, React-Hook-Form을 활용하여 API 요청 및 입력 폼 처리",
          "Next.js 서버를 리버스 프록시로 활용하여 IP 노출 및 CORS 문제 해결",
        ],
      },
      si: {
        name: "시흥시 대중교통 분석 시스템",
        period: "2023.07 ~ 2023.12",
        summary: "교통카드 빅데이터를 기반으로 한 시흥시 대중교통 분석 시스템",
        details: [
          "노래방을 갈 때마다 무슨 노래를 부를지 고민하지 않기 위해 개발",
          "OAuth 2.0 기반의 Firebase Auth를 활용하여 소셜 로그인 구현",
          "NoSQL 기반의 Firebase Realtime Database를 활용하여 쿼리 작성",
          "Tailwind CSS를 활용하여 별도의 CSS 파일 없이 스타일링",
        ],
      },
      viewTLog: {
        name: "빅데이터 가공 로그 대시보드",
        period: "2024.11 ~ 2025.01",
        summary:
          "Hadoop/YARN과 MySQL 기반 교통 데이터 수집·가공 파이프라인의 현황/진행률을 시각화한 대시보드",
        details: [
          "Next.js App Router + API Routes로 프론트/백엔드 단일 리포 구성",
          "MySQL 저장 프로시저 기반 집계와 스키마 메타(information_schema)로 조건/라벨 자동 생성",
          "Hadoop/YARN REST 연동으로 작업 진행률·완료 Job 추적 및 타임아웃 처리",
          // "연/월/일 단위 동적 집계와 네트워크별 필터, 평균 처리시간 산출",
          "ApexCharts 멀티 시리즈 차트 + 비율 보기 토글로 추세 비교",
          // "커스텀 테이블: 정렬/CSV 다운로드/한글 초성 검색(hangul‑js) 지원",
          // "경량 상태관리(Zustand), Tailwind로 반응형 UI 구성",
          // "서브패스 배포(basePath=/note/log)와 환경변수 분리로 운영 환경 대응",
        ],
      },
      personalityByFriends: {
        name: "친구가 보는 나의 성격은?",
        period: "2021.05 - 2021.06 (2人 팀 프로젝트)",
        summary:
          "내가 생각하는 나의 성격과 친구가 생각하는 나의 성격을 비교할 수 있는 웹사이트",
        details: [
          "지인과 서로 MBTI 검사를 해주면서 얻은 아이디어를 바탕으로 개발",
          "처음으로 역할을 명확히 구분하여 백 엔드 개발자와의 협업 경험",
          "requestAnimationFrame, canvas API를 활용하여 배경 애니메이션 및 오각형 그래프 구현",
          "Next.js의 CSR, SSR, SSG에 대한 이해를 바탕으로 사용성을 고려한 페이지 구성",
        ],
      },
      onepick: {
        name: "Onepick 홈페이지",
        period: "2021.03 (1人 개인 프로젝트)",
        summary: "Onepick PT 센터의 홈페이지",
        details: [
          "친형이 근무하는 PT 센터에 도움을 주고 싶어 개발",
          "센터 홍보 목적의 검색 엔진 최적화 및 UI/UX 설계",
          "RSS를 활용하여 센터 블로그의 최신 포스팅 노출",
        ],
      },
      portfolioNext: {
        name: "포트폴리오 웹사이트 (Next.js)",
        period: "2021.01 (1人 개인 프로젝트)",
        summary: "포트폴리오 웹사이트",
        details: [
          "React를 Next.js로 마이그레이션하여 서버 사이드 렌더링을 통해 검색 엔진 최적화",
          "History API를 활용하여 모달의 뒤로가기 구현",
        ],
      },
      portfolioReact: {
        name: "포트폴리오 웹사이트 (React)",
        period: "2021.01 (1人 개인 프로젝트)",
        summary: "포트폴리오 웹사이트",
        details: [
          "나만의 포트폴리오를 위한 웹사이트 개발",
          "라이브러리 없이 Vanilla JS로 무한 캐러셀 구현",
        ],
      },
      haetbongWikiReact: {
        name: "햇봉 위키 (React, Django)",
        period: "2020.08 - 2020.11 (1人 개인 프로젝트)",
        summary:
          "서울대학교 중앙 동아리 햇빛봉사단에 관한 유익한 정보들을 문서화하여 제공해주는 웹사이트",
        details: [
          "Django 풀 스택을 React와 Django의 조합으로 마이그레이션",
          "Redux, Redux-Thunk, Redux-Saga를 활용한 전역 상태 관리 및 API 요청 처리",
          "풀스택와 백 엔드가 분리된 AWS 배포 환경 수동 구축",
        ],
      },
      haetbongWikiDjango: {
        name: "햇봉 위키 (Django 풀 스택)",
        period: "2020.05 - 2020.06 (1人 개인 프로젝트)",
        summary:
          "서울대학교 중앙 동아리 햇빛봉사단에 관한 유익한 정보들을 문서화하여 제공해주는 웹사이트",
        details: [
          "동아리의 역사와 규모에 비해 제대로 된 아카이빙 웹사이트가 없었기 때문에 직접 개발",
          "회사에서 사용하는 기술과 환경에 대한 심도 있는 이해",
          "오늘날 많이 사용하는 Docker의 필요성을 느낀 계기",
        ],
      },
      snuMoyeo: {
        name: "SNU Moyeo",
        period: "2019.03 - 2019.06 (4人 팀 프로젝트)",
        summary:
          "서울대학교 학생들이 쉽게 임시적/장기적 모임을 구성하고 이에 참여할 수 있도록 돕는 웹 서비스",
        details: [
          "교내에서 어떠한 목적을 함께 할 사람을 간편하게 찾도록 돕기 위해 개발",
          "최초 웹 개발 경험 (HTML, CSS, JS, React, Django)",
          "최초 협업 경험 (Git)",
          "웹 개발의 길을 걷게 만든 결정적인 계기",
        ],
      },
    },
    readmes: {
      erp: {
        title: "react-bulk-form",
        intro: [
          "React 프로젝트에서 복잡한 Form 상태를 일관된 패턴으로 관리하기 위한 경량 유틸리티입니다.",
          "다수의 필드와 검증 규칙을 다룰 때 필요한 반복 로직을 추상화해 개발자가 핵심 UX에 집중할 수 있도록 돕습니다.",
        ],
        sections: [
          {
            heading: "핵심 기능",
            bullets: [
              "필드 값과 오류 상태를 일괄적으로 추적할 수 있는 중앙 저장소 제공",
              "필드/폼 단위의 상태 구독을 통해 리렌더링 최소화",
              "기존 React Hook Form, Formik 등과 병행 사용이 가능한 가벼운 설계",
            ],
          },
          {
            heading: "개발 배경",
            bullets: [
              "Form 구조가 동적으로 변화하는 사내 프로젝트에서 상태 관리 복잡도가 크게 증가",
              "재사용 가능한 커스텀 훅을 팀 단위로 공유하기 위해 라이브러리 형태로 재구성",
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
        title: "IT 엘도라도 (블로그)",
        intro: [
          "Notion API를 기반으로 구축한 개인 기술 블로그로, 컨텐츠 관리와 배포 자동화를 동시에 제공하는 것이 목표였습니다.",
        ],
        sections: [
          {
            heading: "구현 포인트",
            bullets: [
              "Notion Database ↔ Next.js 13 App Router 기반의 서버 컴포넌트를 이용한 데이터 동기화",
              "Open Graph/Schema Markup 등 SEO 메타 태그 세부 튜닝",
              "주간 배포 파이프라인 자동화 및 방문·조회 집계 대시보드 구성",
            ],
          },
          {
            heading: "결과",
            bullets: [
              "주요 기술 문서 40+편 이전 및 카테고리/태그 구조 재정비",
              "글 작성부터 배포까지 5분 이내로 단축",
            ],
          },
        ],
        links: [
          { label: "서비스", href: "https://it-eldorado.com" },
          {
            label: "GitHub",
            href: "https://github.com/hjcdg1/it-eldorado-blog",
          },
        ],
      },
      viewT: {
        title: "viewT",
        intro: [
          "LG전자에서 운영하는 오픈소스 라이선스 관리 플랫폼의 사용자 전용 경량 버전입니다.",
        ],
        sections: [
          {
            heading: "역할",
            bullets: [
              "Next.js 기반 프론트엔드 개발 총괄",
              "Swagger 기반 API 문서화와 통합 테스트 시나리오 수립",
            ],
          },
          {
            heading: "성과",
            bullets: [
              "정렬/필터/모달 등 사용자 중심의 핵심 UX 시나리오 재정립",
              "기존 프로젝트와의 공존 배포 전략 수립으로 마이그레이션 비용 최소화",
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
        title: "화성시 신호 모니터링 시스템",
        intro: [
          "메이플스토리 경매장에 등록되는 아이템을 조건에 맞춰 실시간으로 추적하고, Discord Webhook으로 알림을 전송하는 서비스입니다.",
        ],
        sections: [
          {
            heading: "주요 구현",
            bullets: [
              "Next.js 서버를 프록시로 활용해 경매장 API 호출 시 발생하는 CORS 문제 해결",
              "React Query 기반의 캐시 전략으로 동일 조건 조회 시 트래픽 최소화",
              "알림 조건을 다중으로 조합할 수 있는 폼 UX 설계",
            ],
          },
          {
            heading: "운영 경험",
            bullets: [
              "Discord 알림 지연 발생 시 리트라이 백오프 전략 도입",
              "일일 알림 트래픽을 기준으로 모니터링 지표 작성",
            ],
          },
        ],
        links: [
          { label: "서비스", href: "https://maplealimi.com" },
          { label: "GitHub", href: "https://github.com/hjcdg1/maple-alimi" },
        ],
      },

      si: {
        title: "시흥시 대중교통 분석 시스템",
        intro: ["교통카드 데이터를 바탕으로 대중교통을 분석하는 시스템."],
        sections: [
          {
            heading: "주요 기능",
            bullets: [
              "Firebase Auth로 카카오/구글 로그인 지원",
              "곡 즐겨찾기/최근 부른 곡 자동 정렬",
              "Tailwind CSS만으로 반응형 UI 구성",
            ],
          },
        ],
        links: [
          { label: "서비스", href: "https://what-to-sing.kr" },
          { label: "GitHub", href: "https://github.com/hjcdg1/what-to-sing" },
        ],
      },

      viewTLog: {
        title: "빅데이터 가공 로그 대시보드",
        intro: [
          "Hadoop/YARN과 MySQL 기반 교통 데이터 수집·가공 파이프라인의 현황/진행률을 시각화한 대시보드",
        ],
        sections: [
          {
            heading: "주요 기능",
            bullets: [
              "Firebase Auth로 카카오/구글 로그인 지원",
              "곡 즐겨찾기/최근 부른 곡 자동 정렬",
              "Tailwind CSS만으로 반응형 UI 구성",
            ],
          },
        ],
        links: [
          { label: "서비스", href: "https://what-to-sing.kr" },
          { label: "GitHub", href: "https://github.com/hjcdg1/what-to-sing" },
        ],
      },
    },

    images: {
      erp: {
        title: "사내 erp 화면",
        items: [
          {
            src: "./img/project/erp/erp001.webp",
            caption: "상태 패널을 통해 필드별 값과 오류를 한 눈에 확인",
          },
          {
            src: "./img/project/erp/erp002.webp",
            caption: "상태 패널을 통해 필드별 값과 오류를 한 눈에 확인",
          },
          {
            src: "./img/project/erp/erp003.webp",
            caption: "상태 패널을 통해 필드별 값과 오류를 한 눈에 확인",
          },
          {
            src: "./img/project/erp/erp004.webp",
            caption: "상태 패널을 통해 필드별 값과 오류를 한 눈에 확인",
          },
          {
            src: "./img/project/erp/erp005.webp",
            caption: "상태 패널을 통해 필드별 값과 오류를 한 눈에 확인",
          },
          {
            src: "./img/project/erp/erp006.webp",
            caption: "상태 패널을 통해 필드별 값과 오류를 한 눈에 확인",
          },
        ],
      },
      viewTexportX: {
        title: "교통·공간 데이터 웹 분석 서비스 화면",
        items: [
          {
            src: "./img/project/view-t-new/view-t-new-001.webp",
            caption: "히어로 영역과 최신 포스트 영역",
          },
          {
            src: "./img/project/view-t-new/view-t-new-002.webp",
            caption: "히어로 영역과 최신 포스트 영역",
          },
          {
            src: "./img/project/view-t-new/view-t-new-003.webp",
            caption: "히어로 영역과 최신 포스트 영역",
          },
          {
            src: "./img/project/view-t-new/view-t-new-004.webp",
            caption: "히어로 영역과 최신 포스트 영역",
          },
        ],
      },
      viewT: {
        title: "교통·공간 데이터 웹 분석 서비스 화면",
        items: [
          {
            src: "./img/project/view-t/view-t-001.webp",
            caption: "히어로 영역과 최신 포스트 영역",
          },
          {
            src: "./img/project/view-t/view-t-002.webp",
            caption: "히어로 영역과 최신 포스트 영역",
          },
          {
            src: "./img/project/view-t/view-t-003.webp",
            caption: "히어로 영역과 최신 포스트 영역",
          },
        ],
      },
      hs: {
        title: "화성시 신호 모니터링 시스템 UI",
        items: [
          {
            src: "./img/project/hs/hs001.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "./img/project/hs/hs002.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "./img/project/hs/hs003.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
        ],
      },
      si: {
        title: "시흥시 대중교통 분석 시스템",
        items: [
          {
            src: "./img/project/si/si001.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "./img/project/si/si002.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "./img/project/si/si003.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "./img/project/si/si004.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "./img/project/si/si005.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "./img/project/si/si006.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "./img/project/si/si007.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "./img/project/si/si008.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
        ],
      },

      viewTLog: {
        title: "빅데이터 가공 로그 대시보드",
        items: [
          {
            src: "./img/project/view-t-log/view-t-log-001.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "./img/project/view-t-log/view-t-log-002.webp",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
        ],
      },
    },
  },
  career: {
    title: "CAREER",
    companies: {
      qbicware: {
        logoText: "큐빅웨어",
        period: "2022.10 - 2025.10 (3년)",
        description:
          '"교통 빅데이터와 GIS를 활용해 교통 솔루션을 개발하는 IT 기업"',
        roles: {
          frontend: "Frontend 개발",
          backend: "Backend 개발",
        },
        highlights: {
          erp: {
            title: "사내 erp 시스템 개발",
            period: "2024년 하반기 - 2025년 상반기",
            description:
              "사내 자체 erp 시스템 개발 (전자결재, 인사, 출퇴 등) (FULLSTACK)",
          },
          viewT: {
            title: "View-T 시스템 유지보수",
            period: "2024년 상반기 ~ 2025년 상반기",
            description:
              "빅데이터 가공 프로세스 모니터링 솔류션 및 년도별 갱신 데이터 최신화 (FULLSTACK)",
          },
          localBusiness: {
            title: "교통 빅데이터 기반의 시각화 솔루션 개발",
            period: "2022년 하반기 ~ 2025년 하반기",
            description:
              "신호 모니터링 시스템 및 대중교통 모니터링 시스템 개발 (FULLSTACK)",
          },
        },
      },

      // opengallery: {
      //   logoText: "OPEN GALLERY",
      //   period: "2019.08 - 2023.09 (4년 1개월)",
      //   description:
      //     "그림을 렌탈하려는 고객들과 그림을 그리는 작가들을 중개하는 그림 렌탈 서비스 플랫폼",
      //   roles: {
      //     development: "Next.js, Django 개발",
      //     techLead: "테크 리딩",
      //     backoffice: "백 오피스 기획",
      //   },
      //   highlights: {
      //     artistSite: {
      //       title: "작가 개인용 웹사이트 전체 리뉴얼 (Next.js)",
      //       period: "2022년 상반기",
      //       description:
      //         "Django 풀 스택 기반의 작가 개인용 웹사이트를 Next.js와 Django REST 기반으로 마이그레이션",
      //     },
      //     deploy: {
      //       title: "서버 배포 환경 변경 (AWS ECS)",
      //       period: "2021년 하반기",
      //       description:
      //         "서버 배포 환경을 AWS EB에서 Docker 기반의 AWS ECS로 변경 (개발 환경도 함께 변경)",
      //     },
      //     cleanup: {
      //       title: "대규모 서버 정리 작업 리드",
      //       period: "2020년 중반기 - 2021년 중반기",
      //       description:
      //         "대규모 서버 정리 작업을 주도적으로 진행하여 코드 베이스 전반의 대청소 작업을 진행",
      //     },
      //     beyondDev: {
      //       title: "개발 업무 외 기타 업무 담당",
      //       period: "2020년 중반기 - 퇴사",
      //       description:
      //         "채용, 사수, 코드 리뷰의 역할을 담당하고 팀 내에서 지식 공유와 문서화를 적극적으로 진행",
      //     },
      //     backoffice: {
      //       title: "백 오피스의 전반적인 관리 및 각종 기능 개발/기획",
      //       period: "2019년 하반기 - 퇴사",
      //       description:
      //         "Django 풀 스택 기반 백 오피스의 대규모 리뉴얼과 개발/기획을 담당하여 사내 직원의 업무 효율 개선",
      //     },
      //   },
      // },
    },
  },
  footer: {
    caption: "© 2025. Park Jeong Hyeon. All rights reserved.",
  },
};

export default ko;
