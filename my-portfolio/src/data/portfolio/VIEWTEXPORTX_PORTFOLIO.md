# PORTFOLIO — view-t-export-x (교통지표 공간 분석 플랫폼 Frontend)

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | view-t-export-x |
| 유형 | 교통지표 공간 분석 인터랙티브 GIS 웹 서비스 (SPA) |
| 버전 | f-version-1.0.0 |
| 기간 | 2025 |
| 역할 | Frontend 전체 개발 |
| 비고 | 6레벨 도로 네트워크 기반 교통지표 시각화 플랫폼 (자사 qbic-xqb 맵 라이브러리 연동) |

---

## 2. 프로젝트 배경 및 목적

차량 GPS 데이터·현장 검지기 등에서 수집된 교통 빅데이터를 6레벨 도로 네트워크 위에 올려
도로(Link) 단위와 행정구역(Zone) 단위로 교통지표를 시각화·분석하는 전문 GIS 웹 서비스.

사용자가 분석 지표를 선택하고, 분석 조건(기준년도·차종·분기·시간대·도로 등급 등)을 설정하면
서버에서 통계 데이터를 받아 GeoServer WMS·VectorTile 레이어 스타일에 실시간으로 반영한다.
레이어는 드래그&드롭으로 순서 조정이 가능하고, 색상·두께 등의 스타일을 독립적으로 커스터마이징할 수 있다.

---

## 3. 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | React 19.0.0 |
| Language | TypeScript 5.7.2 |
| Build | Vite 6.2.0 |
| State | Zustand 5.0.3 |
| DnD | @dnd-kit/core 6.3.1 + @dnd-kit/sortable 10.0.0 + @dnd-kit/modifiers 9.0.0 |
| Styling | SCSS Modules + clsx 2.1.1 |
| Map | XqbMap (사내 qbic-xqb 패키지 — OpenLayers 기반 커스텀 래퍼) |
| GeoServer | WMS TileLayer + VectorTile (SLD 환경변수 스타일) |
| Range | react-range 1.10.0 (두께 슬라이더) |
| 통신 | Fetch API (application/x-www-form-urlencoded) |

---

## 4. 프로젝트 구조

```
f-version-1.0.0/src/
├── App.tsx                          # 루트 컴포넌트 (전역 로딩 오버레이)
├── Map.tsx                          # XqbMap 초기화 예시/테스트용
├── stores/
│   ├── LayerStore.ts                # 다중 맵 레이어 상태 (Zustand)
│   ├── CommonStore.ts               # 맵별 알림 메시지 상태
│   ├── LoadingStore.ts              # 전역 로딩 상태
│   └── menuStore.ts                 # 메뉴 선택 상태
├── service/
│   ├── api/                         # API 엔드포인트 정의
│   └── entities/
│       ├── Layer/Layer.ts           # LayerProps, 레이어 기본 스타일 상수
│       ├── MenuList/MenuList.ts     # MenuProps, speedMinMax 고정값
│       └── OptComponent/
│           ├── OptComponent.ts      # 분석 옵션 컴포넌트 정의 (13종)
│           └── LayerStyleOptComponent.ts # 스타일 옵션 컴포넌트
├── hooks/
│   ├── api/commonApi/useApi.tsx     # 공통 API 훅 (URLSearchParams 직렬화)
│   ├── common/useCreateMenuList.tsx # 지표 메뉴 리스트 + 툴팁 팩토리
│   └── opt/useOptionHandler.ts     # 분석 옵션 변경 핸들러
├── pages/index/
│   ├── IndexPage.tsx                # 메인 페이지
│   ├── layout/
│   │   ├── SideBar.tsx              # 좌측 사이드바
│   │   └── BodyContent.tsx          # 맵 컨테이너
│   └── features/
│       ├── Map/BaseMap.tsx          # XqbMap 초기화 컴포넌트
│       ├── LayerPanel/              # 레이어 패널 (DnD 정렬)
│       ├── LayerStyleCondition/     # 레이어 스타일 설정 모달
│       ├── JipyoCondition/          # 분석 조건 설정 모달
│       ├── MenuList/                # 지표 메뉴 선택 UI
│       ├── MapController/           # 지도 컨트롤러
│       └── SidebarPanel/            # 사이드바 패널
├── components/
│   ├── Modal/
│   │   ├── DraggableModal/          # 드래그 가능 모달 (Portal + dnd-kit)
│   │   └── CommonMessageModal/      # 알림 메시지 모달
│   ├── Checkbox/ CheckboxGroup/ AllCheckboxGroup/
│   ├── Radiobutton/ Selectbox/ ColorPicker/
│   ├── JipyoSimulation/             # 시뮬레이션 시간대 컴포넌트
│   └── Loading/CommonLoading.tsx
└── util/
    ├── LayerUtil.ts                 # 레이어 스타일 파싱 유틸
    ├── MenuUtil.ts                  # 선택 옵션 파라미터 빌더
    └── CommonUtil.ts                # deepEqual, formatCompactNumber
```

