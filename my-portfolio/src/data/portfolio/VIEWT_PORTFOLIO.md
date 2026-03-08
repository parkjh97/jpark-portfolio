# PORTFOLIO — View-T 3.0 Expert CONG (교통 빅데이터 분석 플랫폼 백엔드)

> **작성 목적:** 웹개발자 이력서/포트폴리오 작성을 위한 프로젝트 상세 정리
> **작성일:** 2026-03-08

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | View-T 3.0 Expert — cong |
| **유형** | 교통 빅데이터 GIS 분석 웹 플랫폼 (풀스택 Java 웹 애플리케이션) |
| **기간** | 2023년 |
| **역할** | 백엔드 전체 개발 (Spring MVC + MyBatis + MongoDB + MySQL) |
| **패키징** | WAR (Tomcat 배포) |
| **비고** | 국가교통 빅데이터를 기반으로 교통지표·경로분석·공공교통 등을 인터랙티브 GIS 지도 위에 시각화하는 전문 분석 플랫폼 백엔드 |

### 프로젝트 설명

T-map GPS, 현장 검지기, 공공교통 데이터 등 국가 교통 빅데이터를 수집·가공해
도로(Link) 단위와 행정구역(Zone) 단위로 교통지표를 시각화·분석하는 전문 GIS 웹 서비스의 **Java 백엔드**.

평균속도·VKT·혼잡비용·CO2 배출량 등 13종 이상의 교통지표를 제공하고,
경로기반 OD 분석·시간거리지도·Selected Link·도로구간 분석 등 공간 분석 기능을 REST API로 제공한다.
회원 관리·데이터 다운로드·API 토큰·관리자 현황 조회 등 운영 기능도 통합 구현했다.

---

## 2. 기술 스택

| 분류 | 기술 |
|------|------|
| Language | Java 1.8 |
| Framework | Spring MVC 3.1.1.RELEASE + eGovFramework 2.7.0 |
| Security | Spring Security 3.2.5 |
| ORM/SQL | MyBatis 3.4.6 + MyBatis-Spring 1.3.3 |
| DB (RDBMS) | MySQL 5.x (HikariCP 3.4.5 커넥션 풀) |
| DB (NoSQL) | MongoDB 3.x (mongodb-driver 3.9.1) |
| Build | Maven 3 (WAR packaging) |
| View | JSP + JSTL 1.2 + Apache Tiles 2.2.2 |
| Map Client | OpenLayers 6.4.3 (프론트, JSP 내 통합) |
| Excel | Apache POI 3.16 (SXSSF 스트리밍) |
| 암호화 | Jasypt 1.9.2 + BouncyCastle (DB 자격증명 AES-128 암호화) |
| 스케줄러 | Spring @Scheduled (Quartz 1.8.5 병행) |
| 로깅 | Logback 1.1.2 + SLF4J 1.7.25 |
| JSON | Jackson 1.9.10 + json-simple 1.1 |
| 기타 | CORS Filter 2.3, JavaMelody 1.67.0 (성능 모니터링) |
| 압축 | Apache Commons Compress 1.18 |
| 이메일 | JavaMail 1.4.7 |

---

## 3. 프로젝트 구조

