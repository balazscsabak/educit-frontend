import Link from 'next/link'
import { SEO_DEF } from '../../utils/constans'

function FeaturedForCat({ post }) {
  const imgSrc = post.image
    ? {
        src: process.env.NEXT_PUBLIC_API_URL + post.image.url,
        alt: post.url_slug
      }
    : {
        src: SEO_DEF.openGraph.images[0].url,
        alt: SEO_DEF.openGraph.images[0].alt
      }
  return (
    <Link href={`/post/[post_slug]`} as={`/post/${post.url_slug}`}>
      <a>
        <div className='post'>
          <div className='post__img'>
            <img {...imgSrc} />
          </div>
          <div className='post__title'>
            <h2>{post.title}</h2>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default FeaturedForCat
