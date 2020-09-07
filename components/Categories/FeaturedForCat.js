import Link from 'next/link'

function FeaturedForCat({ post }) {
  return (
    <Link href={`/post/[post_slug]`} as={`/post/${post.url_slug}`}>
      <a>
        <div className='post'>
          <div className='post__img'>
            <img
              src={process.env.NEXT_PUBLIC_API_URL + post.image.url}
              alt={post.url_slug}
            />
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
