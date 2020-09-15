import moment from 'moment'
import Link from 'next/link'
import { categoriesData } from '../../utils/constans'
import { getKeyByIdFromObj } from '../../utils/functions'

function FeaturedPost({ featuredPost }) {
  const post = featuredPost
  const imgUrl = post.image ? post.image.url : 'no-image'
  const date = moment(post.postedAt).format('YYYY.MM.DD')
  const bgUrl = process.env.NEXT_PUBLIC_API_URL + imgUrl
  const category = getKeyByIdFromObj(categoriesData, post.category)
  const displayCategory = categoriesData[category].displayName
  const displayFontColor = categoriesData[category].fontColor
  const displayColor = categoriesData[category].color
  const urlSlug = post.url_slug

  return (
    <div className='post'>
      <Link href={`/post/[post_slug]`} as={`/post/${urlSlug}`}>
        <a>
          <div className='post__header'>
            <div
              className='cat'
              style={{ backgroundColor: displayColor, color: displayFontColor }}
            >
              {displayCategory}
            </div>
            <div className='date'>{date}</div>
          </div>
          <div className='post__bg'>
            <img src={bgUrl}></img>
          </div>
          <h1>{post.title}</h1>
        </a>
      </Link>
    </div>
  )
}

export default FeaturedPost
