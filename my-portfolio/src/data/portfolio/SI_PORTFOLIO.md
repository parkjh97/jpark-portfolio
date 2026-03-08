# 포트폴리오 - 시흥시 대중교통 분석 서비스 시스템

> **프로젝트명:** 시흥시 대중교통 분석 서비스 (publicTransport v2)
> **분류:** SI 프로젝트 (시스템 통합 구축)
> **역할:** 웹 개발자
> **기간:** 2023년

---

## 1. 프로젝트 개요

시흥시 대중교통 데이터를 수집·분석하여 노선 운영 현황, 승하차 통계, 수익성, O/D(Origin-Destination) 분석 등 다양한 지표를 시각화하는 **교통 분석 대시보드 웹 애플리케이션**입니다.

버스카드 데이터 기반의 실시간·이력 데이터를 분석하여 시 담당자 및 운수 관계자가 노선 운영 의사결정에 활용할 수 있도록 설계되었습니다.

---

## 2. 기술 스택

### Backend
| 구분 | 기술 | 버전 |
|------|------|------|
| Language | Java | 1.8 |
| Framework | Spring MVC | 4.3.22.RELEASE |
| 표준프레임워크 | eGovFramework | 3.9.0 |
| ORM | MyBatis | 3.5.2 |
| DB | PostgreSQL | 42.3.3 (Driver) |
| Connection Pool | HikariCP | 4.0.3 |
| JSON | Jackson, GSON | 2.9.10 / 2.3.1 |
| 암호화 | Jasypt, BouncyCastle | 1.9.2 / 1.58 |
| Validation | Hibernate Validator | 5.2.4.Final |
| Reactive | RxJava | 2.0.5 |
| Build | Maven | WAR 패키징 |

### Frontend
| 구분 | 기술 | 비고 |
|------|------|------|
| Template | JSP/JSTL | 서버사이드 렌더링 |
| JavaScript | ES6 모듈 | 70+ 파일, 모듈 구조 |
| 차트/시각화 | D3.js + Canvas 커스텀 구현 | 직접 차트 개발 |
| Grid | jqGrid 4.4.3 | 데이터 테이블 |
| UI | jQuery UI | 공통 UI 컴포넌트 |
| CSS | 커스텀 CSS | 15개 파일 |

### 인프라 / 기타
| 구분 | 기술 | 비고 |
|------|------|------|
| WAS | Apache Tomcat 9.0.67 | |
| Database | PostgreSQL | 192.168.x.x 내부망 |
| VCS | SVN (Subversion) | |
| IDE | Eclipse | |
| 보안 | Spring Security Crypto, SimpleCaptcha | |

---

## 3. 주요 기능

### 3.1 현황 대시보드 (Status Board)
- 노선별 운행 현황 조회 (일별/시간대별 통계)
- 읍면동(EMD) 기반 이용자 현황 분석
- 노선 이용량 랭킹, 정류장 이용량 랭킹
- 이용자 유형 분석 (평일/주말, 이용권 유형별)
- 피크타임 vs. 비피크타임 분석
- 버스 유형별(일반/광역 등) 이용량 현황
- 교통혼잡 정보 모니터링

### 3.2 O/D 분석 보드 (OD Board)
- 카드 구간 데이터 기반 기종점(Origin-Destination) 분석
- 시간대별 O/D 교통량 시각화
- 환승 패턴 분석

### 3.3 수익 분석 보드 (Profit Board)
- 노선별 수익성 분석
- 노선 수입금 집계 및 비교 분석

### 3.4 노선 보드 (Route Board)
- 노선별 상세 운행 분석
- 노선 운영 데이터 시계열 분석

### 3.5 정류장 현황 (Station Status)
- 개별 정류장 이용 현황 분석

### 3.6 종합 현황 (Mass Status)
- 시흥시 전체 대중교통 통합 지표

### 3.7 도로 현황 (Road Status)
- 교통량 기반 도로 현황 분석

### 3.8 노선 현황 (Route Status)
- 노선 운행 상세 현황

### 3.9 수요 분석 보드 (Demand Board)
- 수요 예측 및 분석

### 3.10 데이터 다운로드
- 분석 데이터 엑셀/파일 내보내기 기능

---

## 4. 시스템 아키텍처

```
[사용자 브라우저]
      │  HTTP Request (*.do)
      ▼
[Apache Tomcat 9]
      │
      ▼
[Spring DispatcherServlet]
      │
      ├──▶ [Controller Layer]       : HTTP 요청 처리, 파라미터 바인딩
      │         │
      ├──▶ [Service Layer]          : 비즈니스 로직, 데이터 변환
      │         │
      ├──▶ [DAO Layer (@Mapper)]    : MyBatis 쿼리 실행
      │         │
      └──▶ [MyBatis Mapper XML]     : SQL 관리 (PostgreSQL)
                │
                ▼
         [PostgreSQL DB]
         (버스카드 이용 데이터, 노선 정보, 정류장 정보 등)
```