---

## 5. 분석 지표 목록

총 **13종** 교통지표를 지원하며, 각 지표는 도로(Link) 또는 행정구역(Zone) 단위로 전환 가능.

| 대분류 | 중분류 | 지표명 | 영문 코드 |
|--------|--------|--------|-----------|
| 통행지표 | 교통량 지표 | 추정 교통량 | trafficvolume |
| 통행지표 | 교통량 지표 | 차량 주행거리 | vkt |
| 통행지표 | 속도지표 | 평균속도 | avespeed |
| 통행지표 | 속도지표 | 혼잡시 평균 속도 | lowerspeedtime |
| 통행지표 | 속도지표 | 정상시 평균 속도 | upperspeedtime |
| 통행지표 | 교통혼잡지표 | 혼잡빈도강도 | confrequencyintensity |
| 통행지표 | 교통혼잡지표 | 혼잡시간강도 | contimeintensity |
| 통행지표 | 교통혼잡지표 | 교통혼잡비용 | concost |
| 통행지표 | 교통환경지표 | 이산화탄소배출량 | co2quantity |
| 통행지표 | 교통환경지표 | 일산화탄소배출량 | coquantity |
| 통행지표 | 교통환경지표 | 질소산화물배출량 | noxquantity |
| 통행지표 | 교통환경지표 | 미세먼지배출량 | pmquantity |
| 통행지표 | 교통환경지표 | 휘발성유기화합물 | vocquantity |

---

## 6. 분석 조건 옵션 (OptComponent)

각 지표는 독립적인 `anlyOptComponent: OptComponentProps[]` 배열을 가지며,
UI 컴포넌트 타입(`SelectBox` / `RadioButton` / `AllCheckboxGroup` 등)을 선언적으로 정의.

| 옵션명 | en_name | 컴포넌트 | 선택값 예시 |
|--------|---------|----------|-------------|
| 분석기준년도 | opt_standard_year | SelectBox | 2022, 2023 |
| 분석기준네트워크 | opt_standard_network | SelectBox | 6Lev |
| 차종별 | opt_car_model | RadioButton | 전체/승용차/버스/트럭 |
| 분기별 | opt_quarter | RadioButton | 전체/1~4분기 |
| 기간별 | opt_period | RadioButton | 평일/주말 |
| 시간대 | opt_time | SelectBox | 전체/01~24시 |
| 도로별 | opt_road | AllCheckboxGroup | 고속도로~연결로 (8종) |
| 권역별 | opt_area | RadioButton | 시도/시군구/읍면동 |
| 비용별 | opt_concost_type | SelectBox | 전체/고정비용/변동비용/시간가치비용 |

---

## 7. 주요 기능 흐름

