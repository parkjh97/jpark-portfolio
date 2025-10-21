const ko = {
  brand: "CDG's Portfolio",
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
    title: "- 최덕경 -",
    subtitle: "프론트 엔드 개발자 포트폴리오",
    intro: [
      "안녕하세요.",
      "본질에 집중하는 프론트 엔드 개발자",
      "최덕경입니다.",
    ],
    cta: "더 알아보기 ↓",
  },
  about: {
    title: "ABOUT ME",
    fields: {
      name: { label: "이름", value: "최덕경" },
      birth: { label: "생년월일", value: "1997.01.17" },
      location: { label: "위치", value: "서울특별시 관악구" },
      phone: { label: "연락처", value: "010-4582-5037" },
      email: { label: "이메일", value: "hjcdg197@gmail.com" },
      education: {
        label: "학력",
        value: "서울대학교 (컴퓨터공학부)",
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
        summary: "노래방을 즐기는 사람이 자주 부르는 노래를 간편하게 관리하는 웹사이트",
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
          "프론트 엔드와 백 엔드가 분리된 AWS 배포 환경 수동 구축",
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
  },
  career: {
    title: "CAREER",
    companies: {
      daangn: {
        logoText: "DAANGN",
        period: "2024.11 - (재직 중)",
        description: "\"이웃과 더 가까워지는 따뜻한 동네를 만들어요\"",
        roles: {
          frontend: "Frontend 개발",
          backend: "Backend 개발",
        },
        highlights: {
          threeTab: {
            title: "비즈프로필 기반의 당근 3탭 서비스 개발",
            period: "2025년 상반기 - (진행 중)",
            description:
              "당근 3탭(동네지도)의 유입 확보를 위한 비즈프로필 기반의 서비스 개발 (Frontend, Backend)",
          },
          webviewPlatform: {
            title: "비즈프로필 웹뷰의 플랫폼 개발",
            period: "2024년 상반기",
            description:
              "비즈프로필 웹뷰의 생산성, 안정성, 성능을 개선하기 위한 플랫폼 개발 (Frontend)",
          },
          localBusiness: {
            title: "지역 동네 업체 정보(비즈프로필) 관련 개발",
            period: "2024년 하반기",
            description:
              "이웃의 사장님들과 고객님들을 효과적으로 연결하기 위한 비즈프로필 관련 기능 개발 (Frontend)",
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
    caption: "© 2021. Choi Deok Gyeong. All rights reserved.",
  },
};

export default ko;
