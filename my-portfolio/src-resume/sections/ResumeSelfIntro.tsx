import { selfIntroduction } from '../../src/data/resumeData'

export function ResumeSelfIntro() {
  return (
    <section className="resume-block">
      <h2 className="resume-block__title">자 기 소 개 서</h2>
      <div className="resume-selfintro__body">
        {selfIntroduction.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  )
}
