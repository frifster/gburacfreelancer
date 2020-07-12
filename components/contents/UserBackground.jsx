import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { EDUCATIONS, EXPERIENCES, AFFILIATIONS } from '../../constants/enums'

const EventRenderer = ({ dateRange = '', label, location, desc }) => {
  return (
    <div className='event'>
      {
        dateRange ? (
          <div className='daterange'>
            <FontAwesomeIcon icon={faCalendarAlt} /> <span>{dateRange}</span>
          </div>
        ) : null
      }
      <div className='event-header'>
        <span className='event-label'>{label}</span>
        <span className='header-separator'> — </span>
        <span className='event-location'>{location}</span>
      </div>
      <div className='event-desc'>{desc}</div>
    </div>
  )
}

function UserBackground () {
  return (
    <div className='user-background'>
      <div className='experience'>
        <h3 className='sub-header'>EXPERIENCE</h3>
        <div className='experiences-list'>
          {
            EXPERIENCES.map((experience, index) => <EventRenderer key={'experience' + index} {...experience} />)
          }
        </div>
      </div>
      <div className='education'>
        <h3 className='sub-header'>EDUCATION</h3>
        <div className='education-list'>
          {
            EDUCATIONS.map((education, index) => <EventRenderer key={'education' + index} {...education} />)
          }
        </div>
      </div>
      <div className='affiliations'>
        <h3 className='sub-header'>AFFILIATIONS</h3>
        <div className='affiliation-list'>
          {
            AFFILIATIONS.map((affiliation, index) => <EventRenderer key={'affiliation' + index} {...affiliation} />)
          }
        </div>
      </div>
    </div>
  )
}

export default UserBackground
