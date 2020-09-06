import FeaturedPost from './FeaturedPost'
import FeaturedPostsText from './FeaturedPostsText'

function FeaturedPosts(props) {
  let { featuredPosts } = props

  const [postMain, ...postsText] = featuredPosts

  const showMainPost = () => {
    return <FeaturedPost key={postMain.id} featuredPost={postMain} />
  }

  const showMainTextPosts = () => {
    return postsText.map((post) => {
      return <FeaturedPostsText key={post.id} featuredPost={post} />
    })
  }

  return (
    <React.Fragment>
      <div className='featured-posts-wrapper'>
        <div className='container'>
          <div className='featured-posts'>
            <div className='featured-posts__left'>{showMainPost()}</div>
            <div className='featured-posts__right'>{showMainTextPosts()}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FeaturedPosts
