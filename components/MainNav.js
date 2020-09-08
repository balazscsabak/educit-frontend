import Link from 'next/link'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchModal from './SearchModal'

function MainNav() {
  const [searchOpen, setSearchOpen] = useState(false)
  const modal = searchOpen ? (
    <SearchModal closeModal={() => toggleModal()} />
  ) : null

  const toggleModal = function () {
    if (searchOpen) {
      document.body.style.overflow = 'unset'
      setSearchOpen(false)
    } else {
      document.body.style.overflow = 'hidden'
      setSearchOpen(true)
    }
  }

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
                  <li onClick={() => toggleModal()}>
                    <FaSearch />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal}
    </React.Fragment>
  )
}

export default MainNav
