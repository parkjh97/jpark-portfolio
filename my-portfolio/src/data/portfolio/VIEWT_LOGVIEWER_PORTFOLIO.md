# PORTFOLIO — view-t-log-viewer (교통 빅데이터 가공 로그 모니터링 시스템)

> **작성 목적:** 웹개발자 이력서/포트폴리오 작성을 위한 프로젝트 상세 정리
> **작성일:** 2026-03-08

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | view-t-log-viewer |
| **유형** | 교통 빅데이터 처리 파이프라인 모니터링 풀스택 웹 서비스 |
| **기간** | 2024년 |
| **역할** | 풀스택 개발 (Next.js App Router + MySQL2) |
| **비고** | T-map·DTG GPS 원시 데이터 → 교통지표 가공 파이프라인 전 과정 실시간 모니터링 |

### 프로젝트 설명

T-map 링크·포인트 데이터, DTG(디지털운행기록) 데이터 등 교통 빅데이터를
여러 단계(R0→R1→S0→S1→P1)의 가공 파이프라인을 거쳐 교통지표로 변환하는 과정에서
**각 공정별 처리 건수·오류·시간 등의 로그를 수집·조회·시각화**하는 내부 운영 모니터링 시스템.

운영팀이 어느 공정에서 얼마나 데이터가 처리·유실·오류났는지, 수집 현황은 어떤지를
날짜/기간/데이터타입 조건으로 자유롭게 조회하고 차트·테이블로 확인할 수 있다.

---

## 2. 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 14.2.5 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4.1 |
| State | Zustand 4.5.5 |
| DB 연결 | mysql2 3.11.4 (Connection Pool) |
| 차트 | ApexCharts 4.1.0 + react-apexcharts 1.6.0 |
| 날짜 처리 | date-fns 4.1.0 |
| 한글 검색 | hangul-js 0.2.6 (초성 검색) |
| 페이지네이션 | react-js-pagination 3.0.3 |
| Build | Next.js 내장 |
| 런타임 | Node.js |

---

## 3. 프로젝트 구조

```
view-t-log-viewer/
├── app/
│   ├── page.tsx                        # 루트: /main 으로 redirect
│   ├── layout.tsx                      # 전역 레이아웃
│   ├── globals.css
│   │
│   ├── (route)/                        # 라우트 그룹
│   │   ├── layout.tsx                  # Sidebar + main 레이아웃
│   │   ├── error.tsx                   # 에러 바운더리
│   │   │
│   │   ├── main/                       # 메인 대시보드
│   │   │   ├── page.tsx
│   │   │   └── component/
│   │   │       ├── collectInfo.tsx     # 데이터 수집 현황 (조건 필터 + 테이블 + 차트)
│   │   │       ├── collectionChart.tsx # 수집 현황 차트
│   │   │       ├── completedAppList.tsx
│   │   │       └── ingAppList.tsx
│   │   │
│   │   ├── process/[type]/             # 공정별 로그 조회 (동적 라우트)
│   │   │   ├── page.tsx
│   │   │   └── _component/
│   │   │       └── processList.tsx     # 공정 로그 테이블 + 차트
│   │   │
│   │   └── progress/[dataType]/        # 데이터타입별 진행 현황 (동적 라우트)
│   │       ├── page.tsx
│   │       └── component/
│   │           └── statusComponent.tsx # 기간 조건 설정 + 현황 테이블 + 차트
│   │
│   ├── api/                            # Next.js Route Handlers (BFF)
│   │   ├── _lib/
│   │   │   └── db.js                  # mysql2 Connection Pool
│   │   ├── common/
│   │   │   ├── getCodeList/route.ts   # 코드 목록 조회
│   │   │   ├── getDomainList/route.ts # 도메인(컬럼명 한글 매핑) 조회
│   │   │   └── getMenuList/route.ts   # 사이드바 메뉴 조회
│   │   ├── process/
│   │   │   ├── getLogData/route.ts    # 공정 로그 데이터 + 컬럼 메타 조회
│   │   │   ├── getAppCompleteList/route.ts
│   │   │   └── getAllAppList/route.ts
│   │   ├── collection/
│   │   │   ├── getCondition/route.ts  # 수집 현황 조건 조회
│   │   │   └── getColData/route.ts   # 수집 현황 데이터 조회
│   │   └── progress/
│   │       ├── getProgressCondition/route.ts
│   │       └── getProgressData/route.ts
│   │
│   ├── _common/
│   │   ├── fetch/
│   │   │   └── loadData.ts            # 클라이언트 fetch 함수 모음
│   │   ├── hook/
│   │   │   ├── useMenuHook.ts         # Zustand 메뉴 상태 스토어
│   │   │   └── useDidMountEffect.tsx  # 마운트 이후에만 실행되는 useEffect 훅
│   │   └── util/
│   │       └── commonUtil.ts          # 공통 유틸 함수
│   │
│   └── _component/
│       ├── sidebar.tsx                # 아이콘 사이드바 + 메뉴 레이어
│       ├── table.tsx                  # 범용 테이블 (정렬/검색/페이지네이션/CSV)
│       ├── common.tsx                 # Loading, NoData 공통 컴포넌트
│       ├── progressBar.tsx
│       ├── chart/
│       │   └── componentChart.tsx     # ApexCharts 기반 동적 차트
│       ├── calender/
│       ├── modal/
│       └── select/
```