```
1. 사용자가 사이드바에서 지표 메뉴 선택 (MenuList)
   ↓
2. 분석 조건 설정 모달(JipyoCondition) 표시
   ↓
3. "분석하기" 버튼 → useSubmitJipyoCondition.submit()
   - buildSelectedParams() → 선택된 opt_val 추출
   - buildParsingParam()  → 동적 table명, target_col 조합
   - POST /cong/insitemap/jipyo.do
   ↓
4. API 응답(MinMax + value_data) 수신
   - NewLayerStyleParser / UpdateLayerStyleParser 로 스타일 범위 생성
   ↓
5. Zustand LayerStore.addLayer() / updateLayer()
   - map.createTileWMS() / createVectorTile() 으로 GeoServer 레이어 추가
   ↓
6. 레이어 패널(LayerPanel)에 카드 표시
   - 드래그&드롭으로 순서 변경
   - 스타일 설정 버튼 → LayerStyleSettingModal
```

---

## 8. Zustand 스토어 구조

### LayerStore (다중 맵 지원)

```typescript
interface UseMapState {
  qbicMap: { [mapId: string]: XqbMap };    // 맵 ID별 XqbMap 인스턴스
  layerLists: { [mapId: string]: LayerProps[] }; // 맵 ID별 레이어 목록
}
```

단일 스토어로 여러 맵 인스턴스를 독립 관리 → 향후 비교 분석 화면(좌우 맵) 확장 지원.

### CommonStore (맵별 알림 메시지)

```typescript
type MessageMap = { [map_id: string]: Message[] };
```

맵 ID 네임스페이스로 분리 → 다중 맵 환경에서 알림이 서로 간섭하지 않음.

---

## 9. GeoServer 연동 방식

### Link (도로) 레이어 — TileWMS

```typescript
map.createTileWMS({
  xqbGroupID: layer.commonInfo.group_id,
  xqbLayerID: layer.commonInfo.layer_id,
  geoLayerNm: "tb_lev6_jipyo_link",
  geoViewParam: anlyOptToGeoViewParam(parsingParam),
  // "year:2022;table:tb_link_lev6_trafficvolume_all;target_col:weekdays_all;road_ranks:101\\,102\\,103;"
  geoEvn: anlyOptToGeoStyleParam(layer.layerStyleData),
  // "range_1_min:0;range_1_max:100;color_1:#00B050;width_1:3;..."
  geoStyles: "env-jipyo-classfication",  // SLD 스타일명
});
```

### Zone (행정구역) 레이어 — VectorTile

```typescript
map.createVectorTile({
  geoLayerNm: `tb_zone_${params.opt_area}`,  // tb_zone_sido / sigungu / emd
  xqbDataSet: {
    data: layer.data.value_data,   // { zone_id: 통계값 } 맵
    targetKey: "zone_id",
    legendSetp: [range_1_min, range_1_max, ...],
    legendColor: [color_1, color_2, ...],
    legendVisible: [true, true, ...],
  },
});
```

---

## 10. 개발 환경 및 배포

| 항목 | 내용 |
|------|------|
| Dev Server | Vite 6, Port 5173 |
| Proxy | `/cong` → `http://192.168.40.32:8081` (Spring Backend) |
| GeoServer URL | `import.meta.env.VITE_BASE_GEOSERVER_URL` |
| Base URL | `/insiteMapDist/` (개발) / `cong/insiteMapDist/` (배포) |
| Path Alias | `@` → `src/` |

---

## 11. 소스 규모

| 구분 | 수량 |
|------|------|
| TSX 컴포넌트 파일 | 40+ |
| TS 유틸·훅·스토어 | 20+ |
| SCSS Module | 30+ |
| 분석 지표 메뉴 | 13종 |
| 분석 옵션 컴포넌트 | 9종 |
| 레이어 스타일 타입 | 2종 (color / thickness) |

---

## 12. 개발 시 주요 경험 / 기술적 도전

### 12-1. Zustand를 활용한 다중 맵 인스턴스 관리

**문제**: 단순 단일 맵 상태로는 향후 비교 분석(좌우 두 맵) 확장 불가능.

