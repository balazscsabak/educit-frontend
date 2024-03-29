import Layout from '../components/Layout'
import FeaturedPosts from '../components/FeaturedPosts/Index'
import { categoriesData } from '../utils/constans'
import CatSection from '../components/CatSection/CatSection'

function index({
  featuredPosts,
  featuredJavasciptPosts,
  featuredPhpPosts,
  featuredDesignPosts,
  featuredDotnetPosts,
  featuredWebdevPosts
}) {
  let { posts } = featuredPosts

  return (
    <Layout>
      <div className='page'>
        <FeaturedPosts featuredPosts={posts} />
        <CatSection
          posts={featuredWebdevPosts}
          catName='Web dev'
          catLink='/cat/webdev'
          catColor={categoriesData.webdev.color}
        />
        <CatSection
          posts={featuredJavasciptPosts}
          catName='JavaScript'
          catLink='/cat/javascript'
          catColor={categoriesData.javascript.color}
        />
        <CatSection
          posts={featuredDesignPosts}
          catName='Design'
          catLink='/cat/design'
          catColor={categoriesData.design.color}
        />
        <CatSection
          posts={featuredPhpPosts}
          catName='PHP'
          catLink='/cat/php'
          catColor={categoriesData.php.color}
        />
        <CatSection
          posts={featuredDotnetPosts}
          catName='.NET'
          catLink='/cat/dotnet'
          catColor={categoriesData.dotnet.color}
        />
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  try {
    let featuredPostsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/feauted-posts`
    )
    let featuredWebdevPostsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?category.id=${categoriesData.webdev.id}&_limit=5&_sort=createdAt:desc`
    )
    let featuredJavasciptPostsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?category.id=${categoriesData.javascript.id}&_limit=5&_sort=createdAt:desc`
    )
    let featuredPhpPostsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?category.id=${categoriesData.php.id}&_limit=5&_sort=createdAt:desc`
    )
    let featuredDesignPostsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?category.id=${categoriesData.design.id}&_limit=5&_sort=createdAt:desc`
    )
    let featuredDotnetPostsRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?category.id=${categoriesData.dotnet.id}&_limit=5&_sort=createdAt:desc`
    )

    let featuredPosts = await featuredPostsRes.json()
    let featuredWebdevPosts = await featuredWebdevPostsRes.json()
    let featuredJavasciptPosts = await featuredJavasciptPostsRes.json()
    let featuredPhpPosts = await featuredPhpPostsRes.json()
    let featuredDesignPosts = await featuredDesignPostsRes.json()
    let featuredDotnetPosts = await featuredDotnetPostsRes.json()

    return {
      props: {
        featuredPosts,
        featuredWebdevPosts,
        featuredJavasciptPosts,
        featuredPhpPosts,
        featuredDesignPosts,
        featuredDotnetPosts
      }
    }
  } catch (error) {
    console.log(error)
  }
}
export default index
