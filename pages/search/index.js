import Layout from '../../components/Layout'
import Head from 'next/head'
import qs from 'qs'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import SinglePost from '../../components/Posts/SinglePost'
import { NextSeo } from 'next-seo'

function search({ posts, query }) {
  let [searchVal, setSearchVal] = useState(query)
  let [resPosts, setResPosts] = useState(posts)
  const [searchLoading, setSearchLoading] = useState(false)

  let postsList =
    resPosts.length > 0 ? (
      resPosts.map((p) => {
        return <SinglePost key={p.id} post={p} />
      })
    ) : !searchLoading ? (
      <div className='search-res'>
        <h2>Nincs találat</h2>
      </div>
    ) : null

  let loading = searchLoading ? (
    <div class='sk-circle'>
      <div class='sk-circle1 sk-child'></div>
      <div class='sk-circle2 sk-child'></div>
      <div class='sk-circle3 sk-child'></div>
      <div class='sk-circle4 sk-child'></div>
      <div class='sk-circle5 sk-child'></div>
      <div class='sk-circle6 sk-child'></div>
      <div class='sk-circle7 sk-child'></div>
      <div class='sk-circle8 sk-child'></div>
      <div class='sk-circle9 sk-child'></div>
      <div class='sk-circle10 sk-child'></div>
      <div class='sk-circle11 sk-child'></div>
      <div class='sk-circle12 sk-child'></div>
    </div>
  ) : null

  const newSearch = async () => {
    const apiQuery = qs.stringify({
      _where: {
        _or: [
          {
            content_contains: searchVal
          },
          {
            title_contains: searchVal
          }
        ]
      }
    })

    setResPosts([])
    setSearchLoading(true)

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?${apiQuery}`
    )

    if (res.status == 200) {
      const resPosts = await res.json()
      const newSearchVal = qs.stringify({
        s: searchVal
      })

      setSearchLoading(false)
      setResPosts(resPosts)
      history.replaceState({}, null, `search?${newSearchVal}`)
    }
  }
  return (
    <>
      <NextSeo title='Keresés' />

      <Layout>
        <div className='search-page-wrapper page'>
          <div className='container'>
            <div className='search-page'>
              <div className='title'>
                <h1>Keresés</h1>
              </div>
              <div className='input'>
                <div className='input__text'>
                  <input
                    type='text'
                    value={searchVal}
                    onKeyUp={(e) => {
                      if (e.key === 'Enter') {
                        newSearch()
                      }
                    }}
                    onChange={(e) => {
                      setSearchVal(e.target.value)
                    }}
                  />
                </div>
                <div className='input__search' onClick={newSearch}>
                  <FaSearch />
                </div>
              </div>
              <div className='posts'>
                <h2>Találat:</h2>
                <div className='list'>
                  {loading}
                  {postsList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ query }) {
  let check =
    !!query.s && Object.keys(query).length !== 0 && query.constructor === Object

  let posts = false

  if (check) {
    const searchVal = query.s

    const apiQuery = qs.stringify({
      _where: {
        _or: [
          {
            content_contains: searchVal
          },
          {
            title_contains: searchVal
          }
        ]
      }
    })

    let postsApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts?${apiQuery}`

    let res = await fetch(postsApiUrl)

    if (res && res.status == 200) {
      let postsRes = await res.json()

      if (postsRes.length > 0) {
        posts = postsRes
        return {
          props: {
            posts,
            query: query.s
          }
        }
      } else {
        return {
          props: {
            posts,
            query: query.s
          }
        }
      }
    }
  }
  return {
    props: {
      posts,
      query: ''
    }
  }
}

export default search
