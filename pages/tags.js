import Layout from '../components/Layout'
import DisplayTag from '../components/Tags/Tags'

function tags({ tags }) {
  let arrayOfTagsStartingChars = []
  let tagList = []
  const orderedArrayOfTagsStartingChars = {}

  tags.forEach((tag, i, x) => {
    const char = tag.tag_name[0].toLowerCase()
    if (arrayOfTagsStartingChars[char]) {
      arrayOfTagsStartingChars[char].push(tag)
    } else {
      arrayOfTagsStartingChars[char] = []
      arrayOfTagsStartingChars[char].push(tag)
    }
  })

  Object.keys(arrayOfTagsStartingChars)
    .sort()
    .forEach(function (key) {
      orderedArrayOfTagsStartingChars[key] = arrayOfTagsStartingChars[key]
    })

  for (const char in orderedArrayOfTagsStartingChars) {
    tagList.push(
      <DisplayTag
        char={char}
        tags={arrayOfTagsStartingChars[char]}
        key={char}
      />
    )
  }

  return (
    <Layout>
      <div className='tags-page-wrapper page'>
        <div className='container'>
          <div className='tags-page'>
            <div className='title'>
              <h1>Címkék</h1>
            </div>
            <div className='tags-abc'>{tagList}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  try {
    const tagsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags`)
    const tags = await tagsRes.json()

    return {
      props: { tags }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}

export default tags
