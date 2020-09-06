import Link from 'next/link'

function Category({ cat }) {
  return (
    <div className='category'>
      <Link href={`/cat/${cat.slug}`}>
        <a>
          <div className='single' style={{ backgroundColor: cat.color }}>
            <h1 style={{ color: cat.font_color }}>{cat.cat_name}</h1>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Category
