import Layout from '../../components/Layout'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import ReactMarckdown from 'react-markdown'

function gyorstalpaloSlug({ item }) {
  const transformImageUri = (uri) => {
    let newUri = process.env.NEXT_PUBLIC_API_URL + uri

    return newUri
  }

  return (
    <>
      <NextSeo title='Gyorstalpaló' />

      <Layout>
        <div className='single-gyt-page-wrapper page'>
          <div className='container'>
            <div className='single-gyt'>
              <div className='title'>
                <h1>Gyorstalpaló: {item.name}</h1>
              </div>
              <div className='single'>
                <ReactMarckdown
                  transformImageUri={transformImageUri}
                  source={item.content}
                  escapeHtml={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params, res }) {
  try {
    const { slug } = params
    const validSlugRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gyorstalpalos?slug=${slug}`
    )

    let item = []

    if (!validSlugRes.ok) {
      throw new Error('Error On Request')
    }

    const resRaw = await validSlugRes.json()

    if (resRaw.length === 0) {
      throw new Error('Not Found ')
    }

    item = resRaw[0]

    return {
      props: { item }
    }
  } catch (err) {
    res.setHeader('location', '/404')
    res.statusCode = 302
    res.end()
  }
}

export default gyorstalpaloSlug
