# 포트폴리오 문서 - 화성시 스마트 교통신호 분석 시스템 (2023_HS)

> **작성 목적:** 웹개발자 이력서/포트폴리오 작성을 위한 프로젝트 상세 정리
> **작성일:** 2026-03-08
> **프로젝트 버전:** hwaseong_v001

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | 화성시 스마트 교통신호 분석 시스템 |
| **영문명** | Hwaseong Smart Traffic Signal Analysis System |
| **클라이언트** | 화성시청 (Hwaseong City Government) |
| **프로젝트 유형** | 공공기관 SI (System Integration) |
| **도메인** | 스마트시티 / 지능형교통체계 (ITS) |
| **역할** | Java 백엔드 개발 + 프론트엔드 개발 |
| **개발 기간** | 2023년 |
| **패키징** | WAR (Apache Tomcat 배포) |
| **빌드 도구** | Maven |
| **버전 관리** | SVN |
| **IDE** | Eclipse |

### 프로젝트 설명
화성시 전역의 교통신호 데이터를 실시간으로 수집·분석하여 교차로 혼잡도, 신호 최적화, 속도 분석 등을 시각화하는 도시 교통관제 시스템. MySQL에서 관리되는 교통망 정적 데이터와 MongoDB에서 수집되는 IoT OBU(On-Board Unit) 기반 실시간 차량 궤적 데이터를 통합 분석하며, WebGL 기반 지도 위에 다양한 교통 지표를 레이어로 시각화한다.

---

## 2. 기술 스택

### 백엔드
| 기술 | 버전 | 용도 |
|------|------|------|
| Java | 1.8 | 주 개발 언어 |
| Spring Framework | 4.3.22.RELEASE | MVC 웹 프레임워크 |
| eGovFramework RTE | 3.9.0 | 한국 전자정부 표준 프레임워크 |
| MyBatis | 3.5.2 | SQL 매퍼 (ORM) |
| MyBatis-Spring | 2.0.1 | Spring-MyBatis 통합 |
| HikariCP | 4.0.3 | 고성능 DB 커넥션 풀 |
| Spring AOP | - | 트랜잭션, 예외처리 |
| Thymeleaf | 3.0.12.RELEASE | HTML 템플릿 엔진 (보조) |

### 데이터베이스
| 기술 | 버전/정보 | 용도 |
|------|----------|------|
| MySQL | 5.x (5.1.49 connector) | 교통망 정적 데이터 (노드, 링크, 신호계획) |
| MongoDB | 3.9.1 Java Driver | 실시간 OBU 차량 궤적 데이터 |
| Tibero | 6 | 스마트교차로 별도 데이터 |
| Log4jdbc | 1.16 | SQL 쿼리 로깅 |

### 프론트엔드
| 기술 | 용도 |
|------|------|
| JSP (JSTL) | 메인 뷰 레이어 |
| Thymeleaf | HTML5 템플릿 (보조) |
| TxDeckGL (gTxDeckGLMap) | WebGL 기반 교통 지도 렌더링 (사내 커스텀 Deck.gl 래퍼) |
| Deck.GL (v8) | WebGL 레이어 렌더링 (GeoJSON, Vector, PointCloud) |
| D3.js | 데이터 시각화 차트 |
| jQuery + jQuery UI | DOM 조작, UI 컴포넌트 |
| jqGrid 4.4.3 | 데이터 그리드 |
| Spectrum | 컬러 피커 |

### 보안 / 기타
| 기술 | 버전 | 용도 |
|------|------|------|
| Jasypt | 1.9.2 | DB 비밀번호 암호화 |
| Bouncy Castle | 1.58 | 암호화 라이브러리 |
| Jackson | 2.9.10 | JSON 직렬화/역직렬화 |
| Hibernate Validator | 5.2.4.Final | Bean Validation |
| Commons FileUpload | 1.2.1 | 파일 업로드 처리 |

---

## 3. 주요 기능 목록

### 교통 분석 (Traffic Analysis)
| 기능 | 설명 |
|------|------|
| 대시보드 (혼잡교차로 분석) | 전체 교차로 혼잡도 랭킹 및 히트맵 시각화 |
| 신호 대시보드 | 신호 타이밍 계획 시각화 및 Ring/Phase 분석 |
| 도로 모니터링 | 링크별 교통 지표 실시간 표출 |
| 평균속도 분석 | 구간별 평균 주행속도 분석 |
| 실시간 교통 | IoT OBU 실시간 교통 데이터 피드 통합 |
| 교차로 분석 | 이동류(회전방향)별 지표값 분석 |

### 신호 관리 (Signal Management)
| 기능 | 설명 |
|------|------|
| 신호주기 산출 | 교차로 신호 주기 자동 계산 |
| 전체 신호주기 산출 | 전체 교차로 일괄 신호주기 계산 |
| 교차로 TOD 관리 | 시간대별 신호 계획 관리 |
| 연동신호 패턴 | 도로 구간 신호 연동 패턴 분석 |
| 스마트교차로 관리 | 첨단 스마트교차로 운영 관리 |

### 최적화 / 시뮬레이션 (Optimization)
| 기능 | 설명 |
|------|------|
| 서브지역 분석 | 지역 단위 교통 분석 |
| 서브지역 최적화 | 지역 단위 신호 최적화 |
| 연동그룹 분석 | 간선도로 코리더 분석 |
| 대기행렬 시뮬레이션 | 교차로 대기행렬 예측 시뮬레이션 |
| 선택링크 분석 | 특정 링크 선택 분석 |

### 데이터 관리 (Data Management)
| 기능 | 설명 |
|------|------|
| T7F 내보내기 | T7F 포맷 신호 데이터 익스포트 |
| 공통코드 관리 | 시스템 공통 코드 유지보수 |
| 빈도 분석 | 통계적 빈도 분석 |
| 분석지수 관리 | 교통 성능 지수 관리 |
| 스마트교차로 데이터로그 | 이력 데이터 로깅 및 조회 |
| 모바일 스마트교차로 | 모바일 앱 데이터 API |