### 데이터 흐름
1. 사용자 → JSP 페이지 접근 (*.do URL)
2. Spring MVC Controller → 요청 파라미터 `QMap` 객체로 수신
3. Service → 비즈니스 로직 처리
4. DAO → MyBatis 통해 PostgreSQL 쿼리 실행
5. 결과 → Jackson JSON 직렬화 후 응답

---

## 5. 데이터베이스 설계

### 주요 테이블 (MyBatis Mapper 기반 역추적)

| 테이블명 | 설명 |
|---------|------|
| `bus_rte_info` | 버스 노선 기본 정보 |
| `bus_rte_stn_oper_info` | 노선별 정류장 운행 정보 |
| `bus_rte_oper_info` | 노선 운행 정보 |
| `rprs_stn` | 대표 정류장 정보 |
| `stn_utztn_info` | 정류장 이용 현황 |
| `od_transfer_info` | O/D 환승 정보 |
| `emd_psngr_info` | 읍면동별 승객 정보 |
| `emd` | 행정구역(읍면동) 코드 |
| `user_info` | 사용자 인증 정보 |
| `menu` | 메뉴 구성 정보 |

### SQL 특징
- **PostgreSQL CTE(WITH절)** 활용: 복잡한 집계 쿼리를 단계적으로 분리
- **Window Function** 활용: 순위, 누적 합계 등 분석용 쿼리
- **CASE/WHEN**: 이용자 유형별 조건부 집계
- **JSON 집계**: PostgreSQL JSON 함수 활용
- 전체 Mapper XML: 약 **3,963 라인** (14개 파일)

---

## 6. 프론트엔드 구조

### JavaScript 모듈 구조 (ES6)
```
js/
├── modules/
│   ├── core/
│   │   ├── ComponentBase.js     # 컴포넌트 기반 클래스
│   │   ├── Dispatcher.js        # 이벤트 디스패처
│   │   └── ModulePath.js        # 모듈 경로 관리
│   ├── chart/
│   │   ├── LineChart.js         # 커스텀 꺾은선 차트
│   │   ├── PieChart.js          # 커스텀 파이 차트
│   │   ├── StackBarChart.js     # 커스텀 누적 막대 차트
│   │   ├── MultiBarChart.js     # 커스텀 다중 막대 차트
│   │   └── ComplexChart.js      # 복합 차트
│   ├── popup/
│   │   ├── DatePicker.js        # 날짜 선택 팝업
│   │   ├── ListPopup.js         # 리스트 팝업
│   │   └── ColorPicker.js       # 색상 선택기
│   └── scroll/                  # 스크롤 유틸리티
└── components/
    ├── components.js            # 재사용 컴포넌트
    └── codeset.js               # 코드/데이터 매핑
```

### 차트 구현 방식
- **D3.js + HTML5 Canvas** 기반 직접 구현 (기존 차트 라이브러리 미사용)
- 이벤트 디스패처 패턴으로 컴포넌트 간 통신
- 커스텀 DatePicker, ColorPicker UI 직접 구현

### JSP 뷰 (14개)
- `main.jsp` - 메인 대시보드 레이아웃
- `fn/statusBoard.jsp` - 현황 대시보드
- `fn/odBoard.jsp` - O/D 분석
- `fn/routeBoard.jsp` - 노선 분석
- `fn/profitBoard.jsp` - 수익 분석
- `fn/stationStatus.jsp` - 정류장 현황
- `fn/roadStatus.jsp` - 도로 현황
- `fn/routeStatus.jsp` - 노선 현황
- `fn/demandBoard.jsp` - 수요 분석
- `fn/massStatus.jsp` - 종합 현황
- 공통 구조 파일 포함

---

## 7. 주요 API 엔드포인트

> URL 패턴: `*.do` (Spring DispatcherServlet)

### 현황 대시보드
| Method | URL | 설명 |
|--------|-----|------|
| GET | `/statusBoard/getRouteStatus.do` | 노선 운행 현황 |
| GET | `/statusBoard/getDaysVolume.do` | 일별 이용량 |
| GET | `/statusBoard/getEmdUserInfo.do` | 읍면동별 이용자 정보 |
| GET | `/statusBoard/getRouteRankList.do` | 노선 이용량 랭킹 |
| GET | `/statusBoard/getStnRankList.do` | 정류장 이용량 랭킹 |
| GET | `/statusBoard/getTimeUserInfo.do` | 시간대별 이용자 현황 |
| GET | `/statusBoard/getRouteTypeVolume.do` | 버스 유형별 이용량 |
| GET | `/statusBoard/getUserTypeVolume.do` | 이용자 유형별 이용량 |
| GET | `/statusBoard/getRouteTypePeakTime.do` | 피크타임 분석 |

