import { shortenString } from '../../utils/functions'
import Link from 'next/link'
function RelatedPost({ post }) {
  // let shortExcerpt = shortenString(post.excerpt, 150)
  // if (shortExcerpt.endsWith('.')) {
  // }

  let shortExcerpt = ((exc) => {
    let shortExc = shortenString(exc, 200)

    if (shortExc.endsWith('.')) {
      shortExc = shortExc.slice(0, -1)
    }

    return (
      <p>
        {shortExc} <span>...</span>
      </p>
    )
  })(post.excerpt)

  return (
    <div className='post'>
      <Link href={`/post/[post_slug]`} as={`/post/${post.url_slug}`}>
        <a>
          <div className='title'>
            <h1>{post.title}</h1>
          </div>
          <div className='body'>
            <div className='cat'>
              <span
                style={{
                  backgroundColor: post.category.color,
                  color: post.category.font_color
                }}
              >
                {post.category.cat_name}
              </span>
            </div>
            <div className='exc'>
              <span>{shortExcerpt}</span>
              <div className='read-more'>Tovább</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default RelatedPost