---

## 4. 시스템 아키텍처

```
[Client Browser]
       │
       ▼
[Apache Tomcat 9.x]
       │
[Spring DispatcherServlet]
       │
       ├── [HTMLTagFilter]          ← XSS 방어 (모든 *.do 요청)
       ├── [CharacterEncodingFilter] ← UTF-8 강제 인코딩
       │
       ▼
[Spring MVC Controller Layer]
  BaseController → QController → DashboardController, etc.
       │
       ▼
[Service Layer (AOP 트랜잭션)]
  DashboardServiceImpl, SignalDashboardServiceImpl, etc.
       │
       ├──────────────────────────┐
       ▼                          ▼
[MyBatis DAO Layer]         [MongoDB Java Driver]
  MySQL (교통망 정적 데이터)    MongoDB (OBU 실시간 궤적)
       │                          │
       ▼                          ▼
[MySQL DB: hwaseong_v003]   [MongoDB: SIGNAL_HWASEONG_2021]
  교차로, 링크, 신호계획 등      실시간 차량 통행 데이터
       │
       ▼
[Tibero DB] (스마트교차로 전용)

[View Layer]
  jsonView (Jackson) → AJAX JSON 응답
  InternalResourceViewResolver → JSP
  ThymeleafViewResolver → HTML5

[Frontend Map]
  gTxDeckGLMap (TxDeckGL) → WebGL Deck.GL 기반 레이어 렌더링
  GeoServer → WMS/WFS 교통망 공간 데이터 제공
```

### 패키지 구조
```
ego.qbic
├── base/                    # 핵심 프레임워크
│   ├── controller/          # BaseController, QController
│   ├── dao/                 # Base DAO
│   ├── exception/           # AOP 예외처리, LeaveaTrace
│   ├── logger/              # LoggingInterceptor
│   ├── mybatis/             # ReloadableSqlSessionFactoryBean
│   ├── secure/              # 보안 유틸리티
│   ├── session/             # SessionListener
│   ├── util/                # StringUtil 등
│   ├── vo/                  # QMap, SearchVO
│   └── web/                 # HTMLTagFilter, WebSecurityInterceptor
│
├── cmmn/                    # 공통 모듈
│   ├── anal/                # 분석지수 서비스
│   ├── code/                # 공통코드 관리
│   ├── construct/           # DefaultQueryEvt (신호 TOD 매핑)
│   ├── frequency/           # 빈도분석
│   ├── tod/                 # TOD 관리
│   └── util/                # 공통 유틸
│
└── [Feature Modules] 30+ 모듈 (MVC 패턴 반복)
    dashboard/, intersection/, smartIntersection/,
    monitoringRoad/, averagespeed/, realtimeTraffic/,
    cycleCalculation/, signalDashboard/, intersectionTOD/,
    interlockingSignalPattern/, selectedLink/, simulation/,
    waitLenSimulation/, subAreaAnalysis/, subAreaOptimize/,
    interlinkedGroupAnalysis/, t7fExport/, ...
```

---

## 5. 데이터베이스 설계

### MySQL (hwaseong_v003) - 주요 테이블
| 테이블명 | 설명 |
|---------|------|
| `tn_node` | 교통 노드 (교차로) - node_id, node_name, x, y, tod_id |
| `tn_v_link` | 가상 링크 (도로 구간) |
| `tn_link_turn_info` | 이동류 회전 정보 (F_NODE→M_NODE→T_NODE, TURN_CD) |
| `v_crsr_acrd_drct` | 교차로 접근 방향 뷰 (drct_cd: NB/WB/EB/SB) |
| `v_crsr_acrd_info` | 교차로 이동류 정보 뷰 |
| `tb_SPEED_VAL_tnn` | 노드별 속도 지표값 (DOTW_CD, TIME_CD) |
| `tb_CONGESTION_VAL_tnn` | 노드별 혼잡 지표값 |
| `tb_TRFC_VOL_tnvt` | 링크-회전별 교통량 |
| `tb_SPEED_VAL_tnvt` | 링크-회전별 속도 |
| `tb_crsr_info` | 신호제어기 정보 |
| `tb_crsr_plan` | 신호 타이밍 계획 |
| `tb_crsr_dotw_plan` | 요일별 신호 계획 |
| `tb_CRSR_OPER_CONCAT` | 신호 운영 연계 정보 |
| `zone_code` | 행정구역 코드 |
| `zone_emd_shp_2018` | 행정구역 도형 데이터 |
| `tb_code` | 공통 코드 마스터 |

### 데이터 특성
- **공간 데이터:** ST_CONTAINS, ST_GeomFromText() (SRID 4326 WGS84)
- **시계열 구조:** DOTW_CD(요일코드) + TIME_CD(시간코드) 복합키 기반 시계열
- **동적 테이블:** 지표 유형별 테이블명 파라미터화 (`${nodeTable}`, `${tableTnvt}`)

### MongoDB (SIGNAL_HWASEONG_2021) - 컬렉션
| 컬렉션 | 설명 |
|--------|------|
| `INTERSECTION_IO_INFO_MM_ALL` | 전체 요일 집계 |
| `INTERSECTION_IO_INFO_MM_DAY` | 평일 데이터 |
| `INTERSECTION_IO_INFO_MM_FRI` | 금요일 데이터 |
| `INTERSECTION_IO_INFO_MM_END` | 주말 데이터 |

**도큐먼트 구조:**
```json
{
  "vLinkID": "가상링크ID",
  "obuID": "차량 OBU 단말 ID",
  "uTime": [유닉스타임스탬프 배열],
  "pdt": [순방향 누적거리 배열],
  "mdt": [역방향 누적거리 배열],
  "length": "레코드 수"
}
```

---

## 6. 프론트엔드 구조