---

## 4. 핵심 기능

### 4-1. 데이터 수집 현황 (`/main`)

- 데이터타입·연도(다중)·기간단위(년/월/일) 조건으로 **수집 건수, 오류 건수, 가공 현황** 조회
- ApexCharts 시계열 차트로 기간별 추이 시각화
- 범용 Table 컴포넌트로 페이지네이션·초성 검색·컬럼 정렬·합계 행 표시
- `Promise.all`로 조건·도메인·코드 데이터를 병렬 로드 → 초기 렌더 지연 최소화

### 4-2. 공정별 로그 조회 (`/process/[type]`)

- URL 파라미터(`processCode`)로 공정 종류 결정 (T-map 링크·포인트, DTG, 속도 프로파일 등)
- 공정 코드에 연결된 MySQL Stored Procedure(`ProcessTablesForProcessCd`) 실행
- `information_schema.columns`로 **컬럼 메타정보(이름·한글 코멘트)**를 동적으로 조회 → 하드코딩 없이 테이블 구조 자동 반영
- 테이블 전환, 컬럼 표시/숨김(개별·전체), 날짜 Group By(년/월/일), 네트워크 필터 등 **클라이언트사이드 다차원 필터링**
- 날짜 집계 시 `process_time`은 평균, 나머지 수치 컬럼은 합산 처리

### 4-3. 데이터타입별 진행 현황 (`/progress/[dataType]`)

- 연도·기간단위·월/일 범위를 조건으로 **공정 진행 상태 집계 데이터** 조회
- 5가지 데이터타입 × 공정 단계별 파라미터 매핑 테이블 정의
- 조건별로 MySQL Stored Procedure(`pGetProcessConditonInfoData`) 호출
- 카테고리(가공정보·차종정보·유종정보·오류정보)별 컬럼 그룹핑 표시

---

## 5. 아키텍처 — Next.js BFF (Backend For Frontend) 패턴

```
브라우저(클라이언트)
    │  fetch POST
    ▼
Next.js Route Handlers (app/api/**/route.ts)
    │  mysql2 Pool
    ▼
MySQL DB (statistical_db)
    └─ Stored Procedures
        ├─ ProcessTablesForProcessCd (공정 로그)
        ├─ pGetCollectionInfoData    (수집 현황)
        └─ pGetProcessConditonInfoData (진행 현황)
```

