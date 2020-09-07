import Router from 'next/router'
import '../styles/styles.scss'
import * as gtag from '../utils/functions'
import { DefaultSeo } from 'next-seo'
import { SEO_DEF } from '../utils/constans'

// Track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO_DEF} />
      <Component {...pageProps} />
    </>
  )
}