### 모듈 패턴
```javascript
NAMESPACE.moduleName = {
    optVal: {},          // 조회 조건
    resultData: {},      // 분석 결과
    bf_resultData: {},   // 이전 결과 (롤백용)
    legendVal: {},       // 범례 설정

    init: function() {},        // 초기화 (AJAX 데이터 조회)
    imdCommit: function() {},   // 조건 변경 핸들러
    visible: function() {},     // 레이어 가시성 토글
    drawLayer: function() {},   // 지도 레이어 렌더링
    close: function() {}        // 패널 닫기
};
```

### 주요 JS 파일
| 파일 | 크기 | 역할 |
|------|------|------|
| `dashboard.js` | 1,525+ 라인 | 혼잡교차로 대시보드 UI |
| `signalDashboard.js` | - | 신호 타이밍 시각화 |
| `roadMonitoring.js` | - | 실시간 도로 모니터링 |
| `cycleCalculation.js` | - | 신호주기 산출 UI |
| `interlockingSignalPattern.js` | - | 연동신호 패턴 |
| `smartIntersectionDashboard.js` | - | 스마트교차로 대시보드 |
| `layerSetting.js` | - | 레이어 스타일 설정 공통 |
| `legendSetting.js` | - | 범례 설정 공통 |
| `analUrlSetting.js` | - | 분석 URL 설정 공통 |

### WebGL 지도 (TxDeckGL)
```javascript
// WebGL 지도 초기화 (GeoServer 레이어 연동)
const gTxDeckGLMap = new TxDeckGLMap({
    'GEOSERVERLAYERS': {
        tn_link: 'tn_link',
        tn_node: 'tn_node',
        zone: 'tn_zone_emd',
    },
    contextPath: '.'
});

// 벡터 라인 레이어 생성 (실시간 교통)
gTxDeckGLMap.createVectorLineLayer({
    featureID: 'tn_offSet_link',
    ID: 'dashboard_realtimeRoadTraffic',
    groupKey: 'dashboard',
    bPick: true,
    bOffSetFlag: true,
    styleLine: {
        color: function(f) { /* 속도 기반 색상 결정 */ }
    }
});
```

---

## 7. API 엔드포인트

### 대시보드 API
| URL | 설명 |
|-----|------|
| `POST /dashboard/init.do` | 대시보드 페이지 초기화 |
| `POST /dashboard/getDashboardRank.do` | 교차로 혼잡도 랭킹 데이터 |
| `POST /dashboard/getSignalPatternAndJipyoData.do` | 신호 패턴 + 지표 데이터 |
| `POST /dashboard/getMovementTrajectoryData.do` | 차량 궤적 데이터 (MongoDB) |
| `POST /dashboard/getIntersectionInfoByCondition.do` | 이동류별 교차로 정보 |
| `POST /dashboard/getMovementInfoByNodeID.do` | 노드별 이동류 방향 정보 |

### 신호 관리 API
| URL | 설명 |
|-----|------|
| `POST /signalDashboard/getSAgroupData.do` | 신호 그룹 데이터 |
| `POST /cycleCalculation/getCycleData.do` | 신호주기 계산 |
| `POST /intersectionTOD/getTodPlanData.do` | TOD 계획 데이터 |

### 공통 API
| URL | 설명 |
|-----|------|
| `POST /map/getAdministrativeArea.do` | 지도 중심점 행정구역 조회 |
| `POST /cmmn/code/getCodeList.do` | 공통코드 목록 |

**공통 응답 패턴:** 모든 API는 `return "jsonView"` → Jackson MappingJackson2JsonView를 통해 JSON 직렬화

---

## 8. Spring 설정

### 컨텍스트 구성
```
classpath*:spring/context-*.xml
├── context-common.xml    # 컴포넌트 스캔, 예외처리, 메시지소스
├── context-datasource.xml # DataSource, MyBatis, 트랜잭션
├── context-servlet.xml   # MVC 설정, View Resolver, Argument Resolver
└── context-schedule.xml  # 스케줄러 (선택)
```

### View Resolver 체인
```xml
<!-- 1순위: Bean 이름으로 직접 참조 (jsonView) -->
<bean class="BeanNameViewResolver">
    <property name="order" value="1"/>
</bean>

<!-- 2순위: JSP (viewNames 패턴 매칭) -->
<bean class="InternalResourceViewResolver">
    <property name="viewClass" value="JstlView"/>
    <property name="prefix" value="/WEB-INF/views/"/>
    <property name="suffix" value=".jsp"/>
    <property name="viewNames" value="jsp/*"/>
</bean>

<!-- 3순위: Thymeleaf -->
<bean class="ThymeleafViewResolver">
    <property name="templateEngine" ref="templateEngine"/>
</bean>
```

### 커스텀 Argument Resolver
```xml
<!-- QMap 자동 파라미터 바인딩 -->
<bean class="ego.qbic.base.web.servlet.QRequestMappingHandlerAdapter">
    <property name="qbicCustomArgumentResolvers">
        <list>
            <bean class="ego.qbic.base.web.context.QMapHandlerMethodArgumentResolver"/>
        </list>
    </property>
    <property name="synchronizeOnSession" value="false"/>
</bean>
```

### AOP 트랜잭션
```xml
<!-- *Impl 클래스 전체에 트랜잭션 적용 -->
<aop:config>
    <aop:pointcut id="serviceImpl" expression="execution(* ego.qbic..*Impl.*(..))"/>
    <aop:advisor advice-ref="txAdvice" pointcut-ref="serviceImpl"/>
</aop:config>
```

---

## 9. 보안 구성

### HTMLTagFilter (XSS 방어)
- 모든 `*.do` 요청에 적용
- Content-Type별 3단계 처리:
  1. `excludeUrls` 목록 → 필터링 제외
  2. `application/json` → `RequestBodyFilterRequestWrapper` (JSON 파싱 보호)
  3. 일반 form 요청 → `HTMLTagFilterRequestWrapper` (HTML 태그 제거)

