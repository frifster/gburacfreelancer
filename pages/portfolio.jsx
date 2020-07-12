import { withRouter } from 'next/router'
import { SKILLS_LIST, SKILL_CARDS } from '../constants/enums'
import { useImmer } from 'use-immer'
import { useEffect } from 'react'

function Portfolio ({ router }) {
  console.log('router', router)
  const [state, setState] = useImmer({
    selectedKey: 'all',
    filteredSkills: SKILL_CARDS
  })

  const setSelectedKey = key => setState(draft => {
    draft.selectedKey = key || 'all'
    draft.filteredSkills = (key && key !== 'all') ? SKILL_CARDS.filter(skill => skill.key === key) : SKILL_CARDS
  })

  useEffect(() => {
    if (router.query.key) {
      setSelectedKey(router.query.key)
      router.replace('/portfolio')
    }
  }, [router.query.key])

  return (
    <div className='portfolio-page'>
      <h1 className='portfolio-header'>Portfolio</h1>
      <div className='separator' />
      <div className='navigation-filter'>
        <span
          className='skill-nav'
          isactive={(state.selectedKey === 'all').toString()}
          onClick={() => setSelectedKey('all')}
        >
          All
        </span>
        {
          SKILLS_LIST.map((skill, index) => (
            <span
              title={skill.label}
              className='skill-nav'
              key={'skillnav' + index}
              isactive={(state.selectedKey === skill.key).toString()}
              onClick={() => setSelectedKey(skill.key)}
            >
              {skill.label}
            </span>
          ))
        }
        <div className='skills-cards'>
          {
            state.filteredSkills.map((skill, index) => (
              <div className='skill-card' key={'skill-card' + index}>
                <div className='skill-image' />
                <div className='skill-label'>{skill.label}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default withRouter(Portfolio)
