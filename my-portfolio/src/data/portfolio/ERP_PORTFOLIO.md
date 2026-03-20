# 포트폴리오 문서 - 전자결재 시스템 (elct-appr)

> **작성 목적:** 웹개발자 이력서/포트폴리오 작성을 위한 프로젝트 상세 정리
> **작성일:** 2026-03-08
> **프로젝트 버전:** version-1.2.0

---

# 프로젝트 요약

## 한 줄 소개

Next.js 14, React 18, TypeScript 기반으로 전자결재, 근태, 휴가, 관리자 설정, 파일 관리, PWA 알림 기능을 포함한 사내 업무 서비스를 설계·구현한 프로젝트입니다.

## 이런 강점을 보여줄 수 있습니다

- React, TypeScript 기반에서 실제 업무 도메인을 안정적으로 구현한 경험
- 디자인 시안 기반 UI 구현을 넘어서, 결재 상태 전이와 사용자 흐름까지 구조화한 경험
- 단순 화면 개발이 아니라 인증, 세션, 데이터 모델, API, 관리자 기능까지 주도적으로 연결한 경험
- 레거시성 코드와 최신 Next.js App Router 구조가 혼재한 환경에서 점진적으로 개선할 수 있는 역량
- 익숙하지 않은 영역도 빠르게 학습해 제품 기능으로 연결한 경험

## 이 프로젝트에서 강조할 수 있는 경험

### 1. 복잡한 업무 흐름을 서비스 기능으로 구조화

전자결재 문서 생성, 승인선 처리, 참조 상태 관리, 임시저장/기안/완료 상태 분기, 휴가 차감 로그 반영, 증빙 파일 업로드까지 하나의 흐름으로 연결했습니다.  
복잡한 도메인 요구사항을 단순한 상태와 단계로 나누어 구현한 경험을 강조할 수 있습니다.

### 2. 프론트엔드와 백엔드를 함께 다루며 문제를 해결

App Router 기반 화면 구성뿐 아니라 API Route, PostgreSQL 연동, 인증 세션 처리, 파일 저장, 푸시 알림까지 직접 연결했습니다.  
주어진 화면을 구현하는 수준을 넘어서 서비스 동작 전체를 고려하며 문제를 정의하고 해결한 경험으로 설명할 수 있습니다.

### 3. 인증과 세션 흐름을 서비스 환경에 맞게 설계

`next-auth`와 PostgreSQL 어댑터를 활용해 DB 세션 기반 인증 구조를 구성했고, 로그인 유지 여부에 따라 세션 만료 정책을 분기했습니다.  
기성 인증 도구를 그대로 쓰는 대신 서비스 제약에 맞게 커스터마이징한 경험으로 풀어낼 수 있습니다.

### 4. 복잡하거나 반복되는 문제를 추상화

문서/결재 관련 기능을 API, fetch 유틸, 공통 컴포넌트, 상태 훅으로 분리해 반복 구현 비용을 줄였습니다.  
업무 화면이 많고 요구사항이 자주 늘어나는 환경에서 재사용 가능한 단위로 구조를 정리한 경험을 강조하기 좋습니다.

### 5. 점진적 개선과 현대화에 적합한 경험

프로젝트 내에는 레거시한 유틸, 혼재된 파일 구조, 타입이 느슨한 구간과 최신 Next.js 구조가 함께 존재합니다.  
이런 환경에서 기능 개발을 멈추지 않으면서 점진적으로 타입 안정성, 구조 분리, 최신 개발 방식으로 옮겨가는 경험으로 설명할 수 있습니다.

## 이력서에 이렇게 쓰는 것을 추천합니다

### 프로젝트 설명 예시

> Next.js 14, React 18, TypeScript 기반의 사내 업무 서비스에서 전자결재, 근태, 휴가, 관리자 기능을 설계하고 구현했습니다. 단순 화면 개발에 그치지 않고 인증, 세션, 문서 상태 전이, 파일 업로드, 알림 기능까지 서비스 흐름 전반을 연결하며 복잡한 업무 요구사항을 실제 운영 가능한 기능으로 구조화했습니다.

### 임팩트 중심 서술 예시

- 전자결재 문서 생성부터 승인, 참조, 보관함 분기까지 이어지는 복잡한 상태 흐름을 구조화해 사용자 액션에 따라 일관된 처리 흐름을 제공했습니다.
- 관리자 설정, 사용자 관리, 근태/휴가 기능을 하나의 서비스 안에서 통합해 운영자가 여러 업무 데이터를 한 곳에서 처리할 수 있도록 구현했습니다.
- 인증과 세션 흐름을 서비스 환경에 맞게 커스터마이징해 로그인 유지, 세션 만료, 사용자 정보 매핑을 안정적으로 처리했습니다.
- 반복적으로 확장되는 업무 화면을 공통 컴포넌트와 유틸 중심으로 정리해 기능 추가 시 개발 비용을 낮출 수 있는 기반을 만들었습니다.

### 러닝 포인트 중심 서술 예시

- 복잡도가 높은 업무 도메인은 화면보다 상태 전이와 데이터 흐름을 먼저 정리해야 구현 속도와 안정성을 함께 확보할 수 있다는 점을 배웠습니다.
- 프론트엔드 개발이라도 인증, DB, 파일 처리, 알림 연동까지 이해해야 실제 제품 품질을 끌어올릴 수 있다는 점을 경험했습니다.
- 레거시 코드가 있는 환경에서는 전면 재작성보다, 기능을 유지하면서 타입과 구조를 점진적으로 정리하는 방식이 현실적이라는 점을 체감했습니다.
- 익숙하지 않은 기능도 작은 단위로 나누어 빠르게 검증하면 서비스 요구사항에 맞는 형태로 빠르게 흡수할 수 있다는 경험을 쌓았습니다.

## 면접/포트폴리오에서 강조하면 좋은 키워드

- 업무 도메인 복잡도 해결
- 상태 전이 설계
- React/TypeScript 기반 안정성
- Next.js App Router 실무 적용
- 인증 및 세션 커스터마이징
- 공통화와 추상화
- 레거시 개선과 점진적 마이그레이션
- 빠른 학습과 제품화

## 보완하면 더 좋은 부분

- 실제 운영 인원, 문서 처리량, 기능 도입 전후 변화 같은 정량 지표가 있다면 함께 적는 것이 가장 좋습니다.
- "어떤 문제를 발견했고 왜 그렇게 풀었는지"를 기능 나열보다 먼저 쓰면 더 강하게 전달됩니다.
- 레거시 개선 경험을 별도 항목으로 분리해, 무엇을 유지하고 무엇을 바꿨는지 명확하게 설명하면 좋습니다.

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | QBicware 전자결재 시스템 |
| **영문명** | Electronic Approval System |
| **클라이언트** | 큐빅웨어 (자사 사용) |
| **프로젝트 유형** | 사내 ERP / 그룹웨어 |
| **도메인** | 기업 문서 워크플로우 / HR 관리 |
| **역할** | 풀스택 개발 (Next.js App Router 기반) |
| **개발 기간** | 2024년 7월 ~ 2026년 3월 (진행 중) |
| **배포 포트** | 4000 (dev/prod 동일) |
| **패키징** | Node.js 서버 (next start) |
| **버전 관리** | Git |

