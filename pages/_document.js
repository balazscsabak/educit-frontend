import { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
// import FavIcon from '../assets/image/favicon.png'

import { GA_TRACKING_ID } from '../utils/constans'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps
    }
  }

  render() {
    const { isProduction } = this.props

    return (
      <html lang='hu'>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Head>
          {/* <link rel='shortcut icon' type='image/x-icon' href={FavIcon} /> */}
          <Fragment>
            {/* Global Site Tag (gtag.js) - Google Analytics */}+
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `
              }}
            />
          </Fragment>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
