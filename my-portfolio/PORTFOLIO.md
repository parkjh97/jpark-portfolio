# jpark-portfolio - React

## 개요

| 항목 | 내용 |
|------|------|
| **React 버전** | 19.1.1 |
| **빌드 도구** | Vite 7.1.7 |
| **TypeScript** | 사용 (5.9.3) |
| **상태 관리** | 별도 라이브러리 없음 (useState, useMemo) |
| **라우터** | 없음 (단일 페이지 스크롤 SPA) |
| **스타일링** | CSS Modules + Tailwind CSS v4 + CSS Variables |
| **배포** | GitHub Pages (gh-pages) |

## 한 줄 소개

React 19 + TypeScript 기반 이직용 개인 포트폴리오 사이트로, i18next 다국어 지원 및 PDF 내보내기 기능을 갖춘 정적 SPA

## 기술 스F
| 분류 | 기술 및 버전 |
|------|-------------|
| **Framework** | React 19.1.1 |
| **언어** | TypeScript 5.9.3 |
| **다국어** | i18next 25.x, react-i18next 16.x, i18next-browser-languagedetector |
| **스타일링** | Tailwind CSS v4, CSS Modules (컴포넌트별 .css), CSS Custom Properties |
| **빌드** | Vite 7.1.7, @vitejs/plugin-react |
| **배포** | gh-pages → GitHub Pages |
| **상태 관리** | 없음 (로컬 useState만 사용) |
| **서버 상태** | 없음 (정적 데이터) |
| **라우팅** | 없음 |
| **HTTP 클라이언트** | 없음 (외부 API 통신 없음) |
| **테스트** | 없음 |

## 컴포넌트 구조 요약

```
App.tsx
└── SiteLayout
    ├── Header                      ← 스크롤 감지, 모바일 메뉴, 언어 전환
    │   └── LanguageSwitcher
    ├── main
    │   ├── AboutSection
    │   ├── SkillsSection
    │   ├── CareerSection
    │   └── ProjectsSection         ← 모달(README/이미지), 필터, PDF 내보내기
    │       ├── Modal (readme)
    │       └── Modal (images)
    └── Footer

공통 컴포넌트
├── Icon.tsx       ← SVG 아이콘 직접 구현 (외부 아이콘 라이브러리 미사용)
├── Modal.tsx      ← ESC 키 닫기, 스크롤 잠금, 접근성 속성
└── SectionTitle.tsx

데이터 레이어
├── src/data/content.ts    ← 모든 정적 데이터 정의 (네비, 스킬, 프로젝트, 커리어)
├── src/types/content.ts   ← TypeScript 인터페이스 전체 정의
└── src/i18n/locales/      ← ko.ts / en.ts (한국어/영어 번역 리소스)
```

## 핵심 기능 구현

### 1. i18next 기반 한/영 다국어 시스템
- **구현 내용**: 브라우저 언어 자동 감지 후 한국어/영어 전환, 선택 언어 localStorage에 캐싱
- **기술 포인트**:
  - `i18next-browser-languagedetector`로 감지 순서 설정: `localStorage → cookie → navigator → htmlTag`
  - `returnObjects: true` 옵션으로 배열·객체 형태 번역 데이터를 TypeScript 타입으로 안전하게 캐스팅
  - 모든 UI 텍스트를 Translation Key로 분리해 데이터와 UI 완전 디커플링
- **코드 위치**: `src/i18n/index.ts:10-25`, `src/sections/ProjectsSection.tsx:52-63`

### 2. 프로젝트 섹션 - 필터링 + 모달 + 이미지 슬라이더
- **구현 내용**: isFeatured 플래그 기반 프로젝트 필터, README/이미지 각각 모달 표시, 이미지 인덱스 순환 슬라이더
- **기술 포인트**:
  - `useMemo`로 필터 상태 변경 시에만 프로젝트 목록 재계산 (`src/sections/ProjectsSection.tsx:47`)
  - 이미지 경계 처리: `safeImageIndex = Math.min(currentImageIndex, totalImages - 1)`로 범위 초과 방지
  - 모달 타입(`"readme" | "images"`)을 단일 상태로 관리해 중복 상태 제거
- **코드 위치**: `src/sections/ProjectsSection.tsx:33-67`

### 3. PDF 포트폴리오 내보내기
- **구현 내용**: `window.print()` 호출 시 화면용 UI를 숨기고 인쇄 전용 레이아웃 렌더링
- **기술 포인트**:
  - `ProjectsPrint.css`에서 `@media print` 규칙으로 웹 UI와 인쇄 레이아웃 완전 분리
  - 프로젝트 목차, 이미지 그리드(최대 4장), README 섹션을 인쇄 카드 형식으로 재구성
- **코드 위치**: `src/sections/ProjectsSection.tsx:39-41`, `src/sections/ProjectsPrint.css`

### 4. Modal 컴포넌트 - 접근성 처리
- **구현 내용**: 모달 열림 시 배경 스크롤 잠금, ESC 키 닫기, ARIA 속성 적용
- **기술 포인트**:
  - `useEffect`에서 `document.body.style.overflow = "hidden"` 설정 후 cleanup 함수로 복원
  - `role="dialog"`, `aria-modal="true"` 적용으로 스크린리더 대응
  - 오버레이 클릭 닫기를 `<button>` 태그로 구현해 키보드 접근성 확보
- **코드 위치**: `src/components/common/Modal.tsx:13-27`

