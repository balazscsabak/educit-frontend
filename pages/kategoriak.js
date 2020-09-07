import Layout from '../components/Layout'
import Category from '../components/Categories/Categories'
import { NextSeo } from 'next-seo'

function categories({ categories }) {
  return (
    <>
      <NextSeo title='Kategóriák' />

      <Layout>
        <div className='categories-page-wrapper page'>
          <div className='container'>
            <div className='categories-page'>
              <div className='title'>
                <h1>Kategóriák</h1>
              </div>
              <div className='categories'>
                {categories.map((cat) => {
                  return <Category key={cat.id} cat={cat} />
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(ctx) {
  try {
    const categoriesRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories`
    )
    const categories = await categoriesRes.json()

    return {
      props: { categories }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}

export default categories