```
cong/src/main/
├── java/go/kr/cong/
│   ├── common/
│   │   ├── algo/
│   │   │   └── ConvexHull.java          # Graham Scan 볼록껍질 알고리즘
│   │   ├── controller/
│   │   │   └── CommonAbstarctController.java
│   │   ├── error/ErrorController.java
│   │   ├── login/
│   │   │   ├── LoginSessionManager.java
│   │   │   ├── OzYSHD.java              # 자체 해시 암호화
│   │   │   ├── web/LoginController.java
│   │   │   └── service/impl/LoginServiceImplMySQL.java
│   │   ├── pagination/BoardPager.java
│   │   ├── util/
│   │   │   ├── string/CommonStringUtil.java
│   │   │   └── web/CommonWebUtil.java
│   │   ├── view/json/
│   │   │   ├── CommandMapArgumentResolver.java
│   │   │   ├── CoNulltoEmptyStringSerializer.java
│   │   │   └── MappingJacksonJsonView.java
│   │   └── vo/
│   │       ├── CommonVO.java / FileVO.java / LoginVO.java
│   ├── file/
│   │   ├── FileController.java
│   │   ├── common/FileDownloadView.java / FileUtils.java
│   │   └── service/impl/FileServiceImpl.java
│   ├── interceptor/
│   │   ├── LoggingInerceptor.java       # HandlerInterceptorAdapter
│   │   └── ModifiableHttpServletRequest.java
│   ├── usr/
│   │   ├── auth/mail/AuthMailSendServiceImpl.java
│   │   └── excel/
│   │       ├── ExcelWriter.java / ExcelHeaderItem.java / TableRowHandler.java
│   │       └── web/MainControllerExcel.java
│   └── web/map/map/
│       ├── web/
│       │   ├── MapController.java           # 메인 지도 컨트롤러
│       │   ├── JipyoController.java         # 교통지표 API
│       │   ├── APIController.java           # Open API (OD·경로·링크)
│       │   ├── MobiController.java          # 모바일 전용
│       │   ├── MobileMapController.java
│       │   ├── MobileCommuteDashboardController.java
│       │   ├── PublicTransportController.java
│       │   ├── ViewTLightController.java
│       │   ├── OpenTrafficController.java
│       │   ├── SnsController.java
│       │   └── areaCenterPoint/
│       │       ├── MobileAllZoneFomat.java
│       │       └── WebZoneCenterPoint.java
│       └── service/
│           ├── MapServiceMySQL.java (interface)
│           └── impl/
│               ├── MapServiceImplMySQL.java
│               ├── MapMySQLDAO.java
│               ├── MobiServiceImplMySQL.java
│               ├── GeoTrans.java            # 좌표계 변환 (WGS84↔KATEC↔TM)
│               ├── GeoPoint.java
│               ├── ConvexHull.java (참조)
│               ├── SearchNaverApi.java / SearchDaumApi.java
│               ├── QicServerImpl.java
│               └── CctvService.java
│
├── resources/
│   ├── spring/
│   │   ├── context-datasource.xml       # HikariCP + Jasypt 암호화
│   │   ├── context-interceptor.xml      # LoggingInterceptor 등록
│   │   ├── context-scheduled.xml        # @Scheduled 설정
│   │   ├── context-mail.xml             # JavaMail
│   │   └── mybatis-config.xml
│   └── mybaits/
│       ├── map/
│       │   ├── Jipyo001.xml             # 교통지표 쿼리 (40+ 쿼리)
│       │   ├── Commond001.xml           # 공통 쿼리 (80+ 쿼리)
│       │   ├── BasedPathOD001.xml       # 경로기반 OD 분석
│       │   ├── SelectedLink001.xml      # Selected Link 분석
│       │   ├── TimeMaps001.xml          # 시간거리지도
│       │   ├── MainRoute001.xml         # 주요경로 분석
│       │   ├── CongestionSection001.xml # 혼잡구간 분석
│       │   ├── CongestionScans001.xml   # 혼잡현황
│       │   ├── DashBoard001.xml         # 대시보드 지표
│       │   ├── PublicTransport001.xml   # 공공교통 분석
│       │   ├── RoadwayAnalysis001.xml   # 도로구간 분석
│       │   ├── ComplexSearch001.xml     # 복합검색
│       │   ├── MasterPage001.xml        # 사용자·관리자
│       │   ├── TableJiPyo001.xml        # 테이블형 지표 API
│       │   ├── Mobile001.xml            # 모바일 구역검색
│       │   ├── MobiMapper.xml           # 모바일 지표 데이터
│       │   ├── MobileCommuteDashboardMapper.xml
│       │   ├── FasterIndicaor001.xml    # 빠른 지표 조회
│       │   ├── LightMapper.xml          # Light 버전
│       │   ├── IndividualVehicle.xml    # 개인차량 이동경로
│       │   ├── DownLoad001.xml          # 데이터 다운로드
│       │   └── DataHistory001.xml
│       ├── login/Login001.xml
│       └── excel/Excel001.xml
│
└── webapp/WEB-INF/jsp/
    ├── secondeMap/inc/
    │   ├── second_map.jsp               # 메인 지도 화면 (OpenLayers 6)
    │   ├── layers/                      # 지표별 레이어 UI (14종)
    │   ├── functions/                   # 분석기능 UI (7종)
    │   ├── TM_layers/                   # 주제도 레이어 UI (11종)
    │   ├── publicTransport/             # 공공교통 UI (8종)
    │   ├── dashBoard/                   # 대시보드
    │   ├── table_jipyo/                 # 테이블형 지표 (20종 이상)
    │   ├── Download/                    # 데이터 다운로드
    │   ├── demandSurvey/                # 수요조사
    │   ├── participation/               # 참여마당 게시판
    │   └── masterPage/                  # 인증·사용자관리
    ├── introPage/                       # 서비스 소개 페이지
    ├── openTraffic/openAPI/             # Open API 가이드
    └── mobi/                            # 모바일 화면
```