### O/D 분석
| Method | URL | 설명 |
|--------|-----|------|
| GET | `/odBoard/getCardSectionData.do` | 카드 구간 데이터 |
| GET | `/odBoard/getODTrafficTimeValue.do` | 시간대별 O/D 교통량 |

### 수익 분석
| Method | URL | 설명 |
|--------|-----|------|
| GET | `/profitBoard/getRouteList.do` | 노선 목록 |
| GET | `/profitBoard/getRouteProfitAnalysis.do` | 노선 수익성 분석 |

---

## 8. Spring 설정 구조

| 설정 파일 | 역할 |
|----------|------|
| `context-servlet.xml` | DispatcherServlet, ViewResolver, ArgumentResolver |
| `context-common.xml` | i18n, 공통 빈, 예외처리 |
| `context-datasource.xml` | PostgreSQL HikariCP 설정 |
| `context-mapper.xml` | MyBatis SqlSessionFactory, Mapper 스캔 |
| `context-transaction.xml` | 트랜잭션 관리 |
| `context-aspect.xml` | AOP 설정 |
| `context-interceptor.xml` | 요청/응답 인터셉터 |
| `context-idgen.xml` | ID 생성 서비스 |
| `mybatis-config.xml` | MyBatis 설정 (캐시, 지연로딩, 스네이크케이스 자동변환) |
| `web.xml` | CharacterEncodingFilter, HTMLTagFilter, Servlet 설정 |

---

## 9. 보안 구현

- **세션 기반 인증**: `user_info` 테이블 기반 로그인
- **CAPTCHA**: SimpleCaptcha 라이브러리 적용 (로그인 화면)
- **HTML 태그 필터링**: 커스텀 `HTMLTagFilter` (XSS 방지)
- **입력 인코딩**: UTF-8 CharacterEncodingFilter 전역 적용
- **암호화**: Jasypt + BouncyCastle (비밀번호 및 설정값 암호화)

---

## 10. 성능 최적화

- **HikariCP**: 고성능 DB 커넥션 풀 적용
- **MyBatis 캐시**: 1차 캐시 활성화
- **지연 로딩 (Lazy Loading)**: MyBatis `lazyLoadingEnabled: true`
- **SQL CTE 최적화**: 복잡한 집계 쿼리를 CTE로 분리하여 가독성 및 성능 향상
- **JVM 튜닝**: `-Xms256m -Xmx768m -XX:MaxPermSize=256m`

---

## 11. 프로젝트 디렉토리 구조

```
publicTransport_v002/
├── pom.xml                          # Maven 빌드 설정
├── src/main/
│   ├── java/ego/qbic/
│   │   ├── base/                    # 프레임워크 코어 (Controller, DAO, VO, Filter)
│   │   ├── cmmn/                    # 공통 유틸리티
│   │   ├── statusBoard/             # 현황 대시보드 모듈
│   │   ├── odBoard/                 # O/D 분석 모듈
│   │   ├── profitBoard/             # 수익 분석 모듈
│   │   ├── routeBoard/              # 노선 분석 모듈
│   │   ├── stationStatus/           # 정류장 현황 모듈
│   │   ├── massStatus/              # 종합 현황 모듈
│   │   ├── roadStatus/              # 도로 현황 모듈
│   │   ├── routeStatus/             # 노선 현황 모듈
│   │   ├── demandBoard/             # 수요 분석 모듈
│   │   ├── legend/                  # 범례 관리
│   │   ├── menu/                    # 메뉴 관리, 메인 컨트롤러
│   │   ├── login/                   # 로그인/인증
│   │   └── dataDownload/            # 데이터 다운로드
│   ├── resources/
│   │   ├── spring/                  # Spring XML 설정 (11개)
│   │   ├── mybatis/map/             # MyBatis Mapper XML (14개)
│   │   ├── message/                 # 다국어 메시지 (ko/en)
│   │   └── property/                # 앱 설정 프로퍼티
│   └── webapp/
│       ├── WEB-INF/views/jsp/       # JSP 뷰 (14개)
│       ├── js/                      # JavaScript (70+ 파일)
│       ├── css/                     # CSS (15개 파일)
│       ├── images/                  # 이미지 리소스
│       └── font/                    # 폰트 파일
└── target/                          # 빌드 결과물 (WAR)
```

---

## 12. 개발 시 주요 경험 / 기술적 도전

---

### 12-1. PostgreSQL 고급 쿼리를 활용한 다차원 교통 통계 구현

버스카드 원천 데이터를 다양한 기준으로 집계하는 복잡한 분석 쿼리를 직접 설계하고 구현했습니다.

