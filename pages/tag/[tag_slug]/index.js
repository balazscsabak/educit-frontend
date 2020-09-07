import Layout from '../../../components/Layout'
import Link from 'next/link'
import SinglePost from '../../../components/Posts/SinglePost'
import Pagination from '../../../components/Pagination'
import { NextSeo } from 'next-seo'

function singleTag({ tag, posts, count }) {
  return (
    <>
      <NextSeo title={`Címke: ${tag.tag_name}`} />

      <Layout>
        <div className='tag-page-wrapper page'>
          <div className='container'>
            <div className='tag-page'>
              <div className='backto'>
                <Link href='/tags'>
                  <a>Címkék</a>
                </Link>
              </div>
              <div className='title'>
                <h1>Címke: {tag.tag_name}</h1>
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
                  hrefUrl={`/tag/[tag_slug]/[tag_paged]`}
                  asHrefUrl={`/tag/${tag.slug}/`}
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
    const tagSlug = params.tag_slug
    const validRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tags?slug=${tagSlug}`
    )

    if (validRes.status != 200) {
      throw new Error('Not 200 status response')
    }

    const tag = await validRes.json()

    if (tag.length == 0) {
      throw new Error('Data not found')
    }

    const postsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?tags.slug=${tagSlug}&_limit=${process.env.NEXT_PUBLIC_POSTS_PER_PAGE}`
    )

    if (postsRes.status != 200) {
      throw new Error('Not 200 status response')
    }

    const posts = await postsRes.json()

    const countRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/count?tags.slug=${tagSlug}`
    )

    if (countRes.status != 200) {
      throw new Error('Not 200 status response')
    }

    const count = await countRes.json()

    return {
      props: {
        tag: tag[0],
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
        tagSlug,
        valid: true
      }
    }
  }
}
export default singleTag
