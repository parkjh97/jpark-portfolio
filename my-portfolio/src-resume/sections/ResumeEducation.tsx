import { educationEntries } from '../../src/data/resumeData'

export function ResumeEducation() {
  return (
    <section className="resume-block">
      <h2 className="resume-block__title">학 력</h2>
      <table className="resume-table">
        <thead>
          <tr>
            <th style={{ width: '145px' }}>재학기간</th>
            <th>학교명</th>
            <th>전공</th>
            <th style={{ width: '76px' }}>졸업구분</th>
          </tr>
        </thead>
        <tbody>
          {educationEntries.map((e, i) => (
            <tr key={i}>
              <td style={{ textAlign: 'center' }}>{e.period}</td>
              <td style={{ textAlign: 'center' }}>{e.school}</td>
              <td style={{ textAlign: 'center' }}>{e.major}</td>
              <td style={{ textAlign: 'center' }}>{e.degree}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