#### CTE(WITH절)를 활용한 단계적 쿼리 분리

단일 SQL로 처리하면 가독성이 극히 낮아지고 유지보수가 어려운 복합 집계 쿼리를, CTE로 단계를 나눠 작성했습니다. 예를 들어 노선 운행 현황 쿼리는 다음 흐름으로 구성됩니다.

```sql
WITH rte_type_amount AS (
    -- 1단계: 노선-정류장 운행 정보와 노선 기본 정보, 대표 정류장을 조인
    SELECT oper_info.bus_rte_id, rte_info.rte_nm, rte_info.srvc_rte_type_cd,
           rprs_stn.emd_cd, rte_info.oprtn_cnt, rte_info.avg_oprtn_intrv
    FROM (
        (SELECT bus_rte_id, rprs_stn_id FROM bus_rte_stn_oper_info
         WHERE oprtn_ymd = #{date}::INTEGER GROUP BY bus_rte_id, rprs_stn_id) AS oper_info
        LEFT JOIN (...) AS rte_info ON rte_info.bus_rte_id = oper_info.bus_rte_id
        LEFT JOIN (SELECT rprs_stn_id, emd_cd FROM rprs_stn) AS rprs_stn
            ON oper_info.rprs_stn_id = rprs_stn.rprs_stn_id
    )
    -- 시흥시 EMD 코드 범위 필터링 (31150000 ~ 31160000)
    WHERE rprs_stn.emd_cd > 31150000 AND rprs_stn.emd_cd < 31160000
)
-- 2단계: CTE 결과를 기반으로 버스 유형별 최종 집계
SELECT srvc_rte_type_cd,
       COUNT(DISTINCT bus_rte_id) AS bus_rte_id,
       SUM(oprtn_cnt) AS oprtn_cnt,
       SUM(vhcl_cnt) AS vhcl_cnt
FROM ( ... ) AS t
GROUP BY srvc_rte_type_cd
```

- 중간 결과를 CTE로 캐싱하여 동일 서브쿼리 반복 실행 방지
- 시흥시 행정구역 코드(`31150xxx`) 범위 조건을 일관성 있게 적용

#### CASE/WHEN 조건 집계로 피크타임 분석 구현

24시간 데이터를 오전첨두/오전비첨두/오후첨두/오후비첨두 4개 구간으로 분류하고, 동시에 버스 유형(일반/광역/마을)별 교차 집계를 한 쿼리로 처리했습니다.

```sql
SELECT
    CASE
        WHEN stn_arvl_time BETWEEN (#{date} || '070000')::bigint
                               AND (#{date} || '090000')::bigint THEN '오전첨두'
        WHEN stn_arvl_time BETWEEN (#{date} || '110000')::bigint
                               AND (#{date} || '130000')::bigint THEN '오전비첨두'
        WHEN stn_arvl_time BETWEEN (#{date} || '170000')::bigint
                               AND (#{date} || '190000')::bigint THEN '오후첨두'
        WHEN stn_arvl_time BETWEEN (#{date} || '200000')::bigint
                               AND (#{date} || '220000')::bigint THEN '오후비첨두'
        ELSE '합계'
    END AS "시간",
    COALESCE(SUM(CASE WHEN srvc_rte_type_cd = 2 THEN brd_prsns ELSE 0 END), 0) AS "일반",
    COALESCE(SUM(CASE WHEN srvc_rte_type_cd = 1 THEN brd_prsns ELSE 0 END), 0) AS "광역",
    COALESCE(SUM(CASE WHEN srvc_rte_type_cd = 3 THEN brd_prsns ELSE 0 END), 0) AS "마을"
FROM commonq
GROUP BY "시간"
```

- 날짜 파라미터(`#{date}`)를 문자열로 이어붙여 시간 범위 상수를 동적으로 생성 후 `::bigint` 캐스팅
- `SUM(CASE WHEN ...)` 패턴으로 피벗(Pivot) 없이 크로스탭 집계 구현

#### FULL JOIN으로 O/D 4방향 교통량 동시 집계

O/D 분석에서 시흥시 내부·외부 유입/유출 4가지 흐름을 시간대별로 동시에 집계해야 했습니다. 일부 시간대에 특정 방향 데이터가 없을 경우 행 자체가 사라지는 문제를 `FULL JOIN`으로 해결했습니다.

