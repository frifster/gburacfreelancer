import { PERSONAL_INFO } from '../../constants/enums'

function PersonalInfo () {
  const {
    firstName,
    lastName,
    country,
    birthDate,
    job,
    nationality,
    availability
  } = PERSONAL_INFO

  const fullname = `${firstName} ${lastName}`

  return (
    <div className='row vfx-personal-about-info'>
      <div className='col-xl-5 col-lg-5 col-md-12 col-sm-12'>
        <div className='image-container'> <img className='img-fluid d-block' src='#' alt='' /> </div>
        <p className='d-block d-md-none'>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
      </div>
      <div className='row col-xl-7 col-lg-7 col-md-12 about-info-item'>
        <div className='col-xl-12 col-lg-12 col-md-12 mb-3 about-dtl'>
          <h2>Hi, I'm {fullname} Creative Web Designer Based in {country}.</h2>
          <p>- It's My Pleasure to Introduce About Myself.</p>
          <p>I'M {fullname}. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am.</p>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 about-dtl'>
          <ul className='list-1'>
            <li>
              <h6><span className='font-weight-600'>Name:</span>{fullname}</h6>
            </li>
            <li>
              <h6><span className='font-weight-600'>Date of Birth:</span>{birthDate}</h6>
            </li>
            <li>
              <h6><span className='font-weight-600'>Work Status:</span>{job}</h6>
            </li>
            <li>
              <h6><span className='font-weight-600'>Nationality:</span>{nationality}</h6>
            </li>
            <li>
              <h6><span className='font-weight-600'>Freelance:</span>{availability}</h6>
            </li>
          </ul>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 about-dtl'>
          <ul className='list-2'>
            <li>
              <h6><span className='font-weight-600'>Email:</span><a href='#'>info@example.com</a></h6>
            </li>
            <li>
              <h6><span className='font-weight-600'>Study:</span>Chicago University</h6>
            </li>
            <li>
              <h6><span className='font-weight-600'>Phone:</span><a href='#'>09976099219</a></h6>
            </li>
            <li>
              <h6><span className='font-weight-600'>Address:</span>245 Proctor St USA</h6>
            </li>
            <li>
              <h6><span className='font-weight-600'>Website:</span><a href='#'>www.mywebsite.com</a></h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
