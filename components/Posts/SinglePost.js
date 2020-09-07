import Link from 'next/link'
import moment from 'moment'

function SinglePost({ post }) {
  return (
    <div className='post-wrapper'>
      <Link href='/post/[post_slug]' as={`/post/${post.url_slug}`}>
        <a>
          <div className='post'>
            <div className='post__title'>{post.title}</div>
            <div className='post__cat'>
              <span
                style={{
                  backgroundColor: post.category.color,
                  color: post.category.font_color
                }}
              >
                {post.category.cat_name}
              </span>
            </div>
            <div className='post__date'>
              {moment(post.createdAt).format('YYYY.MM.DD')}
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default SinglePost