```sql
SELECT time_cd,
       COALESCE(inside_inflow,   -1) AS inside_inflow,   -- 내부→내부 유입
       COALESCE(inside_outflow,  -1) AS inside_outflow,  -- 내부→내부 유출
       COALESCE(outside_inflow,  -1) AS outside_inflow,  -- 외부→내부 유입
       COALESCE(outside_outflow, -1) AS outside_outflow  -- 내부→외부 유출
FROM (SELECT time_cd, SUM(tot_psngr_cnt) AS inside_inflow FROM tb_od
      WHERE spnt_emd_cd::TEXT LIKE '31150%' AND epnt_emd_cd::TEXT LIKE CONCAT(#{zoneID},'%')
      GROUP BY time_cd) AS tb_inside_inflow
FULL JOIN (...) AS tb_inside_outflow  USING(time_cd)
FULL JOIN (...) AS tb_outside_inflow  USING(time_cd)
FULL JOIN (...) AS tb_outside_outflow USING(time_cd)
```

- `COALESCE(..., -1)`: null(데이터 없음)과 0(실제 0건)을 프론트엔드에서 구분 처리
- `FULL JOIN ... USING(time_cd)`: 어느 방향이든 데이터가 있는 시간대는 반드시 포함

#### MyBatis 동적 SQL로 지역 필터 조건 분기

시흥시 전체(`zone=31150`)와 개별 읍면동(`zone=31150XXX`) 조회 시 WHERE 조건이 달라지는 문제를, `<choose>` 태그로 쿼리 분기 처리했습니다.

```xml
<if test="zone != null">
    <choose>
        <when test="zone == 31150">
            AND emd_cd > 31150000 AND emd_cd < 31160000
        </when>
        <otherwise>
            AND emd_cd = #{zone}::INTEGER
        </otherwise>
    </choose>
</if>
```

또한 평일/주말 날짜 목록을 동적으로 IN절에 바인딩하기 위해 `<foreach>`를 활용했습니다.

```xml
WHERE oprtn_ymd IN
<foreach collection="weekdays" item="weekdays" open="(" close=")" separator=",">
    CAST(#{weekdays} AS INTEGER)
</foreach>
```

---

### 12-2. 외부 라이브러리 없이 SVG 기반 커스텀 차트 컴포넌트 개발

Chart.js, Highcharts 등의 외부 차트 라이브러리를 사용하지 않고, SVG와 Web Components API만으로 꺾은선·파이·누적 막대·복합 차트를 처음부터 직접 구현했습니다.

#### SVG Path 좌표 계산 엔진 (LineChart)

꺾은선 차트의 핵심은 데이터 값을 SVG 좌표로 변환하는 것입니다. 가로/세로 방향 전환, 축 위치(start/end) 옵션을 모두 수식 하나로 처리했습니다.

```javascript
#getPathData(data = new Array(this.data.keyNames.length).fill(0)) {
    const flow  = this.data.keyFlow;        // 'horizontal' | 'vertical'
    const kPos  = this.data.keyAxisPos;     // 'start' | 'end'
    const width  = rect[flow === 'horizontal' ? 'width'  : 'height'];
    const height = rect[flow === 'horizontal' ? 'height' : 'width'];
    const gap    = width / data.length;
    const pad    = this.#pointSize / 2;

    return data.map((value, idx) => {
        const pos = (height - this.#pointSize) / this.topValue * value;
        return `${idx === 0 ? 'M' : 'L'} ${
            flow === 'horizontal'
                ? gap * idx + (gap / 2)
                : kPos === 'start' ? pad + pos : height - (pad + pos)
        } ${
            flow === 'horizontal'
                ? kPos === 'start' ? pad + pos : height - (pad + pos)
                : gap * idx + (gap / 2)
        }`;
    }).join(' ');
}
```

- `M`(Move To) / `L`(Line To) SVG 커맨드를 직접 생성
- `flow`, `kPos` 두 변수 조합으로 4가지 축 배치를 단일 공식으로 처리
- 데이터 최대값(`topValue`) 대비 현재값 비율로 픽셀 좌표 정규화

#### SMIL 애니메이션으로 경로 전환 효과 구현

데이터 업데이트 시 이전 경로에서 새 경로로 부드럽게 전환되는 애니메이션을, SVG 네이티브 `<animate>` 요소(SMIL)로 구현했습니다.

```javascript
#updateSVG() {
    const paths = this.#svg.querySelectorAll('#path_group .path');
    for (let i = 0; i < paths.length; ++i) {
        const pathData = this.#getPathData(this.#getValueData(i));
        const pathAni  = paths[i].querySelector('animate')
                      ?? paths[i].appendChild(this.#ani.cloneNode());
        pathAni.setAttribute('from', paths[i].getAttribute('d')); // 이전 경로
        pathAni.setAttribute('to',   pathData);                   // 새 경로
        pathAni.onend = this.#animateEnded;
        pathAni.beginElement(); // 애니메이션 트리거
    }
}
```

- CSS transition 대신 SVG SMIL `animate`를 사용하여 path `d` 속성 자체를 보간
- `beginElement()` 호출로 명시적 애니메이션 시작, `onend` 콜백으로 완료 후처리

#### 삼각함수 기반 파이 차트 호(Arc) 계산 (PieChart)