**해결**: Zustand 스토어를 `mapId` 키(딕셔너리) 기반으로 설계해 단일 스토어에서 다수의 XqbMap 인스턴스와 레이어 목록을 독립 관리.

```typescript
// stores/LayerStore.ts
interface UseMapState {
  qbicMap: { [mapId: string]: XqbMap };       // 맵 인스턴스 딕셔너리
  layerLists: { [mapId: string]: LayerProps[] }; // 레이어 목록 딕셔너리
}

initializeMap: (mapId, container) => {
  if (!qbicMap[mapId] && container) {
    const map = new XqbMap({
      setTargetID: container.id,
      setGeoURL: import.meta.env.VITE_BASE_GEOSERVER_URL,
      setCenter: [127, 37.5],
    });
    set((state) => ({
      qbicMap: { ...state.qbicMap, [mapId]: map },
      layerLists: { ...state.layerLists, [mapId]: [] },
    }));
  }
},
```

모든 액션(`addLayer`, `updateLayer`, `layerOrderChange` 등)이 `mapId` 파라미터를 받아
해당 맵에만 영향을 주도록 격리.

---

### 12-2. dnd-kit 이중 사용: 레이어 정렬 + 드래그 가능 모달

**문제**: 레이어 패널의 DnD 정렬 목적과 팝업 모달 드래그 이동 목적이 서로 다른데, 동일 라이브러리(@dnd-kit)로 두 기능을 동시에 구현해야 했음.

**해결**:
- **레이어 패널**: `DndContext` + `SortableContext` + `verticalListSortingStrategy` 조합으로 목록 정렬
- **모달**: `useDraggable` + `DragEndEvent.delta` 축적으로 모달 위치 이동, `restrictToWindowEdges` 모디파이어로 화면 밖 이탈 방지
- 모달은 `createPortal`로 `map_id-container` DOM에 렌더링해 z-index 충돌 없이 맵 위에 표시

```typescript
// DraggableModal.tsx
export const DraggableModal = ({ map_id, id, title, onClose, children }) => {
  const [position, setPosition] = useState({ x: 400, y: 100 });

  const handleDragEnd = (event: DragEndEvent) => {
    setPosition((prev) => ({
      x: prev.x + event.delta.x,
      y: prev.y + event.delta.y,
    }));
  };

  const container = document.getElementById(`${map_id}-container`);
  return container
    ? createPortal(
        <DndContext modifiers={[restrictToWindowEdges]} onDragEnd={handleDragEnd}>
          <InnerModal position={position} ...>{children}</InnerModal>
        </DndContext>,
        container
      )
    : null;
};

// LayerPanel.tsx — 레이어 정렬
<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
  <SortableContext
    items={layerLists[map_id].map((l) => l.commonInfo.layer_id)}
    strategy={verticalListSortingStrategy}
  >
    {layerLists[map_id].map((layer) => (
      <LayerPanelCard key={layer.commonInfo.layer_id} layer={layer} ... />
    ))}
  </SortableContext>
</DndContext>
```

레이어 정렬 완료 시 Zustand 상태 업데이트와 함께 `map.reorderIdx(groupId, newIndex)`를 호출해 실제 지도 레이어 순서도 동기화:

```typescript
layerOrderChange: (mapId, draggedId, targetId) => {
  const reordered = [...layerList];
  reordered.splice(toIndex, 0, reordered.splice(fromIndex, 1)[0]);
  set({ layerLists: { ...state.layerLists, [mapId]: reordered } });
  map.reorderIdx(draggedLayer.commonInfo.group_id, reordered.length - 1 - toIndex);
},
```

---

### 12-3. OptComponent 패턴: 선언적 분석 옵션 → GeoServer 파라미터 변환 파이프라인

**문제**: 13개 지표마다 분석 조건(연도·분기·시간대·차종·도로등급 등)의 조합이 다르고, 이를 GeoServer viewParam 문자열과 백엔드 API 파라미터 두 가지 형태로 동시에 변환해야 함.