### 프로젝트 설명
사내 임직원이 사용하는 전자결재(기안/결재/반려/참조) 시스템과 근태/연차 관리 기능을 통합한 풀스택 웹 애플리케이션. Next.js 14 App Router 기반으로 서버/클라이언트 컴포넌트를 분리하고, PostgreSQL 기반 세션 인증, 멀티스텝 결재 워크플로우, PWA 푸시 알림, Jandi 웹훅 알림, PDF/ZIP 일괄 다운로드 기능을 구현했다.

---

## 2. 기술 스택

### 프레임워크 / 언어
| 기술 | 버전 | 용도 |
|------|------|------|
| Next.js | 14.2.5 | 풀스택 웹 프레임워크 (App Router) |
| React | 18 | UI 라이브러리 |
| TypeScript | 5 | 정적 타입 언어 |
| Node.js | - | 서버 런타임 |

### 인증 / 세션
| 기술 | 버전 | 용도 |
|------|------|------|
| NextAuth.js | 4.24.11 | 인증 프레임워크 |
| bcryptjs | 3.0.2 | 비밀번호 해싱/검증 |
| crypto (Node 내장) | - | 세션 토큰 UUID 생성 |

### 데이터베이스
| 기술 | 버전 | 용도 |
|------|------|------|
| PostgreSQL | - | 주 데이터베이스 |
| pg (node-postgres) | 8.13.1 | PostgreSQL 클라이언트 |
| NextAuth PostgreSQL Adapter | 1.7.4 | NextAuth ↔ PostgreSQL 연동 (커스텀) |

### 상태 관리
| 기술 | 버전 | 용도 |
|------|------|------|
| Zustand | 4.5.5 | 클라이언트 전역 상태 (사이드바 등) |

### 스타일링
| 기술 | 버전 | 용도 |
|------|------|------|
| Tailwind CSS | 3.4.1 | 유틸리티 기반 CSS |
| PostCSS | 8 | CSS 빌드 도구 |

### UI 컴포넌트 / 라이브러리
| 기술 | 버전 | 용도 |
|------|------|------|
| Lucide React | 0.487.0 | 아이콘 |
| react-datepicker | 7.4.0 | 날짜 선택기 |
| react-js-pagination | 3.0.3 | 페이지네이션 |
| react-to-print | 2.15.1 | 브라우저 인쇄 |
| next-view-transitions | 0.3.4 | 페이지 전환 애니메이션 |

### PDF / 파일 처리
| 기술 | 버전 | 용도 |
|------|------|------|
| html2canvas | 1.4.1 | HTML → Canvas 변환 |
| jsPDF | 2.5.2 | Canvas → PDF 변환 |
| jszip | 3.10.1 | 다중 PDF → ZIP 압축 |

### 알림 / 외부 연동
| 기술 | 버전 | 용도 |
|------|------|------|
| web-push | 3.6.7 | PWA 브라우저 푸시 알림 |
| Jandi Webhook | - | 잔디 메신저 실시간 알림 |

### 기타 유틸
| 기술 | 버전 | 용도 |
|------|------|------|
| date-fns | 4.1.0 | 날짜 연산 |
| hangul-js | 0.2.6 | 한글 처리 |

---

## 3. 주요 기능 목록

### 전자결재 (Electronic Approval)
| 기능 | 설명 |
|------|------|
| 문서 기안 | 결재 양식 선택 → 내용 작성 → 결재선/참조자 지정 → 제출/임시저장 |
| 결재 처리 | 승인(결재) / 반려 + 사유 입력 |
| 문서 조회 | 대기/완료/임시저장/참조 문서 목록 |
| 문서 상세 | 결재 현황, 서명 이미지, 의견, 첨부파일 |
| 문서 취소 | 결재 요청 전 회수 |
| 참조 확인 | 참조자로 지정된 문서 확인 처리 |

### 출력 / 다운로드
| 기능 | 설명 |
|------|------|
| 브라우저 인쇄 | react-to-print 기반 인쇄 |
| PDF 단건 저장 | html2canvas + jsPDF |
| PDF 다건 ZIP 저장 | 다중 문서 → 개별 PDF → ZIP 묶음 다운로드 |

### 근태 / 연차
| 기능 | 설명 |
|------|------|
| 내 출퇴근 조회 | 월별 출퇴근 기록 |
| 연차 잔여일 조회 | 연도별 연차 현황 (사용/잔여) |
| 관리자 근태 수정 | 어드민 출퇴근 데이터 수동 편집 |
| 연차 부여 | 연도별 연차 일수 설정 |

### 관리자 (Admin)
| 기능 | 설명 |
|------|------|
| 임직원 관리 | 사원 등록/수정/조회, 권한/부서/직급 설정 |
| 조직 관리 | 부서/직급 구조 설정 |
| 결재양식 관리 | 양식 생성/편집, 결재선 설정, 사용자별 양식 권한 |
| 근무시간 설정 | 표준 근무시간 템플릿 |
| 휴일/공휴일 관리 | 법정 공휴일 및 사내 휴일 설정 |
| 결재선 템플릿 | 재사용 가능한 결재선 등록 |

### 알림 / PWA
| 기능 | 설명 |
|------|------|
| 잔디 웹훅 | 결재요청/결재완료/반려/참조 상태변경 시 잔디 채널 알림 |
| PWA 푸시 알림 | VAPID 기반 브라우저 푸시 알림 |
| PWA 설치 | manifest 설정, 홈 화면 추가, 오프라인 대응 |

---

## 4. 시스템 아키텍처