### 5. Header - 스크롤 감지 + 반응형 모바일 메뉴
- **구현 내용**: 스크롤 10px 초과 시 헤더 스타일 변경, 뷰포트 1024px 초과 시 모바일 메뉴 자동 닫힘
- **기술 포인트**:
  - scroll 이벤트에 `{ passive: true }` 옵션으로 스크롤 성능 최적화
  - `useCallback`으로 `handleNavigate` 함수 메모이제이션
  - resize 이벤트로 데스크탑 전환 시 모바일 메뉴 상태 자동 초기화
- **코드 위치**: `src/components/layout/Header.tsx:17-42`

### 6. 커스텀 SVG 아이콘 시스템
- **구현 내용**: 외부 아이콘 라이브러리 없이 SVG path를 컴포넌트로 직접 구현
- **기술 포인트**:
  - `IconName` union 타입으로 존재하지 않는 아이콘명 사용 시 컴파일 타임 에러 발생
  - `Record<IconName, ReactNode>` 맵 구조로 아이콘 추가/관리 용이
  - `SVGProps<SVGSVGElement>` 상속으로 svg 표준 속성 전달 가능
- **코드 위치**: `src/components/common/Icon.tsx:5-133`

## 주요 커스텀 훅

| 훅 이름 | 역할 | 파일 위치 |
|---------|------|----------|
| `useScrollToSection` | offset을 반영한 부드러운 섹션 스크롤 이동 | `src/hooks/useScrollToSection.ts` |

## 기술적 도전 & 해결

### 언어 전환 시 타입 안전한 번역 데이터 처리
- **상황**: i18next의 `t()` 함수는 기본적으로 `string`을 반환하지만, 프로젝트 README나 이미지 목록은 배열/객체 구조로 관리 필요
- **해결**: `t(key, { returnObjects: true })`로 객체 반환 후 TypeScript 인터페이스(`ProjectReadmeContent`, `ProjectImageGallery`)로 타입 캐스팅해 런타임 타입 안전성 확보
- **코드 근거**: `src/sections/ProjectsSection.tsx:56-63`

### SVG 아이콘 번들 크기 vs 유연성 트레이드오프
- **상황**: Font Awesome, heroicons 등 외부 라이브러리는 번들에 미사용 아이콘 포함 가능성
- **해결**: 실제 사용하는 아이콘 14개만 SVG path를 직접 작성해 번들 크기 최소화, `IconName` 유니온 타입으로 타입 안전성 보장
- **코드 근거**: `src/components/common/Icon.tsx`, `src/types/content.ts:3-18`

## 이력서 Bullet Points

- React 19 + TypeScript + Vite 기반 개인 포트폴리오 사이트 설계·개발·GitHub Pages 배포
- i18next 다국어 시스템 구현 (한/영 전환, 브라우저 언어 자동 감지, localStorage 언어 설정 캐싱)
- 데이터(`content.ts`)와 UI(섹션 컴포넌트)를 완전 분리한 타입 안전 아키텍처 설계
- `useMemo` / `useCallback`을 활용한 불필요한 리렌더링 방지 및 passive 스크롤 이벤트 최적화
- `@media print` 기반 PDF 포트폴리오 내보내기 기능 구현 (웹/인쇄 레이아웃 분리)
- 외부 아이콘 라이브러리 없이 커스텀 SVG 아이콘 시스템 구현, union 타입으로 오타 방지

## 면접 예상 질문 & 답변 포인트

### Q. 상태 관리 라이브러리를 사용하지 않은 이유는?
- 이 프로젝트는 서버 데이터 페칭이 없는 순수 정적 UI로, 모든 데이터가 `content.ts`에 정의됨
- 전역 상태가 필요한 시나리오(모달 상태, 필터 상태)가 각 섹션 컴포넌트 내에서 완결되어 Zustand/Redux 없이 `useState`만으로 충분
- Zustand를 도입했다면 오히려 오버엔지니어링이 될 수 있다고 판단

### Q. 컴포넌트 성능 최적화를 어떻게 했나요?
- `ProjectsSection`의 프로젝트 목록은 `useMemo`로 감싸 필터 토글 시에만 재계산 (`ProjectsSection.tsx:47`)
- `Header`의 `handleNavigate`는 `useCallback`으로 메모이제이션 (`Header.tsx:36-42`)
- 스크롤 이벤트에 `{ passive: true }` 옵션 적용으로 브라우저 스크롤 성능 최적화
- 아이콘은 외부 라이브러리 없이 직접 구현해 번들 사이즈 절감

### Q. i18next에서 객체 타입 데이터를 어떻게 처리했나요?
- `t(key, { returnObjects: true })` 옵션으로 배열/객체 형태 반환
- 반환값을 `ProjectReadmeContent`, `ProjectImageGallery` 등 TypeScript 인터페이스로 캐스팅
- 실제 번역 데이터 구조(`ko.ts`, `en.ts`)가 인터페이스와 일치하도록 관리

---

## 분석 완료 후 3줄 요약

1. **프로젝트 특징**: React 19 최신 버전 기반의 정적 SPA로, 외부 의존성을 최소화하고 TypeScript 타입 시스템을 적극 활용한 데이터-UI 분리 설계
2. **가장 어필할 기술 포인트**: i18next returnObjects + TypeScript 인터페이스 조합으로 다국어 객체 데이터를 타입 안전하게 처리한 구현, 커스텀 SVG 아이콘 시스템
3. **보완이 필요한 부분**: 테스트 코드 전무, `si`/`viewTLog` 프로젝트 readme 섹션에 무관한 내용(Firebase Auth, 곡 즐겨찾기) 잔존 → 면접관이 포트폴리오 사이트를 직접 볼 경우 신뢰도 하락 가능
