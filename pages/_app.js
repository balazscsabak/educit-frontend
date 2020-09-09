import Router from 'next/router'
import '../styles/styles.scss'
import '../styles/mobile.scss'
import * as gtag from '../utils/functions'
import { DefaultSeo } from 'next-seo'
import { SEO_DEF } from '../utils/constans'
import Head from 'next/head'

// Track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO_DEF} />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
