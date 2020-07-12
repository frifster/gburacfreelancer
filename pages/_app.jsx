import { useEffect } from 'react'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { config, dom } from '@fortawesome/fontawesome-svg-core'

import '../assets/scss/app.scss'

config.autoAddCss = false
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`

function App ({ Component, pageProps }) {
  console.log({ Component, pageProps })
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Ghia CV</title>
        <link rel='icon' href='/assets/images/favicon.png' />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
