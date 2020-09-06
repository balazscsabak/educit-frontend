import { FaTwitter, FaFacebookSquare } from 'react-icons/fa'
import Link from 'next/link'

function UserMenu() {
  return (
    <div className='user-menu-wrapper'>
      <div className='container'>
        <div className='user-menu'>
          <div className='logo'>
            <Link href='/'>
              <a>
                <img src='/img/logo_small.png' alt='EducIT Logo'></img>
              </a>
            </Link>
          </div>
          <div className='social'>
            <div className='item'>
              <Link href='#'>
                <a>
                  <FaFacebookSquare />
                </a>
              </Link>
            </div>
            <div className='item'>
              <Link href='#'>
                <a>
                  <FaTwitter />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu
