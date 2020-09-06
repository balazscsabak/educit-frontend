import Link from 'next/link'

function CatSection(props) {
  try {
    const postList = () => {
      return props.posts.map((post) => {
        return (
          <Link
            key={post.id}
            href={`/post/[post_slug]`}
            as={`/post/${post.url_slug}`}
          >
            <a>
              <li>{post.title}</li>
            </a>
          </Link>
        )
      })
    }
    return (
      <div className='cat-section-wrapper'>
        <div className='container'>
          <div className='cat-section'>
            <div
              className='cat-section__header'
              style={{ backgroundColor: props.catColor }}
            >
              <h1>{props.catName}</h1>
            </div>
            <div className='cat-section__postlist'>
              <ul>{postList()}</ul>
            </div>
            <Link href={props.catLink}>
              <a>
                <div className='more-btn'>
                  <span>Még több</span>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    console.log(err)
    return <div>ERROR</div>
  }
}

export default CatSection
