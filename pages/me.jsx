import About from '../components/contents/About'
import UserBackground from '../components/contents/UserBackground'
import Skills from '../components/contents/Skills'

function Home () {
  return (
    <main className='main'>
      <span className='vfx-back-mobile' id='vfx-back-mobile'><i className='fa fa-arrow-right' /></span>
      <About />
      <hr />
      <UserBackground />
      <Skills />
    </main>
  )
}

export default Home
