import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialMedia from '../components/shared/SocialMedia'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import { useImmer } from 'use-immer'
import Typist from 'react-typist'

function Landing() {
  const router = useRouter()
  const handleOnclickNext = () => {
    setState(draft => { draft.fadeIn = false })
    setTimeout(() => {
      router.push('/me')
        .then(() => window.scrollTo(0, 0))
    }, 600)
  }

  const [state, setState] = useImmer({
    text: 'SEO Specialist',
    index: 0,
    fadeIn: true
  })

  const USER_TITLE = [
    'Operations Manager',
    'Executive Assistant',
    'SEO Specialist',
    'Content Creator',
  ]

  const handleOnTypingDone = () => {
    setTimeout(() => {
      setState(draft => {
        draft.text = ''
      })

      setState(draft => {
        draft.index++
        draft.text = USER_TITLE[draft.index % USER_TITLE.length]
      })
    }, 2000)
  }

  return (
    <div className='landing-page'>
      <SocialMedia />
      <h1 className='landing-header'>I am Ghia Burac</h1>
      <div className='landing-banner'>
        {
          state.text && (
            <Typist cursor={{ show: false }} onTypingDone={handleOnTypingDone}>
              {state.text}
            </Typist>
          )
        }
      </div>
      <div className='next-button' onClick={handleOnclickNext}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  )
}

export default Landing