**해결**: `OptComponentProps[]` 배열을 선언하고 3단계 파이프라인으로 변환.

```typescript
// 1단계: selected/checked 값 추출
export const buildSelectedParams = (item: MenuProps | LayerProps) => {
  const result: any = { menu_en_name: item.commonInfo.menu_en_name };
  item.anlyOptComponent.forEach((opt) => {
    const key = opt.opt_en_name;
    let vals = opt.opt_val
      .filter((v) => v.selected || v.checked)
      .map((v) => v.value)
      .filter((v) => v !== "opt_all"); // "전체" 체크박스 값 제거
    if (vals.length === 1) result[key] = vals[0];
    else if (vals.length > 1) result[key] = vals;
  });
  return result;
};

// 2단계: 동적 DB 테이블명 및 컬럼명 조합
export const buildParsingParam = (params, type) => {
  const table = `tb_link_${params.opt_standard_network}_${params.menu_en_name}_`
              + `${params.opt_quarter ?? params.opt_car_model ?? "all"}`;
  const target_col = params.menu_en_name === "concost"
    ? `${params.opt_concost_type}_${params.opt_period}_${params.opt_time ?? "all"}`
    : `${params.opt_period}_${params.opt_time ?? "all"}`;
  const road_ranks = type === "Api" && Array.isArray(params.opt_road)
    ? params.opt_road.join(",")  // API용: "101,102,103"
    : params.opt_road;           // GeoServer용: 배열 그대로
  return { year: params.opt_standard_year, table, target_col, road_ranks };
};

// 3단계: GeoServer viewParam 문자열 변환
export const anlyOptToGeoViewParam = (anlyOptComponent) => {
  // 배열 값은 "\," 로 이스케이프 (GeoServer SQL 뷰 파라미터 규칙)
  // "year:2022;table:tb_link_lev6_trafficvolume_all;target_col:weekdays_t8;road_ranks:101\,102\,103;"
};
```

---

### 12-4. 레이어 스타일 파싱: API MinMax → 5단계 분류 범위 자동 적용

**문제**: 지표마다 데이터 범위(MinMax)가 다르고, 속도 지표는 고정 기준값이 있는 반면 나머지는 서버 응답 MinMax를 동적으로 스타일 범위에 적용해야 함.

**해결**: `NewLayerStyleParser`와 `applyDataRange`로 MinMax → 스타일 데이터 주입.

```typescript
// LayerUtil.ts
export const NewLayerStyleParser = (Layer, data, view_type) => {
  // 1. 속도 지표면 고정 speedMinMax 사용, 아니면 서버 MinMax
  const categoryKey = Layer.commonInfo.ko_subCategory === "속도지표"
    ? "속도지표" : "default";
  const styleEntry = styleMap[categoryKey][view_type];

  // 2. color 범위에 MinMax 적용 (range_1_min ~ range_5_max)
  const colorParsed = Object.fromEntries(
    Object.entries(styleEntry.color.data).map(([key, value]) =>
      key.startsWith("range_")
        ? [key, data.MinMax?.[key] ?? value]  // API 값이 있으면 대체, 없으면 기본값
        : [key, value]
    )
  );

  // 3. thickness는 val_min / val_max 만 MinMax로 교체
  const thicknessParsed = Object.fromEntries(
    Object.entries(styleEntry.thickness.data).map(([key, value]) =>
      key === "val_min" || key === "val_max"
        ? [key, data.MinMax?.[key] ?? value]
        : [key, value]
    )
  );

  return { color: { name, data: colorParsed }, thickness: { name, data: thicknessParsed }, ... };
};

// speedMinMax: 속도 지표 고정 기준값 (API MinMax 무시)
export const speedMinMax = {
  avespeed: { range_1_min: 0, range_1_max: 30, range_2_min: 30, range_2_max: 40, ... },
  lowerspeedtime: { range_1_min: 0, range_1_max: 15, ... },
  upperspeedtime: { range_1_min: 0, range_1_max: 40, ... },
};
```

