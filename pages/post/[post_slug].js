import Layout from '../../components/Layout'
import { useEffect, useState } from 'react'
import qs from 'qs'
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
import RelatedPost from '../../components/FeaturedPosts/RelatedPost'
import { SEO_DEF } from '../../utils/constans'

function SinglePost({ post, url }) {
  const [relatedPosts, setrelatedPosts] = useState([])
  const createdBy = post.created_by.username
  const createdAt = moment(post.createdAt).format('YYYY.MM.DD. - h:mm')
  const excerpt = post.excerpt
  const tags = post.tags
  const content = post.content
  const postId = post.id

  const openGraph = post.image
    ? {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${url}`,
        title: post.title,
        images: [
          {
            url: process.env.NEXT_PUBLIC_API_URL + post.image.url,
            alt: post.image.alternativeText,
            width: post.image.width,
            height: post.image.height
          }
        ],
        description: post.description
      }
    : SEO_DEF.openGraph

  const displayTags = tags.map((tag) => {
    return (
      <Link key={tag.id} href='/tag/[tag_slug]' as={`/tag/${tag.slug}`}>
        <a>
          <div key={tag.id}>{tag.tag_name}</div>
        </a>
      </Link>
    )
  })

  const displayRelatedPosts = relatedPosts.map((rPost) => {
    return <RelatedPost post={rPost} key={rPost.id} />
  })

  const transformImageUri = (uri) => {
    let newUri = process.env.NEXT_PUBLIC_API_URL + uri

    return newUri
  }

  const getRelatedPosts = async () => {
    const tagsArray =
      tags &&
      tags.map((t) => {
        return [
          {
            'tags.slug': t.slug
          }
        ]
      })

    if (tagsArray.length > 0) {
      const query = qs.stringify({
        _where: {
          _or: [...tagsArray]
        },
        _limit: 3
      })

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/posts?${query}`
      )

      if (res.ok) {
        const relPosts = await res.json()
        setrelatedPosts(relPosts)
      } else {
        console.log('ERROR ON REQ RELATED POSTS')
      }
    }
  }

  useEffect(() => {
    console.log('effect')
    getRelatedPosts()
  }, [postId])

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={openGraph}
      />

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
                  url={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${url}`}
                  hashtag='#EducIT'
                  resetButtonStyle={false}
                  className='shareFbBtn'
                >
                  <FacebookIcon size='30' />
                  Megosztás
                </FacebookShareButton>

                <TwitterShareButton
                  url={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${url}`}
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
        <div className='post-page-rel-posts-wrapper'>
          <div className='container'>
            <h2>Kapcsolódó cikkek</h2>
            <div className='related-posts'>
              <div className='posts'>{displayRelatedPosts}</div>
              <div className='adv'></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps(ctx) {
  try {
    const slug = ctx.params.post_slug
    const postRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?url_slug=${slug}&_limit=1&_sort=createdAt:desc`
    )

    const post = await postRes.json()

    return {
      props: { post: post[0], url: slug }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}
export default SinglePost
