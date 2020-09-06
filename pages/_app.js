import Router from 'next/router'
import '../styles/styles.scss'
import * as gtag from '../utils/functions'

// Track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
