import moment from 'moment'
import Link from 'next/link'
import { categoriesData } from '../../utils/constans'
import { getKeyByIdFromObj } from '../../utils/functions'

function FeaturedPostsText(props) {
  try {
    const post = props.featuredPost
    const date = moment(post.postedAt).format('YYYY.MM.DD')
    const catId = post.category
    const catName = getKeyByIdFromObj(categoriesData, catId)
    const diplayCatName = categoriesData[catName].displayName || 'test'
    const displayColor = categoriesData[catName].color
    const displayFontColor = categoriesData[catName].fontColor
    const urlSlug = post.url_slug

    return (
      <Link href={`/post/[post_slug]`} as={`/post/${urlSlug}`}>
        <a>
          <div className='post'>
            <h1>{post.title}</h1>
            <div className='post__meta'>
              <div className='date'>{date}</div>
              <div
                className='cat'
                style={{
                  backgroundColor: displayColor,
                  color: displayFontColor
                }}
              >
                {diplayCatName}
              </div>
            </div>
          </div>
        </a>
      </Link>
    )
  } catch (err) {
    return <div>Valami hiba történt!</div>
  }
}

export default FeaturedPostsText