```
[Browser / PWA]
      │
      │  HTTPS
      ▼
[Next.js 14 App Router - Port 4000]
      │
      ├── [middleware.ts]
      │     └── 세션 쿠키 검증 → 미인증 시 /login 리다이렉트
      │
      ├── [App Router Pages] (Server Components 기본)
      │     ├── /login           → 로그인 폼
      │     ├── /(route)/elct/   → 전자결재 (기안/결재/목록/상세)
      │     ├── /(route)/my/     → 마이페이지 (근태/연차/프로필)
      │     ├── /(route)/admin/  → 관리자 (사용자/양식/설정)
      │     └── /(route)/schedule/ → 일정 등록
      │
      ├── [API Routes] (Node.js Runtime)
      │     ├── /api/login          → 커스텀 로그인 (bcrypt + 세션 생성)
      │     ├── /api/auth/[...nextauth] → NextAuth 핸들러
      │     ├── /api/elctAppr/      → 전자결재 CRUD
      │     ├── /api/user/          → 사용자 정보
      │     ├── /api/attendence/    → 근태 관리
      │     ├── /api/admin/         → 관리자 기능
      │     ├── /api/common/        → 공통 코드/설정
      │     ├── /api/send/          → 이메일/웹훅 발송
      │     └── /api/pwa/           → PWA 푸시 구독/발송
      │
      └── [Database Layer]
            └── PostgreSQL (appr 스키마)
                  ├── tb_user / tb_user_log (사용자)
                  ├── tb_doc / tb_doc_state (문서/결재상태)
                  ├── tb_doc_rfrn_status (참조 현황)
                  ├── tb_doc_evdnc_file (첨부파일)
                  ├── tb_auth_sessions (DB 세션)
                  ├── tb_auth_users (NextAuth 연동)
                  ├── tb_user_pay_leave_log (연차 사용 이력)
                  └── fn_update_appr_status_doc() (결재 처리 Stored Function)

[외부 연동]
  ├── Jandi Webhook API  → 메신저 결재 알림
  └── Web Push (VAPID)   → 브라우저 푸시 알림
```

### 라우트 그룹 구조
```
app/
├── layout.tsx                # 루트 레이아웃 (ViewTransitions, PWA)
├── page.tsx                  # / → /elct/main 리다이렉트
├── manifest.ts               # PWA 매니페스트
├── login/                    # 공개 로그인 페이지
├── (route)/                  # 인증 필요 레이아웃 그룹
│   ├── layout.tsx            # 헤더 + 사이드바 + 푸터 레이아웃
│   ├── _component/           # 헤더, 사이드바, 세션 관련 컴포넌트
│   ├── elct/                 # 전자결재
│   ├── my/                   # 마이페이지
│   ├── admin/                # 관리자
│   └── schedule/             # 일정
├── api/                      # API 라우트 (Route Handlers)
├── _component/               # 공통 UI 컴포넌트
└── _common/                  # 유틸, 훅, fetch 함수
```

---

## 5. 데이터베이스 설계

### 핵심 테이블 (appr 스키마)

| 테이블 | 설명 |
|--------|------|
| `tb_user` | 사원 기본 정보 (user_seq PK, user_ori_id, use_yn) |
| `tb_user_log` | 사원 변경 이력 (user_id, user_name, admin_code, dept_code, job_code, user_pw) |
| `tb_auth_users` | NextAuth 연동 사용자 테이블 |
| `tb_auth_sessions` | DB 세션 저장 (session_token, user_seq, expires, device_info, browser_info) |
| `tb_doc` | 전자결재 문서 (doc_no PK, doc_form_no, user_id, doc_data JSONB, state) |
| `tb_doc_state` | 결재선 상태 (doc_no, appr_order, appr_user_id, appr_code, appr_state_code) |
| `tb_doc_rfrn_status` | 참조 현황 (doc_no, rfrn_id, state) |
| `tb_doc_evdnc_file` | 첨부파일 (file_uuid, doc_no, ori_file_nm, file_route) |
| `tb_doc_form` | 결재 양식 템플릿 (form 데이터 JSONB) |
| `tb_common_code` | 공통 코드 마스터 |
| `tb_user_pay_leave_log` | 연차 사용 이력 (user_id, use_leave_cnt, doc_no) |
| `v_user_pay_leave` | 연차 잔여일 계산 뷰 |

### 결재 상태 코드
| 코드 | 의미 |
|------|------|
| 30003010 | 기안 (Draft) |
| 30003020 | 결재 중 (결재선에서 대기) |
| 30003030 | 결재 대기 (이전 결재자 대기 중) |
| 30003040 | 결재 완료 |
| 30003050 | 임시 저장 |
| 30003060 | 반려 |

### 결재자 코드
| 코드 | 의미 |
|------|------|
| 30002010 | 기안자 |
| 30002020 | 결재자 |
| 30002030 | 전결 |
| 30002050 | 참조자 |

### 관리자 권한 코드
| 코드 | 의미 |
|------|------|
| 10 | 일반 사원 |
| 11 | 슈퍼 어드민 |
| 12 | 마스터 어드민 |
| 13 | 부서 관리자 |

---

## 6. 프론트엔드 구조

### 서버/클라이언트 컴포넌트 분리 전략
- **Server Component (default):** 데이터 페칭, SEO, 초기 렌더링
- **Client Component (`"use client"`):** 이벤트 핸들링, 상태 관리, 브라우저 API

### 공통 UI 컴포넌트 (`_component/core/`)
```typescript
// button.tsx - 역할별 버튼 컴포넌트 모음
export const btn = {
  ConfirmBtn,   // 확인
  RegisterBtn,  // 등록
  CancleBtn,    // 취소
  ModifyBtn,    // 수정
  DeleteBtn,    // 삭제
  CloseBtn,     // 닫기
};

export const docBtn = {
  ApprBtn,      // 결재
  RejectBtn,    // 반려
  WriteBtn,     // 제출
  SaveDocBtn,   // 임시저장
  PrintDocBtn,  // 인쇄
  CloseDocBtn,  // 문서 닫기
};
```

### 상태 관리 (Zustand)
```typescript
// sideBarStore.ts - 사이드바 전역 상태
interface SideBarState {
  isWing: boolean;
  setiswing: () => void;
  setisCustomWing: (param: boolean) => void;
}

const useSideBarStore = create<SideBarState>((set) => ({
  isWing: false,
  setiswing: () => set((state) => ({ isWing: !state.isWing })),
  setisCustomWing: (param) => set(() => ({ isWing: param })),
}));
```

### 레이아웃 컴포넌트
| 컴포넌트 | 역할 |
|---------|------|
| `header.tsx` | 로고, 사용자 메뉴 |
| `sidebar.tsx` | 다단계 내비게이션 (권한별 조건부 렌더링) |
| `SessionWrapper.tsx` | NextAuth SessionProvider 래퍼 |
| `SessionTimer.tsx` | 세션 만료 자동 처리 |

---

## 7. API 엔드포인트

### 인증
| URL | Method | 설명 |
|-----|--------|------|
| `/api/login` | POST | 커스텀 로그인 (bcrypt + DB 세션 생성) |
| `/api/logout` | POST | 로그아웃 |
| `/api/auth/[...nextauth]` | ALL | NextAuth 핸들러 |
| `/api/common/extend` | POST | 세션 연장 |

