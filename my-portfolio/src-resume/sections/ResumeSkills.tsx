import { skillGroups } from '../../src/data/content'
import { t } from '../utils/t'

export function ResumeSkills() {
  return (
    <section className="resume-block">
      <h2 className="resume-block__title">기 술</h2>
      <table className="resume-table">
        <tbody>
          {skillGroups.map((group) => {
            const groupTitle = t(`skills.groups.${group.id}.title`)
            return group.items.map((item, itemIdx) => {
              const itemTitle = t(`skills.groups.${group.id}.items.${item.id}.title`)
              return (
                <tr key={item.id}>
                  {itemIdx === 0 && (
                    <th rowSpan={group.items.length} style={{ width: '94px' }}>
                      {groupTitle}
                    </th>
                  )}
                  <td className="resume-skills__sub">
                    {itemTitle}
                  </td>
                  <td>{item.techs.map((tech) => tech.name).join(' · ')}</td>
                </tr>
              )
            })
          })}
        </tbody>
      </table>
    </section>
  )
}