### 기타 보안
- **Jasypt:** DB 비밀번호 암호화 저장 (`commond.properties`)
- **Bouncy Castle:** 추가 암호화 프로바이더
- **UTF-8 인코딩 필터:** 한글 처리 및 인코딩 공격 방어
- **SessionListener:** 세션 생명주기 관리

---

## 10. 성능 최적화

| 전략 | 내용 |
|------|------|
| **HikariCP** | 고성능 커넥션 풀, 설정: minimumIdle, maximumPoolSize |
| **동적 테이블 선택** | 지표 유형별 `${nodeTable}`, `${tableTnvt}` → 쿼리 재사용 |
| **MongoDB cursor noCursorTimeout** | 대용량 궤적 데이터 처리 시 타임아웃 방지 |
| **synchronizeOnSession: false** | 멀티스레드 처리 허용으로 동시접속 성능 향상 |
| **GeoServer WMS/WFS 캐싱** | 교통망 공간 레이어 서버사이드 캐싱 |
| **ReloadableSqlSessionFactoryBean** | 개발 시 MyBatis 매퍼 동적 리로드 |
| **요일별 테이블 분리** | DOTW_CD 기반 집계 테이블로 조회 성능 분리 |

---

## 11. 디렉토리 구조

```
hwaseong_v001/
├── pom.xml
└── src/
    ├── main/
    │   ├── java/
    │   │   └── ego/qbic/
    │   │       ├── base/              # 프레임워크 코어
    │   │       ├── cmmn/              # 공통 모듈
    │   │       ├── dashboard/         # 대시보드
    │   │       ├── intersection/      # 교차로 분석
    │   │       ├── signalDashboard/   # 신호 대시보드
    │   │       ├── monitoringRoad/    # 도로 모니터링
    │   │       ├── averagespeed/      # 평균속도
    │   │       ├── realtimeTraffic/   # 실시간 교통
    │   │       ├── cycleCalculation/  # 신호주기 산출
    │   │       ├── intersectionTOD/   # TOD 관리
    │   │       ├── interlockingSignalPattern/ # 연동신호 패턴
    │   │       ├── simulation/        # 시뮬레이션
    │   │       ├── subAreaAnalysis/   # 서브지역 분석
    │   │       ├── smartIntersection/ # 스마트교차로
    │   │       ├── t7fExport/         # T7F 내보내기
    │   │       └── ... (30+ 모듈)
    │   ├── resources/
    │   │   ├── spring/
    │   │   │   ├── context-common.xml
    │   │   │   ├── context-datasource.xml
    │   │   │   └── context-servlet.xml
    │   │   ├── mybatis/
    │   │   │   └── map/
    │   │   │       ├── DashboardMDAO_SQL.xml
    │   │   │       ├── IntersectionMDAO_SQL.xml
    │   │   │       └── ... (33개 XML 파일)
    │   │   └── commond.properties     # DB 설정
    │   └── webapp/
    │       ├── WEB-INF/
    │       │   ├── web.xml
    │       │   └── views/
    │       │       ├── *.jsp
    │       │       └── *.html
    │       ├── js/
    │       │   └── fnList/
    │       │       ├── dashboard.js
    │       │       ├── signalDashboard.js
    │       │       └── ...
    │       └── css/
    │           └── API/
    │               └── d3/            # D3.js 라이브러리
    └── test/
```

---

## 12. 개발 시 주요 경험 / 기술적 도전

### 12-1. MySQL + MongoDB 이중 데이터베이스 통합 아키텍처

**문제:** 교통망 정적 데이터(교차로, 링크, 신호계획)는 관계형 MySQL에, OBU IoT 디바이스에서 실시간 수집되는 차량 궤적 시계열 데이터는 문서형 MongoDB에 분리 저장된 이중 데이터베이스 환경.

**해결:** 단일 Service 메서드(`getDashboardRank`) 내에서 MySQL과 MongoDB 쿼리를 순차 실행 후 Java 레이어에서 데이터를 병합하는 방식 채택. Spring의 `@Autowired`로 SqlSession(MyBatis)과 MongoClient를 별도 주입받아 사용.

```java
// DashboardServiceImpl.java - 멀티소스 데이터 집계
public HashMap<String, Object> getDashboardRank(QMap commandMap) throws Exception {
    // 1. MySQL: 링크(도로구간) 데이터 조회
    List<HashMap<String, Object>> road_data =
        monitoringRoadMDAO.getLinkData(commandMap);

    // 2. MySQL: 노드(교차로) 지표값 조회
    List<HashMap<String, Object>> node_data =
        dashboardMDAO.selectDashboardNodeJipyoDataListByCondition(commandMap);

    // 3. MySQL: 실시간 교통 데이터 조회
    List<HashMap<String, Object>> traffic_data =
        realtimeTrafficDAO.getTrafficInfo(commandMap);

    // 4. Java 레이어에서 5단계 색상 분류 계산
    int step = Math.round((road_data.size() - 1) / 5);
    // 히트맵 범례 구간 계산 후 결과 Map에 통합 반환
}
```

**성과:** 관계형/문서형 데이터베이스의 장점을 각각 활용하면서, 뷰 레이어에서는 단일 JSON 응답으로 처리하여 프론트엔드 복잡도 최소화.

---

### 12-2. IoT OBU 기반 차량 궤적 분석 (MongoDB + 시계열 처리)

**문제:** OBU(차량 탑재 단말)에서 수집된 데이터는 배열 형태의 Unix 타임스탬프, 순/역방향 누적거리(`pdt`/`mdt`)로 구성되어 있으며, 특정 교차로를 통과한 차량의 진입 링크 → 진출 링크 궤적을 재구성해야 함.

