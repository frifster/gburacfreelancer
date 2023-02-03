import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faDownload, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { PERSONAL_INFO } from '../../constants/enums'
import SocialMedia from '../shared/SocialMedia'

function About() {
  const {
    quote,
    job,
    aboutMe,
    userPic,
    userHeader
  } = PERSONAL_INFO

  return (
    <section id='about'>
      <h1 className='about-header'>About <span className='emphasis'>Me</span></h1>
      <div className='separator' />
      <p className='opening-statement'>{quote}</p>
      <div className='personal-info'>
        <div className='image-container'>
          <img src={userPic} alt='My graduation picture' className='user-pic' />
        </div>
        <div className='introduction'>
          <h2 className='intro-header'>{userHeader}</h2>
          <p className='sub-intro'>{job}</p>
          <p className='long-intro'>{aboutMe}</p>
          <SocialMedia />
          <div className='action-buttons'>
            <a href='/gcb-resume.pdf' className='download-cv' download>
              Résumé <FontAwesomeIcon icon={faDownload} />
            </a>
            <Link href='/contact'>
              <span className='hire-me'>
                Contact Me <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
