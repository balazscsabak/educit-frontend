import Layout from '../components/Layout'
import { NextSeo } from 'next-seo'
import ReactMarkdown from 'react-markdown'

function cookiePolicy({ cont }) {
  return (
    <>
      <NextSeo title='Adatvédelmi Tájékozató' />

      <Layout>
        <div className='adatvedelmi-page-wrapper page'>
          <div className='container'>
            <div className='adatvedelmi-page'>
              <div className='title'>
                <h1>Cookie Kezelés</h1>
              </div>
              <div className='page-content'>
                <ReactMarkdown source={cont} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cookie-policy`)
  let cont = ''

  if (res.ok) {
    const resRaw = await res.json()
    cont = resRaw.content
  }

  return {
    props: {
      cont
    }
  }
}
export default cookiePolicy
