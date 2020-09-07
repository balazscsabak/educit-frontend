import Layout from '../components/Layout'
import { NextSeo } from 'next-seo'

function adatvedelmi() {
  return (
    <>
      <NextSeo title='Adatvédelmi Tájékozató' />

      <Layout>
        <div className='adatvedelmi-page-wrapper page'>
          <div className='container'>
            <div className='adatvedelmi-page'>
              <div className='title'>
                <h1>Adatvédelmi Tájékozató</h1>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default adatvedelmi
