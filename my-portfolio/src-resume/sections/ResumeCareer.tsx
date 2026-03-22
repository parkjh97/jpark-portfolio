import ko from '../../src/i18n/locales/ko'
import { careerCompanies } from '../../src/data/content'
import { careerHighlightTechStacks, certificationEntries } from '../../src/data/resumeData'
import { t } from '../utils/t'

export function ResumeCareer() {
  return (
    <>
      {/* ── 경력 ── */}
      <section className="resume-block">
        <h2 className="resume-block__title">경 력</h2>

        {careerCompanies.map((company) => {
          const period = t(company.periodKey)
          const desc = t(company.descriptionKey).replace(/^"|"$/g, '')
          const name = t(company.logoTextKey ?? '')
          const roles = company.rolesKeys.map((k) => t(k))

          return (
            <div key={company.id}>
              {/* 회사 헤더 */}
              <div className="resume-career-header">
                <div className="resume-career-header__period">{period}</div>
                <div className="resume-career-header__info">
                  <span className="resume-career-header__name">{name}</span>
                  <span className="resume-career-header__sub">{desc}</span>
                  <div className="resume-career-header__role">
                    {roles.map((r) => (
                      <span key={r} className="resume-career-role-chip">{r}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 프로젝트 목록 */}
              <div className="resume-career-projects">
                {company.highlights.map((hl) => {
                  // highlight key 추출: "career.companies.qbicware.highlights.erp.title"
                  // → "erp" / "viewT" / "localBusiness"
                  const hlKey = hl.titleKey.split('.').at(-2) ?? ''
                  const title = t(hl.titleKey)
                  const hlPeriod = t(hl.periodKey)
                  const hlDesc = t(hl.descriptionKey)
                  const techStack = careerHighlightTechStacks[hlKey] ?? []

                  // highlights 순서가 ko.ts 에 정의된 순서와 일치
                  const hlIndex = company.highlights.indexOf(hl)
                  const koHighlights = ko.career.companies.qbicware.highlights
                  const hlKeys = Object.keys(koHighlights)
                  const resolvedKey = hlKeys[hlIndex] ?? hlKey

                  const resolvedStack = careerHighlightTechStacks[resolvedKey] ?? techStack

                  return (
                    <div key={hl.id} className="resume-career-project">
                      <div className="resume-career-project__header">
                        <span className="resume-career-project__name">{title}</span>
                        <span className="resume-career-project__period">{hlPeriod}</span>
                      </div>
                      {resolvedStack.length > 0 && (
                        <p className="resume-career-project__stack">
                          <strong>기술스택:</strong> {resolvedStack.join(', ')}
                        </p>
                      )}
                      <p className="resume-career-project__desc">{hlDesc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>

      {/* ── 자격증 (항목이 있을 때만) ── */}
      {certificationEntries.length > 0 && (
        <section className="resume-block">
          <h2 className="resume-block__title">자 격 증</h2>
          <table className="resume-table">
            <thead>
              <tr>
                <th>자격증명</th>
                <th style={{ width: '160px' }}>발급기관</th>
                <th style={{ width: '88px' }}>취득일</th>
              </tr>
            </thead>
            <tbody>
              {certificationEntries.map((c, i) => (
                <tr key={i}>
                  <td>{c.name}</td>
                  <td style={{ textAlign: 'center' }}>{c.issuer}</td>
                  <td style={{ textAlign: 'center' }}>{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  )
}