- **DB 직접 연결**: Spring/Java 백엔드 없이 Next.js Route Handler가 DB에 직접 접속
- **Connection Pool**: `mysql2.createPool` (connectionLimit: 10, keepAlive 활성화)
- **Stored Procedure 활용**: 복잡한 집계 쿼리는 DB SP로 분리해 Route Handler를 경량 유지
- **동적 메타 조회**: `information_schema.columns`로 컬럼 구조를 런타임에 읽어 프론트 하드코딩 제거

---

## 6. 코드 설계 주요 특징

### 6-1. 동적 코드 매핑 — `dynamicMapDataToCode`

DB에서 온 원시 데이터(숫자 코드값)를 코드 테이블로 한국어 라벨로 변환.
컬럼명을 키로 code 딕셔너리를 조회해 값이 있으면 대체, 없으면 원본 값 유지.

```typescript
// commonUtil.ts
export const dynamicMapDataToCode = (data: any[], code: any) => {
  return data.map((item) => {
    const mappedItem = { ...item };
    for (const [key, value] of Object.entries(item) as [string, any][]) {
      if (code[key]) {
        mappedItem[key] = code[key][value] || `${value}`;
      }
    }
    return mappedItem;
  });
};
```

컬럼 목록도 도메인 테이블로 자동 매핑(`processKeys` → `domainParser`):

```typescript
export const processKeys = (data: any[], domain: any) => {
  const allKeys = Object.keys(data[0]).map((key) => key.toLowerCase());
  return domainParser(allKeys, domain);
};
// 결과: [{ "input_event_cnt": "입력 이벤트 수" }, { "output_obu_cnt": "출력 OBU 수" }, ...]
```

→ **테이블 헤더와 컬럼 순서를 DB 도메인 테이블 하나로 일괄 관리**

---

### 6-2. 클라이언트사이드 날짜 집계 (Group By 년/월/일)

서버 재요청 없이 이미 받아온 원시 데이터를 클라이언트에서 날짜 단위로 집계.

```typescript
// processCode === "year" 또는 "month" 일 때
const groupedData = targetTable.reduce((acc, curr) => {
  const dateParts = curr.custom_date.split("-");
  const groupKey = value === "year"
    ? dateParts[0]
    : `${dateParts[0]}-${dateParts[1]}`;

  if (!acc[groupKey]) acc[groupKey] = {};

  Object.keys(curr).forEach((key) => {
    if (key === "process_time") {
      // 평균 계산을 위해 sum/count 분리 추적
      if (!acc[groupKey][key]) acc[groupKey][key] = { sum: 0, count: 0 };
      acc[groupKey][key].sum += Number(curr[key]);
      acc[groupKey][key].count += 1;
    } else if (!["custom_date", "process_cd", "data_type", ...].includes(key)) {
      // 나머지 수치 컬럼 합산
      acc[groupKey][key] = (acc[groupKey][key] || 0) + Number(curr[key]);
    }
  });
  return acc;
}, {});
```

- `process_time`(처리 시간)만 평균, 나머지 건수 컬럼은 합산으로 집계 방식 분리
- 추가 API 호출 없이 실시간 반응형 Group By 전환

---

### 6-3. 컬럼 동적 표시/숨김 (클라이언트 필터링)

개별 컬럼 버튼 또는 "전체 선택" 버튼으로 테이블에 표시할 컬럼을 실시간 토글.