---

## 4. 핵심 기능

### 4-1. 교통지표 (Jipyo) 시각화 레이어

도로(Link) 단위 / 행정구역(Zone) 단위로 다음 13종 교통지표를 GIS 레이어로 시각화:

| 대분류 | 지표명 | 단위 |
|--------|--------|------|
| 속도지표 | 평균속도 (averagespeed) | km/h |
| 속도지표 | 혼잡시 평균속도 (congestspeed) | km/h |
| 속도지표 | 정상시 평균속도 (normalspeed) | km/h |
| 교통량 | 추정 교통량 (trafficestimate) | 대/일 |
| 교통량 | 관측 교통량 (trafficobserve) | 대/일 |
| 교통량 | 차량 주행거리 (vkt) | veh-km |
| 혼잡지표 | 혼잡빈도강도 (congestindex) | |
| 혼잡지표 | 혼잡비용 (congestcost) | 원 |
| 환경지표 | 이산화탄소 배출량 (co2quantity) | ton |
| 환경지표 | 일산화탄소 배출량 (coquantity) | kg |
| 환경지표 | 질소산화물 배출량 (noxquantity) | kg |
| 환경지표 | 미세먼지 배출량 (pmquantity) | kg |
| 환경지표 | 휘발성유기화합물 (vocquantity) | kg |

각 지표는 `jiPyoMinMax`, `jiPyoLegend`, `jiPyoZoneSum` 등의 MyBatis 쿼리로
동적 테이블명(`${DataBase}`, `${DBTable}`)을 사용해 연도·차종·도로등급별 분기 처리.

---

### 4-2. 공간 분석 기능

| 기능명 | 설명 | 핵심 기술 |
|--------|------|-----------|
| **시간거리지도** (TimeMap) | 특정 지점에서 모든 존까지의 이동시간 시각화 | MySQL + ConvexHull |
| **경로기반 OD** (BasedPathOD) | 시군구↔읍면동 간 통행량 OD 행렬 분석 | MySQL + MongoDB |
| **Selected Link** | 특정 도로 링크를 통과하는 OD 집계 | MySQL 임시테이블 |
| **주요경로** (MainPath) | 기·종점 구역 간 주요 통행 경로 추출 | MongoDB Aggregation |
| **복합검색** (ComplexSearch) | 구간별 교통지표 복합 조건 검색 | MySQL 동적 쿼리 |
| **도로구간분석** (RoadwayAnalysis) | 사용자 정의 도로 구간 지표 분석 | MySQL |
| **혼잡구간** (CongestionSection) | 시간대별 혼잡 구간 집계 | MySQL |
| **개인차량 이동경로** | 개별 차량의 경로 시각화 | MySQL |
| **대시보드** | 도·시군구별 지표 비교·연도별 추이 | MySQL 집계 |

---

### 4-3. Open API (`/api/`) — 외부 제공 REST API

`APIController`가 외부 이용자에게 교통 분석 결과를 JSON으로 제공.

| 엔드포인트 | 기능 |
|-----------|------|
| `/api/mainPath_road.do` | 도로 기반 주요경로 |
| `/api/mainPath_emd.do` | 읍면동 기반 주요경로 |
| `/api/mainPath_sgg.do` | 시군구 기반 주요경로 |
| `/api/timeMap_node.do` | 시간거리지도 노드 |
| `/api/basedPathOD_sgg2sgg.do` | 시군구→시군구 OD |
| `/api/basedPathOD_sgg2emd.do` | 시군구→읍면동 OD |
| `/api/basedPathOD_emd2sgg.do` | 읍면동→시군구 OD |
| `/api/basedPathOD_emd2emd.do` | 읍면동→읍면동 OD |
| `/api/selectedLink_road.do` | 도로별 Selected Link |
| `/api/selectedLink_area.do` | 구역별 Selected Link |

**IP 기반 Rate Limiting** — `HashMap<String, Integer> mapIP`로 IP별 일일 요청 횟수를 추적하고 한도 초과 시 오류 코드("1008") 반환. `@Scheduled(cron = "0 0 0 * * *")`으로 매일 자정 초기화.