레이어 추가(New)와 재분석(Update) 시 파서를 분리해 기존 스타일 설정값 유지:

```typescript
if (content.commonInfo.layer_id) {
  p_style = UpdateLayerStyleParser(content, parserData, view_type); // 기존 스타일 유지
} else {
  p_style = NewLayerStyleParser(content, parserData, view_type);    // 기본 스타일 적용
}
```

---

### 12-5. 레이어 스타일 컴포넌트 → 평면 스타일 데이터 역변환

**문제**: 스타일 설정 UI(StyleComponent)는 중첩 배열 구조이지만, GeoServer `geoEvn`에는 평면 key:value 문자열이 필요하고, Zustand 상태에도 평면 Record로 저장해야 함.

**해결**: `convertStyleComponentToStyleData`로 컴포넌트 타입별 핸들러 Map을 등록해 역변환.

```typescript
// LayerUtil.ts
export const convertStyleComponentToStyleData = (viewType, styleComponent) => {
  const result: Record<string, any> = {};
  const handlers = new Map<string, Function>();

  // 색상 테이블: 5개 행 → range_N_min, range_N_max, color_N, width_N, visible_N
  handlers.set("LayerStyleColorTable", (comp, result, viewType) => {
    if (viewType !== "color") return;
    comp.ly_st_opt_val.forEach((row, idx) => {
      result[`range_${idx + 1}_min`] = Number(row[`range_${idx + 1}_min`]);
      result[`range_${idx + 1}_max`] = Number(row[`range_${idx + 1}_max`]);
      result[`color_${idx + 1}`] = row.color;
      result[`width_${idx + 1}`] = row.width;
      result[`visible_${idx + 1}`] = row.checked ? 1 : 0;
    });
  });

  // 두께: width_min, width_max, val_min(콤마 제거), val_max
  handlers.set("LayerStyleThickness", (comp, result, viewType) => {
    if (viewType !== "thickness") return;
    for (const item of comp.ly_st_opt_val) {
      if (item.label === "표출범위") {
        result.val_min = Number(item.val_min);
        result.val_max = Number(item.val_max.replace(/,/g, ""));
      }
    }
  });

  for (const comp of styleComponent) {
    const handler = handlers.get(comp.ly_st_opt_component);
    if (handler) handler(comp, result, viewType);
  }
  return result;
};
```

변경 감지는 `oriStyleOptComponent`(원본 snapshot)와 `renderStyleOptComponent`(편집 중)을
`isDeepEqualWithLog`로 재귀 비교해 "적용하기" 버튼 활성화 여부 결정.

---

### 12-6. useApi 커스텀 훅 — URLSearchParams 직렬화 + 전역 로딩 연동

**문제**: Spring Backend가 `application/x-www-form-urlencoded` 포맷을 요구하고, 배열 파라미터(`road_ranks[]`)도 올바르게 전달해야 함. 또한 API 호출 중 전역 로딩 스피너를 표시해야 함.

**해결**: `URLSearchParams`로 배열 값을 `append` 방식으로 직렬화, Zustand `LoadingStore`와 연동.

```typescript
// hooks/api/commonApi/useApi.tsx
export function useApi<T = any>() {
  const { setLoading: setGlobalLoading } = useLoadingStore();

  const request = useCallback(async ({ url, method = "GET", params, body, headers }) => {
    setGlobalLoading(true);  // 전역 로딩 ON
    try {
      let payload = body ?? params;
      if (payload) {
        const formData = new URLSearchParams();
        Object.entries(payload).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((v) => formData.append(key, v));  // key=101&key=102&key=103
          } else if (typeof value === "object") {
            formData.append(key, JSON.stringify(value));
          } else {
            formData.append(key, value as any);
          }
        });
        fetchOptions.body = formData.toString();
      }
      const response = await fetch(fullUrl, fetchOptions);
      const result = await response.json() as T;
      setData(result);
      return result;
    } finally {
      setGlobalLoading(false);  // 전역 로딩 OFF (성공/실패 무관)
    }
  }, []);

  return { data, loading, error, request };
}
```

