import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faFile } from '@fortawesome/free-solid-svg-icons'

function About () {
  return (
    <section id='about'>
      <h1 className='about-header'>About <span className='emphasis'>Me</span></h1>
      <div className='separator' />
      <p className='opening-statement'>
        Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua enim sed do sit.
      </p>
      <div className='personal-info'>
        <div className='image-container'>
          <img src='/assets/images/user_about_4.jpg' alt='' className='user-pic' />
        </div>
        <div className='introduction'>
          <h2 className='intro-header'>
            Hi, I'm Ghia Burac, ang pinakamagandang dilag sa balat ng lupa.
          </h2>
          <p className='sub-intro'>
            - It's My Pleasure to Introduce About Myself.
          </p>
          <p className='long-intro'>
            I'm Sarah Brown Australia. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am.
          </p>
          <div className='user-info'>
            <div className='user-name'><span className='label'>Name:</span> Sarah Brown</div>
            <div className='user-birth'><span className='label'>Date Of Birth:</span> 25 March, 1992</div>
            <div className='user-work'><span className='label'>Work Status:</span> Web Designer</div>
            <div className='user-nation'><span className='label'>Nationality:</span> Filipino</div>
            <div className='user-free'><span className='label'>Freelance:</span> Available</div>
            <div className='user-email'><span className='label'>Email:</span> info@example.com</div>
            <div className='user-school'><span className='label'>Study:</span> Chicago University</div>
            <div className='user-phone'><span className='label'>Phone:</span> (+12) 113-804-9098</div>
            <div className='user-address'><span className='label'>Address:</span> 245 Proctor St USA</div>
            <div className='user-website'><span className='label'>Website:</span> www.mywebsite.com</div>
          </div>
          <div className='social-media'>
            <div className='soc-med-icon'><FontAwesomeIcon icon={faFacebookF} /></div>
            <div className='soc-med-icon'><FontAwesomeIcon icon={faLinkedinIn} /></div>
            <div className='soc-med-icon'><FontAwesomeIcon icon={faTwitter} /></div>
            <div className='soc-med-icon'><FontAwesomeIcon icon={faPinterestP} /></div>
          </div>
          <div className='action-buttons'>
            <button className='download-cv'>
              DOWNLOAD CV <FontAwesomeIcon icon={faDownload} />
            </button>
            <button className='hire-me'>
              Hire Me <FontAwesomeIcon icon={faFile} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
