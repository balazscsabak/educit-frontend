import Link from 'next/link'

function Gyorstalpalo({ char, items }) {
  console.log(char)
  return (
    <div className='tag-box'>
      <div className='char'>
        <span>{char}</span>
      </div>
      <div className='tags'>
        {items.map((i) => {
          return (
            <Link
              href={`/gyorstalpalo/[tag_slug]`}
              as={`/gyorstalpalo/${i.slug}`}
              key={i.id}
            >
              <a>
                <div className='tag'>{i.name}</div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Gyorstalpalo
