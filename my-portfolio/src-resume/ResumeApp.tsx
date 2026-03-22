import { ResumeHeader } from './sections/ResumeHeader'
import { ResumeEducation } from './sections/ResumeEducation'
import { ResumeCareer } from './sections/ResumeCareer'
import { ResumeSkills } from './sections/ResumeSkills'
import { ResumeSelfIntro } from './sections/ResumeSelfIntro'

/**
 * 이력서 레이아웃
 * - Page 1: 인적사항 / 학력 / 경력(프로젝트 포함) / 기술
 * - Page 2: 자기소개서
 * ※ 프로젝트 상세 별도 페이지 없음 (경력 섹션에 통합)
 */
export function ResumeApp() {
  return (
    <div className="resume-root">

      {/* ── Page 1 ── */}
      <div className="resume-page">
        <ResumeHeader />
        <ResumeEducation />
        <ResumeCareer />
        <ResumeSkills />
      </div>

      {/* ── Page 2: 자기소개서 ── */}
      <div className="resume-page resume-page--break">
        <ResumeSelfIntro />
      </div>

    </div>
  )
}