SVG `arc` 커맨드에 필요한 시작점·끝점 좌표를 삼각함수로 직접 계산하고, 도넛형 차트를 위한 내·외반지름을 모두 처리했습니다.

```javascript
#getPiecePath(startValue, endValue, innerRadius, outerRadius) {
    const inner = innerRadius * this.#pieRadius;  // 내반지름 (픽셀)
    const outer = outerRadius * this.#pieRadius;  // 외반지름 (픽셀)

    const startIn  = this.#getPoint(startValue * 3.60, inner);
    const endIn    = this.#getPoint(endValue   * 3.60, inner);
    const startOut = this.#getPoint(startValue * 3.60, outer);
    const endOut   = this.#getPoint(endValue   * 3.60, outer);
    const arcSweep = (endValue - startValue) <= 50 ? 0 : 1; // 180도 초과 여부 판별

    return `path("M ${startIn.x} ${startIn.y}
        A ${inner} ${inner} 0 ${arcSweep} 1 ${endIn.x} ${endIn.y}
        L ${endOut.x} ${endOut.y}
        A ${outer} ${outer} 0 ${arcSweep} 0 ${startOut.x} ${startOut.y} Z")`;
}

#getPoint(degree, radius) {
    const radian = (degree + 270) % 360 * Math.PI / 180.0; // 12시 방향을 0도로 보정
    return { x: radius * Math.cos(radian), y: radius * Math.sin(radian) };
}
```

- 백분율 값을 각도(`× 3.60`)로 환산 후 라디안 변환
- 12시 방향 기준을 맞추기 위해 `+270` 보정
- `arcSweep` 플래그: 호가 180도를 초과하면 1, 이하면 0 (SVG arc 스펙)
- CSS Custom Properties(`--path`, `--hover-path`)를 동적 주입해 hover 시 반지름 확대 효과 적용

#### ResizeObserver 기반 반응형 리렌더링

차트 컨테이너 크기가 변할 때마다 SVG를 재계산해야 합니다. `resize` 이벤트 대신 `ResizeObserver`를 사용해 해당 요소의 크기 변화만 정밀 감지했습니다.

```javascript
#observer = new ResizeObserver(entries => {
    entries.forEach(entry => {
        if (entry.target === this.#svg) {
            this.#rect = entry.contentRect;
            if (this.#prevRect) {
                const cur  = this.#rect.height  + this.#rect.width;
                const prev = this.#prevRect.height + this.#prevRect.width;
                if (Math.abs(cur - prev) > 1) {   // 1px 미만 변화는 무시 (무한루프 방지)
                    this.#prevRect = this.#rect;
                    this.#drawSVG();
                }
            }
        }
    });
});
```

- `Math.abs(cur - prev) > 1` 임계값으로 부동소수점 오차에 의한 재귀 렌더링 방지

---

### 12-3. Shadow DOM 기반 Web Components 아키텍처 설계

React/Vue 등의 프레임워크 없이 브라우저 표준 Web Components API를 직접 사용해 재사용 가능한 UI 컴포넌트 시스템을 구축했습니다.

#### Dispatcher - 커스텀 이벤트 시스템

`HTMLElement`를 상속한 커스텀 이벤트 버스를 구현해 컴포넌트 간 느슨한 결합(Loose Coupling)을 달성했습니다.

```javascript
export default class Dispatcher extends HTMLElement {
    #listeners = {};   // Private field로 외부 접근 차단

