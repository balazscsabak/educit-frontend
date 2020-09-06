import Link from 'next/link'

function Pagination({ count, current, itemPerPage, hrefUrl, asHrefUrl }) {
  let currentPagedNumber = parseInt(current)
  let prevBtn =
    currentPagedNumber != 1 ? (
      <div className='before'>
        <Link href={hrefUrl} as={`${asHrefUrl}${currentPagedNumber - 1}`}>
          <a>Előző</a>
        </Link>
      </div>
    ) : null

  let pageCount = Math.ceil(count / itemPerPage)

  let nextBtn =
    currentPagedNumber != pageCount ? (
      <div className='next'>
        <Link href={hrefUrl} as={`${asHrefUrl}${currentPagedNumber + 1}`}>
          <a>Következő</a>
        </Link>
      </div>
    ) : null
  let pageList = []

  if (pageCount < 10) {
    for (let i = 1; i < pageCount + 1; i++) {
      if (i == currentPagedNumber) {
        pageList.push(<div className='item current'>{i}</div>)
      } else {
        pageList.push(
          <div className='item'>
            <Link href={hrefUrl} as={`${asHrefUrl}${i}`}>
              <a>{i}</a>
            </Link>
          </div>
        )
      }
    }
  } else {
    for (let i = 1; i < 3; i++) {
      if (currentPagedNumber - i > 2) {
        pageList.unshift(
          <div className='item'>
            <Link href={hrefUrl} as={`${asHrefUrl}${currentPagedNumber - i}`}>
              <a>{currentPagedNumber - i}</a>
            </Link>
          </div>
        )
      }
    }

    if (currentPagedNumber - 3 > 2) {
      pageList.unshift(<div className='dotdot'>..</div>)
    }
    if (currentPagedNumber == 2) {
      pageList.unshift(<div className='item current'>2</div>)
    } else {
      pageList.unshift(
        <div className='item'>
          <Link href={hrefUrl} as={`${asHrefUrl}2`}>
            <a>2</a>
          </Link>
        </div>
      )
    }

    if (currentPagedNumber == 1) {
      pageList.unshift(<div className='item current'>1</div>)
    } else {
      pageList.unshift(
        <div className='item'>
          <Link href={hrefUrl} as={`${asHrefUrl}1`}>
            <a>1</a>
          </Link>
        </div>
      )
    }

    if (currentPagedNumber != 1 && currentPagedNumber != 2) {
      pageList.push(<div className='item current'>{currentPagedNumber}</div>)
    }

    for (let i = 1; i < 3; i++) {
      if (
        currentPagedNumber + i < pageCount - 1 &&
        currentPagedNumber + i != 2
      ) {
        pageList.push(
          <div className='item'>
            <Link href={hrefUrl} as={`${asHrefUrl}${currentPagedNumber + i}`}>
              <a>{currentPagedNumber + i}</a>
            </Link>
          </div>
        )
      }
    }

    if (currentPagedNumber < pageCount - 4) {
      pageList.push(<div className='dotdot'>..</div>)
    }

    if (currentPagedNumber < pageCount - 1) {
      pageList.push(
        <div className='item'>
          <Link href={hrefUrl} as={`${asHrefUrl}${pageCount - 1}`}>
            <a>{pageCount - 1}</a>
          </Link>
        </div>
      )
    }
    if (currentPagedNumber < pageCount) {
      pageList.push(
        <div className='item'>
          <Link href={hrefUrl} as={`${asHrefUrl}${pageCount}`}>
            <a>{pageCount}</a>
          </Link>
        </div>
      )
    }
  }

  return (
    <div className='pagination-items'>
      {prevBtn}
      {pageList}
      {nextBtn}
    </div>
  )
}

export default Pagination