### 전자결재 - 문서
| URL | Method | 설명 |
|-----|--------|------|
| `/api/elctAppr/doc/setDoc` | POST | 문서 생성 (FormData, 파일 포함) |
| `/api/elctAppr/doc/getDoc` | GET | 문서 상세 조회 |
| `/api/elctAppr/doc/deleteDoc` | DELETE | 문서 삭제 |
| `/api/elctAppr/doc/updateApprDocState` | POST | 결재/반려 처리 (트랜잭션) |
| `/api/elctAppr/doc/setSaveDocApprRequst` | POST | 임시저장 → 상신 |
| `/api/elctAppr/doc/setReqCancleDoc` | POST | 결재 취소 |

### 전자결재 - 문서 목록
| URL | Method | 설명 |
|-----|--------|------|
| `/api/elctAppr/docList/waitAppr` | GET | 결재 대기 목록 |
| `/api/elctAppr/docList/waitRfrn` | GET | 참조 대기 목록 |
| `/api/elctAppr/docList/draftDoc` | GET | 기안 문서 목록 |
| `/api/elctAppr/docList/saveDoc` | GET | 임시저장 목록 |
| `/api/elctAppr/docList/cmptnAppr` | GET | 결재 완료 목록 |
| `/api/elctAppr/docList/cmptnRfrn` | GET | 참조 완료 목록 |
| `/api/elctAppr/docList/docListCnt` | GET | 사이드바 배지 카운트 |

### 파일 / 알림 / PWA
| URL | Method | 설명 |
|-----|--------|------|
| `/api/elctAppr/file/download/[fileId]/[oriNm]` | GET | 첨부파일 다운로드 |
| `/api/send/webhook` | POST | 잔디 웹훅 발송 |
| `/api/send/email` | POST | 이메일 발송 |
| `/api/pwa/setSubscription` | POST | 푸시 구독 등록 |
| `/api/pwa/webpush` | POST | 푸시 메시지 발송 |

---

## 8. 보안 구성

### 인증 흐름
```
1. POST /api/login
   - PostgreSQL에서 user_ori_id로 사용자 조회 (use_yn=1 필터)
   - tb_user_log에서 최신 변경 이력 JOIN (GROUP BY user_id MAX(crt_date))
   - bcryptjs.compare(입력 비밀번호, 해시된 비밀번호)
   - 인증 성공 → randomUUID() 세션 토큰 생성
   - tb_auth_sessions INSERT (device_info, browser_info 포함)
   - httpOnly 쿠키에 세션 토큰 저장 (keepLoggedIn: 30일 / 기본: 1일)

2. middleware.ts
   - 모든 페이지 요청에서 next-auth.session-token 쿠키 존재 여부 확인
   - 없으면 /login 리다이렉트
   - API, 정적 파일, _next 경로는 제외

3. API 라우트 내 세션 검증
   - getServerSession(authOptions) → NextAuth 어댑터 → tb_auth_sessions 조회
   - session.user.user_info에서 user_id, admin_code 확인
```

### 보안 헤더 (next.config.mjs)
```javascript
headers: [
  { key: "X-Content-Type-Options", value: "nosniff" },   // MIME 스니핑 방지
  { key: "X-Frame-Options", value: "SAMEORIGIN" },         // 클릭재킹 방지
]
```

### SQL 인젝션 방어
- `pg` 라이브러리의 파라미터화 쿼리 (`$1, $2, ...`) 100% 사용
- 동적 쿼리 없음 (ORM 없이 직접 SQL + 파라미터 바인딩)

---

## 9. 성능 최적화

| 전략 | 내용 |
|------|------|
| **Server Components 기본** | 데이터 페칭을 서버에서 처리하여 클라이언트 번들 최소화 |
| **Suspense + Fallback** | 비동기 데이터 로딩 중 로딩 스피너 표시 |
| **`cache: "no-store"`** | 실시간 API는 캐시 비활성화 |
| **localStorage 캐시** | 공휴일 데이터는 localStorage에 저장하여 반복 요청 방지 |
| **ETag 비활성화** | `generateEtags: false` (next.config.mjs) |
| **ViewTransitions** | next-view-transitions로 페이지 전환 부드럽게 처리 |
| **pg 커넥션 풀** | Pool 재사용으로 DB 연결 오버헤드 감소 |

---

## 10. 디렉토리 구조

```
version-1.2.0/
├── middleware.ts               # 전역 라우트 보호
├── next.config.mjs             # ETag, 보안헤더 설정
├── tailwind.config.ts          # 커스텀 색상/크기 (A4 크기 포함)
├── package.json
└── app/
    ├── layout.tsx              # ViewTransitions, PWA
    ├── manifest.ts             # PWA 매니페스트
    ├── login/                  # 로그인 페이지
    ├── (route)/                # 인증 필요 구역
    │   ├── layout.tsx
    │   ├── _component/         # 헤더, 사이드바, 세션
    │   ├── elct/
    │   │   ├── main/           # 대시보드
    │   │   ├── register/       # 문서 기안
    │   │   ├── detail/         # 문서 상세
    │   │   └── list/           # 문서 목록 (6종)
    │   ├── my/
    │   │   ├── attendenceInfo/ # 근태 조회
    │   │   ├── leaveInfo/      # 연차 조회
    │   │   └── update/         # 프로필 수정
    │   ├── admin/
    │   │   ├── form/           # 양식 관리
    │   │   ├── setting/        # 시스템 설정
    │   │   └── user/           # 임직원 관리
    │   └── schedule/           # 일정 등록
    ├── api/
    │   ├── _lib/
    │   │   ├── pg.js           # PostgreSQL 커넥션 풀
    │   │   └── postgres-adapter.ts  # NextAuth 커스텀 어댑터
    │   ├── _utils/
    │   │   └── authDBOption.ts # NextAuth 옵션
    │   ├── _service/
    │   │   └── docService.ts   # 문서 처리 서비스
    │   ├── login/, logout/
    │   ├── auth/[...nextauth]/
    │   ├── elctAppr/           # 전자결재 API
    │   ├── user/               # 사용자 API
    │   ├── attendence/         # 근태 API
    │   ├── admin/              # 관리자 API
    │   ├── common/             # 공통 API
    │   ├── send/               # 알림 발송 API
    │   └── pwa/                # PWA 푸시 API
    ├── _component/
    │   ├── core/               # Button, Card, DatePicker 등
    │   ├── layout/             # DocLayout, FormLayout 등
    │   ├── modal/              # 결재선, 사용자 선택 모달
    │   └── doc/                # 문서 요소 컴포넌트
    └── _common/
        ├── fetch/              # API 클라이언트 함수
        ├── hook/               # 커스텀 훅, Zustand 스토어
        └── util/               # 유틸리티 함수
```

---

## 11. PWA 구성

### manifest.ts
```typescript
{
  name: "QBicware",
  display: "standalone",       // 브라우저 UI 없이 앱처럼 실행
  start_url: "/elct/main",
  icons: [
    { src: "/icon512_maskable.png", type: "image/png", sizes: "512x512", purpose: "maskable" },
    { src: "/icon512_rounded.png", type: "image/png", sizes: "512x512", purpose: "any" },
  ]
}
```