```typescript
case "column":
  // 해당 컬럼 com_flag 반전 (1→0 숨김, 0→1 표시)
  setOpt((prevOpt) => ({
    ...prevOpt,
    column: prevOpt.column.map((item) =>
      item.column_name === value
        ? { ...item, com_flag: 1 - item.com_flag }
        : item
    ),
  }));

  // 숨길 경우: tableData에서 해당 키 삭제
  if (flag === 0) {
    updatedTableData = tableData.map((item) => {
      const newItem = { ...item };
      delete newItem[target];
      return newItem;
    });
  } else {
    // 표시할 경우: 원본 data에서 현재 숨겨진 컬럼만 제외하고 재구성
    const updatedData = targetTable.data.map((item) => {
      const filteredItem = { ...item };
      opt.column
        .filter((col) => col.column_name !== target && col.com_flag === 0)
        .forEach((col) => delete filteredItem[col.column_name]);
      return filteredItem;
    });
    updatedTableData = updatedData;
  }
```

→ 하나의 `handleChange` switch 핸들러로 table·column·allColumn·dateType·network 5가지 필터를 처리

---

### 6-4. 범용 Table 컴포넌트

```typescript
<Table
  formList={tableData}      // 데이터 배열
  orderObj={orderObj}       // 컬럼 순서 및 한글 헤더 정의
  title="데이터 수집 현황"
  bOption={{
    vTotal: true,           // 상단 합계 행
    vSearch: true,          // 초성 검색
    vBtoomTotal: true,      // 하단 합계 행
    oPageing: {
      showPageCnt: 10,
      countPerPage: 100,
      visible: true,
    },
  }}
/>
```

- **한글 초성 검색**: `hangul-js`로 초성 분리 후 비교 → "ㄱㄷ"로 "가공 데이터" 검색 가능
- **컬럼 정렬**: 클릭 시 asc/desc 토글, 날짜·숫자·문자열 타입 자동 인식
- **합계 행**: `vTotal`/`vBtoomTotal`로 수치 컬럼 합산 자동 계산
- **CSV 다운로드**: 현재 필터된 데이터 그대로 다운로드
- **페이지네이션**: `react-js-pagination` 연동, 페이지당 건수 설정 가능
- **byte 변환**: `byteTo()` 유틸로 용량 컬럼 자동 포맷 (B/KB/MB/GB)

---

### 6-5. mysql2 Connection Pool + Stored Procedure 패턴

```javascript
// api/_lib/db.js
const connectToDatabase = mysql.createPool({
  host: process.env.MYSQL_HOST,
  connectionLimit: 10,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  waitForConnections: true,
});

// api/process/getLogData/route.ts
export async function POST(req: NextRequest) {
  const connection = await connectToDatabase.getConnection();
  try {
    // 공정 코드에 연결된 테이블 목록 + 데이터를 SP 한 번 호출로 획득
    const [rows] = await connection.execute(
      `call ProcessTablesForProcessCd(?);`,
      [info.code]
    );

    // information_schema 로 컬럼 메타 동적 조회
    const [vecCol] = await connection.execute(`
      SELECT column_name, column_comment, true com_flag
      FROM information_schema.columns
      WHERE table_schema = 'statistical_db' AND table_name = ?
        AND COLUMN_NAME NOT IN ('process_id', 'process_no', 'seq', 'insert_datetime')
    `, [tableName]);

    return NextResponse.json(obj);
  } finally {
    connection.release(); // 항상 풀에 반환
  }
}
```

- `try/finally`로 예외 발생 시에도 커넥션 반드시 반환
- `information_schema.columns` 조회로 프론트에서 컬럼 목록 하드코딩 불필요
- custom_date 형식(`YYYY-MM-DD` or `YYYY-MM`)으로 날짜 단계(년/월/일) 자동 판별

---

### 6-6. Zustand 메뉴 상태 관리

```typescript
// _common/hook/useMenuHook.ts
interface UseMenuStore {
  menuMain: string | null;
  menuSub: string | null;
  setMenuMain: (menuMain: string | null) => void;
  setMenuSub: (menuSub: string | null) => void;
}

const useMenuStore = create<UseMenuStore>((set) => ({
  menuMain: "-1",
  menuSub: "-1",
  setMenuMain: (menuMain) => set(() => ({ menuMain })),
  setMenuSub:  (menuSub)  => set(() => ({ menuSub })),
}));
```

