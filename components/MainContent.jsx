// import Home from './contents/Home'
import About from './contents/About'
import UserBackground from './contents/UserBackground'

function MainContent () {
  return (
    <main id='main'>
      <span className='vfx-back-mobile' id='vfx-back-mobile'><i className='fa fa-arrow-right' /></span>
      {/* <Home /> */}
      <About />
      <hr />
      <UserBackground />
    </main>
  )
}

export default MainContent
