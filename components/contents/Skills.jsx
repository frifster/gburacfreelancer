import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SKILLS_LIST } from '../../constants/enums'

function Skills () {
  return (
    <div className='skills-container'>
      <h3 className='sub-header'>MY SKILLS</h3>
      <div className='skills-list'>
        {
          SKILLS_LIST.map((skill, index) => (
            <div className='skill-container' key={`skill${index}`}>
              <div className='skill-icon'>
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <div className='skill-label'>
                {skill.label}
              </div>
              <div className='skill-desc'>{skill.desc}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
