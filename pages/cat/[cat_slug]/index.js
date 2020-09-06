import Layout from '../../../components/Layout'
import Link from 'next/link'
import SinglePost from '../../../components/Posts/SinglePost'
import Pagination from '../../../components/Pagination'

function singleCategory({ cat, posts, count }) {
  return (
    <Layout>
      <div className='category-page-wrapper page'>
        <div className='container'>
          <div className='category-page'>
            <div className='backto'>
              <Link href='/kategoriak'>
                <a>Kategóriák</a>
              </Link>
            </div>
            <div style={{ backgroundColor: cat.color }} className='title'>
              <h1>{cat.cat_name}</h1>
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
                hrefUrl={`/cat/[cat_slug]/[cat_paged]`}
                asHrefUrl={`/cat/${cat.slug}/`}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params, res }) {
  try {
    const catSlug = params.cat_slug
    const validRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories?slug=${catSlug}`
    )

    if (validRes.status != 200) {
      throw new Error('Not 200 status response')
    }

    const cat = await validRes.json()

    if (cat.length == 0) {
      throw new Error('Data not found')
    }

    const postsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?category.slug=${catSlug}&_limit=${process.env.NEXT_PUBLIC_POSTS_PER_PAGE}`
    )

    if (postsRes.status != 200) {
      throw new Error('Not 200 status response')
    }

    const posts = await postsRes.json()

    const countRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/count?category.slug=${catSlug}`
    )

    if (countRes.status != 200) {
      throw new Error('Not 200 status response')
    }

    const count = await countRes.json()

    return {
      props: {
        cat: cat[0],
        posts,
        count
      }
    }
  } catch (err) {
    console.log(err)
    res.setHeader('location', '/404')
    res.statusCode = 302
    res.end()

    return {
      props: {
        catSlug,
        valid: true
      }
    }
  }
}
export default singleCategory
