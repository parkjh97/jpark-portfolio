import ko from '../../src/i18n/locales/ko'

export function ResumeHeader() {
  const { fields, photo } = ko.masthead.profile

  const fm: Record<string, string> = {}
  for (const f of fields) fm[f.label] = f.value

  return (
    <header className="resume-header">
      <h1 className="resume-title">이 력 서</h1>
      <table className="resume-info-table">
        <tbody>
          <tr>
            <th>성&nbsp;&nbsp;&nbsp;&nbsp;명</th>
            <td>{fm['이름'] ?? ''}</td>
            <td rowSpan={5} className="resume-photo-cell">
              <div className="resume-photo">
                <img src={photo.src} alt={photo.alt} />
              </div>
            </td>
          </tr>
          <tr>
            <th>생년월일</th>
            <td>{fm['생년월일'] ?? ''}</td>
          </tr>
          <tr>
            <th>연&nbsp;락&nbsp;처</th>
            <td>{fm['Phone'] ?? ''}</td>
          </tr>
          <tr>
            <th>이&nbsp;메&nbsp;일</th>
            <td>{fm['E-mail'] ?? ''}</td>
          </tr>
          <tr>
            <th>주&nbsp;&nbsp;&nbsp;&nbsp;소</th>
            <td>{fm['주소'] ?? ''}</td>
          </tr>
        </tbody>
      </table>
    </header>
  )
}
