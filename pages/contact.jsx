import TextField from '@material-ui/core/TextField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faLocationArrow, faPhoneAlt, faMailBulk, faHardHat } from '@fortawesome/free-solid-svg-icons'
import { SKILLS_LIST, PERSONAL_INFO } from '../constants/enums'
import { MenuItem } from '@material-ui/core'
import HomeFloatNav from '../components/shared/HomeFloatNav'

function Contact () {
  return (
    <div className='contact-page'>
      <HomeFloatNav />
      <h1 className='contact-header'>Get <span className='emphasis'>In Touch</span></h1>
      <div className='separator' />
      <div className='contact-form'>
        <TextField className='global-input contact-name' label='Name' variant='outlined' />
        <TextField className='global-input contact-email' label='Email' variant='outlined' />
        <TextField className='global-input contact-number' label='Mobile Number' variant='outlined' />
        <TextField className='global-input contact-subject' label='Subject' variant='outlined' />
        <TextField
          className='global-input contact-message'
          label='Message'
          multiline
          rows={6}
          variant='outlined'
        />
        <TextField
          className='global-input contact-service'
          select
          label='Select a service'
          variant='outlined'
        >
          {SKILLS_LIST.map((option) => (
            <MenuItem key={option.key} value={option.key}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <button className='contact-send'>
            Send <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
      <div className='additional-contact'>

        <div className='contact-card'>
          <span className='contact-icon'>
            <FontAwesomeIcon icon={faLocationArrow} />
          </span>
          <span className='add-label'>
            Location
          </span>
          <span className='add-detail'>
            {PERSONAL_INFO.address}
          </span>
        </div>

        <div className='contact-card'>
          <span className='contact-icon'>
            <FontAwesomeIcon icon={faPhoneAlt} />
          </span>
          <span className='add-label'>
            Phone Number
          </span>
          <span className='add-detail'>
            {PERSONAL_INFO.contactNumber}
          </span>
        </div>

        <div className='contact-card'>
          <span className='contact-icon'>
            <FontAwesomeIcon icon={faMailBulk} />
          </span>
          <span className='add-label'>
            Email Address
          </span>
          <span className='add-detail'>
            {PERSONAL_INFO.email}
          </span>
        </div>

        <div className='contact-card'>
          <span className='contact-icon'>
            <FontAwesomeIcon icon={faHardHat} />
          </span>
          <span className='add-label'>
            Upwork Profile
          </span>
          <span className='add-detail'>
            <a href={PERSONAL_INFO.upworkLink} target='_blank' rel='noreferrer noopener'>Upwork</a>
          </span>
        </div>

      </div>
    </div>
  )
}

export default Contact
