import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { config, dom } from '@fortawesome/fontawesome-svg-core'

import '../assets/scss/app.scss'

import MainHeader from '../components/MainHeader'
import MainContent from '../components/MainContent'

config.autoAddCss = false
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`

function App () {
  return (
    <>
      <Head>
        <title>Ghia CV</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='light dark-header bgimage'>
        <div className='page animated' style={{ animationDuration: '500ms' }}>
          <GlobalStyles />
          <MainHeader />
          <MainContent />
        </div>
      </div>
    </>
  )
}

export default App
