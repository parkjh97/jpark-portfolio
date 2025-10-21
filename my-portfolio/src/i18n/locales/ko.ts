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
    keyLine: "사용자의 문제를 정확히 짚어내고 풀스택 사고로 팀의.",
    profile: {
      photo: {
        alt: "박정현 증명 사진 자리",
        initials: "PJH",
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
      "기획 테이블에서 서비스의 첫 줄을 맞추고, 배포 이후에는 사용자의 목소리로 다시 문장을 다듬습니다. 프론트엔드와 백엔드를 모두 이해하는 시야로 문제의 본질을 짚어내고, 사용자 경험이 자연스럽게 이어지도록 환경을 설계합니다. 팀이 안심하고 개발할 수 있도록 문서화와 자동화를 습관화하고 있으며, 작은 습관이 곧 조직의 속도와 품질을 지켜 준다고 믿습니다. 첫 팀 서비스였던 대학 시절 프로젝트를 시작으로, 고객이 직접 사용하는 화면이 어떻게 살아 움직이는지 지켜보며 개발자의 길을 다졌습니다. 이후 커머스, 커뮤니티, 사내 플랫폼 등 다양한 도메인을 경험하며 기술적인 완성도와 사용자 경험을 동시에 관리하는 방법을 배웠습니다.",
      "기능을 출시하는 것에 그치지 않고, 서비스가 지향하는 가치가 고객에게 잘 전달되고 있는지 꾸준히 검증하는 것을 무엇보다 중요하게 생각합니다. 당근마켓에서는 비즈프로필 기반 기능을 통해 동네 사장님과 고객이 만나는 경험을 설계했습니다. 지도 경험의 유입 전략을 세우고, 웹뷰 플랫폼을 개편하여 성능과 운영 효율을 끌어올렸으며, 프론트엔드 모듈화와 API 설계, 데이터 파이프라인, 모니터링 체계 등을 직접 구축하며 팀 전체가 신뢰할 수 있는 개발 환경을 마련했습니다.",
      "제가 좋은 개발자라고 느끼는 순간은 팀 구성원들이 제 코드와 문서를 통해 빠르게 맥락을 이해하고 다음 결정을 내릴 수 있을 때입니다. 오늘의 작은 개선이 내일의 팀 문화를 만든다고 믿으며, 성장의 순간을 기록하고 공유하는 습관으로 팀과 함께 앞으로 나아가고자 합니다.",
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
      language: { title: "Language" },
      frontend: { title: "frontend" },
      backend: { title: "Backend" },
      devops: { title: "DevOps" },
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
      readme: "README",
      images: "이미지",
    },
    items: {
      reactBulkForm: {
        name: "react-bulk-form",
        period: "2025.03",
        summary: "Form 상태의 일괄 관리를 위한 간단한 React 라이브러리",
        details: [
          "Form 필드 값과 오류(정적 규칙 기반의 검증 결과)의 일괄 관리",
          "Form 또는 필드 단위의 상태 추적",
          "Form 상태에 따른 UX 구현을 배제하여 부가적인 인터페이스 최소화",
        ],
      },
      itEldorado: {
        name: "IT 엘도라도 (블로그)",
        period: "2024.09 (1人 개인 프로젝트)",
        summary: "Notion API/DB와 연동하여 개발한 개인 블로그",
        details: [
          "티스토리 플랫폼에서의 불편함을 해소하고자 직접 개발",
          "별도의 데이터베이스 서버 없이 Notion API/DB와 연동하여 개발",
          "검색 엔진 최적화(SEO) 고도화 및 검색 엔진 마이그레이션",
          "무한 스크롤, 방문/조회 수 추적, 댓글/좋아요 등의 커뮤니티 기능 개발",
        ],
      },
      fosslightHubLite: {
        name: "FOSSLight Hub Lite",
        period: "2023.09 - 2023.12 (2人 팀 프로젝트)",
        summary:
          "LG 전자의 FOSSLight Hub 웹사이트를 사용자 기능 중심으로 리모델링한 웹사이트",
        details: [
          "LG 전자에서 관리자가 아닌 사용자를 위한 간소화 버전의 웹사이트 개발을 요청",
          "기존 FOSSLight Hub 프로젝트의 환경에 통합시켜 기존 사용자들의 접근성 확보",
          "URL 쿼리 파라미터에 연동되는 정렬/필터 기능 및 모달 열기/닫기 기능 구현",
          "전반적인 UI/UX를 새롭게 설계하여 종합적인 사용성 개선",
        ],
      },
      mapleAuctionAlarm: {
        name: "메이플 경매장 알리미",
        period: "2023.08 - 2023.09 (2人 팀 프로젝트)",
        summary:
          "메이플스토리의 아이템이 원하는 조건으로 경매장에 올라왔을 때 알림을 받아보기 위한 웹사이트",
        details: [
          "메이플스토리를 좋아하는 한 친구의 아이디어에 착안하여 개발",
          "최신 기술인 React 18 기반의 Next.js 13 학습 및 적용",
          "React-Query, React-Hook-Form을 활용하여 API 요청 및 입력 폼 처리",
          "Next.js 서버를 리버스 프록시로 활용하여 IP 노출 및 CORS 문제 해결",
        ],
      },
      whatToSing: {
        name: "무슨 노래 부르지?",
        period: "2022.10 (1人 개인 프로젝트)",
        summary:
          "노래방을 즐기는 사람이 자주 부르는 노래를 간편하게 관리하는 웹사이트",
        details: [
          "노래방을 갈 때마다 무슨 노래를 부를지 고민하지 않기 위해 개발",
          "OAuth 2.0 기반의 Firebase Auth를 활용하여 소셜 로그인 구현",
          "NoSQL 기반의 Firebase Realtime Database를 활용하여 쿼리 작성",
          "Tailwind CSS를 활용하여 별도의 CSS 파일 없이 스타일링",
        ],
      },
      smartDutchPay: {
        name: "똑똑하게 N빵하기 (React-Native)",
        period: "2022.02 (1人 개인 프로젝트)",
        summary:
          "복잡한 N빵 상황에 누가 누구에게 얼마를 보내야 하는지 계산해주는 모바일 앱",
        details: [
          "Android Native를 React-Native로 마이그레이션하여 개선 후 출시",
          "Recoil을 활용하여 React와 유사한 방식으로 전역 상태 관리",
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
      reactBulkForm: {
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
      itEldorado: {
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
      fosslightHubLite: {
        title: "FOSSLight Hub Lite",
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
      mapleAuctionAlarm: {
        title: "메이플 경매장 알리미",
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
      whatToSing: {
        title: "무슨 노래 부르지?",
        intro: [
          "Firebase 기반 소셜 로그인과 실시간 DB를 활용하여 즐겨 부르는 곡을 간편히 관리할 수 있는 서비스입니다.",
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
      reactBulkForm: {
        title: "react-bulk-form 화면",
        items: [
          {
            src: "https://placehold.co/960x600?text=Demo+Form+State",
            caption: "상태 패널을 통해 필드별 값과 오류를 한 눈에 확인",
          },
          {
            src: "https://placehold.co/960x600?text=TypeScript+API",
            caption: "타입 정의와 훅 인터페이스",
          },
        ],
      },
      itEldorado: {
        title: "IT 엘도라도 블로그 화면",
        items: [
          {
            src: "https://placehold.co/960x600?text=Landing+Hero",
            caption: "히어로 영역과 최신 포스트 영역",
          },
          {
            src: "https://placehold.co/960x600?text=Article+Page",
            caption: "SEO 최적화된 포스트 상세 페이지",
          },
        ],
      },
      mapleAuctionAlarm: {
        title: "메이플 경매장 알리미 UI",
        items: [
          {
            src: "https://placehold.co/960x600?text=Condition+Builder",
            caption: "조건 조합과 다중 알림 설정 화면",
          },
          {
            src: "https://placehold.co/960x600?text=Discord+Webhook",
            caption: "실시간 Discord 알림 예시",
          },
        ],
      },
    },
  },
  career: {
    title: "CAREER",
    companies: {
      daangn: {
        logoText: "큐빅웨어",
        period: "2022.10 - (재직 중)",
        description: '"이웃과 더 가까워지는 따뜻한 동네를 만들어요"',
        roles: {
          FULLSTACK: "FULLSTACK 개발",
          backend: "Backend 개발",
        },
        highlights: {
          threeTab: {
            title: "비즈프로필 기반의 당근 3탭 서비스 개발",
            period: "2025년 상반기 - (진행 중)",
            description:
              "당근 3탭(동네지도)의 유입 확보를 위한 비즈프로필 기반의 서비스 개발 (FULLSTACK, Backend)",
          },
          webviewPlatform: {
            title: "비즈프로필 웹뷰의 플랫폼 개발",
            period: "2024년 상반기",
            description:
              "비즈프로필 웹뷰의 생산성, 안정성, 성능을 개선하기 위한 플랫폼 개발 (FULLSTACK)",
          },
          localBusiness: {
            title: "지역 동네 업체 정보(비즈프로필) 관련 개발",
            period: "2024년 하반기",
            description:
              "이웃의 사장님들과 고객님들을 효과적으로 연결하기 위한 비즈프로필 관련 기능 개발 (FULLSTACK)",
          },
        },
      },
      opengallery: {
        logoText: "OPEN GALLERY",
        period: "2019.08 - 2023.09 (4년 1개월)",
        description:
          "그림을 렌탈하려는 고객들과 그림을 그리는 작가들을 중개하는 그림 렌탈 서비스 플랫폼",
        roles: {
          development: "Next.js, Django 개발",
          techLead: "테크 리딩",
          backoffice: "백 오피스 기획",
        },
        highlights: {
          artistSite: {
            title: "작가 개인용 웹사이트 전체 리뉴얼 (Next.js)",
            period: "2022년 상반기",
            description:
              "Django 풀 스택 기반의 작가 개인용 웹사이트를 Next.js와 Django REST 기반으로 마이그레이션",
          },
          deploy: {
            title: "서버 배포 환경 변경 (AWS ECS)",
            period: "2021년 하반기",
            description:
              "서버 배포 환경을 AWS EB에서 Docker 기반의 AWS ECS로 변경 (개발 환경도 함께 변경)",
          },
          cleanup: {
            title: "대규모 서버 정리 작업 리드",
            period: "2020년 중반기 - 2021년 중반기",
            description:
              "대규모 서버 정리 작업을 주도적으로 진행하여 코드 베이스 전반의 대청소 작업을 진행",
          },
          beyondDev: {
            title: "개발 업무 외 기타 업무 담당",
            period: "2020년 중반기 - 퇴사",
            description:
              "채용, 사수, 코드 리뷰의 역할을 담당하고 팀 내에서 지식 공유와 문서화를 적극적으로 진행",
          },
          backoffice: {
            title: "백 오피스의 전반적인 관리 및 각종 기능 개발/기획",
            period: "2019년 하반기 - 퇴사",
            description:
              "Django 풀 스택 기반 백 오피스의 대규모 리뉴얼과 개발/기획을 담당하여 사내 직원의 업무 효율 개선",
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