### Service Worker
- `public/sw.js` - 오프라인 대응 및 푸시 이벤트 처리

---

## 12. 개발 시 주요 경험 / 기술적 도전

### 12-1. NextAuth.js 커스텀 PostgreSQL 어댑터 구현

**문제:** NextAuth.js의 기본 DB 어댑터는 특정 테이블 구조를 강제하는데, 기존 사내 사용자 테이블(`tb_user`, `tb_user_log`)의 구조가 달라 사용 불가. 또한 결재 시스템 특성상 세션에 `admin_code`, `dept_code`, `working_hours` 등 사내 커스텀 필드가 필요했음.

**해결:** `Adapter` 인터페이스를 직접 구현하여 기존 DB 스키마에 맞는 커스텀 어댑터 작성. `getSessionAndUser`에서 NextAuth 표준 필드 외에 사내 커스텀 정보를 함께 반환.

```typescript
// app/api/_lib/postgres-adapter.ts
export default function PostgresAdapter(client: any): Adapter {
  return {
    async getSessionAndUser(sessionToken) {
      const sessionResult = await client.query(
        `SELECT * FROM appr.tb_auth_sessions WHERE session_token = $1`,
        [sessionToken]
      );
      const session = sessionResult.rows[0];
      if (!session) return null;

      const userResult = await client.query(
        `SELECT
          seq AS id, user_seq, user_id, user_name,
          pw_change_date, email, email_verified, image,
          admin_code, dept_code, job_code, working_hours
        FROM appr.tb_auth_users
        WHERE user_seq = $1`,
        [session.user_seq]
      );

      const user = userResult.rows[0];
      if (!user) return null;

      return {
        session: {
          sessionToken: session.session_token,
          userId: session.user_seq.toString(),
          expires: session.expires,
        },
        user: {
          id: user.id.toString(),
          name: user.user_name,
          email: user.email,
          // 🔥 NextAuth 기본 타입 외 커스텀 필드 추가
          user_seq: user.user_seq,
          user_id: user.user_id,
          pw_change_date: user.pw_change_date,
          admin_code: user.admin_code,   // 권한 레벨
          dept_code: user.dept_code,
          job_code: user.job_code,
          working_hours: user.working_hours,
        },
      };
    },

    // userId가 undefined로 넘어오는 NextAuth 버그 대응
    async updateSession({ sessionToken, userId, expires }) {
      if (!userId) {
        const res = await client.query(
          `SELECT user_seq FROM appr.tb_auth_sessions WHERE session_token = $1`,
          [sessionToken]
        );
        userId = res.rows[0]?.user_seq;  // DB에서 직접 조회로 보완
      }
      // ...
    },
  };
}
```

**성과:** NextAuth의 인증 미들웨어를 그대로 활용하면서 기존 사내 DB 스키마를 변경하지 않고 통합 완료.

---

### 12-2. 커스텀 로그인 플로우 구현 (bcrypt + DB 세션)

**문제:** NextAuth의 Credentials 프로바이더만으로는 기존 사용자 테이블(`tb_user` + `tb_user_log` 이력 구조)의 복잡한 조인 쿼리와 세션 생성 시 디바이스/브라우저 정보 저장이 어려웠음.

**해결:** `/api/login` 커스텀 Route Handler를 직접 구현하여 전체 인증 흐름 제어.

```typescript
// app/api/login/route.ts
export async function POST(req: Request) {
  const { user_id, password, device, browser, keepLoggedIn } = await req.json();
  const client = await pool.connect();

  try {
    // 1. 최신 사용자 이력 JOIN 조회 (이력 테이블에서 MAX(crt_date)로 최신 정보 추출)
    const result = await client.query(`
      SELECT u.user_seq, u.user_id, u.pw_change_date, ul.user_pw, ul.admin_code, ...
      FROM (
        SELECT user_seq, user_id, pw_change_date
        FROM tb_user WHERE user_ori_id = $1 AND use_yn = 1
      ) AS u
      LEFT JOIN (
        SELECT user_id, user_pw, user_name, admin_code, dept_code, job_code, working_hours
        FROM tb_user_log
        WHERE (user_id, crt_date) IN (
          SELECT user_id, MAX(crt_date) FROM tb_user_log GROUP BY user_id
        )
      ) AS ul ON ul.user_id = u.user_id
    `, [user_id]);

    // 2. bcrypt 비밀번호 검증
    const isValid = await compare(password, user.user_pw);
    if (!isValid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    // 3. 만료 세션 정리 (로그인 시점에 일괄 삭제)
    await client.query(`DELETE FROM appr.tb_auth_sessions WHERE expires < NOW()`);

    // 4. UUID 세션 토큰 생성 + DB 저장 (디바이스 정보 포함)
    const sessionToken = randomUUID();
    const expires = addDays(new Date(), keepLoggedIn ? 30 : 1);

    await client.query(`
      INSERT INTO tb_auth_sessions (user_seq, expires, session_token, device_info, browser_info)
      VALUES ($1, $2, $3, $4, $5)
    `, [user_seq, expires, sessionToken, device, browser]);

    // 5. httpOnly 쿠키로 세션 토큰 전달
    cookies().set("next-auth.session-token", sessionToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      expires,
    });

    return NextResponse.json({ pw_change_date: user.pw_change_date, success: true });
  } finally {
    client.release();
  }
}
```

**기술적 포인트:**
- 이력 테이블(`tb_user_log`)에서 `MAX(crt_date)` 서브쿼리로 최신 사용자 정보 조회
- `keepLoggedIn` 여부로 세션 만료 30일/1일 동적 설정
- 매 로그인 시 만료된 세션 자동 정리

---

### 12-3. 전자결재 워크플로우 상태 머신 (다단계 결재 처리)

**문제:** 결재선은 1~N명의 결재자로 구성되며, 현재 결재자가 승인해야 다음 결재자에게 순차적으로 넘어가야 함. 반려 시에는 연차 사용 이력도 롤백해야 하는 복합 트랜잭션 필요.

**해결:** PostgreSQL Stored Function `fn_update_appr_status_doc()`에 결재 로직을 캡슐화하고, 반려 시 추가 업데이트를 트랜잭션 내에서 일괄 처리.