---

### 4-4. 공공교통 분석 (`/publicTransport/`)

| 엔드포인트 | 기능 |
|-----------|------|
| 지하철 노선 혼잡도 비교 | 노선별/시간대별 혼잡도 |
| 지하철 플랫폼 혼잡도 | 역별 혼잡도 |
| 역별 주요 경로 분석 | 역사 기점 주요 이동 경로 |
| 환승/직통 통행량 | 수단 전환 통행량 집계 |
| 시간대별 통행량 | 대중교통 시간대별 분포 |

MongoDB Aggregation Pipeline을 활용해 대용량 공간 데이터를 집계·필터링.

---

### 4-5. 모바일 (`/mobi/`)

- User-Agent 헤더로 디바이스 자동 감지 → 모바일 전용 뷰로 분기
- 시도(SIDO) / 시군구(SGG) / 읍면동(UMD) 3단계 행정구역 계층 필터
- 차종별(전체/승용차/버스/트럭) + 요일 유형(평일/주말) + 시간대 필터 조합
- 동적 SQL 컬럼 조합으로 시간대 시계열 데이터 조회

---

### 4-6. 회원 관리 및 인증

| 기능 | 구현 내용 |
|------|-----------|
| 로그인 | Base64 디코딩 → OzYSHD 해시 후 DB 비교 |
| 세션 관리 | HttpSession + LoginVO |
| 자동 로그인 | Cookie 기반 Remember Me |
| IP 로깅 | 로그인 시 클라이언트 IP 기록 |
| 휴면계정 처리 | `@Scheduled(cron="0 0 0 * * *")` 매일 자정 실행 |
| 이메일 알림 | JavaMail로 휴면 안내 메일 자동 발송 |
| API 토큰 | 랜덤 토큰 생성·조회·갱신 (JWT 미사용, 자체 토큰) |

---

### 4-7. 데이터 다운로드 시스템

- 교통 데이터 / 네트워크 데이터 / 학술 데이터 3종 다운로드 신청
- 신청서 작성 → 관리자 승인 → 파일 제공 워크플로우
- 파일명 중복 검사, 다운로드 이력 기록
- Apache Commons Compress로 대용량 ZIP 압축 제공

---

### 4-8. Excel / CSV 다운로드

`MainControllerExcel` + Apache POI **SXSSF 스트리밍** 방식으로 대용량 엑셀 내보내기:

- MySQL + MongoDB 복합 데이터를 하나의 Excel 파일로 합산
- 도로 등급별(고속도로·도시고속도로·일반국도·특별시도 등) 그룹 헤더
- `ExcelWriter` → `ExcelHeaderItem` → `TableRowHandler` 계층 구조로 관심사 분리
- `SXSSFWorkbook`으로 메모리 절약 (ROW 플러시 방식)

---

### 4-9. 관리자(MasterPage) 기능

- **회원 프로비저닝**: 신규 가입 검토·승인·삭제
- **API 사용 현황**: IP·날짜별 외부 API 호출 건수 집계
- **분석 사용 현황**: 분석 기능별 이용 건수
- **데이터 다운로드 현황**: 다운로드 신청·승인 통계
- **링크 다운로드 현황**: 도로 네트워크 데이터 다운로드 이력
- **API 토큰 현황**: 토큰 생성·수정·삭제

---

## 5. 아키텍처

```
브라우저 (OpenLayers 6 + jQuery + JSP)
    │  HTTP Request
    ▼
Tomcat (WAR)
    ├─ LoggingInterceptor  ← 모든 요청 pre/post 로깅
    ├─ Spring Security     ← 인증/인가 필터
    │
    ▼
Controller Layer (Spring MVC @Controller)
    ├─ MapController       ← /map/*
    ├─ JipyoController     ← /map/jipyo/*
    ├─ APIController       ← /api/*
    ├─ MobiController      ← /mobi/*
    ├─ PublicTransportController
    ├─ MainControllerExcel ← /excel/*
    └─ LoginController     ← /common/member/*
    │
    ▼
Service Layer
    └─ MapServiceImplMySQL / MobiServiceImplMySQL / ...
    │
    ├──────────────────────────┐
    ▼                          ▼
MySQL (HikariCP)          MongoDB
  └─ MyBatis Mapper          └─ Aggregation Pipeline
     (XML, 20개 이상)           (지리공간 데이터)

공통 유틸리티:
  GeoTrans       ← 좌표계 변환 (WGS84↔KATEC↔TM↔GRS80)
  ConvexHull     ← Graham Scan 볼록껍질
  Jasypt         ← DB 자격증명 암호화 (AES-128)
  JavaMelody     ← 운영 성능 모니터링
```

