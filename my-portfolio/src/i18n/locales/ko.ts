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
        alt: "박정현 증명 사진",
        initials: "Jpark",
        src: "./img/profile/jpark.webp",
      },
      fields: [
        { label: "이름", value: "박정현" },
        { label: "생년월일", value: "1997.05.06" },
        { label: "주소", value: "경기도 시흥시" },
        //{ label: "학력", value: "방송통신대학교 (통계학과)" },
        { label: "E-mail", value: "vlrnrhd02@naver.com" },
        { label: "Phone", value: "010-6428-5059" },
      ],
    },
    detailHeading: "세부 소개",
    detail: [
      // "여러 프로젝트를 거치며 확신하게 된 건, 정답이 기술 안에만 있지는 않다는 사실이었습니다.", 
      // "프로젝트 경험이 쌓일수록 느낀 것은, 문제는 코드만으로 해결되지 않는다는 사실이었습니다.",
      // "고객의 요구를 이해하고, 동료들과 같은 그림을 그리며, 때로는 단순한 UX 수정 하나로 더 큰 문제를 풀어내는 과정이 중요했습니다.",
      // "기술은 그 과정에서 선택되는 도구일 뿐이며, 저는 항상 팀과 사용자 사이의 공통 언어를 만드는 데 집중해 왔습니다.",
      "여러 프로젝트를 경험하며 각종 시스템을 설계하고 운영하는 과정에서 확신하게 된 것은, 정답이 기술 그 자체에만 있지 않으며 문제 또한 코드만으로 해결되지는 않는다는 사실이었습니다.",

      "고객의 요구를 정확히 이해하고, 팀원들과 같은 그림을 그리며, 때로는 작은 UX 개선 하나로 더 큰 문제를 풀어내는 과정이 더 중요했습니다.",
      "기술은 그 과정에서 선택되는 도구일 뿐이며, 저는 항상 팀과 사용자 사이의 공통 언어를 만드는 개발자가 되고자 노력해왔습니다.",

      "단단한 설계와 책임 있는 구현, 그리고 협업을 통해 결과를 만들어내는 개발자입니다."
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
      // education: {
      //   label: "학력",
      //   value: "방송통신대학교 (통계학과)",
      // },
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
    printTitle: "프로젝트 포트폴리오",
    printDateLabel: "일시",
    printTocTitle: "목차",
    ctas: {
      readme: "자세히 보기",
      images: "이미지",
      pdf: "PDF 다운로드",
    },
    imageControls: {
      prev: "이전 이미지",
      next: "다음 이미지",
    },
    items: {
      portfolio: {
        name: "개인 포트폴리오 웹사이트",
        period: "2025.07 ~ 진행중",
        summary:
          "React 19 + TypeScript 기반 이직용 포트폴리오 사이트, 한/영 다국어 지원 및 PDF 내보내기 기능 포함",
        details: [
          "React 19 + TypeScript + Vite 기반 SPA 설계 및 GitHub Pages 배포",
          "i18next 다국어 시스템 구현 — 브라우저 언어 자동 감지, localStorage 캐싱",
          "데이터-UI 완전 분리 아키텍처, 커스텀 SVG 아이콘 시스템, @media print PDF 내보내기",
        ],
      },
      erp: {
        name: "사내 자체 ERP 시스템",
        period: "2024.11 ~ 2025.10",
        summary:
          "Next.js 14(App Router) 기반 사내 ERP 구축 — 전자결재·근태·관리자 모듈 설계/개발/배포",
        details: [
          "요구사항 분석부터 설계·개발·배포까지 전 단계 주도",
          "인사 관리 (출퇴, 휴가, 근태), 전자 결재, webhook 알림 등 다양한 모듈 개발",
          "Next.auth 를 사용한 유저별 Session 관리, WebHook을 사용하여 사내 메세지툴 알림 연동 경험",
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
          "네비게이션, 휴대폰, 교통카드 빅데이터를 기반으로 분석환경을 제공하는 서비스",
        details: [
          "연도별 대용량 공간 데이터 수집·정제 파이프라인 개선 및 MyBatis 기반 Batch Insert 최적화를 통한 DB 처리 성능 개선",
          "OpenLayers + GeoServer 기반 지도 시각화 로직 유지보수 및 WMS/WFS 레이어 렌더링 최적화",
          "기존 JavaScript 기반 UI 기능 개선 및 CSS 리팩토링",
        ],
      },
      hs: {
        name: "화성시 신호 모니터링 시스템",
        period: "2022.12 - 2023.04",
        summary: "화성시의 신호 모니터링 시스템 UI 개발 및 유지보수",
        details: [
          "주요 교차로 교통량 및 속도, 신호 주기 데이터 조회 api 개발 및 시각화",
          "실시간 스마트 교차로 데이터 업로드 현황 모니터링 대시보드 개발",
        ],
      },
      si: {
        name: "시흥시 대중교통 분석 시스템",
        period: "2023.07 ~ 2023.12",
        summary: "교통카드 빅데이터를 기반으로 한 시흥시 대중교통 분석 시스템",
        details: [
          "교통카드 빅데이터를 활용하여 교통량·시간대·노선별 승 하차 분석 등 10개 이상 교통 지표 시각화 시스템 구축",
          "Deck.gl 기반 대규모 GeoJSON(최대 20,000개 피처) 지도 시각화 구현",
          "약 106개 노선, 3000개의 정류장, 약 1만 건의 승하차 데이터 처리 및 분석",
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
          "ApexCharts 멀티 시리즈 차트 + 비율 보기 토글로 추세 비교",
        ],
      },
      
     
    },
    readmes: {
      portfolio: {
        title: "개인 포트폴리오 웹사이트",
        intro: [
          "React 19 + TypeScript + Vite로 직접 설계·개발·배포한 포트폴리오 사이트입니다.",
          "외부 UI 라이브러리 없이 컴포넌트를 직접 구현하고, i18next로 한/영 다국어를 지원합니다.",
        ],
        sections: [
          {
            heading: "기술 스택",
            bullets: [
              "Framework: React 19.1.1 + TypeScript 5.9.3",
              "Build: Vite 7.1.7 + @vitejs/plugin-react",
              "스타일링: Tailwind CSS v4 + CSS Modules + CSS Custom Properties",
              "다국어: i18next, react-i18next, i18next-browser-languagedetector",
              "배포: GitHub Pages (gh-pages)",
            ],
          },
          {
            heading: "핵심 구현",
            bullets: [
              "i18next 다국어 — returnObjects 옵션으로 객체형 번역 데이터를 TypeScript 인터페이스로 타입 안전하게 캐스팅",
              "커스텀 SVG 아이콘 시스템 — 외부 라이브러리 없이 아이콘 직접 구현, IconName union 타입으로 컴파일 타임 오타 방지",
              "모달 접근성 — role=\"dialog\", aria-modal, ESC 키 닫기, 배경 스크롤 잠금 처리",
              "PDF 내보내기 — @media print로 웹/인쇄 레이아웃 분리, 목차·이미지·상세내용 자동 구성",
              "useScrollToSection 커스텀 훅 — offset 보정 스크롤 + useCallback 메모이제이션",
            ],
          },
          {
            heading: "기술적 도전",
            bullets: [
              "다국어 객체 타입 안전성 — t(key, {returnObjects: true}) 반환값을 커스텀 인터페이스로 캐스팅해 런타임 타입 안전성 확보",
              "번들 크기 최소화 — 아이콘 라이브러리 미사용, 실제 사용 아이콘만 SVG path 직접 작성으로 불필요한 번들 제거",
            ],
          },
          // {
          //   heading: "이력서 Bullet Points",
          //   bullets: [
          //     "React 19 + TypeScript + Vite 기반 포트폴리오 사이트 설계·개발·GitHub Pages 배포",
          //     "i18next 다국어 시스템 구현 (한/영 전환, 브라우저 언어 자동 감지, localStorage 캐싱)",
          //     "useMemo / useCallback 활용 리렌더링 최적화, passive 스크롤 이벤트 성능 개선",
          //     "@media print 기반 PDF 내보내기, 외부 아이콘 라이브러리 없이 커스텀 SVG 시스템 구현",
          //   ],
          // },
        ],
        links: [
          { label: "서비스", href: "https://parkjh97.github.io/jpark-portfolio/" },
          { label: "GitHub", href: "https://github.com/parkjh97/jpark-portfolio" },
        ],
      },
      erp: {
        title: "사내 자체 ERP 시스템",
        intro: [
          "사내 ERP 시스템을 요구사항 분석부터 설계·개발·배포·운영까지 전 단계 주도하였습니다.",
          "전자결재(기안·결재·반려), 근태·휴가 관리, 관리자 모듈을 Next.js 14 App Router 기반으로 구현하였습니다.",
        ],
        sections: [
          {
            heading: "기술 스택",
            bullets: [
              "Framework: Next.js 14.2.5 (App Router) + TypeScript",
              "인증: NextAuth.js v4 + @auth/pg-adapter (PostgreSQL 세션)",
              "상태 관리: Zustand",
              "스타일링: Tailwind CSS v3",
              "알림: web-push, Webhook (사내 메시지 도구 연동)",
              "유틸: date-fns, jspdf, react-to-print, jszip",
            ],
          },
          {
            heading: "핵심 구현",
            bullets: [
              "전자결재 — JSON 기반 동적 문서 양식 렌더링, 결재선·참조선 다단계 관리 (기안·결재·반려 플로우)",
              "Webhook 알림 — 결재/반려/참조 이벤트 발생 시 사내 메시지 도구로 실시간 알림 발송, Promise.all 병렬 처리",
              "Parallel Routes + Intercepting Routes — @modal 슬롯 활용 URL 기반 모달 라우팅 (뒤로가기·새로고침 정상 동작)",
              "Middleware 인증 보호 — Cookie 세션 확인 후 비인증 요청 전체를 /login으로 자동 리다이렉트",            ],
          },
          {
            heading: "기술적 도전",
            bullets: [
              "JSON 동적 폼 상태 — 서버에서 내려오는 doc_form_data 구조를 양식 타입별로 파싱·초기화, useReducer dispatch로 일관성 유지",
              "Webhook 병렬 발송 — 참조자가 여러 명일 때 Promise.all로 동시 발송하여 순차 처리 대비 응답 지연 해소",
              "Intercepting Routes 모달 — 모달 진입 URL을 별도 라우트로 분리해 직접 접근·새로고침 시에도 전체 페이지로 정상 렌더링",
            ],
          },
          // {
          //   heading: "이력서 Bullet Points",
          //   bullets: [
          //     "Next.js 14 App Router 기반 사내 ERP 설계·개발·배포 (전자결재·근태·관리자 3개 모듈 전담)",
          //     "NextAuth.js v4 + PostgreSQL 세션 인증, Middleware로 전체 라우트 일괄 보호 및 최초 로그인 비밀번호 변경 강제",
          //     "JSON 기반 동적 문서 양식 렌더링 + useReducer로 복잡한 폼 상태 일원 관리",
          //     "Webhook 연동으로 결재·반려·참조 이벤트 → 사내 메시지 도구 실시간 알림, Promise.all 병렬 처리",
          //     "Parallel Routes + Intercepting Routes 활용한 URL 기반 모달 UX 구현",
          //   ],
          // },
        ],
      },
      viewTexportX: {
        title: "IT 엘도라도 (블로그)",
        intro: [
          "Notion API를 기반으로 구축한 개인 기술 블로그로, 콘텐츠 관리와 배포 자동화를 동시에 제공하는 것이 목표였습니다.",
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
        // links: [
        //   { label: "서비스", href: "https://it-eldorado.com" },
        //   {
        //     label: "GitHub",
        //     href: "https://github.com/hjcdg1/it-eldorado-blog",
        //   },
        // ],
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
        // links: [
        //   {
        //     label: "GitHub",
        //     href: "https://github.com/opensourceway/FOSSLight-Hub",
        //   },
        // ],
      },
      hs: {
        title: "화성시 신호 모니터링 시스템",
        intro: [
          "화성시 교통 신호 데이터를 수집·분석·시각화하는 웹 기반 교통신호 최적화 분석 시스템입니다.",
          "전자정부 표준프레임워크(eGovFrame) 기반으로 개발되었으며, 스마트 교차로 모니터링 모듈을 담당하여 개발하였습니다.",
        ],
        sections: [
          {
            heading: "주요 구현",
            bullets: [
              "신호 주기·현시 데이터 조회 API 개발 — 복수 테이블 조인 기반 대용량 데이터의 성능 최적화 조회 구조 설계",
              "스마트 교차로 대시보드 모듈 신규 개발 — CCTV 기반 점유율·속도·교통량 24시간 시계열 데이터 시각화 (담당 모듈)",              "기상청 ITS OpenAPI 연동 — 화성시 좌표 범위 기반 실시간 교통사고·돌발 정보 수집",
            ],
          },
          {
            heading: "기술 포인트",
            bullets: [
              "MyBatis 동적 SQL — <choose>/<foreach>를 활용한 동적 테이블명·조건 분기, GEOM/ASTEXT 공간 데이터 처리",
              "eGovFrame 3.9.0 표준프레임워크 기반 4계층 구조 (Controller → Service → ServiceImpl → DAO)",
              "HikariCP 4.0.3 고성능 커넥션 풀, AOP 기반 전역 예외처리, LoggingInterceptor 요청 추적",
            ],
          },
        ],
      },

      si: {
        title: "시흥시 대중교통 분석 시스템",
        intro: [
          "교통카드 빅데이터를 기반으로 시흥시 대중교통 현황을 분석하고 시각화하는 웹 시스템입니다.",
          "노선·정류장·시간대별 승하차 데이터를 지도와 차트로 표현해 교통 정책 의사결정을 지원합니다.",
        ],
        sections: [
          {
            heading: "주요 구현",
            bullets: [
              "교통카드 빅데이터 기반 10개 이상 교통 지표 시각화 (교통량, 시간대·노선별 승하차, OD 분석, 수익성 분석 등)",
              "Deck.gl 기반 대규모 GeoJSON(최대 20,000개 피처) 지도 레이어 렌더링 구현",
              "106개 노선·3,000개 정류장·약 1만 건 승하차 데이터 처리 및 대시보드 연동",
            ],
          },
          {
            heading: "기술 포인트",
            bullets: [
              "Spring + MyBatis 기반 대용량 교통 데이터 조회 API 개발 — CTE, FULL JOIN, ROW_NUMBER 윈도우 함수, PERCENTILE_CONT 분위수 통계 활용",
              "GeoServer WMS/WFS 연동으로 공간 데이터 지도 레이어 동적 표출",
              "Deck.gl ScatterplotLayer, PathLayer 등을 활용한 인터랙티브 지도 시각화",
            ],
          },
          {
            heading: "보안 & 검색",
            bullets: [
              "BCrypt 기반 비밀번호 암호화 및 CAPTCHA 인증으로 로그인 보안 강화",
              "한글 자소분해 알고리즘 직접 구현 — 정류장 초성 검색 최적화",
              "세션 타임아웃 관리, XSS/SQL Injection 방어 필터 적용",
            ],
          },
        ],
      },

      viewTLog: {
        title: "빅데이터 가공 로그 대시보드",
        intro: [
          "Hadoop/YARN과 MySQL 기반 교통 데이터 수집·가공 파이프라인의 현황 및 진행률을 실시간으로 시각화한 모니터링 대시보드입니다.",
          "Next.js App Router를 활용해 프론트엔드와 백엔드를 단일 레포로 구성하였습니다.",
        ],
        sections: [
          {
            heading: "주요 구현",
            bullets: [
              "Next.js App Router + API Routes로 프론트·백엔드 단일 레포 구성",
              "MySQL 저장 프로시저 기반 집계와 information_schema 메타 활용으로 조건·라벨 자동 생성",
              "Hadoop/YARN REST API 연동으로 작업 진행률·완료 Job 실시간 추적 및 타임아웃 처리",
            ],
          },
          {
            heading: "기술 포인트",
            bullets: [
              "ApexCharts 멀티 시리즈 차트 + 비율 보기 토글로 파이프라인 추세 비교 시각화",
              "Zustand로 대시보드 필터 상태 전역 관리",
              "Tailwind CSS 기반 반응형 레이아웃 구성",
            ],
          },
        ],
      },
    },

    images: {
      erp: {
        title: "사내 erp 화면",
        items: [
          {
            src: "./img/project/erp/erp001.webp",
            caption: "erp 시스템 메인 화면",
          },
          {
            src: "./img/project/erp/erp002.webp",
            caption: "회원별 연차정보 확인 화면",
          },
          {
            src: "./img/project/erp/erp003.webp",
            caption: "회원별 근태정보 확인 화면",
          },
          {
            src: "./img/project/erp/erp004.webp",
            caption: "결재 문서 작성 화면",
          },
          {
            src: "./img/project/erp/erp005.webp",
            caption: "결제 문서 양식 설정 화면",
          },
          {
            src: "./img/project/erp/erp006.webp",
            caption: "휴일 설정 화면",
          },
        ],
      },
      viewTexportX: {
        title: "교통·공간 데이터 웹 분석 서비스 화면",
        items: [
          {
            src: "./img/project/view-t-new/view-t-new-001.webp",
            caption: "분석조건별 주제도 표출 화면",
          },
          {
            src: "./img/project/view-t-new/view-t-new-002.webp",
            caption: "클릭한 도로의 세부정보 표출 화면",
          },
          {
            src: "./img/project/view-t-new/view-t-new-003.webp",
            caption: "듀얼맵 비교 화면",
          },
          {
            src: "./img/project/view-t-new/view-t-new-004.webp",
            caption: "분석 지표 선택 화면",
          },
        ],
      },
      viewT: {
        title: "교통·공간 데이터 웹 분석 서비스 화면",
        items: [
          {
            src: "./img/project/view-t/view-t-001.webp",
            caption: "view-T 메인 페이지",
          },
          {
            src: "./img/project/view-t/view-t-002.webp",
            caption: "분석조건별 주제도 표출 화면",
          },
          {
            src: "./img/project/view-t/view-t-003.webp",
            caption: "Light-T 분석 페이지",
          },
        ],
      },
      hs: {
        title: "화성시 신호 모니터링 시스템 UI",
        items: [
          {
            src: "./img/project/hs/hs001.webp",
            caption: "스마트 교차로 모니터링 대시보드 화면",
          },
          {
            src: "./img/project/hs/hs002.webp",
            caption: "실시간 데이터 업로드 현황 분석 화면",
          },
          {
            src: "./img/project/hs/hs003.webp",
            caption: "스마트 교차로 모니터링 분석 화면",
          },
        ],
      },
      si: {
        title: "시흥시 대중교통 분석 시스템",
        items: [
          {
            src: "./img/project/si/si001.webp",
            caption: "운영 및 이용현황 대시보드 화면",
          },
          {
            src: "./img/project/si/si002.webp",
            caption: "수익금 정보 대시보드 화면",
          },
          {
            src: "./img/project/si/si003.webp",
            caption: "수요 공급 분석 대시보드 화면",
          },
          // {
          //   src: "./img/project/si/si004.webp",
          //   caption: "조건 조합과 다중 알림 설정 화면",
          // },
          // {
          //   src: "./img/project/si/si005.webp",
          //   caption: "조건 조합과 다중 알림 설정 화면",
          // },
          {
            src: "./img/project/si/si006.webp",
            caption: "대중교통 통합 검색 분석 화면",
          },
          {
            src: "./img/project/si/si007.webp",
            caption: "선택 지역을 경유하는 노선 분석 화면",
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
            title: "사내 ERP 시스템 개발",
            period: "2024.11 ~ 2025.10",
            description:
              "전자결재(기안·결재·반려), 근태·휴가 관리, 관리자 모듈을 Next.js 14 App Router 기반으로 설계·개발·배포·운영 (풀스택)",
          },
          viewT: {
            title: "View-T 시스템 유지보수",
            period: "2024.01 ~ 2025.10",
            description:
              "빅데이터 가공 프로세스 모니터링 대시보드 개발 및 연도별 공간 데이터 갱신 파이프라인 개선 (풀스택)",
          },
          localBusiness: {
            title: "교통 빅데이터 시각화 솔루션 개발",
            period: "2022.10 ~ 2024.12",
            description:
              "화성시 신호 모니터링, 시흥시 대중교통 분석 등 지자체 맞춤 교통 시각화 시스템 개발 (풀스택)",
          },
        },
      },
    },
  },
  footer: {
    caption: "© 2025. Park Jeong Hyeon. All rights reserved.",
  },
};

export default ko;