```typescript
// app/api/elctAppr/doc/updateApprDocState/route.ts
export async function POST(request: NextRequest) {
  const client = await pool.connect();
  const session: any = await getServerSession(authOptions);

  try {
    await client.query("BEGIN");   // 트랜잭션 시작

    const { docNo, apprType, comment } = await request.json();
    const apprStateCode = apprType === "결재" ? 30003040
                        : apprType === "반려" ? 30003060 : null;

    // 1. 결재 상태 업데이트 (PostgreSQL 함수로 다음 결재자 자동 활성화)
    await client.query(`
      SELECT fn_update_appr_status_doc($1, $2, $3)
    `, [docNo, apprStateCode, comment]);

    // 2. 반려 시: 문서 상태 업데이트 + 연차 사용 이력 비활성화
    if (apprStateCode === 30003060) {
      await client.query(
        `UPDATE tb_doc SET state = $2 WHERE doc_no = $1`,
        [docNo, apprStateCode]
      );
      await client.query(
        `UPDATE tb_user_pay_leave_log SET use_yn = 0 WHERE doc_no = $1`,
        [docNo]   // 연차 사용 이력 롤백
      );
    }

    await client.query("COMMIT");   // 트랜잭션 커밋

    // 3. 커밋 후 Jandi 웹훅 알림 (비동기, 트랜잭션 외부)
    const result = await client.query(
      `SELECT * FROM appr.fn_doc_message_info($1, $2)`,
      [session.user.user_info.id, docNo]
    );
    sendDocStateMessage(result.rows[0], session.user.user_info.id, docNo, "updateApprDocState");

    return NextResponse.json({ message: "Update successful" }, { status: 200 });
  } catch (error) {
    await client.query("ROLLBACK");   // 오류 시 롤백
    return NextResponse.json({ error: "Database update failed" }, { status: 500 });
  } finally {
    client.release();
  }
}
```

**문서 생성 시 결재선 초기화 로직:**
```typescript
// 결재선 순서별 초기 상태 설정 (setDoc route.ts 중)
for (const item of parsedApprData) {
  const { appr_order } = item;
  let appr_state_code;

  if (submitType === "0") {
    appr_state_code = 30003050;   // 임시저장: 전체 대기
  } else {
    if (appr_order === 1)   appr_state_code = 30003020;  // 1번 결재자: 결재 중
    else if (appr_order < 99) appr_state_code = 30003030; // 2번+: 대기
    else if (appr_order === 99) appr_state_code = 30003010; // 기안자(99): 기안
  }
}
```

---

### 12-4. 멀티 테이블 트랜잭션 문서 생성 (FormData + 파일 업로드)

**문제:** 문서 생성 시 `tb_doc`, `tb_doc_state`(결재선), `tb_doc_rfrn_status`(참조자), `tb_user_pay_leave_log`(연차), `tb_doc_evdnc_file`(첨부파일) 등 5개 테이블에 동시 INSERT가 필요하며, 파일도 서버 파일시스템에 저장해야 함.

**해결:** 단일 트랜잭션 내에서 순차 INSERT + 파일 저장. 실패 시 ROLLBACK으로 원자성 보장.

```typescript
// app/api/elctAppr/doc/setDoc/route.ts (핵심 로직)
export async function POST(request: Request) {
  const client = await pool.connect();
  await client.query("BEGIN");

  const formData = await request.formData();
  const parsedData = JSON.parse(formData.get("data") as string);
  const parsedApprData = JSON.parse(formData.get("docApprInfo") as string);

  // 1. tb_doc INSERT → doc_no(UUID) + seq(숫자) 반환
  const { rows: [{ doc_no, seq }] } = await client.query({
    text: `INSERT INTO tb_doc(doc_form_no, user_id, doc_data, state)
           VALUES ($1, $2, $3, $4) RETURNING seq, doc_no`,
    values: [parsedData.doc_form_no, session.user.user_info.id,
             JSON.stringify(parsedData),
             submitType === "0" ? 30003050 : 30003020],
  });

  // 2. 문서번호 생성: "연도-양식유형-seq" 형식
  const doc_nm = `${DateUtil.getCurrentDateForAppr("year")}-${parsedData.doc_form_type}-${seq}`;
  await client.query(`UPDATE tb_doc SET doc_nm = $1 WHERE seq = $2`, [doc_nm, seq]);

  // 3. tb_doc_state: 결재선 일괄 INSERT (기안자 order=99를 unshift로 앞에 추가)
  parsedApprData.unshift({ appr_order: 99, appr_code: 30002010, appr_user_id: session.user.user_info.id });
  for (const values of appr_status) {
    await client.query(`INSERT INTO tb_doc_state(...) VALUES ($1,$2,$3,$4,$5)`, values);
  }

  // 4. 휴가 문서 시 연차 이력 INSERT
  if (docType === "휴가" && submitType !== "0") {
    await client.query(`
      INSERT INTO tb_user_pay_leave_log(user_id, use_leave_cnt, auto_yn, doc_no)
      VALUES ($1, $2, $3, $4)
    `, [session.user.user_info.id,
        findValueByTitle(parsedData.doc_form_data.docBody, "연차 일수").cnt,
        0, doc_no]);
  }

  // 5. 참조자 INSERT (WITH CTE로 user_seq → user_id 변환)
  for (const values of referrals) {
    await client.query(`
      WITH u_id AS (
        SELECT DISTINCT ud.user_id FROM tb_user_log AS ud
        JOIN tb_user AS u ON ud.user_id = u.user_id
        WHERE u.user_seq = $1 AND u.use_yn = 1
      )
      INSERT INTO tb_doc_rfrn_status(doc_no, rfrn_id)
      SELECT $2, user_id FROM u_id
    `, values);
  }

  // 6. 첨부파일: UUID 파일명으로 서버 저장 + DB 메타데이터 INSERT
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      const FileId = crypto.randomUUID();
      const path = `./public/files/doc/${FileId}`;
      await client.query(`INSERT INTO tb_doc_evdnc_file(file_uuid, doc_no, ori_file_nm, file_route, use_yn)
                          VALUES ($1, $2, $3, $4, $5)`, [FileId, doc_no, value.name, path, 1]);
      await writeFile(path, new Uint8Array(await value.arrayBuffer()));
    }
  }

  await client.query("COMMIT");
}
```

---

### 12-5. HTML → PDF → ZIP 파이프라인 (다건 문서 일괄 다운로드)

**문제:** 여러 문서를 선택하여 한 번에 PDF로 저장하는 기능 필요. React 컴포넌트 기반의 문서 레이아웃을 PDF로 정확히 변환해야 하고, 다건 시 ZIP으로 묶어 제공해야 함.

**해결:** `renderToString` → DOM 생성 → `html2canvas` (4× 해상도) → `jsPDF` → `JSZip` 파이프라인.