- 사이드바 아이콘 hover 시 서브메뉴 레이어 표시에 활용
- 현재 활성 메뉴 하이라이트 처리 (`menuMain === "1"` → `bg-[#0093ff]`)

---

## 7. 데이터 파이프라인 구조 (도메인 지식)

이 시스템이 모니터링하는 교통 빅데이터 가공 파이프라인:

```
원시 데이터 수집
├── T-map 링크 데이터  → R0 → R1 (TMAP_LINK_R1toS0) → S0 → P1
├── T-map 포인트 데이터 → R0 → R1 → S1 → PS → P1
├── DTG 포인트 데이터  → R0 → R1 → S0 → S1 → PS → P1
└── 속도 프로파일      → SPEED_PROFILE → SPEED_PROFILE_SMOOTHING

각 단계별 주요 지표:
- input_event_cnt  : 입력 이벤트 수
- output_obu_cnt   : 출력 OBU(차량단말기) 수
- process_time     : 처리 시간 (평균 집계)
- ct_*_cnt         : 차종별 건수 (소형/일반/중형/대형/트럭/특수 등)
- ft_*_cnt         : 유종별 건수 (휘발유/경유/LPG/EV 등)
- *_error_*_cnt    : 단계별 오류 건수
```

---

## 8. API 엔드포인트 목록

| 메서드 | 경로 | 설명 |
|--------|------|------|
| POST | `/api/common/getDomainList` | 전체 도메인(컬럼 한글명) 조회 |
| POST | `/api/common/getCodeList` | 전체 코드(값 한글 매핑) 조회 |
| POST | `/api/common/getMenuList` | 사이드바 메뉴 목록 조회 |
| POST | `/api/process/getLogData` | 공정 코드별 로그 + 컬럼 메타 조회 |
| POST | `/api/process/getAppCompleteList` | 완료 App 목록 조회 |
| POST | `/api/process/getAllAppList` | 전체 App 목록 조회 |
| POST | `/api/collection/getCondition` | 수집 현황 조건(데이터타입·연도 목록) 조회 |
| POST | `/api/collection/getColData` | 수집 현황 실데이터 조회 |
| POST | `/api/progress/getProgressCondition` | 진행 현황 조건 조회 |
| POST | `/api/progress/getProgressData` | 진행 현황 실데이터 조회 |

---

## 9. 환경 설정

| 환경변수 | 설명 |
|----------|------|
| `MYSQL_HOST` | MySQL 서버 호스트 |
| `MYSQL_PORT` | MySQL 포트 |
| `MYSQL_USER` | DB 사용자 |
| `MYSQL_PASSWORD` | DB 비밀번호 |
| `MYSQL_DATABASE` | DB명 (`statistical_db`) |
| `NEXT_PUBLIC_API_BASE_URL` | 내부 API Base URL |
| `NEXT_PUBLIC_KOTI_YARN_API_BASE_URL` | Hadoop YARN API URL |
| `NEXT_PUBLIC_KOTI_HADOOP_API_BASE_URL` | Hadoop History API URL |

---

## 10. 소스 규모

| 구분 | 수량 |
|------|------|
| 페이지 컴포넌트 (.tsx) | 8+ |
| 공통 컴포넌트 (.tsx) | 10+ |
| API Route Handler (.ts) | 10 |
| 유틸·훅·스토어 (.ts) | 4 |
| 모니터링 공정 종류 | 5종 |
| 지원 데이터타입 | 5종 |

---

## 11. 주요 기술적 도전 및 해결

### 11-1. Next.js Route Handler를 BFF로 활용한 DB 직접 접근

**상황**: 별도 백엔드 서버 없이 빠르게 내부 모니터링 도구를 구축해야 했음.

