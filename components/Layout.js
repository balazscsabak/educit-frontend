import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className='main-wrapper'>
      <div className='content'>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