**해결:**
1. 특정 교차로의 진입 링크 목록을 MySQL에서 조회
2. MongoDB에서 해당 링크를 통과한 OBU 데이터를 `$in` 연산자로 일괄 조회
3. 각 OBU의 uTime 배열에서 요청 시간대에 해당하는 인덱스를 찾아 거리값 매핑
4. 서울 타임존(`Asia/Seoul`) 기반 시간 보정 후 from/to 링크 매핑

```java
// DashboardServiceImpl.java - MongoDB 궤적 분석
public HashMap<String, Object> getMovementTrajectoryData(QMap commandMap) throws Exception {
    MongoClient mongoClient = new MongoClient(new ServerAddress(mongoIp, mongoPort));
    MongoDatabase mongoDB = mongoClient.getDatabase("SIGNAL_HWASEONG_2021");
    MongoCollection<Document> collection = mongoDB.getCollection(mongoCollection);

    // 진입 링크 목록으로 MongoDB 조건 쿼리 구성
    BasicDBObject oQuery = new BasicDBObject();
    List<BasicDBObject> listQuery = new ArrayList<>();
    listQuery.add(new BasicDBObject("vLinkID",
        new BasicDBObject("$in", fromLinkList)));  // 교차로 진입 링크 필터

    // Unix 타임스탬프 배열에서 시간대 인덱스 탐색
    for (int j = 0; j < originListLinkID.size(); j++) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("H");
        Date date = new Date();
        date.setTime(listUnixTime.get(j) * 1000L);  // 밀리초 변환
        int standardHour = Integer.parseInt(dateString);
        // 서울 타임존 기준 유효 시간대 내 통과 차량만 집계
    }
}
```

**기술적 특이점:**
- `MongoCursor.noCursorTimeout(true)` 설정으로 대용량 데이터 처리 시 커서 타임아웃 방지
- pdt(순방향)/mdt(역방향) 배열 인덱싱으로 교차로 통과 방향 판별
- 분석 결과를 `fromToLinkMap`으로 구조화하여 프론트엔드 WebGL 레이어에 직접 적용

---

### 12-3. MyBatis 동적 테이블 선택과 조건부 SQL 패턴

**문제:** 대시보드에서 사용자가 선택한 지표 유형(속도/혼잡도/교통량 등)에 따라 조회해야 할 테이블명과 정렬 방식, 집계 방법이 모두 달라지는 복잡한 조건부 쿼리 필요.

**해결:** MyBatis `${}`(테이블명 동적 치환) + `<choose>/<when>/<otherwise>` + `<if>` 조합으로 단일 SQL 파일에서 모든 유형의 조회 처리.

```xml
<!-- DashboardMDAO_SQL.xml - 지표유형별 동적 쿼리 -->
<select id="selectDashboardNodeJipyoDataListByCondition"
    parameterType="QMap" resultType="paramMap">
    SELECT id, name,
        <choose>
            <when test="nodeTable eq 'tb_SPEED_VAL_tnn'">
                if(ROUND(val) > 0, ROUND(val), 99999) AS val
            </when>
            <otherwise>
                Round(val, 1) as val
            </otherwise>
        </choose>
        , lon, lat, crsr_no
    FROM (
        SELECT tnn.tn_node_id as id,
               if(node.node_name = tnn.tn_node_id,
                  concat('ID :', node.node_name), node.node_name) as name,
               tnn.val as val, node.x as lon, node.y as lat,
               IFNULL(node.tod_id, '-') as crsr_no
        FROM ${nodeTable} tnn   <!-- 동적 테이블명 치환 -->
        JOIN
        <choose>
            <when test="zone == 0">
                tn_node
            </when>
            <otherwise>
                (SELECT * FROM tn_node WHERE emd_id IN
                (3124061,3124060,3124062,3124064,3124065,3124070,3124069,3124071))
            </otherwise>
        </choose>
        node ON node.tn_node_id = tnn.tn_node_id
        WHERE DOTW_CD = #{yoil} AND TIME_CD = #{time}
    ) TL
    <choose>
        <when test="nodeTable eq 'tb_SPEED_VAL_tnn'">
            ORDER BY val ASC      <!-- 속도: 낮은 순(혼잡) -->
        </when>
        <otherwise>
            ORDER BY val DESC     <!-- 혼잡도: 높은 순 -->
        </otherwise>
    </choose>
</select>
```

**이동류 분석용 3중 JOIN + 조건부 집계:**
```xml
<!-- 교차로 회전별 지표값: tn_link_turn_info × 동적지표테이블 × 동적링크테이블 -->
<select id="selectIntersectionInfoListByCondition" parameterType="QMap" resultType="paramMap">
    SELECT info.drct_cd, tnvt.turn_cd,
        <choose>
            <when test="table_tnvt eq 'tb_SPEED_VAL_tnvt'">Round(tnvt.val) as val</when>
            <when test="table_tnvt eq 'tb_TRFC_VOL_tnvt'">Round(tnvt.val) as val</when>
            <otherwise>Round(tnvt.val, 1) as val</otherwise>
        </choose>
    FROM
        (SELECT tn_link_turn_info.*, ... FROM tn_link_turn_info
         WHERE TN_M_NODE_ID = #{nodeId}) info
    INNER JOIN
        (SELECT * FROM ${tableTnvt}
         WHERE dotw_cd = #{yoil} AND time_cd = #{time}
         <if test="table_tnvt eq 'tb_TRFC_VOL_tnvt'">
             AND vhcl_cd = #{carType}    <!-- 차종 필터 조건부 추가 -->
         </if>) tnvt
    ON info.TN_F_V_LINK_ID = tnvt.tn_v_link_id AND info.TURN_CD = tnvt.TURN_CD
    INNER JOIN (SELECT * FROM ${tableTnv} ...) tnv
    ON info.TN_F_V_LINK_ID = tnv.tn_v_link_id
    LEFT JOIN tb_crsr_attc attc ON info.TN_M_NODE_ID = attc.crsr_node_id
</select>
```

