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
    exportPdf: "PDF 저장",
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
        { label: "E-mail", value: "vlrnrhd02@naver.com" },
        { label: "Phone", value: "010-6428-5059" },
      ],
    },
    detailHeading: "세부 소개",
    detail: [
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
    },
  },
  skills: {
    title: "SKILLS",
    groups: {
      languages: {
        title: "Languages",
        items: {
          core: { title: "프로그래밍 언어" },
        },
      },
      frontend: {
        title: "Front-End",
        items: {
          htmlCssJs: { title: "마크업/기초 언어" },
          reactNext: { title: "프론트 프레임워크" },
          visualization: { title: "상태 관리/데이터 시각화" },
          tooling: { title: "빌드/툴링" },
        },
      },
      backendOps: {
        title: "Back-End & etc",
        items: {
          spring: { title: "스프링" },
          mybatis: { title: "ORM" },
          databases: { title: "데이터베이스" },
          collaboration: { title: "협업" },
          infra: { title: "운영/인프라" },
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
        period: "2024.07 ~ 2025.10",
      },
      viewTexportX: {
        name: "교통지표 공간 분석 플랫폼",
        period: "2025.04 ~ 2025.05",
      },
      viewT: {
        name: "View-T 3.0 (교통 빅데이터 분석 플랫폼)",
        period: "2023.01 ~ 2025.10",
      },
      hs: {
        name: "화성시 스마트 교통신호 분석 시스템",
        period: "2022.12 ~ 2023.04",
      },
      si: {
        name: "시흥시 대중교통 분석 서비스",
        period: "2023.07 ~ 2023.12",
      },
      viewTLog: {
        name: "빅데이터 가공 로그 모니터링 (view-t-log-viewer)",
        period: "2024.11 ~ 2025.01",
      },
    },
    readmes: {
      erp: {
        overview: {
          description: "Spring/Java 중심의 팀 환경에서 Next.js 14를 자체 학습해 도입하고, 전자결재·근태·관리자 시스템을 기획·설계·개발·배포·운영까지 전 과정을 단독으로 주도한 풀스택 프로젝트입니다. 팀 내 React 전문가가 없는 상황에서 스스로 아키텍처를 결정하고 운영까지 전담했습니다.",
          team: "웹 개발자 (2명)",
          role: "풀스택 개발 — 기획·설계·개발·배포·운영 전 단계 관여",
        },
        details: [
          {
            title: "Next.js App Router, React, TypeScript 기반으로 화면과 API를 함께 구성",
            background: "운영 중 특정 사용자의 세션을 강제 종료하거나 디바이스별 로그인 상태를 관리해야 하는 요구가 생겼습니다. NextAuth 기본 JWT 방식으로는 서버에서 세션을 제어할 수 없어 직접 DB 세션 구조로 전환했습니다. 기존 사내 사용자 테이블 구조가 NextAuth의 기본 어댑터와 맞지 않아 어댑터 인터페이스도 직접 구현했습니다.",
            result: "프론트엔드와 백엔드가 분리되지 않은 빠른 개발 사이클로 기능 구현과 수정 대응 속도를 높일 수 있었습니다.",
          },
          {
            title: "약 80개의 API와 30개 이상의 페이지로 구성된 사내 업무 서비스를 공통 컴포넌트, fetch 유틸, 상태 훅으로 반복 기능을 분리",
            background: "1차 결재자 승인 후 2차 결재자 자동 활성화, 반려 시 연차 사용 이력 롤백 등 여러 테이블에 걸친 상태 전이 로직이 필요했습니다. API 레이어에서 직접 처리하면 로직이 분산되고 실패 시 데이터 정합성 보장이 어렵다고 판단해 DB 레이어로 캡슐화했습니다.",
            result: "화면과 기능이 늘어나는 상황에서도 개발 생산성과 유지보수성을 높일 수 있었습니다.",
          },
          {
            "title": "Webhook 기반 이벤트 연동으로 외부 시스템과 실시간 알림 구조 구축",
            "background": "결재(기안/승인/반려/참조) 이벤트 발생 시 Jandi(사내메신저)와 연동하여, 사용자가 수동으로 확인하지 않아도 주요 이벤트를 즉시 전달할 수 있는 구조가 필요했습니다.",
            "result": "Webhook 기반으로 결재 이벤트를 실시간 전파하고 Jandi(사내메신저)를 연동하여, 수동 확인 없이 업무 대응이 가능한 알림 체계를 구축했습니다."
          },
          {
            title: "next-auth와 PostgreSQL 기반으로 인증 및 DB 세션 구조를 커스터마이징",
            background: "운영 중 특정 사용자의 세션을 강제 종료하거나 디바이스별 로그인 상태를 관리해야 하는 요구가 생겼습니다. NextAuth 기본 JWT 방식으로는 서버에서 세션을 제어할 수 없어 직접 DB 세션 구조로 전환했습니다",
            result: "서비스 요구사항에 맞는 로그인 유지, 세션 관리, 사용자 정보 연동을 안정적으로 처리할 수 있었습니다.",
          },
         {
            "title": "문서 양식 데이터를 JSON 기반으로 구조화하고 렌더링 로직 분리",
            "background": "기존에는 문서 양식별로 화면과 로직이 분리되지 않아, 새로운 문서 유형이 추가될 때마다 코드 수정 범위가 넓고 유지보수가 어려운 문제가 있었습니다.",
            "result": "문서 양식을 JSON으로 관리하고 렌더링 로직을 분리하여, 신규 문서 유형 추가 시 코드 변경을 최소화하고 확장성과 유지보수성을 개선했습니다."
          }
        ],
        reflection: [
          "전자결재 시스템을 개발하며, 단순 기능 구현을 넘어 조직의 업무 흐름과 승인 프로세스를 이해하는 것이 중요하다는 점을 깨달았습니다. 특히 작은 기능 하나도 사용자에게는 업무 효율과 직결되기 때문에, 안정성과 사용자 경험을 함께 고려하는 개발의 중요성을 체감했습니다.", 
          "Next.js를 처음 접한 상태에서 공식 문서와 소스 코드를 기반으로 빠르게 학습하고, 팀 내 도입을 단독으로 주도했습니다. 전 과정을 책임지는 환경에서 기술 선택의 근거와 트레이드오프를 스스로 판단하며, 설계에 대해 더 깊이 고민하는 습관을 갖게 되었습니다."
        ]
      },
      si: {
        overview: {
          description: "행정 담당자가 대중교통 운영 현황과 이용 패턴을 지도와 차트로 분석할 수 있도록 만든 웹 서비스입니다. 버스 노선, 정류장, 지역별 수요, 수익성, 운영 정보 같은 데이터를 한 화면에서 검색하고 비교할 수 있도록 구성했고, 필요한 데이터는 다운로드까지 가능하게 만들었습니다.",
          team: "웹 개발자(3명) + 디자이너(1명) + 데이터 엔지니어(1명) 협업",
          role: "풀스택 개발 — 주요 5개의 기능에 대한 주요 기능 5개의 Spring 기반 API 개발, 공간 데이터 쿼리 작성 및 프론트엔드 구현 담당",
        },
        details: [
          {
            title: "대규모 지리 데이터를 줌·패닝·선택 상태에 따라 필요한 지도 레이어만 갱신하는 구조 구현",
            background: "지도 기반 분석 화면에서 수천 개의 이상의 데이터를 한 번에 렌더링할 경우 브라우저 성능 저하와 UI 반응 지연 문제가 발생할 수 있었습니다.",
            result: "화면 상태에 따라 필요한 레이어만 갱신하도록 구조를 설계해 렌더링 부담을 줄이고, 대량의 지도 데이터를 포함한 분석 화면에서도 교통 데이터를 직관적으로 탐색할 수 있는 지도 UX를 구현했습니다."
          },
          {
            title: "주요 화면 이벤트 처리 흐름을 표준화하여 상태 충돌을 최소화하는 구조 설계",
            background: "지도 이벤트와 UI 이벤트가 동시에 발생하는 화면에서 상태 관리가 복잡해지면서 이벤트 순서에 따라 데이터와 UI 상태가 불일치하는 문제가 발생할 수 있었습니다.",
            result: "상태 변경 → API 요청 → 지도 레이어 갱신 → 리스트 갱신 순으로 처리 흐름을 표준화해 이벤트 충돌을 줄이고, 복잡한 조건 검색 화면에서도 변경 지점을 추적하기 쉬운 구조를 만들었습니다."
          },
          {
            title: "복합 검색 화면을 위한 배열 기반 다중 선택 파라미터 API 구조 설계",
            background: "지역, 정류장, 노선 유형 등 다중 선택 조건이 많은 분석 화면에서 UI와 API 간 파라미터 구조가 복잡해지고 관리가 어려워지는 문제가 있었습니다.",
            result: "프론트엔드에서 선택 옵션을 배열 형태로 변환하는 유틸 함수를 구현해 API 요청 구조를 일관되게 유지하고, 요구사항 변경 시에도 유연하게 대응할 수 있는 구조를 만들었습니다."
          },
          {
            title: "대용량 교통 데이터 조회 성능 개선을 위한 Index 설계 및 CTE 기반 SQL 구조 개선",
            background: "테이블당 수만 건 이상의 데이터를 다양한 조건으로 조회해야 하는 분석 기능에서 검색 성능과 SQL 유지보수성을 동시에 고려한 구조 설계가 필요했습니다.",
            result: "빈도가 높은 공통 조건을 중심으로 Index를 설계하고 WITH CTE로 공통 집계 로직과 조건 분기 영역을 분리해 조회 성능을 개선하고 요구사항 변경 시 수정 범위를 최소화했습니다."
          },
          {
            title: "협업 효율 향상을 위한 공통 개발 규칙 및 구조 정의",
            background: "여러 개발자가 동시에 참여하는 환경에서 변수명, API 파라미터, UI 구성 방식 등이 일관되지 않아 코드 가독성과 유지보수성이 떨어지고, 협업 시 혼선이 발생하는 문제가 있었습니다.",
            result: "공통 UI 컴포넌트, 지도/차트 모듈, API 파라미터 처리 규칙을 정의하고 팀 내에 적용하여, 코드 일관성을 확보하고 기능 단위 병렬 개발이 가능한 협업 환경을 구축했습니다."
          }
        ],
        reflection: [
          "Web Components API는 프로젝트 투입 전 사용해본 적이 없었습니다. 브라우저 표준 API 문서를 직접 학습해 차트 컴포넌트를 구현했고, 라이브러리 없이도 재사용 가능한 컴포넌트를 만들 수 있다는 것을 경험했습니다. 처음 접하는 기술도 문서와 예제를 통해 빠르게 익힐 수 있다는 자신감이 생겼습니다.",
          "SI 프로젝트 특성상 명세가 중간에 바뀌는 상황이 많았습니다. 유연한 대응을 위해 쿼리와 컴포넌트 설계에서 확장성을 고려하는 습관이 생겼습니다.",
        ],
      },
      viewT: {
        overview: {
          description: "네비게이션 데이터, 통신 데이터 등 다양한 교통 빅데이터를 기반으로 도로 구간별 통행량·속도·혼잡도 등의 지표를 산출하고, 이를 지도 위에서 시각화하여 교통 흐름을 분석할 수 있는 교통 데이터 분석 플랫폼입니다.",
          team: "웹 개발자(2명) + 데이터 엔지니어(1명) 협업",
          role: "기존 View-T 서비스에서 화면 페이지 및 API의 오류를 분석·수정하고, 연도별 데이터 갱신 시 데이터 적재 및 검증 작업을 수행하며 서비스의 안정적인 운영을 담당했습니다.",
        },
        details: [
          {
            title: "대용량 CSV 데이터 적재 처리 개선 — MySQL 배치 Insert 및 안정성 확보",
            background: "수백만 건 이상의 CSV 데이터를 MySQL에 적재하는 과정에서 단건 Insert 기반 구조로 인해 처리 시간이 과도하게 소요되고, 중간 실패 시 전체 재처리가 필요한 비효율적인 문제가 존재했습니다.",
            result: "배치 Insert 방식으로 처리 구조를 개선하고 안정적인 데이터 적재 프로세스를 구축하여, 장시간 작업을 안정적으로 완료할 수 있는 환경을 확보했습니다."
          },
          {
            title: "정적 JSON 데이터 활용으로 대용량 조회 성능 개선",
            background: "다수의 화면 요소를 실시간 쿼리로 조회할 경우 DB 부하가 크고 응답 속도가 저하되는 문제가 있었으며, 분석 파라미터가 제한적이어서 동적 조회의 필요성이 낮은 구조였습니다.",
            result: "파라미터별 결과 데이터를 사전 집계하여 JSON 파일로 관리하고, 클라이언트에서 직접 로드하도록 변경하여 조회 성능을 개선하고 서버 부하를 최소화했습니다."
          },
          {
            title: "레거시 파라미터 UI 공통화 및 동적 생성 구조 개선 (40+ 기능 적용)",
            background: "수년간 누적된 레거시 코드에서 기능별로 파라미터 수집 UI가 일부는 하드코딩, 일부는 비정형 구조로 혼재되어 있어 일관성이 없고, 변경 시 영향 범위를 예측하기 어려운 상태였습니다.",
            result: "파라미터 정의를 공통화하고 단일 설정 변경만으로 전체 조건 UI에 반영되도록 개선했으며, 약 40개 이상의 기능에 안정적으로 적용해 유지보수성과 확장성을 크게 향상시켰습니다."
          },
        ],
        reflection: [
            "대용량 데이터를 다루는 과정에서, 단순히 데이터를 처리하는 것보다 어떻게 적재하고 조회할지를 설계하는 것이 전체 시스템 성능에 더 큰 영향을 준다는 것을 경험했습니다.",
            "오랜 기간 누적된 레거시 코드를 개선하면서, 기존 구조를 무너뜨리지 않고 점진적으로 공통화하고 정리하는 접근이 안정적인 서비스 운영에 중요하다는 것을 체감했습니다.",
        ],
      },
      hs: {
        overview: {
          description: "화성시 전역 교차로 신호 정보와 차량 궤적 데이터를 지도 위에 시각화한 신호 모니터링·교통 분석 시스템입니다. 교차로 단위 분석, 신호 모니터링, 차량 이동 흐름 확인, 데이터 이력 관리 기능이 함께 운영되는 프로젝트입니다.",
          team: "웹 개발자(3명) + 디자이너(1명) + 데이터 엔지니어(1명) 협업",
          role: "풀스택 개발 — 주요 3개 기능에 대한 SQL 쿼리 설계, Spring 기반 API 개발, 화면 구현까지 전 과정 담당",
        },
        details: [
          {
            "title": "기존 API 아키텍처를 빠르게 내재화하고 신규 기능에 정합성 있게 확장",
            "background": "장기간 운영된 프로젝트의 API 구조(요청/응답 패턴, URL 설계, 공용 처리 로직)를 준수해야 하는 상황에서, 교차로 중심의 복합 데이터를 단계적으로 조회하는 다단계 구조 설계가 요구되었습니다.",
            "result": "기존 API 아키텍처를 단기간에 분석·내재화하고, 그 구조를 기반으로 다단계 조회 로직을 설계·통합하여 시스템 전반의 일관성을 유지하면서 신규 기능을 안정적으로 확장했습니다."
          },
          {
            "title": "대용량 교차로 데이터 조회를 위한 SQL 구조 설계 및 성능 안정화",
            "background": "교차로 단위로 링크·방향 데이터를 결합하는 쿼리에서 요청당 수천 건 이상의 데이터 처리와 다건 조건 조회가 동시에 요구되는 상황이었습니다.",
            "result": "다중 조인 및 그룹화 구조를 최적화하여 대용량 데이터 조회 시에도 수백 ms 수준의 응답 속도를 유지하고, 다건 요청 처리 시에도 안정적인 성능을 확보했습니다."
          },
          {
            title: "지표 유형별로 분리된 수십 개 테이블을 동적 파라미터로 추상화 — 33개 Mapper로 5,705개 SQL 통합",
            background: "교통지표 유형(속도/혼잡도/교통량)별로 수십 개의 테이블이 분리되어 있었으며, 각각 별도 Mapper를 작성하면 코드 중복이 심각해질 상황이었습니다.",
            result: "수십 개 테이블을 소수 Mapper로 통합 관리, 신규 지표 추가 시 파라미터 변경만으로 대응",
          },
          {
            title: "GeoServer WMS/WFS를 상황에 맞게 분리 적용해 지도 데이터 제공 구조 설계",
            background: "지도 시각화와 데이터 인터랙션 요구사항이 동시에 존재하는 환경에서, 단일 방식으로는 렌더링 성능과 데이터 활용성을 모두 만족시키기 어려운 상황이었습니다.",
            result: "단순 시각화는 WMS 기반으로 처리해 렌더링 성능을 확보하고, 클라이언트에서 데이터 가공 및 인터랙션이 필요한 경우에는 WFS를 활용하는 구조로 설계하여 성능과 유연성을 동시에 확보했습니다."
          }
        ],
        reflection: [
          "MongoDB와 WebGL 지도 라이브러리 모두 투입 전 사용해본 적이 없었습니다. 공식 문서와 팀 코드를 반복해서 읽으며 빠르게 익혔고, 낯선 기술이라도 구조를 파악하면 충분히 기여할 수 있다는 경험을 했습니다. 이 자신감이 이후 ERP에서 Next.js를 처음 도입할 때 밑바탕이 됐습니다.",
          "ERD와 기능·화면 설계서를 작성하는 단계부터 참여하며, 명확한 설계가 이후 개발 효율과 유지보수성에 직결된다는 것을 경험했습니다. 이를 통해 개발 이전 설계의 중요성을 깊이 이해하게 되었습니다.",
          "197 Java 파일, 100+ API 규모의 대형 코드베이스를 처음 경험하면서 네이밍 일관성과 코드 구조의 중요성을 실감했습니다.",
        ],
      },
      viewTexportX: {
        overview: {
          description: "JSP + javascript 기반의 레거시 View-T 3.0 분석 화면을 React 19 + TypeScript 기반 SPA로 전면 재구축한 프로젝트입니다. 프론트엔드 개발을 맡아, Zustand·dnd-kit 등 신규 스택을 빠르게 도입하고 아키텍처 설계부터 구현까지 주도했습니다.",
          team: "웹 개발자 (2명)",
          role: "풀스택 개발 — 기획·설계·개발·배포·운영 전 단계 관여",
        },
        details: [
          {
            title: "분석 옵션을 API/지도 엔진 파라미터로 변환하는 중간 계층을 만들어 복잡한 요구사항을 단순화",
            background: "UI에서 선택하는 옵션 형태와 서버 API, GeoServer, 지도 엔진이 요구하는 파라미터 형태가 서로 달랐습니다. 이 차이를 각 기능 화면에서 직접 처리하면 조건이 늘어날수록 분기와 중복 로직이 빠르게 증가하는 문제가 있었습니다.",
            result: "buildSelectedParams와 buildParsingParam으로 사용자 선택값을 정규화하고, 이를 다시 API 요청 파라미터와 지도 스타일 파라미터로 변환하는 구조를 만들었습니다. 특히 table, target_col, road_ranks 같은 파생 값을 공통 규칙으로 생성해 복잡한 반복 문제를 추상화했고, 화면에서는 옵션 선택에만 집중할 수 있도록 분리했습니다.",          
          
          },
          {
            title: "멀티맵 환경에서도 상태 충돌이 나지 않도록 map_id 기준으로 모달, 메시지, 레이어 상태를 분리",
            background: "단일 지도 기준으로 만든 UI는 비교 분석이나 병렬 작업 같은 요구가 들어오면 전역 상태 충돌이 발생하기 쉽습니다. 특히 레이어 패널, 모달, 알림 메시지가 같은 전역 공간을 공유하면 어느 맵에 대한 액션인지 구분하기 어려워집니다.",
            result: "기본 맵 외에 추가 맵 컨테이너를 동적으로 생성하고, 하위 기능을 모두 map_id 기준으로 분기하도록 설계했습니다. 모달은 각 맵 컨테이너 내부에 portal로 렌더링했고, 공통 메시지도 map_id -> messages[] 구조로 바꿔 멀티맵 환경에서 상호작용 충돌을 줄였습니다. 그 결과 비교/병렬 분석 같은 확장 요구를 감당할 수 있는 UI 구조를 확보했습니다.",
          },
          {
            title: "레이어 패널의 순서 변경을 실제 지도 렌더링 순서와 동기화해 사용자 조작과 결과 화면의 일관성을 확보",
            background: "지도 서비스에서는 패널에 보이는 레이어 순서와 실제 지도 렌더링 순서가 다르면 사용자가 기능을 신뢰하기 어렵습니다. 특히 여러 레이어를 겹쳐 보는 서비스에서는 순서 조정이 단순 UI 변경이 아니라 실제 분석 결과 해석에 직접 영향을 줍니다.",
            result: "dnd-kit 기반 드래그 정렬을 적용하고, 드롭 결과를 layerOrderChange로 연결해 지도 엔진 reorderIdx까지 함께 실행되도록 구현했습니다. 그 결과 사용자가 패널에서 바꾼 순서가 지도 표시 순서와 즉시 일치하도록 만들어 조작 일관성과 해석 가능성을 높였습니다.",
          },
          {
            title: "스타일 편집을 표현 방식 선택, 데이터 변환, 유효성 검증 단계로 분리해 시각화 복잡도를 제어",
            background: "지도 스타일은 단순 색상 변경이 아니라 color/thickness 2개 표현 모드, 5단계 범례, 라벨, null 처리, opacity, 속도지표 전용 기본값까지 함께 다뤄야 했습니다. 이를 개별 컴포넌트에서 직접 수정하면 시각화 규칙이 쉽게 깨질 수 있는 구조였습니다.",
            result: "스타일 시스템을 7종 편집 컴포넌트와 2개 표현 모드로 나누고, API 응답의 MinMax를 받아 범례와 두께 범위를 자동 계산하도록 만들었습니다. 또 convertStyleComponentToStyleData를 통해 편집 UI 데이터를 실제 지도 스타일 데이터로 변환하고, 표출 구간 0개 금지나 라벨 zoom level 안내 같은 방어 로직을 추가해 잘못된 시각화 상태를 사전에 차단했습니다.",
          },
        ],
        reflection: [
            "다년 동안 운영된 JSP 기반 레거시 서비스를 React SPA로 전면 재구축하며, 단순 마이그레이션이 아닌 구조를 다시 설계하는 경험을 했습니다.",
            "특히 상태 관리, 파라미터 처리, 지도 렌더링 로직을 분리하는 과정에서, 복잡한 요구사항일수록 중간 계층을 두어 역할을 나누는 것이 유지보수성과 확장성에 중요하다는 것을 체감했습니다.",
            "멀티맵 환경, 레이어 순서 제어, 스타일 편집 등 다양한 인터랙션 요구를 구현하면서, UI 상태와 실제 데이터/렌더링 결과를 일관되게 유지하는 설계의 중요성을 깊이 이해하게 되었습니다.",
        ],
      },
      viewTLog: {
        overview: {
          description: "교통 빅데이터 가공 파이프라인의 처리 현황을 모니터링하는 내부 도구로, Next.js App Router BFF 패턴을 처음 도입해 별도 Spring 백엔드 없이 단독 구축한 풀스택 프로젝트입니다. information_schema 동적 메타 조회 패턴으로 DB 컬럼 변경이 프론트 코드 수정으로 이어지는 반복 문제를 구조적으로 해결했습니다.",
          team: "1인 개발 (기획·설계·개발 전담)",
          role: "풀스택 개발 — Next.js BFF 패턴, MySQL 직접 연동, ApexCharts 시각화 구현",
        },
        details: [
          {
            title: "Next.js Route Handlers BFF 패턴 첫 도입",
            background: "내부 모니터링 도구라 별도 Spring 백엔드 서버를 구축하기보다 빠르게 단독으로 구성하고 싶었습니다. Next.js App Router의 Route Handler를 BFF 레이어로 쓰는 방식을 처음 시도했고, Spring Controller+Service+Repository 역할을 Route Handler 하나로 대체할 수 있는지 직접 설계하며 검증했습니다.",
            result: "별도 백엔드 서버 없이 Next.js 단독으로 서비스 구성, 인프라 구성 단순화",
          },
          {
            title: "information_schema 동적 메타 조회로 DB 컬럼 변경이 프론트 코드 수정으로 이어지는 반복 문제를 구조적으로 해결",
            background: "DB 컬럼이 추가될 때마다 프론트 테이블 헤더와 필터 UI를 함께 수정해야 하는 반복 작업이 생긴다는 것을 개발 단계에서 미리 파악했습니다. DB 스키마 변경이 프론트 코드 수정으로 연결되는 구조적 문제를 근본적으로 없앨 방법을 스스로 고민해 information_schema 동적 조회 패턴을 선택했습니다.",
            result: "DB 컬럼 변경 시 프론트 코드 수정 불필요, 유지보수 비용 대폭 감소",
          },
          {
            title: "집계 단위 변경마다 API를 재호출하는 반복 요청 문제를 클라이언트 집계로 해결 — 즉각적인 UI 반응",
            background: "일별 원시 데이터를 년/월 단위로 집계하는 기능에서 집계 단위가 바뀔 때마다 API를 재호출하면 응답 속도가 느렸습니다.",
            result: "집계 단위 전환 시 API 재호출 없이 즉시 반응, 사용자 경험 개선",
          },
          {
            title: "setTimeout 타이머 지연 현상을 직접 발견하고 rAF 기반 타이머로 교체",
            background: "알림 타이머를 setTimeout으로 구현했는데, 브라우저 탭을 비활성 상태로 두었다가 돌아왔을 때 알림이 예상보다 늦게 사라지는 현상을 직접 발견했습니다. setTimeout의 탭 비활성 시 throttling 동작을 확인하고, requestAnimationFrame + performance.now() 기반으로 직접 교체했습니다.",
            result: "브라우저 탭 상태와 무관하게 정확한 알림 타이머 동작 구현",
          },
        ],
        reflection: [
          "Next.js BFF 패턴을 처음 도입하면서 Route Handler 하나가 Spring Controller + Service + Repository 역할을 대신할 수 있다는 것을 체감했습니다. 이 경험이 ERP 설계 시 BFF 구조를 자신 있게 선택할 수 있는 근거가 됐습니다.",
          "information_schema 동적 메타 조회는 처음에는 과한 설계처럼 느껴졌지만, DB 컬럼이 실제로 추가됐을 때 코드 수정 없이 자동 반영되는 것을 경험했습니다. 반복되는 유지보수 문제를 구조적으로 없애는 것이 기능 구현만큼 중요한 설계 결정이라는 것을 배웠습니다.",
          "내부 도구라 사용자가 동료들이었고, 직접 피드백을 빠르게 받을 수 있었습니다. 실사용자의 니즈가 기획 단계에서 예상했던 것과 다를 수 있다는 것을 경험했고, 이후 개발할 때 먼저 사용 흐름을 그려보는 습관이 생겼습니다.",
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
    caption: "© 2026. Park Jeong Hyeon. All rights reserved.",
  },
};

export default ko;