---

## 6. 주요 기술 구현 상세

### 6-1. GeoTrans — 다중 좌표계 변환 엔진

한국 교통 분석에서 필수적인 좌표계 상호 변환을 직접 구현.

**지원 좌표계:**
- `GEO` — WGS84 (위경도, 라디안)
- `KATEC` — 국토교통부 표준 좌표 (Korea Augmented Transverse Mercator)
- `TM` — Transverse Mercator (중부 표준경자오선 127°)
- `GRS80` — 측지기준계 1980

```java
// 사용 예: WGS84 → KATEC 변환
GeoTrans gt = new GeoTrans();
GeoPoint katecPt = gt.convert(GeoTrans.GEO, GeoTrans.KATEC, geoPt);

// Haversine 거리 계산 (지구 반경 6376.5km)
double dist = GeoTrans.getDistancebyGeo(pt1, pt2);

// 이동시간 추정 (평균 4m/s 가정)
double minutes = GeoTrans.getTimebyMin(distanceKm);
```

**구현 수학:**
- 타원체 파라미터 (장반경, 편평률)별 TM 투영 수식
- 좌표 반복 수렴 알고리즘
- Datum 변환 (WGS84 기준 오프셋 적용)

---

### 6-2. ConvexHull — Graham Scan 볼록껍질 알고리즘

시간거리지도(TimeMap)에서 서비스 도달 가능 영역의 경계 폴리곤을 생성할 때 사용.

```java
// 좌표 문자열 리스트 → 볼록껍질 좌표 반환
List<String> result = ConvexHull.process(geomList);
// 결과: ["126.62,37.50", "127.00,37.80", ...]
```

**Graham Scan 3단계:**
1. **Parsing** — "X Y" 문자열 → `Point(double x, double y)` 변환
2. **Sorting** — 최하단 기준점을 선택 후 극각(polar angle) 기준 정렬
3. **algo** — Stack을 이용한 CCW(반시계 방향) 판별로 볼록껍질 추출

복잡도: O(n log n)

---

### 6-3. Jasypt — DB 자격증명 암호화

`context-datasource.xml`에서 평문 대신 암호화된 DB 자격증명 사용:

```xml
<bean id="encryptorConfig" class="org.jasypt.encryption.pbe.config.EnvironmentStringPBEConfig">
    <property name="algorithm" value="PBEWITHSHA256AND128BITAES-CBC-BC"/>
    <!-- BouncyCastle 기반 AES-128 -->
</bean>

<!-- database.properties 파일에서 암호화된 값을 읽어 자동 복호화 -->
<bean class="org.jasypt.spring31.properties.EncryptablePropertyPlaceholderConfigurer">
    <property name="locations">
        <value>classpath:/property/database.properties</value>
    </bean>
```

배포 환경에서 DB 패스워드를 소스 코드나 properties에 평문으로 남기지 않음.

---

### 6-4. JipyoController — 동적 타입 컬럼 정렬

교통지표 테이블 API에서 서버사이드 정렬을 지원하기 위해
컬럼 값의 실제 타입을 `instanceof`로 판별해 Comparator를 분기 구현:

```java
public List<HashMap<String, Object>> orderByColumn(
    List<HashMap<String, Object>> data, String col, String order
) {
    Collections.sort(data, (o1, o2) -> {
        Object v1 = o1.get(col), v2 = o2.get(col);
        if (v1 instanceof Integer)   return asc ? ((Integer)v1).compareTo((Integer)v2) : ...;
        if (v1 instanceof Double)    return asc ? ((Double)v1).compareTo((Double)v2)   : ...;
        if (v1 instanceof Long)      return asc ? ((Long)v1).compareTo((Long)v2)       : ...;
        else /* String */            return asc ? ((String)v1).compareTo((String)v2)   : ...;
    });
    return data;
}
```

이후 페이지네이션(`subList`)으로 `page`, `rows`, `total`, `records` 구조의 JSON 반환.

---