    addListener(type, listener) {
        if (!type || !listener) return;
        if (this.hasListener(type, listener)) return;   // 중복 등록 방지
        if (!this.#listeners[type]) this.#listeners[type] = [];
        this.#listeners[type].push(listener);
    }

    dispatch(event) {
        if (!this.#listeners[event.type]) return;
        if (!event.target) event.target = this;
        this.#listeners[event.type].forEach(func => func.call(this, event));
    }
}
```

- ES2022 Private Class Fields(`#`)로 내부 상태 완전 캡슐화
- `hasListener()` 중복 체크로 메모리 누수 방지

#### ComponentBase - Shadow DOM 스타일 격리

모든 UI 컴포넌트의 공통 기반 클래스입니다. Shadow DOM을 attach해 전역 CSS 오염을 원천 차단했습니다.

```javascript
export default class ComponentBase extends Dispatcher {
    constructor() {
        super();
        const style = document.createElement('style');
        style.textContent = `
            :host * { margin:0; padding:0; border:0; box-sizing:border-box; }
            .hide       { display: none !important; }
            .invisible  { visibility: hidden !important; }
            .disable    { pointer-events: none; }
        `;
        this.attachShadow({ mode: 'open' }).append(style);
    }
}
```

- `attachShadow({ mode: 'open' })`: 외부 JS에서도 접근 가능하도록 open 모드
- `:host *` 선택자로 컴포넌트 내부 전체에 reset CSS 적용
- `Dispatcher` 상속으로 모든 컴포넌트가 이벤트 발송 능력 보유

---

### 12-4. 프레임워크 수준 커스터마이징 - QMap 및 요청 처리 파이프라인

eGovFramework의 기본 파라미터 바인딩 방식이 프로젝트 요구사항에 맞지 않아, 프레임워크 핵심 클래스를 직접 확장했습니다.

#### QMap - DB 컬럼명 자동 camelCase 변환

DB에서 반환되는 `snake_case` 컬럼명을 Java 컨벤션인 `camelCase`로 자동 변환하는 커스텀 Map 구현체입니다.

```java
public class QMap extends ListOrderedMap {

    @Override
    public Object put(Object key, Object value) {
        // snake_case → camelCase 변환 후 저장
        return super.put(convert2CamelCase((String) key), value);
    }

    public static String convert2CamelCase(String underScore) {
        if (underScore.indexOf('_') < 0 && Character.isLowerCase(underScore.charAt(0)))
            return underScore;   // 변환 불필요 시 즉시 반환
        StringBuilder result = new StringBuilder();
        boolean nextUpper = false;
        for (char c : underScore.toCharArray()) {
            if (c == '_') { nextUpper = true; }
            else if (nextUpper) { result.append(Character.toUpperCase(c)); nextUpper = false; }
            else { result.append(Character.toLowerCase(c)); }
        }
        return result.toString();
    }

    // 타입별 null/empty 통합 체크
    public static Boolean empty(Object obj) {
        if (obj instanceof String)   return obj == null || "".equals(obj.toString().trim());
        if (obj instanceof List)     return obj == null || ((List<?>) obj).isEmpty();
        if (obj instanceof Map)      return obj == null || ((Map<?, ?>) obj).isEmpty();
        if (obj instanceof Object[]) return obj == null || Array.getLength(obj) == 0;
        return obj == null;
    }
}
```

- `ListOrderedMap` 상속으로 삽입 순서 보장 (응답 JSON 필드 순서 일관성)
- `put()` 오버라이드로 MyBatis 결과 자동 변환, 별도 설정 불필요
- `String / List / Map / Array` 4가지 타입을 하나의 `empty()` 메서드로 처리

---

### 12-5. 다계층 보안 필터 체인 직접 구현

공공기관 시스템인 만큼, 여러 보안 계층을 직접 설계하고 구현했습니다.

#### HTMLTagFilter - XSS 방어

서블릿 필터 레벨에서 모든 요청 파라미터의 HTML 태그를 제거하는 커스텀 필터를 구현했습니다.

```java
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
    String contentType = request.getContentType();

    if (excludeUrls.containsKey(uri)) {
        chain.doFilter(request, response);                          // 화이트리스트 URL은 통과
    } else if (contentType != null && contentType.contains("application/json")) {
        chain.doFilter(new RequestBodyFilterRequestWrapper(req), response);  // JSON 바디 필터링
    } else {
        chain.doFilter(new HTMLTagFilterRequestWrapper(req), response);      // 폼 파라미터 필터링
    }
}
```

- `HttpServletRequestWrapper` 패턴으로 요청을 투명하게 래핑해 컨트롤러 코드 변경 없이 적용
- Content-Type에 따라 JSON 바디와 폼 파라미터를 각각 다른 방식으로 처리

#### WebSecurityInterceptor - 파라미터 및 파일 업로드 보안 검증

Spring HandlerInterceptor를 구현해, 모든 요청의 파라미터 값과 업로드 파일 확장자를 검사했습니다.

```java
public boolean preHandle(HttpServletRequest request, ...) {
    // 1. 일반 파라미터 보안 검증
    for (String key : request.getParameterMap().keySet()) {
        String[] values = request.getParameterMap().get(key);
        for (String value : values) {
            HashMap result = WebSecurityUtil.checkDownloadParams(value);
            if ("true".equals(result.get("result"))) {
                LOGGER.error("보안 위반: {} / 위반문자: '{}'",
                    result.get("securitySort"), result.get("violationChar"));
            }
        }
    }
    // 2. 멀티파트 파일 업로드 보안 검증
    if (multipartResolver.isMultipart(request)) {
        MultipartHttpServletRequest mReq = (MultipartHttpServletRequest) request;
        for (MultipartFile file : mReq.getFiles("uploadFileName")) {
            HashMap result = WebSecurityUtil.uploadFileExtCheck(file.getOriginalFilename(), "uploadExt");
            if ("true".equals(result.get("result"))) {
                LOGGER.error("허용되지 않는 파일 확장자: {}", file.getOriginalFilename());
            }
        }
    }
    return super.preHandle(request, response, handler);
}
```

- 파라미터와 파일 업로드를 하나의 Interceptor에서 통합 검증
- 별도 `WebSecurityUtil` 유틸 클래스에 보안 규칙을 외부화하여 정책 변경 용이

---

### 12-6. PostGIS 공간 함수를 활용한 지도 시각화 데이터 생성

O/D 분석 화면에서 유입·유출 흐름을 지도 위에 시각화하기 위해, PostgreSQL PostGIS의 공간 함수로 읍면동 폴리곤의 중심 좌표를 쿼리 내에서 직접 추출했습니다.

```sql
SELECT
    zone_id,
    sump1,
    -- 출발지(시흥시 전체) 중심 좌표
    (SELECT ST_X(ST_PointOnSurface(geom)) FROM sgg WHERE sgg_cd = 31150) AS ox,
    (SELECT ST_Y(ST_PointOnSurface(geom)) FROM sgg WHERE sgg_cd = 31150) AS oy,
    -- 도착지(개별 읍면동) 중심 좌표
    (SELECT ST_X(ST_PointOnSurface(geom)) FROM emd WHERE emd_cd = #{zoneID}::INTEGER) AS dx,
    (SELECT ST_Y(ST_PointOnSurface(geom)) FROM emd WHERE emd_cd = #{zoneID}::INTEGER) AS dy
FROM ( ... ) AS flow_data
INNER JOIN (
    SELECT emd_cd AS zone_id, emd_nm AS zone_nm,
           ST_X(ST_PointOnSurface(geom)) AS cx,
           ST_Y(ST_PointOnSurface(geom)) AS cy
    FROM emd
) AS tb_zone USING (zone_id)
```

- `ST_PointOnSurface()`: 폴리곤 내부에 반드시 위치하는 대표점 추출 (ST_Centroid보다 안전)
- `ST_X() / ST_Y()`: 위경도 좌표 분리 추출
- 별도 GIS 미들웨어 없이 DB 쿼리 한 번으로 교통량 + 좌표 데이터를 동시에 반환

---

### 12-7. Spring MVC View Resolution 다중 전략 구성

JSP(기존)와 Thymeleaf(신규)를 동시에 지원하도록 View Resolver 우선순위 체인을 직접 설계했습니다.

```xml
<!-- 1순위: 빈 이름으로 뷰 결정 (jsonView 등) -->
<bean class="org.springframework.web.servlet.view.BeanNameViewResolver">
    <property name="order" value="1" />
</bean>

<!-- 2순위: JSP/JSTL (viewNames 패턴으로 jsp/* 경로만 처리) -->
<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
    <property name="viewClass" value="org.springframework.web.servlet.view.JstlView"/>
    <property name="prefix" value="/WEB-INF/views/" />
    <property name="suffix" value=".jsp" />
    <property name="viewNames" value="jsp/*" />
</bean>

<!-- 3순위: Thymeleaf (.html) -->
<bean class="org.thymeleaf.spring4.view.ThymeleafViewResolver">
    <property name="templateEngine" ref="templateEngine" />
</bean>
```

- 컨트롤러가 `"jsonView"` 반환 시 → Jackson JSON 직렬화 (REST API 응답)
- 컨트롤러가 `"jsp/fn/statusBoard"` 반환 시 → JSP 렌더링
- 이 외 뷰 이름 → Thymeleaf 렌더링
- 세 전략이 순서대로 폴백되어 기존 JSP 코드를 건드리지 않고 Thymeleaf 도입 가능

---

## 13. 프로젝트 규모

| 항목 | 수치 |
|------|------|
| Java 소스 라인 | ~7,531 lines |
| MyBatis Mapper XML | ~3,963 lines (14개 파일) |
| JavaScript 파일 | 70개 이상 |
| CSS 파일 | 15개 |
| JSP 뷰 | 14개 |
| Spring 설정 파일 | 11개 |
| 주요 기능 모듈 | 11개 |
| 전체 프로젝트 크기 | ~123MB |

---

## 14. 기타 특이사항

- **eGovFramework 적용**: 한국 공공기관 SI 표준에 맞춘 개발
- **시흥시 특화**: 시흥시 행정구역(EMD 코드 31150xxx) 기반 데이터 처리
- **이중 템플릿 엔진**: JSP + Thymeleaf 동시 지원 (향후 마이그레이션 대비)
- **다국어 지원**: 한국어/영어 i18n 메시지 관리
- **커스텀 확장**: `QMap`(파라미터용 HashMap 확장), `QRequestMappingHandlerAdapter`(커스텀 요청 핸들러) 등 프레임워크 수준 커스터마이징

---

*이 문서는 소스코드 분석을 기반으로 자동 생성된 포트폴리오 문서입니다.*
*생성일: 2026-03-08*