---

### 12-4. 배열/단일값 동적 처리 (QMap.isArray + MyBatis foreach)

**문제:** 교차로 분석에서 단일 노드와 복수 노드를 동일 API로 처리해야 하는 상황. JavaScript에서는 단일값을 `"nodeId":"1234"`, 복수를 `"nodeId":["1234","5678"]`로 전송하는데, 서버 측에서 타입에 따라 다른 SQL 조건 적용 필요.

**해결:** `QMap.isArray()` 유틸 메서드로 배열 여부를 판별하고, MyBatis `<foreach>`로 동적 IN 조건 생성.

```java
// QMap.java - 타입 판별 유틸
public static Boolean isArray(Object obj) {
    return obj != null && obj.getClass().isArray();
}
```

```xml
<!-- IntersectionMDAO_SQL.xml - 동적 단일/배열 처리 -->
<select id="selectFlinkListByNodeId" parameterType="QMap" resultType="paramMap">
    SELECT TN_M_NODE_ID, TN_F_V_LINK_ID, drct_cd
    FROM (
        SELECT a.*, b.drct_cd
        FROM tn_link_turn_info a
        JOIN v_crsr_acrd_drct b
          ON a.TN_F_V_LINK_ID = b.link_id
         AND a.TN_M_NODE_ID = b.tn_node_id
        <choose>
            <when test="@ego.qbic.base.vo.QMap@isArray(commandMap.NodeId)">
                WHERE  <!-- 배열: IN 조건 생성 -->
                <foreach collection="commandMap.NodeId" item="arr"
                    separator="OR" index="index">
                    TN_M_NODE_ID = #{arr}
                </foreach>
            </when>
            <otherwise>
                WHERE TN_M_NODE_ID = #{commandMap.nodeId}  <!-- 단일값 -->
            </otherwise>
        </choose>
        GROUP BY a.TN_M_NODE_ID, a.TN_F_V_LINK_ID, b.drct_cd
    ) x
</select>
```

---

### 12-5. 방위각(Cardinal Direction) 기반 이동류 방향 표현

**문제:** 교차로 이동류 분석에서 각 접근 방향(북/남/동/서)과 회전방향(직진/좌회전/우회전)을 조합한 직관적인 UI 표현 필요.

**해결:** SQL에서 방위코드(`DRCT_CD`: NB/WB/EB/SB)를 화살표 유니코드와 CONCAT하여 직접 표시 문자열 생성, FIELD() 함수로 나침반 방향 정렬.

```xml
<!-- 이동류 방향 + 화살표 유니코드 직접 생성 -->
<select id="selectMovementInfoListByNodeID" parameterType="QMap" resultType="paramMap">
    SELECT TN_NODE_ID,
        concat(DRCT_CD,
            if(DRCT_CD='NB', ' ↑ ',
            if(DRCT_CD='WB', ' ← ',
            if(DRCT_CD='EB', ' → ',
            if(DRCT_CD='SB', ' ↓ ', ' - '))))) as MVMT_NO,
        substr(tn_turn_code, 1, 1) as TURN_CD,
        DRCT_CD
    FROM v_crsr_acrd_info
    WHERE tn_node_id = #{nodeId}
    ORDER BY FIELD(DRCT_CD, 'NB','WB','EB','SB','OB')  <!-- 나침반 순 정렬 -->
</select>
```

**프론트엔드 회전방향 색상 코딩:**
```javascript
// signalDashboard.js - 회전방향별 색상
NAMESPACE.signalDashboard = {
    color: {
        'turnL': '#78BEF8',  // 좌회전: 파랑
        'turnS': '#F8788A',  // 직진: 빨강
        'turnR': '#F1F878'   // 우회전: 노랑
    }
};
```

---

### 12-6. 신호 Ring/Phase 데이터 구조 파싱 및 시각화

**문제:** 교차로 신호 계획은 Ring-Phase 구조(복수의 Ring이 각각 독립적인 Phase 순서로 동작)로 저장되어 있으며, TOD(Time of Day) 계획과 노드 ID 간의 매핑 테이블이 별도 관리됨.

**해결:** `DefaultQueryEvt` 컴포넌트에서 애플리케이션 시작 시 노드ID→TOD ID 매핑 테이블을 메모리에 로드하고, 서비스에서 이를 활용하여 신호 데이터를 Ring별로 구조화.

```java
// DashboardServiceImpl.java - 신호 Ring/Phase 구조 파싱
public HashMap<String, Object> getSignalPatternAndJipyoData(QMap commandMap)
    throws Exception {
    // 노드 ID → 신호 TOD ID 변환 (메모리 캐시 활용)
    String chTod2Node = defaultQueryEvt.nodeID2todID.get(commandMap.get("nodeId"));

    // Ring별 Phase 데이터 구조화
    Map<String, HashMap<String, ArrayList<HashMap<String, Object>>>> trimData
        = new HashMap<>();

    for (HashMap<String, Object> item : signalData) {
        String nodeID = item.get("TN_NODE_ID").toString();
        String ring = item.get("RING_DVSN").toString();  // 링 번호

        // 링별로 Phase 리스트 분류 저장
        if (!trimData.containsKey(nodeID)) {
            trimData.put(nodeID, new HashMap<>());
        }
        if (!trimData.get(nodeID).containsKey(ring)) {
            trimData.get(nodeID).put(ring, new ArrayList<>());
        }
        trimData.get(nodeID).get(ring).add(item);
    }

    // 회전방향 코드(S=직진, L=좌회전, R=우회전)로 이동류 매핑
    result.put("trimData", trimData);
    result.put("jipyoInfo", jipyoInfo);
    result.put("timePlanInfo", timePlanInfo);
}
```

---

### 12-7. WebGL 기반 지도 레이어 시스템 구현