### 6-5. MyBatis 동적 쿼리 — 동적 테이블명·컬럼명

교통지표 DB는 연도별·지표별로 테이블이 분리되어 있어,
MyBatis `${}`(비이스케이프) 파라미터로 동적 테이블명·컬럼명을 조합:

```xml
<!-- Jipyo001.xml -->
<select id="jiPyoMinMax" parameterType="java.util.Map"
        resultType="egovframework.rte.psl.dataaccess.util.EgovMap">
    SELECT MAX(${DBTable}) AS Max, MIN(${DBTable}) AS Min
    FROM ${DataBase}
</select>

<!-- 도로 등급 필터가 있을 때만 조건 추가 -->
<select id="jiPyoSelectRodeMinMax">
    SELECT MIN(b.${DBTable}) min, MAX(b.${DBTable}) max
    FROM ${linkSHP} a, ${DataBase} b
    WHERE a.link_id = b.LINK_ID
    <if test="@go.kr.cong.Empty@isNotEmpty(road_level)">
        AND a.road_rank IN (${road_level})
    </if>
</select>
```

`Empty.isNotEmpty()` static 유틸로 null·공백 파라미터를 안전하게 처리.

---

### 6-6. APIController — IP 기반 Rate Limiting

외부 Open API 남용 방지를 위한 자체 IP 기반 요청 제한:

```java
// 클래스 레벨 캐시 (in-memory)
static HashMap<String, Integer> mapIP      = new HashMap<>(); // IP별 요청 수
static HashMap<String, Object>  mapError   = new HashMap<>(); // 에러 상태
static HashMap<String, Object>  mapLinkInfo = new HashMap<>(); // 링크 캐시
static HashMap<String, Object>  mapZoneInfo = new HashMap<>(); // 존 캐시

// 매일 자정 초기화
@Scheduled(cron = "0 0 0 * * *")
public void dailyReset() {
    mapIP.clear();
    mapError.clear();
}
```

요청 한도 초과 시 에러 코드 "1008" 포함 JSON 반환.

---

### 6-7. LoggingInterceptor — HandlerInterceptorAdapter

모든 HTTP 요청에 대해 URI, Handler 클래스, 파라미터, 처리 시간을 일관 로깅:

```java
@Override
public boolean preHandle(HttpServletRequest request, ...) {
    request.setAttribute("startTime", System.currentTimeMillis());
    LOG.info("=== Start ===");
    LOG.info("URI   : " + request.getRequestURI());
    LOG.info("Class : " + classNm);
    LOG.info("Param : " + commandMap);  // 전체 파라미터 맵
    return true;
}

@Override
public void postHandle(...) {
    LOG.info("END TIME : " + dateFormat.format(new Date()));
    LOG.info("=== End ===");
}
```

`sessionCheck.do` 폴링 요청은 로그에서 제외 (스팸 방지).

---

### 6-8. Excel 스트리밍 다운로드 — SXSSF

대용량 교통 데이터 Excel 파일 생성 시 메모리 초과 방지를 위해 SXSSF(Streaming) 적용:

```java
// MainControllerExcel.java
SXSSFWorkbook wb = new SXSSFWorkbook(100); // 100행 플러시 주기
SXSSFSheet sheet = wb.createSheet("교통지표");

ExcelWriter writer = new ExcelWriter(wb, sheet);
writer.writeHeaders(headerItems);  // 그룹 헤더 + 개별 헤더

// MySQL + MongoDB 데이터 합산하여 행 단위 스트리밍
for (Map<String, Object> row : dataList) {
    writer.writeRow(new TableRowHandler(row));
}

wb.write(response.getOutputStream());
wb.dispose(); // 임시 파일 정리
```

---

## 7. MyBatis Mapper 목록 (전체)

