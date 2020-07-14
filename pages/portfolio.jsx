import { withRouter } from 'next/router'
import { useImmer } from 'use-immer'
import { useEffect } from 'react'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'

import { SKILLS_LIST, SKILL_CARDS } from '../constants/enums'
import HomeFloatNav from '../components/shared/HomeFloatNav'

function Portfolio ({ router }) {
  const [state, setState] = useImmer({
    selectedKey: 'all',
    filteredSkills: SKILL_CARDS,
    selectedImage: '',
    imageModal: false
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

  const handleOpenLargeImage = (img) => {
    setState(draft => {
      draft.selectedImage = img
      draft.imageModal = !!img
    })
  }

  return (
    <div className='portfolio-page'>
      <HomeFloatNav />
      {
        state.selectedImage && (
          <Modal
            disablePortal
            open={state.imageModal}
            onClose={() => handleOpenLargeImage('')}
            closeAfterTransition
            className='large-image-modal'
            onEscapeKeyDown={() => handleOpenLargeImage('')}
          >
            <Fade in={state.imageModal}>
              <div className='large-image-container'>
                <img className='skill-large-image' src={state.selectedImage} />
              </div>
            </Fade>
          </Modal>
        )
      }

      <h1 className='portfolio-header'>Portfolio</h1>
      <div className='separator' />
      <div className='navigation-filter'>
        <span
          className='skill-nav'
          isactive={(state.selectedKey === 'all').toString()}
          onClick={() => setSelectedKey('all')}
          title='All'
        >
          All
        </span>
        {
          SKILLS_LIST.filter(skill => !skill.disable).map((skill, index) => (
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
              <div className='skill-card' key={'skill-card' + index} onClick={() => handleOpenLargeImage(skill.image)}>
                <div className='skill-image-container'>
                  {
                    skill.image ? <img className='skill-image' src={skill.image} /> : null
                  }
                </div>
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
