import Layout from '../../components/Layout'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Gyorstalpalo from '../../components/Gyorstalpalo/Gyorstalpalo'

function gyorstalpalo({ items }) {
  let startinChars = []
  let list = []
  let orderedStartingChars = {}

  items.forEach((i) => {
    const char = i.slug[0]

    if (startinChars[char]) {
      startinChars[char].push(i)
    } else {
      startinChars[char] = []
      startinChars[char].push(i)
    }
  })

  Object.keys(startinChars)
    .sort()
    .forEach((k) => {
      orderedStartingChars[k] = startinChars[k]
    })

  for (const char in orderedStartingChars) {
    console.log(char)
    list.push(
      <Gyorstalpalo items={orderedStartingChars[char]} key={char} char={char} />
    )
  }

  return (
    <>
      <NextSeo title='Gyorstalpaló' />

      <Layout>
        <div className='gyorstalpalo-page-wrapper page'>
          <div className='container'>
            <div className='gyorstalpalo-page'>
              <div className='title'>
                <h1>Gyorstalpaló</h1>
              </div>
              <div className='tags-abc'>{list}</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/gyorstalpalos?_sort=name:ASC`
  )
  let items = []

  if (res.ok) {
    const resRaw = await res.json()
    items = resRaw
  }

  return {
    props: { items }
  }
}

export default gyorstalpalo