| 파일명 | 쿼리 수 | 주요 내용 |
|--------|---------|-----------|
| Commond001.xml | 80+ | 토큰·POI검색·구역코드·다운로드·게시판·사용이력 |
| Jipyo001.xml | 40+ | 지표 MinMax·Legend·Zone계산·등급·시뮬레이션 |
| MasterPage001.xml | 40+ | 회원관리·프로비저닝·API현황·다운로드현황 |
| TableJiPyo001.xml | 25+ | 테이블형 지표 페이지네이션 API |
| PublicTransport001.xml | 14 | 지하철 혼잡·환승·통행량 |
| Mobile001.xml | 20+ | 모바일 구역·폴리곤 검색 |
| MobileCommuteDashboardMapper.xml | 20+ | 통근 OD·시간·비율 집계 |
| RoadwayAnalysis001.xml | 12 | 도로구간 분석·사용자 정의 테이블 |
| SelectedLink001.xml | 16 | Selected Link 임시테이블 생성·분석 |
| MainRoute001.xml | 13 | 주요경로 생성·조회·삭제 |
| BasedPathOD001.xml | 5 | OD 행렬 구역 생성·삭제 |
| CongestionSection001.xml | 4 | 혼잡구간 시간대별 집계 |
| CongestionScans001.xml | 6 | 혼잡현황 기하데이터 |
| DashBoard001.xml | 14 | 구역별 대시보드 지표 |
| TimeMaps001.xml | 8 | 시간거리지도 노드·경계 |
| ComplexSearch001.xml | 12 | 복합 조건 지표 검색 |
| FasterIndicaor001.xml | 7 | 빠른 지표 조회 |
| LightMapper.xml | 5 | Light 버전 API |
| IndividualVehicle.xml | 1 | 개인차량 이동경로 |
| DownLoad001.xml | 18 | 데이터 다운로드 관리 |

---

## 8. Spring 설정 구성

| 파일 | 역할 |
|------|------|
| `context-datasource.xml` | HikariCP MySQL 풀 + Jasypt 암호화 |
| `context-interceptor.xml` | LoggingInterceptor 등록, CORS 설정 |
| `context-scheduled.xml` | @Scheduled 태스크 활성화 |
| `context-mail.xml` | JavaMail SMTP 설정 |
| `context-mapper.xml` | MyBatis SqlSessionFactory + Mapper 등록 |
| `context-transaction.xml` | DataSourceTransactionManager |
| `context-viewt.xml` | MongoDB 연결 설정 (Primary + Secondary) |
| `servlet-context.xml` | MVC 설정, ViewResolver, Tiles |
| `mybatis-config.xml` | MyBatis 전역 설정 |

---

## 9. 소스 규모

| 구분 | 수량 |
|------|------|
| Java 소스 파일 (.java) | 70+ |
| MyBatis Mapper XML | 20개 파일, 쿼리 300+ |
| JSP 뷰 파일 | 110+ |
| Spring XML 설정 | 12개 |
| 교통지표 종류 | 13종 |
| 공간 분석 기능 | 9종 |
| REST API 엔드포인트 | 50+ |

---

## 10. 주요 기술적 도전 및 해결

### 10-1. 이중 데이터베이스 전략 (MySQL + MongoDB)

**상황**: 교통 네트워크 기하(Geometry) 데이터와 대용량 집계 데이터는 MongoDB에, 사용자·운영·통계 데이터는 MySQL에 저장되는 혼합 구조.

**해결**: 단일 Service 메서드에서 `MapMySQLDAO`(MyBatis)와 `MongoCollection`(mongodb-driver)을 모두 호출해 결과를 합산. Excel 다운로드 시 MySQL 집계 + MongoDB 기하 데이터를 하나의 시트로 통합.

**효과**: 각 DB의 강점(MySQL: 정형 집계, MongoDB: 기하·비정형 문서)을 최적 활용.

---

### 10-2. 좌표계 변환 직접 구현 (GeoTrans)

**상황**: 한국 교통 DB는 KATEC/TM 좌표계를 사용하지만 OpenLayers 지도는 WGS84를 요구. 라이브러리 의존 없이 서버에서 직접 변환 필요.

**해결**: TM 투영 수식(Gauss-Krüger)과 WGS84↔KATEC Datum 변환을 Java로 직접 구현 (`GeoTrans.java`). 각 좌표계 타원체 파라미터(장반경, 편평률)를 상수로 정의하고 반복 수렴 알고리즘 적용.

**효과**: 외부 GIS 라이브러리 없이 서버에서 실시간 좌표 변환 + Haversine 거리 계산 + 이동시간 추정까지 처리.

---

### 10-3. Graham Scan으로 서비스 영역 경계 자동 생성

**상황**: 시간거리지도(TimeMap)에서 t분 이내 도달 가능 구역들의 경계 폴리곤을 동적으로 생성해야 함. GeoServer의 ST_ConvexHull 대신 Java에서 직접 처리.