```typescript
// app/_common/util/docDownLoadToPdf.tsx
const GeneratePDF = async (getDocIDs, code, fileName, fnGetGage) => {
  const zip = new JSZip();

  for (let i = 0; i < getDocIDs.length; i++) {
    // 1. 병렬로 문서 데이터 조회 (결재상태, 참조자, 작성자 포함)
    const [docInfo, docApprState, docRfrnState, userInfo] = await Promise.all([
      getDoc(docNo), getDocApprState(docNo), getDocRfrnState(docNo), getDocUserInfo(docNo),
    ]);

    // 2. React 컴포넌트를 HTML 문자열로 렌더링
    const html = renderToString(
      <doc.DocDdfLayout>
        <doc.DocTitle title={docInfo.doc_data.doc_form_data.docHeader.value} />
        <doc.DocDetailHeader docApprInfo={docApprState} code={code} disabled={true} />
        <doc.DocBody docInfo={docInfo.doc_data} detail={false} disabled={true} ... />
        <doc.DocFooter footerInfo={...} userInfo={userInfo} code={code} />
      </doc.DocDdfLayout>
    );

    // 3. HTML → DOM 변환 (input/select를 div로 교체 - html2canvas 호환성)
    const pdfContainer = document.createElement("div");
    pdfContainer.innerHTML = html;
    inputs.forEach((input) => {
      const tempDiv = document.createElement("div");
      tempDiv.textContent = input.value;  // 값을 텍스트로 변환
      input.parentNode.replaceChild(tempDiv, input);
    });

    pdfContainer.style.width = "700px";
    pdfContainer.style.height = "1100px";  // A4 비율
    document.body.appendChild(pdfContainer);

    // 4. html2canvas로 캡처 (scale: 4 → 고해상도)
    html2canvas(pdfContainer, { useCORS: true, scale: 4, logging: false })
      .then(async (canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // 5. jsPDF로 A4 PDF 생성
        const zipPdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
        zipPdf.addImage(imgData, "PNG", 0, 0,
          zipPdf.internal.pageSize.getWidth(),
          zipPdf.internal.pageSize.getHeight());

        // 6. PDF를 ZIP에 추가
        const pdfBlob = zipPdf.output("blob");
        zip.file(`${docInfo.doc_nm}_${userInfo.user_name}.pdf`, pdfBlob);

        if (i === getDocIDs.length - 1) {
          // 7. 마지막 문서 처리 후 ZIP 다운로드
          const zipBlob = await zip.generateAsync({ type: "blob" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(zipBlob);
          link.download = fileName + ".zip";
          link.click();
        }
        fnGetGage(getDocIDs.length, i);  // 진행률 콜백
      });
  }
};
```

**기술적 포인트:**
- `renderToString`으로 서버 컴포넌트를 클라이언트에서 HTML 문자열로 변환
- `input/select` → `div` 교체: html2canvas가 폼 요소 값을 렌더링하지 못하는 문제 해결
- `scale: 4` 설정으로 레티나 디스플레이 수준의 PDF 품질 확보
- `Promise.all`로 문서 데이터 병렬 조회

---

### 12-6. Jandi 웹훅 기반 실시간 결재 알림 시스템

**문제:** 결재 요청/완료/반려/참조 등 결재 상태 변경마다 관련자(결재자, 기안자, 참조자)에게 실시간으로 메신저 알림을 발송해야 하는데, 관련자가 1명~N명으로 가변적임.

**해결:** PostgreSQL Function `fn_doc_message_info()`로 알림 수신 대상과 웹훅 URL을 일괄 조회한 뒤, 이벤트 타입별로 메시지를 구성하여 `Promise.all`로 병렬 발송.

```typescript
// app/_common/util/sendDocStateMessage.ts

// 결재 처리(updateApprDocState) 이벤트 알림 예시
} else if (type === "updateApprDocState") {
  // 1. 기안자에게 결재/반려 알림
  const writer_webHookInfo = await getWebHookInfo(user_info.user_id2, doc_no, login_user_id);

  if (writer_webHookInfo?.webhook_info?.length > 0) {
    for (const webhook of writer_webHookInfo.webhook_info) {
      if (webhook.type === "30002010") {  // 기안자 알림 타입
        const stateText = user_info.login_id_code_state === 30003040 ? "결재"
                        : user_info.login_id_code_state === 30003060 ? "반려" : "알수없음";
        await sendWebHookMessage(webhook.url, [
          `${writer_webHookInfo.login_user_name}님이 ${
            writer_webHookInfo.doc_nm.split("-")[2]
          } 문서를 ${stateText} 하였습니다.`,
          `문서 구분 : ${writer_webHookInfo.doc_nm.split("-")[1]}`,
          `작성자 : ${writer_webHookInfo.doc_user_name}`,
          `문서번호 : ${writer_webHookInfo.doc_nm}`,
        ]);
      }
    }
  }

  // 2. 결재 승인 시 → 다음 결재자에게 결재 요청 알림
  if (user_info.login_id_code_state === 30003040 && user_info.next_appr_id?.length > 0) {
    const nextAppr_webHookInfo = await getWebHookInfo(user_info.next_appr_id, doc_no, login_user_id);
    for (const webhook of nextAppr_webHookInfo.webhook_info) {
      if (webhook.type === "30002020") {  // 결재자 알림 타입
        await sendWebHookMessage(webhook.url, [...]);
      }
    }
  }
}

// 참조자 N명에게 병렬 발송
const referenceUserPromises = user_info.rfrn_id_arr2.map(async (rfrn_id) => {
  const rfrn_webHookInfo = await getWebHookInfo(rfrn_id, doc_no, login_user_id);
  // 각 참조자별 웹훅 발송
});
await Promise.all(referenceUserPromises);  // 병렬 처리
```

**알림 이벤트 타입별 대상:**
| 이벤트 | 알림 수신자 |
|--------|-----------|
| 기안 제출 (`setDoc`) | 1번 결재자 + 모든 참조자 |
| 결재 승인 | 기안자 (결재 완료 알림) + 다음 결재자 (결재 요청) |
| 반려 | 기안자 (반려 알림) |
| 참조 확인 | 기안자 (참조 완료 알림) |

---

### 12-7. Next.js App Router 미들웨어 기반 전역 인증 보호

**문제:** 모든 페이지(30+ 라우트)에 개별적으로 인증 검사를 추가하면 코드 중복 및 누락 위험. API 라우트, 정적 파일은 미들웨어 적용 제외 필요.

**해결:** `middleware.ts`에서 쿠키 기반 세션 토큰 존재 여부만으로 빠르게 판별. 정규식 `matcher`로 API/정적파일 자동 제외.

```typescript
// middleware.ts
export function middleware(req: NextRequest) {
  const sessionToken = req.cookies.get("next-auth.session-token")?.value;
  const isLoggedIn = !!sessionToken;
  const url = req.nextUrl.clone();

  if (!isLoggedIn && !url.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// API, 정적 파일, _next 내부 경로 제외
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
```

**선택 이유:** 쿠키 값 유무만 확인하므로 DB 쿼리 없이 Edge Runtime에서 즉시 처리 → 모든 페이지 접근 시 레이턴시 최소화. 실제 세션 유효성 검증은 각 API Route의 `getServerSession()`에서 수행하여 역할 분리.

