import About from './contents/About'
import UserBackground from './contents/UserBackground'
import Skills from './contents/Skills'

function MainContent () {
  return (
    <main id='main'>
      <span className='vfx-back-mobile' id='vfx-back-mobile'><i className='fa fa-arrow-right' /></span>
      <About />
      <hr />
      <UserBackground />
      <Skills />
    </main>
  )
}

export default MainContent
