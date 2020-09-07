import Layout from '../components/Layout'
import { NextSeo } from 'next-seo'

function hirlevel({ subscribe }) {
  const subsHtml = subscribe.html
  const title = subscribe.title
  const text = subscribe.text

  return (
    <>
      <NextSeo title='Hírlevél' />

      <Layout>
        <div className='hirlevel-page-wrapper page'>
          <div className='container'>
            <div className='hirlevel-page'>
              <div className='title'>
                <h1>{title}</h1>
              </div>
              <div className='subs-text'>
                <p>{text}</p>
              </div>
              <div className='subs-form-wrapper'>
                <div
                  className='subs-form'
                  dangerouslySetInnerHTML={{ __html: subsHtml }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ res, req }) {
  try {
    const subsDataRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/subscribe`
    )

    if (!subsDataRes.status == 200) {
      throw new Error('Error on req subscribe data')
    }

    const subscribe = await subsDataRes.json()

    return {
      props: { subscribe }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}

export default hirlevel
