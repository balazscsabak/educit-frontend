import Link from 'next/link'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchModal from './SearchModal'

function MainNav() {
  const [searchOpen, setSearchOpen] = useState(false)
  const model = searchOpen ? (
    <SearchModal closeModal={() => setSearchOpen(false)} />
  ) : null

  return (
    <React.Fragment>
      <div className='main-nav-wrapper'>
        <div className='container'>
          <div className='main-nav'>
            <div className='nav'>
              <div className='nav__left'>
                <ul>
                  <Link href='/'>
                    <a>
                      <li>Kezdőlap</li>
                    </a>
                  </Link>
                  <Link href='/cikkek'>
                    <a>
                      <li>Cikkek</li>
                    </a>
                  </Link>
                  <Link href='/kategoriak'>
                    <a>
                      <li>Kategóriák</li>
                    </a>
                  </Link>
                  <Link href='/tags'>
                    <a>
                      <li>Cimkék</li>
                    </a>
                  </Link>
                  <Link href='/gyorstalpalo'>
                    <a>
                      <li>Gyorstalpaló</li>
                    </a>
                  </Link>
                  <a href='/hirlevel'>
                    <li>Hírlevél</li>
                  </a>
                </ul>
              </div>

              <div className='nav__right'>
                <ul>
                  <li onClick={() => setSearchOpen(true)}>
                    <FaSearch />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {model}
    </React.Fragment>
  )
}

export default MainNav