**문제:** 교통 지표는 링크(선형), 노드(점형), 실시간 교통(오프셋 선형), 존 경계(폴리곤) 등 다양한 기하 타입을 WebGL로 동시 렌더링해야 하며, 사용자 상호작용(클릭, 레이어 토글, 스타일 변경)도 실시간 반영 필요.

**해결:** 사내 커스텀 `TxDeckGL(gTxDeckGLMap)` 래퍼 라이브러리를 통해 Deck.GL v8의 Layer API를 추상화. 레이어 그룹 키로 기능 단위 관리, `.clone()` 패턴으로 불변 레이어 스타일 업데이트.

```javascript
// dashboard.js - 멀티 레이어 생성 및 스타일 업데이트
drawLayer: function(menuID, nodeID) {
    // 이전 레이어 제거
    gTxDeckGLMap.removeLayer('dashboard_road');
    gTxDeckGLMap.removeLayer('dashboard_node');
    gTxDeckGLMap.removeLayer('dashboard_realtimeRoadTraffic');

    // 행정구역 필터 (0: 전체, 그 외: 특정 읍면동)
    var zone_filter = NAMESPACE.dashboard.optVal.dashboard_zone == 0
        ? undefined
        : { 'emd_id': '3124061,3124060,...' };

    // 실시간 교통 오프셋 벡터 라인 레이어 (상하행 분리 표현)
    gTxDeckGLMap.createVectorLineLayer({
        featureID: 'tn_offSet_link',
        ID: 'dashboard_realtimeRoadTraffic',
        groupKey: menuID,
        bPick: true,          // 클릭 이벤트 활성화
        filter: zone_filter,
        bOffSetFlag: true,    // 상하행 오프셋 적용
        bVisible: $('#dashboard_layerCheck_traffic').is(':checked'),
        styleLine: {
            color: function(f) {
                // 링크 ID로 실시간 속도 데이터 룩업 후 색상 결정
                var linkID = f.properties.offsetDirection === 'up'
                    ? f.properties.up_its_link
                    : f.properties.dw_its_link;
                // 속도 구간별 색상 반환
            }
        }
    });
}

// signalDashboard.js - 레이어 스타일 실시간 수정
let layerOptChange = function(layerId) {
    let color = document.querySelector('#' + layerId + '_color').rgbArray;
    let size = Number(document.querySelector('#' + layerId + '_size').value);
    let opacity = Number(document.querySelector('#' + layerId + '_opacity').value);
    color.push(opacity);  // RGBA 알파 채널 추가

    // 레이어 타입별 clone으로 불변 업데이트
    let layer = gTxDeckGLMap.getLayer(layerId).clone({
        getLineColor: color,
        getLineWidth: size
    });
    gTxDeckGLMap.addLayer(layer);
};
```

**나침반/뷰포트 연동:**
```javascript
// 지도 회전에 따른 나침반 CSS 회전 동기화
gTxDeckGLMap.callBackViewStateChange = function(e) {
    var vp = e.viewState;
    document.querySelector('#mapController_compass > *').style.transform =
        `perspective(100px) rotateX(${vp.pitch}deg) rotate(${-vp.bearing}deg)`;
};

// POI 검색: 지도 이동 완료 시 행정구역 자동 감지
gTxDeckGLMap.callBackViewChangeEnd = function(e, t) {
    var rCallData = C$.UTILITY.requestJsonData(
        './map/getAdministrativeArea.do',
        { 'lon': e.longitude, 'lat': e.latitude }, 'post'
    );
    rCallData.then(data => _fnGetZoneAreaInfo(data.returnList[0].ZONE_ID));
};
```

---

### 12-8. QMap 커스텀 자료구조 - snake_case 자동 변환 이중 모드

**문제:** MyBatis에서 조회된 DB 컬럼명(UPPER_SNAKE_CASE)과 Java/JavaScript 변수명(camelCase) 간의 불일치 해결 및 순서 보존 Map 필요.

**해결:** `ListOrderedMap` 상속 + `put()` 오버라이드로 자동 변환하되, 예외 케이스를 위한 `put2()`, `put3()` 다중 모드 제공.

```java
// QMap.java - 자동 camelCase 변환 + 삽입 순서 보존
public class QMap extends ListOrderedMap {

    // 기본 put: UPPER_SNAKE → lowerCamel (TN_NODE_ID → tnNodeId)
    public Object put(Object key, Object value) {
        return super.put(convert2CamelCase((String) key), value);
    }

    // put2: 대소문자 보존 변환 (TN_NODE_ID → TNNodeId)
    public Object put2(Object key, Object value) {
        return super.put(convert3CamelCase((String) key), value);
    }

    // put3: 변환 없이 직접 저장 (원본 키 유지)
    public Object put3(Object key, Object value) {
        return super.put(key, value);
    }

    // 변환 알고리즘 1: 전체 소문자 + 언더스코어 뒤 대문자화
    public static String convert2CamelCase(String underScore) {
        if (underScore.indexOf('_') < 0
            && Character.isLowerCase(underScore.charAt(0))) return underScore;

        StringBuilder result = new StringBuilder();
        boolean nextUpper = false;
        for (char c : underScore.toCharArray()) {
            if (c == '_') { nextUpper = true; }
            else if (nextUpper) { result.append(Character.toUpperCase(c)); nextUpper = false; }
            else { result.append(Character.toLowerCase(c)); }
        }
        return result.toString();
    }

    // 다목적 유틸: null-safe 비어있음 판별 (String, List, Map, Array 모두 지원)
    public static Boolean empty(Object obj) {
        if (obj instanceof String)  return obj == null || "".equals(obj.toString().trim());
        if (obj instanceof List)    return obj == null || ((List<?>) obj).isEmpty();
        if (obj instanceof Map)     return obj == null || ((Map<?, ?>) obj).isEmpty();
        if (obj instanceof Object[]) return obj == null || Array.getLength(obj) == 0;
        return obj == null;
    }

    // MyBatis XML에서 호출: @ego.qbic.base.vo.QMap@isArray(value)
    public static Boolean isArray(Object obj) {
        return obj != null && obj.getClass().isArray();
    }
}
```