---

### 12-8. PWA 브라우저 푸시 알림 (VAPID + web-push)

**문제:** 잔디 메신저 웹훅은 결재 담당자가 잔디를 사용해야만 알림 수신 가능. 브라우저 자체 푸시 알림으로 보완 필요.

**해결:** VAPID 키 기반 Web Push API를 `web-push` 라이브러리로 구현. 구독 정보를 DB에 저장하고 결재 이벤트 시 서버에서 발송.

```typescript
// app/api/pwa/webpush/route.ts
const vapidKeys = {
  publicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY,
};

webPush.setVapidDetails("https://jh.qbicware.com", vapidKeys.publicKey, vapidKeys.privateKey);

export async function POST(req: NextRequest) {
  const { subscription, message } = await req.json();
  const notificationPayload = {
    title: "QBicware 결재 알림",
    body: message,
    icon: "/icon512_maskable.png",
  };
  await webPush.sendNotification(subscription, JSON.stringify(notificationPayload));
  return NextResponse.json({ success: true });
}
```

---

### 12-9. Tailwind CSS A4 커스텀 사이즈 정의 (문서 인쇄 최적화)

**문제:** 결재 문서는 A4 용지에 맞게 정확히 출력되어야 하며, Tailwind CSS의 기본 유틸리티 클래스로는 A4 크기(793px × 1100px)를 표현하기 어려움.

**해결:** `tailwind.config.ts`에 A4 규격 커스텀 크기 정의.

```typescript
// tailwind.config.ts
extend: {
  height: {
    "a4": "1100px",             // A4 높이
    "screen-8": "calc(100vh - 8px)",
    // screen-10 ~ screen-100 커스텀 높이
  },
  width: {
    "a4": "793px",              // A4 너비
  },
  padding: { "a4": "75px" },   // A4 여백
  margin: { "a4": "20mm" },    // 인쇄 마진
  colors: {
    primary: {                  // 브랜드 그린 색상 시스템
      50: "#f0fdf4", 100: "#dcfce7",
      500: "#22c55e", 900: "#14532d",
    },
    customGray: { /* 50-900 */ }
  },
  animation: {
    "blink-border": "blinkBorder 1s step-start infinite",  // 알림 깜빡임
  },
}
```

---

### 12-10. 시간 계산 유틸리티 (근태 시간 처리)

**문제:** 근태 데이터에서 `09:00:00` 형식의 문자열을 받아 총 근무 시간 계산 시, 야간 근무(퇴근 시간 < 출근 시간)나 입력 형식 불일치(`HH:mm` vs `HH:mm:ss`)를 처리해야 함.

**해결:** 시간 정규화 + 날짜 객체 기반 계산 + NaN/음수 방어 처리.

```typescript
// app/_common/util/elctUtil.ts
export const calculateTotalTime = (
  pStartTime: string, pEndTime: string, restTime: number
): string => {
  const startTime = normalizeTime(pStartTime);  // "09:00" → "09:00:00"
  const endTime = normalizeTime(pEndTime);

  const startDateTime = new Date(`2024-12-15T${startTime}`);
  let endDateTime = new Date(`2024-12-15T${endTime}`);

  // 야간 근무: 종료 < 시작이면 날짜 +1
  if (endDateTime < startDateTime) {
    endDateTime.setDate(endDateTime.getDate() + 1);
  }

  const timeDiffInMillis = endDateTime - startDateTime;
  const totalSeconds = Math.floor(timeDiffInMillis / 1000) - restTime;  // 휴식 시간 차감
  const hours = isNaN(totalHours) || totalHours < 0 ? 0 : totalHours;  // NaN/음수 방어
  const minutes = isNaN(totalMinutes) || totalMinutes < 0 ? 0 : totalMinutes % 60;

  return `${hours}h ${minutes}m ${seconds}s`;
};

// 정규식 기반 "2h 30m 15s" → 초 변환
export const formatTimeStringToSeconds = (timeString: string): number => {
  const regex = /(\d+)\s*h|\s*(\d+)\s*m|\s*(\d+)\s*s/g;
  let totalSeconds = 0;
  let match;
  while ((match = regex.exec(timeString)) !== null) {
    if (match[1]) totalSeconds += parseInt(match[1]) * 3600;
    if (match[2]) totalSeconds += parseInt(match[2]) * 60;
    if (match[3]) totalSeconds += parseInt(match[3]);
  }
  return totalSeconds === 0 ? null : totalSeconds;
};
```

---

## 13. 프로젝트 규모

| 항목 | 수치 |
|------|------|
| **API Route 파일** | 65개 |
| **페이지 컴포넌트** | 30+ |
| **공통 컴포넌트** | 20+ |
| **기능 모듈** | 전자결재, 근태, 연차, 관리자, PWA, 알림 |
| **DB 테이블** | 15+ |
| **PostgreSQL 함수** | fn_update_appr_status_doc, fn_doc_message_info 등 |

---

## 14. 특이사항 및 참고

### 기술적 특이사항
- **App Router 완전 채택:** Next.js 13+ App Router를 100% 활용, Pages Router 없음
- **서버 컴포넌트 중심:** 데이터 페칭을 서버에서 처리 → 클라이언트 번들 최소화
- **DB 세션 (JWT 없음):** NextAuth의 JWT 대신 PostgreSQL DB 세션을 사용하여 세션 즉시 무효화 가능
- **커스텀 로그인 API:** NextAuth Credentials 프로바이더 대신 완전 커스텀 `/api/login` 구현으로 유연성 확보
- **PWA 완전 지원:** service worker + manifest + 푸시 알림으로 앱 수준 사용자 경험

### 이전 프로젝트와의 기술적 차이
| 비교 항목 | 시흥시 (2023_SI_V2) | 화성시 (2023_HS) | 전자결재 (elct-appr) |
|----------|-------------------|----------------|---------------------|
| 언어 | Java 1.8 | Java 1.8 | TypeScript 5 |
| 프레임워크 | Spring MVC 4 | Spring MVC 4 | Next.js 14 (App Router) |
| 렌더링 | JSP (SSR) | JSP (SSR) | RSC + CSR 혼합 |
| DB | PostgreSQL + PostGIS | MySQL + MongoDB | PostgreSQL |
| 인증 | 세션/필터 | 세션/필터 | NextAuth + 커스텀 DB 세션 |
| 상태관리 | - | - | Zustand |
| 스타일링 | CSS/Bootstrap | CSS/Bootstrap | Tailwind CSS |
| 알림 | 없음 | 없음 | Jandi 웹훅 + PWA 푸시 |
| 배포 | Tomcat WAR | Tomcat WAR | Node.js 서버 |
