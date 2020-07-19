import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faLocationArrow, faPhoneAlt, faMailBulk, faHardHat } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from '@material-ui/core'
import { useImmer } from 'use-immer'
import axios from 'axios'

import { SKILLS_LIST, PERSONAL_INFO, SKILL_PAIRS, SENGRID_SENDER } from '../constants/enums'
import HomeFloatNav from '../components/shared/HomeFloatNav'

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

function Contact () {
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    selectedService: '',
    disabled: false,
    snackBar: false,
    errors: false,
    errorMessage: ''
  }
  const [state, setState] = useImmer(initialState)

  const handleInputChange = (event, field) => {
    event.persist()
    setState(draft => { draft[field] = event.target.value })
  }

  const isValid = ({ name, email, subject, message, selectedService }) => {
    const errors = []

    if (!name || !email || !subject || !message || !selectedService) {
      errors.push('All fields are required.')
    }

    return {
      isEmailValid: errors.length === 0,
      errors
    }
  }

  const setDisabled = boolean => setState(draft => { draft.disabled = boolean })

  const handleSendMail = async () => {
    const newMail = {
      name: state.name,
      email: state.email,
      subject: state.subject,
      message: state.message,
      selectedService: state.selectedService
    }

    const { isEmailValid, errors } = isValid(newMail)

    if (isEmailValid) {
      setDisabled(true)

      await axios.post('/api/send-email', {
        to: PERSONAL_INFO.email,
        from: SENGRID_SENDER,
        subject: `[PORTFOLIO] ${newMail.subject}`,
        message: `
          <p><strong>Selected Service:</strong> ${SKILL_PAIRS[newMail.selectedService]}</p>
          <p><strong>From:</strong> ${newMail.email}</p>
          <p><strong>Name:</strong> ${newMail.name}</p>
          <p><strong>Message:</strong> ${newMail.message}</p>
        `
      }, {
        headers: { 'Content-Type': 'application/json' }
      })

      setDisabled(false)
      setState(draft => {
        draft.snackBar = true
        draft.name = ''
        draft.email = ''
        draft.subject = ''
        draft.message = ''
      })
    }

    if (!isEmailValid) {
      setErrors(errors.join(', '))
    }
  }

  const setErrors = (errorMessage) => {
    setState(draft => {
      draft.errors = true
      draft.errorMessage = errorMessage
    })
  }

  const handleOnClose = () => {
    setState(draft => {
      draft.snackBar = false
      draft.errors = false
    })
  }

  const handleUpworkClick = () => window.open(PERSONAL_INFO.upworkLink, '_blank')

  return (
    <div className='contact-page main'>
      <HomeFloatNav />
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={state.snackBar} autoHideDuration={1000} onClose={handleOnClose}>
        <Alert severity='success'>
          Email Sent!
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={state.errors} autoHideDuration={1000} onClose={handleOnClose}>
        <Alert severity='error'>
          {state.errorMessage}
        </Alert>
      </Snackbar>
      <h1 className='contact-header'>Get <span className='emphasis'>In Touch</span></h1>
      <div className='separator' />
      <div className='contact-form'>
        <TextField
          className='global-input contact-name'
          label='Name'
          variant='outlined'
          value={state.name}
          onChange={e => handleInputChange(e, 'name')}
          inputProps={{ maxLength: 100 }}
        />
        <TextField
          className='global-input contact-email'
          label='Email'
          variant='outlined'
          value={state.email}
          onChange={e => handleInputChange(e, 'email')}
          inputProps={{ maxLength: 100 }}
        />
        <TextField
          className='global-input contact-subject'
          label='Subject'
          variant='outlined'
          value={state.subject}
          onChange={e => handleInputChange(e, 'subject')}
          inputProps={{ maxLength: 100 }}
        />
        <TextField
          className='global-input contact-message'
          label='Message'
          multiline
          rows={6}
          variant='outlined'
          value={state.message}
          onChange={e => handleInputChange(e, 'message')}
          inputProps={{ maxLength: 300 }}
        />
        <TextField
          className='global-input contact-service'
          select
          label='Select a service'
          variant='outlined'
          value={state.selectedService}
          onChange={e => handleInputChange(e, 'selectedService')}
        >
          {SKILLS_LIST.map((option) => (
            <MenuItem key={option.key} value={option.key}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <button className='contact-send' disabled={state.disabled} onClick={handleSendMail}>
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

        <div className='contact-card' onClick={handleUpworkClick}>
          <span className='contact-icon'>
            <FontAwesomeIcon icon={faHardHat} />
          </span>
          <span className='add-label'>
            Upwork Profile
          </span>
          <span className='add-detail'>
            Upwork
          </span>
        </div>

      </div>
    </div>
  )
}

export default Contact