---

### 12-9. Spring MVC 커스텀 Argument Resolver (QMap 자동 바인딩)

**문제:** 모든 컨트롤러 메서드에서 `HttpServletRequest`에서 파라미터를 수동으로 꺼내는 보일러플레이트 코드 제거 필요. 요청 파라미터를 자동으로 `QMap`으로 변환하여 바인딩.

**해결:** `HandlerMethodArgumentResolver` 구현체 `QMapHandlerMethodArgumentResolver`를 `QRequestMappingHandlerAdapter`에 등록. 컨트롤러 메서드 시그니처에 `QMap commandMap`만 선언하면 자동으로 요청 파라미터 → QMap 변환.

```xml
<!-- context-servlet.xml -->
<bean class="ego.qbic.base.web.servlet.QRequestMappingHandlerAdapter">
    <property name="qbicCustomArgumentResolvers">
        <list>
            <bean class="ego.qbic.base.web.context.QMapHandlerMethodArgumentResolver"/>
        </list>
    </property>
    <property name="synchronizeOnSession" value="false"/>
</bean>
```

```java
// Controller 사용법 - 파라미터 추출 코드 없이 바로 사용
@RequestMapping("/getDashboardRank.do")
public String getDashboardRank(ModelMap model, HttpServletRequest request,
    QMap commandMap) throws Exception {                       // ← 자동 바인딩

    HashMap<String, Object> result = dashboardService.getDashboardRank(commandMap);
    model.addAttribute("road_min", result.get("road_min"));
    model.addAttribute("road_max", result.get("road_max"));
    return "jsonView";
}
```

---

### 12-10. AOP 기반 예외처리 및 패턴 매칭 트레이스

**문제:** 30+ 서비스 구현체 전체에서 발생하는 예외를 일관되게 처리하고, 예외 발생 위치(클래스·메서드명)를 자동으로 추적하는 인프라 필요.

**해결:** `LeaveaTrace` + `DefaultTraceHandleManager` 조합으로 AOP 기반 예외 추적 체계 구성. Ant 패턴(`**service.impl.*Impl`)으로 서비스 구현체 전체를 자동 감지.

```xml
<!-- context-common.xml - AOP 예외 추적 설정 -->
<bean id="leaveaTrace" class="ego.qbic.base.exception.trace.LeaveaTrace">
    <property name="traceHandlerServices">
        <list><ref bean="traceHandlerService"/></list>
    </property>
</bean>

<bean id="traceHandlerService"
    class="ego.qbic.base.exception.trace.DefaultTraceHandleManager">
    <property name="reqExpMatcher"><ref bean="antPathMater"/></property>
    <property name="patterns">
        <list>
            <value>**service.impl.*Impl</value>  <!-- 서비스 구현체 전체 매칭 -->
        </list>
    </property>
    <property name="handlers">
        <list><ref bean="defaultTraceHandler"/></list>
    </property>
</bean>

<!-- AOP 트랜잭션: *Impl 클래스 메서드 전체에 선언적 트랜잭션 적용 -->
<aop:config>
    <aop:pointcut id="serviceImpl"
        expression="execution(* ego.qbic..*Impl.*(..))"/>
    <aop:advisor advice-ref="txAdvice" pointcut-ref="serviceImpl"/>
</aop:config>
```

---

## 13. 프로젝트 규모

| 항목 | 수치 |
|------|------|
| **Java 소스 파일** | 197개 |
| **Java 소스 코드** | 20,097 라인 |
| **MyBatis 매퍼 XML** | 33개 |
| **MyBatis SQL 코드** | 5,705 라인 |
| **프론트엔드 (JS/JSP/HTML)** | 155,001+ 라인 |
| **JSP/HTML 뷰 파일** | 34개 |
| **기능 모듈 수** | 30+ |
| **API 엔드포인트 (*.do)** | 100+ |

---

## 14. 특이사항 및 참고

### 기술적 특이사항
- **삼중 DB 환경:** MySQL(관계형) + MongoDB(문서형) + Tibero(레거시 RDBMS) 동시 운영
- **WebGL 렌더링:** 일반 SVG/Canvas 대신 Deck.GL WebGL로 수만 개 교통 링크/노드 실시간 렌더링
- **IoT 연동:** OBU 차량 단말 → MongoDB → Java 궤적 분석 → WebGL 시각화 전체 파이프라인 구현
- **사내 프레임워크:** TxDeckGL 지도 래퍼, QMap, QController 등 팀 공유 커스텀 프레임워크 활용
- **eGov 표준 준수:** 한국 전자정부 표준 프레임워크(eGovFramework) 기반 공공기관 납품 프로젝트

### 개발 환경
- **Java:** 1.8 / JVM `-Xms256m -Xmx768m -XX:MaxPermSize=256m`
- **WAS:** Apache Tomcat 9.x (포트 80, 루트 컨텍스트)
- **OS:** Linux 서버 환경
- **IDE:** Eclipse
- **빌드:** Maven (WAR 패키징)
- **형상관리:** SVN

### 이전 프로젝트와의 차별점 (vs. 2023_SI_V2 시흥시 대중교통)
| 비교 항목 | 시흥시 (2023_SI_V2) | 화성시 (2023_HS) |
|----------|-------------------|----------------|
| DB | PostgreSQL + PostGIS | MySQL + MongoDB + Tibero |
| 지도 | 일반 지도 | WebGL(Deck.GL) 기반 |
| 데이터 성격 | 대중교통 이용 통계 | 실시간 IoT 차량 궤적 |
| 프론트엔드 | ES6 Web Components | 네임스페이스 모듈 패턴 |
| 신호 | 없음 | 신호 Ring/Phase 분석 |
| 규모 | ~7,531 Java 라인 | 20,097 Java 라인 |
