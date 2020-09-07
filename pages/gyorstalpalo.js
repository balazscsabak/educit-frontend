import Layout from '../components/Layout'
import { NextSeo } from 'next-seo'

function gyorstalpalo(props) {
  return (
    <>
      <NextSeo title='Gyorstalpaló' />

      <Layout>
        <div className='gyorstalpalo-page-wrapper page'>
          <div className='container'>
            <div className='gyorstalpalo-page'>
              <div className='title'>
                <h1>Gyorstalpaló</h1>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default gyorstalpalo
