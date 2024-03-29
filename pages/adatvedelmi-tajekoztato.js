import Layout from '../components/Layout'
import { NextSeo } from 'next-seo'
import ReactMarkdown from 'react-markdown'

function adatvedelmi({ cont }) {
  return (
    <>
      <NextSeo title='Cookie Kezelés' />

      <Layout>
        <div className='adatvedelmi-page-wrapper page'>
          <div className='container'>
            <div className='adatvedelmi-page'>
              <div className='title'>
                <h1>Adatvédelmi Tájékozató</h1>
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`)
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

export default adatvedelmi