GET 요청은 `serializeParams()`로 중첩 객체·배열을 `key[subkey][]=val` 형식의 쿼리 스트링으로 변환.

---

### 12-7. CommonStore requestAnimationFrame 기반 알림 자동 삭제

**문제**: `setTimeout(4000)` 사용 시 브라우저 탭 비활성화 상태에서 타이머가 지연·누락되는 문제. 여러 맵이 동시에 존재할 때 메시지 간섭 문제.

**해결**: `requestAnimationFrame` 루프로 정확한 4초 경과 감지, `map_id` 키로 메시지 네임스페이스 분리.

```typescript
// stores/CommonStore.ts
addMessage: (map_id, content, type = "error") => {
  const id = Date.now();
  set((state) => ({
    messages: {
      ...state.messages,
      [map_id]: [...(state.messages[map_id] || []), { id, content, type }],
    },
  }));

  // requestAnimationFrame 루프로 4초 정확히 감지
  const start = performance.now();
  function loop() {
    if (performance.now() - start >= 4000) {
      get().removeMessage(map_id, id);
    } else {
      requestAnimationFrame(loop);
    }
  }
  requestAnimationFrame(loop);
},
```

---

### 12-8. 분석 조건 변경 감지 — JSON.stringify 직렬화 비교

**문제**: `anlyOptComponent`는 깊은 중첩 배열 구조라 `useEffect` deps에 직접 넣으면 매 렌더마다 실행됨. 함수 참조(`fnTooltip`)가 포함되어 있어 `deepEqual`이 항상 false를 반환할 수 있음.

**해결**: `useEffect`의 deps에 `JSON.stringify(conditionItem.anlyOptComponent)`를 사용해 값 변화만 감지. `isDeepEqualWithLog`에서 함수 타입은 비교에서 제외.

```typescript
// NewJipyoCondition.tsx
useEffect(() => {
  const oriLayer = getLayer(map_id, conditionItem.commonInfo.layer_id);
  const isEqual = isDeepEqualWithLog(
    oriLayer.anlyOptComponent,
    conditionItem.anlyOptComponent
  );
  setActiveAnalyBtn(!isEqual);
}, [JSON.stringify(conditionItem.anlyOptComponent)]); // 직렬화로 깊은 비교

// CommonUtil.ts — 함수 키 제외 처리
if (typeof a === "object" && typeof b === "object") {
  const keysA = Object.keys(a).filter((k) => typeof a[k] !== "function"); // 함수 제외
  const keysB = Object.keys(b).filter((k) => typeof b[k] !== "function");
  ...
}
```

---

### 12-9. GeoServer 스타일 지표별 분기 (geoStyles)

**문제**: 지표 카테고리와 표출 타입(color/thickness)에 따라 GeoServer SLD 스타일 이름이 달라야 하고, 스타일 데이터를 GeoServer 환경변수 문자열로 직렬화해야 함.

**해결**: 카테고리 → 컴포넌트 → SLD 이름의 매핑 테이블 + `getViewTypeFromStyleComponent`로 현재 선택된 뷰 타입 추적.

```typescript
// Layer.ts — SLD 스타일명 상수
const LinkLayerDefaultStyle = {
  color:     { name: "env-jipyo-classfication", data: { ... } },  // 5단계 색상 분류
  thickness: { name: "env-jipyo-scalewidth",    data: { ... } },  // 비례 두께
};
const ZoneLayerDefaultStyle = {
  name: "env-zone-classfication", data: { ... },  // 행정구역 5단계 색상
};

// LayerUtil.ts — 현재 선택된 뷰 타입 추출
export const getViewTypeFromStyleComponent = (styleComponent): "color" | "thickness" => {
  const value = styleComponent
    ?.find((opt) => opt.ly_st_opt_en_name === "ly_st_opt_view")
    ?.ly_st_opt_val?.find((val) => val.checked)?.value;
  return value === "thickness" ? "thickness" : "color";
};

// LayerStore.addLayer — 스타일명 + 환경변수 문자열 조합
const addPstyle = newLayer.layerStyleData[getViewTypeFromStyleComponent(...)];
map.createTileWMS({
  geoStyles: addPstyle?.name,   // "env-jipyo-classfication"
  geoEvn: anlyOptToGeoStyleParam(newLayer.layerStyleData),
  // "range_1_min:0;range_1_max:100;color_1:#00B050;width_1:3;..."
  geoOpacity: (100 - Number(addPstyle?.data.opacity)) / 100,
});
```

