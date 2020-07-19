import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { PERSONAL_INFO } from '../../constants/enums'

function SocialMedia () {
  const {
    fbLink,
    linkedIn,
    twitter
  } = PERSONAL_INFO

  return (
    <div className='social-media'>
      <a className='soc-med-icon' href={fbLink} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className='soc-med-icon' href={linkedIn} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a className='soc-med-icon' href={twitter} target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  )
}

export default SocialMedia
