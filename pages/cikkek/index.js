import Layout from '../../components/Layout'
import SinglePost from '../../components/Posts/SinglePost'
import Pagination from '../../components/Pagination'
import { NextSeo } from 'next-seo'

function cikkek({ posts, count }) {
  return (
    <>
      <NextSeo title='Cikkek' />
      <Layout>
        <div className='cikkek-page-wrapper page'>
          <div className='container'>
            <div className='cikkek-page'>
              <div className='title'>
                <h1>Cikkek</h1>
              </div>
              <div className='order'>
                <label htmlFor='order'>Rendezés:</label>
                <select name='order' id='order'>
                  <option defaultValue value='createdAt'>
                    Legújabb
                  </option>
                  <option value='top'>Legolvasottabb</option>
                </select>
              </div>
              <div className='posts'>
                {posts.map((post) => {
                  return <SinglePost post={post} key={post.id} />
                })}
              </div>
              <div className='pagination'>
                <Pagination
                  count={count}
                  current={1}
                  itemPerPage={process.env.NEXT_PUBLIC_POSTS_PER_PAGE}
                  hrefUrl='/cikkek/[cikk_paged]'
                  asHrefUrl='/cikkek/'
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ res }) {
  try {
    const countRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/count`
    )

    if (countRes.status == 200) {
      const count = await countRes.json()
      const postsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/posts?_limit=${process.env.NEXT_PUBLIC_POSTS_PER_PAGE}&_sort=createdAt:desc`
      )

      if (postsRes.status === 200) {
        const posts = await postsRes.json()

        return {
          props: {
            posts,
            count
          }
        }
      } else {
        res.setHeader('location', '/404')
        res.statusCode = 302
        res.end()
      }
    }
  } catch (err) {
    console.log(err)
    res.setHeader('location', '/404')
    res.statusCode = 404
    res.end()
  }
}

export default cikkek