**해결**: Next.js App Router의 Route Handler(`app/api/**/route.ts`)를 BFF로 사용해 mysql2 풀을 직접 연결. Spring/Java 백엔드 없이도 DB의 Stored Procedure를 호출해 복잡한 집계를 처리.

**효과**: 서버 구성 이중화 없이 단일 Next.js 프로세스로 프론트엔드 + API 서버 역할 통합.

---

### 11-2. information_schema 동적 컬럼 메타 조회로 하드코딩 제거

**문제**: 공정 테이블마다 컬럼 구성이 다르고, 신규 컬럼 추가 시마다 프론트를 수정해야 하는 구조.

**해결**: API에서 MySQL `information_schema.columns`를 직접 조회해 테이블 컬럼 목록과 한글 코멘트를 런타임에 획득. 프론트는 이 메타 배열을 받아 테이블 헤더와 컬럼 필터 UI를 자동 생성.

```sql
SELECT column_name, column_comment, true com_flag
FROM information_schema.columns
WHERE table_schema = 'statistical_db' AND table_name = ?
  AND COLUMN_NAME NOT IN ('process_id', 'process_no', 'seq', 'insert_datetime')
```

**효과**: DB 컬럼 변경 시 프론트 코드 수정 없이 자동 반영.

---

### 11-3. 클라이언트사이드 날짜 집계 — 재요청 없는 Group By

**문제**: 사용자가 날짜 단위(년/월/일)를 전환할 때마다 서버에 재요청하면 UX 저하.

**해결**: 최초 조회 시 일 단위 원시 데이터를 전부 받아와 클라이언트 `reduce`로 년/월 집계를 실시간 계산. `process_time`만 평균, 나머지 수치 컬럼은 합산으로 집계 방식을 컬럼명으로 분기.

**효과**: 날짜 단위 전환이 즉시 반응, 추가 API 호출 비용 제거.

---

### 11-4. 단일 handleChange 핸들러로 다차원 필터 통합

**문제**: 테이블 선택·컬럼 표시·전체선택·날짜그룹·네트워크 필터가 각각 복잡한 상태 변경과 데이터 재계산을 수반.

**해결**: `event.currentTarget.name`을 switch key로 사용해 하나의 `handleChange` 함수 안에서 5가지 필터를 처리. 각 case마다 opt 상태 업데이트 + tableData 재계산을 함께 수행.

**효과**: 필터 로직이 한 곳에 집중되어 디버깅·유지보수 용이.

---

### 11-5. ApexCharts SSR 비활성화 처리

**문제**: ApexCharts는 브라우저 DOM에 의존해 Next.js SSR 환경에서 `window is not defined` 에러 발생.

**해결**: `next/dynamic`으로 동적 임포트하고 `ssr: false` 옵션 적용.

```typescript
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
```

**효과**: SSR 에러 없이 클라이언트에서만 차트 렌더링.

---

## 12. 성과 및 특이사항

- **단일 Next.js 앱으로 BFF 구현**: 별도 백엔드 없이 Route Handler + mysql2로 DB 직접 접근, 인프라 단순화
- **DB 메타 기반 동적 UI**: `information_schema`로 컬럼 구조를 런타임 조회해 테이블·필터 UI 자동 생성 — 신규 공정 추가 시 코드 수정 최소화
- **클라이언트 집계 전략**: 일 단위 원시 데이터를 한 번에 로드하고 클라이언트에서 년/월 집계를 실시간 수행 — API 재호출 없이 즉각 반응
- **도메인·코드 테이블 기반 다국어 매핑**: DB의 코드값과 컬럼명을 한국어로 일괄 변환하는 `dynamicMapDataToCode` 패턴으로 UI 레이어와 DB 레이어를 분리
- **범용 Table 컴포넌트**: 한글 초성 검색, 컬럼 정렬, 합계 행, 페이지네이션, CSV 다운로드를 단일 컴포넌트로 제공 — 새 페이지 추가 시 재사용으로 개발 속도 향상
