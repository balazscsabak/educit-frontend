import Link from 'next/link'

function DisplayTag({ char, tags }) {
  return (
    <div className='tag-box'>
      <div className='char'>
        <span>{char}</span>
      </div>
      <div className='tags'>
        {tags.map((tag) => {
          return (
            <Link href={`/tag/[tag_slug]`} as={`/tag/${tag.slug}`} key={tag.id}>
              <a>
                <div className='tag'>{tag.tag_name}</div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default DisplayTag
