import Layout from '../../components/Layout'
import { NextSeo } from 'next-seo'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from 'react-share'
import Link from 'next/link'

function SinglePost({ post, url }) {
  const createdBy = post.created_by.username
  const createdAt = moment(post.createdAt).format('YYYY.MM.DD. - h:mm')
  const excerpt = post.excerpt
  const tags = post.tags
  const displayTags = tags.map((tag) => {
    return (
      <Link href='/tag/[tag_slug]' as={`/tag/${tag.slug}`}>
        <a>
          <div key={tag.id}>{tag.tag_name}</div>
        </a>
      </Link>
    )
  })
  const content = post.content

  const transformImageUri = (uri) => {
    let newUri =
      process.env.NEXT_PUBLIC_PRODUCTION == 'true'
        ? process.env.NEXT_PUBLIC_SITE_URL
        : process.env.NEXT_PUBLIC_API_URL
    newUri = newUri + uri

    return newUri
  }

  return (
    <>
      <NextSeo title={post.title} />

      <Layout>
        <div className='post-page-wrapper page'>
          <div className='container'>
            <div className='post-page'>
              <div className='header'>
                <div className='title'>
                  <h1>{post.title}</h1>
                </div>
                <div className='excerpt'>{excerpt}</div>
                <div className='meta'>
                  <div className='author'>Írta: {createdBy}</div>
                  <div className='date'>Kelt: {createdAt}</div>
                  <div className='tags'>
                    <p>Címkék:</p>
                    <div className='tags-box'>{displayTags}</div>
                  </div>
                </div>
              </div>
              <div className='share'>
                <FacebookShareButton
                  url={process.env.NEXT_PUBLIC_SITE_URL + url}
                  quote='Ez egy quote'
                  hashtag='#hasgtag'
                  resetButtonStyle={false}
                  className='shareFbBtn'
                >
                  <FacebookIcon size='30' />
                  Megosztás
                </FacebookShareButton>

                <TwitterShareButton
                  url={process.env.NEXT_PUBLIC_SITE_URL + url}
                  resetButtonStyle={false}
                  className='shareTwitterBtn'
                >
                  <TwitterIcon size='30' />
                  Tweet
                </TwitterShareButton>
              </div>
              <div className='content'>
                <ReactMarkdown
                  source={content}
                  transformImageUri={transformImageUri}
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

export async function getServerSideProps(ctx) {
  try {
    const url = ctx.req.url
    const slug = ctx.params.post_slug
    const postRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?url_slug=${slug}&_limit=1&_sort=createdAt:desc`
    )

    const post = await postRes.json()

    return {
      props: { post: post[0], url }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}
export default SinglePost