**해결**: `ConvexHull.java`에 Graham Scan 알고리즘을 구현. 구역 좌표 리스트를 입력받아 O(n log n)으로 볼록껍질 좌표를 반환, GeoJSON으로 직렬화해 프론트에 전달.

**효과**: DB 함수 호출 없이 JVM에서 즉시 처리, 도달 가능 영역 폴리곤을 실시간 렌더링.

---

### 10-4. MyBatis 동적 테이블명으로 멀티테이블 지표 조회

**상황**: 교통지표 DB는 연도별(2018~2023), 지표별(speed, vkt, co2 등)로 수십 개 테이블이 분리. 지표·연도 조합마다 별도 Mapper를 만들면 파일이 폭발적으로 증가.

**해결**: MyBatis `${}` 바인딩으로 테이블명·컬럼명을 런타임에 조합. 서비스 레이어에서 파라미터 Map에 `DataBase`, `DBTable` 키를 동적 조합 후 전달.

```xml
SELECT MAX(${DBTable}) AS Max FROM ${DataBase}
-- 실행 시: SELECT MAX(speed_all) AS Max FROM tb_link_speed_2022
```

**효과**: 20개 Mapper 파일로 300개 이상 테이블에 대한 쿼리를 커버.

---

### 10-5. SXSSF 스트리밍으로 OOM 없는 대용량 Excel 생성

**상황**: 전국 도로 링크 수십만 건을 Excel로 다운로드 시 `XSSFWorkbook` 사용 시 `OutOfMemoryError` 발생.

**해결**: `SXSSFWorkbook(100)`으로 100행마다 디스크로 플러시. `ExcelWriter` 추상 레이어로 헤더 그룹·데이터 행을 스트리밍 방식으로 분리 작성.

**효과**: 힙 메모리 사용량을 고정 수준으로 유지하며 수십만 행 Excel 파일 생성.

---

### 10-6. Jasypt로 DB 자격증명 암호화

**상황**: properties 파일에 DB 패스워드가 평문으로 남아 보안 취약점 존재.

**해결**: Jasypt + BouncyCastle `PBEWITHSHA256AND128BITAES-CBC-BC` 알고리즘으로 암호화. `EncryptablePropertyPlaceholderConfigurer`로 Spring 초기화 시 자동 복호화.

**효과**: 소스코드·properties 파일에 평문 자격증명 미포함, 배포 환경에서도 안전.

---

## 11. 외부 API 연동

| 서비스 | 용도 |
|--------|------|
| 네이버 지도 API | 주소 검색, 역지오코딩 (SearchNaverApi.java) |
| 카카오(Daum) 지도 API | 주소 검색 보조 (SearchDaumApi.java) |
| 내부 Qbic 맵 서버 | 사내 지도 타일 서버 연동 (QicServerImpl.java) |
| CCTV 서비스 | 실시간 CCTV 정보 조회 (CctvService.java) |

---

## 12. 성과 및 특이사항

- **이중 DB 아키텍처**: MySQL(정형 통계) + MongoDB(비정형 기하·문서)를 단일 Service 레이어에서 통합 조회하는 혼합 DB 패턴 구현
- **좌표계 변환 자체 구현**: GIS 라이브러리 없이 WGS84 ↔ KATEC ↔ TM 변환 엔진(GeoTrans)과 Haversine 거리 계산을 Java로 직접 구현
- **Graham Scan 알고리즘**: 시간거리지도 서비스 영역 경계 폴리곤을 JVM에서 O(n log n)으로 즉시 생성
- **MyBatis 동적 테이블**: 수십 개 연도·지표별 테이블을 `${}` 동적 파라미터 하나로 커버해 Mapper 파일 폭증 방지
- **SXSSF 스트리밍**: 수십만 건 교통 데이터 Excel 다운로드 시 OOM 없이 고정 메모리로 처리
- **Jasypt 암호화**: BouncyCastle AES-128으로 DB 자격증명을 properties 파일 수준에서 암호화
- **운영 관측성**: JavaMelody로 실시간 성능 모니터링, LoggingInterceptor로 전 요청 URI·파라미터·처리시간 기록
- **IP Rate Limiting**: Open API 남용 방지를 위한 in-memory IP별 일일 요청 제한 + 자정 초기화 스케줄러
- **대규모 기능 범위**: 교통지표 13종, 공간 분석 9종, 공공교통 8종, 회원 관리, 데이터 다운로드, 관리자 기능 등 단일 백엔드에서 통합 제공
