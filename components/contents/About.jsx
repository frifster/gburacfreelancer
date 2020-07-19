import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { faDownload, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { PERSONAL_INFO } from '../../constants/enums'
import SocialMedia from '../shared/SocialMedia'

function About () {
  const {
    quote,
    firstName,
    lastName,
    birthDate,
    job,
    nationality,
    availability,
    email,
    school,
    contactNumber,
    address,
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
          <div className='user-info'>
            <div className='user-name'><span className='label'>Name:</span> {`${firstName} ${lastName}`}</div>
            <div className='user-birth'><span className='label'>Date Of Birth:</span> {birthDate}</div>
            <div className='user-nation'><span className='label'>Nationality:</span> {nationality}</div>
            <div className='user-free'><span className='label'>Freelance:</span> {availability}</div>
            <div className='user-email'><span className='label'>Email:</span> {email}</div>
            <div className='user-school'><span className='label'>Education:</span> {school}</div>
            <div className='user-phone'><span className='label'>Phone:</span> {contactNumber}</div>
            <div className='user-address'><span className='label'>Address:</span> {address}</div>
          </div>
          <SocialMedia />
          <div className='action-buttons'>
            <a href='/resume-gburac.pdf' className='download-cv' download>
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
