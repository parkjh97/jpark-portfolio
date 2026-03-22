/**
 * 이력서 전용 추가 데이터
 * - content.ts / ko.ts 에 이미 있는 데이터는 여기서 중복 정의하지 않음
 * - 학력, 자격증, 자기소개서처럼 이력서에만 필요한 항목만 관리
 */

// ── 타입 ───────────────────────────────────────────────────────────────────

export interface EducationEntry {
  period: string
  school: string
  major: string
  degree: string
}

export interface CertificationEntry {
  name: string
  issuer: string
  date: string
}

// ── 경력 각 프로젝트의 기술스택 (ko.ts highlights 의 key 와 일치) ──────────
// key: ko.career.companies.qbicware.highlights 의 키 (erp / viewT / localBusiness)
export const careerHighlightTechStacks: Record<string, string[]> = {
  erp: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Zustand', 'NextAuth.js', 'PostgreSQL'],
  viewT: ['Spring', 'Java 11', 'MyBatis', 'MySQL', 'JavaScript', 'CSS', 'OpenLayers'],
  localBusiness: ['Spring', 'Java 11', 'MyBatis', 'MySQL', 'JavaScript', 'CSS', 'deck.gl'],
}

// ── 학력 ───────────────────────────────────────────────────────────────────

export const educationEntries: EducationEntry[] = [
  {
    period: '____.__  ~  ____.__',
    school: '（학교명）',
    major: '（전공）',
    degree: '（졸업구분）',
  },
]

// ── 자격증 ─────────────────────────────────────────────────────────────────

export const certificationEntries: CertificationEntry[] = [
  // { name: '정보처리기사', issuer: '한국산업인력공단', date: '20__.__.' },
]

// ── 자기소개서 ─────────────────────────────────────────────────────────────

export const selfIntroduction: string[] = [
  '（자기소개서 내용을 작성해주세요）',
]
