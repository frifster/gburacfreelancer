import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

import { SKILLS_LIST } from '../../constants/enums'

function Skills () {
  const router = useRouter()
  const handleOnclick = (key) => {
    router.push('/portfolio?key=' + key)
      .then(() => window.scrollTo(0, 0))
  }
  return (
    <div className='skills-container'>
      <h3 className='sub-header'>MY SKILLS</h3>
      <div className='skills-list'>
        {
          SKILLS_LIST.map((skill, index) => (
            <div className='skill-container' key={`skill${index}`} onClick={() => handleOnclick(skill.disable ? 'all' : skill.key)}>
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