---

### 12-10. 레이어 중복 추가 시 한국어 이름 자동 넘버링

**문제**: 동일 지표를 여러 번 추가할 때 "평균속도(2)", "평균속도(3)" 처럼 자동으로 번호를 붙여야 하고, 레이어 삭제 후에는 번호가 재정렬되어야 함.

**해결**: `addLayer` 시 즉시 suffix 부여, 삭제 시 `updateLayerKoNamePure`로 전체 목록 재정렬.

```typescript
// LayerStore.addLayer
const sameCount = layerList.filter(
  (l) => l.commonInfo.menu_en_name === layer.commonInfo.menu_en_name
).length;
const suffix = sameCount >= 1 ? `(${sameCount + 1})` : "";
const newLayer = {
  ...layer,
  commonInfo: {
    ...layer.commonInfo,
    menu_ko_name: `${layer.commonInfo.menu_ko_name}${suffix}`,
  },
};

// LayerUtil.updateLayerKoNamePure — 삭제 후 재정렬
group.forEach((layer, idx) => {
  const reverseIndex = group.length - idx - 1;  // 새로 추가된 레이어가 더 높은 번호
  const suffix = group.length > 1 ? `(${reverseIndex + 1})` : "";
  renamedList[targetIdx] = {
    ...layer,
    commonInfo: { ...layer.commonInfo, menu_ko_name: `${baseKoName}${suffix}` },
  };
});
```

---

## 13. 외부 라이브러리 주요 활용

| 라이브러리 | 활용 목적 |
|-----------|----------|
| XqbMap (qbic-xqb 사내 패키지) | GeoServer WMS·VectorTile 관리, 레이어 순서 제어 |
| @dnd-kit/core + sortable | 레이어 패널 드래그 정렬 |
| @dnd-kit/core + useDraggable | 모달 자유 드래그 이동 |
| @dnd-kit/modifiers (restrictToWindowEdges) | 모달 화면 밖 이탈 방지 |
| Zustand v5 | 다중 맵 레이어 상태, 알림 메시지, 전역 로딩 |
| react-range | 레이어 두께 슬라이더 |
| SCSS Modules | 스타일 스코프 격리 |

---

## 14. 성과 및 특이사항

- **다중 맵 지원 아키텍처**: 단일 Zustand 스토어에서 `mapId` 키로 여러 XqbMap 인스턴스와 레이어를 독립 관리하는 설계로 향후 비교 분석 화면 확장 가능
- **선언적 분석 옵션**: `OptComponentProps[]` 배열 선언만으로 UI 렌더링 + API 파라미터 빌더 + GeoServer viewParam 변환까지 자동 처리
- **dnd-kit 이중 역할**: 하나의 라이브러리로 리스트 정렬(Sortable)과 자유 위치 드래그(Draggable) 두 가지 UX 구현
- **GeoServer SLD 환경변수 연동**: 레이어 스타일 데이터를 `key:value;` 문자열로 직렬화해 GeoServer `geoEvn`에 실시간 전달, 서버 재시작 없이 색상·두께·투명도 동적 변경
- **속도 지표 고정 기준값**: 평균속도·혼잡시속도·정상시속도는 API MinMax 대신 도메인 고정값(`speedMinMax`) 사용으로 일관된 범례 기준 유지
