import { FaTwitter, FaFacebookSquare } from 'react-icons/fa'
import Link from 'next/link'
import { SOCIAL_DATA } from '../utils/constans'

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
              <a href={SOCIAL_DATA.facebook.url} target='_blank'>
                <FaFacebookSquare />
              </a>
            </div>
            <div className='item'>
              <a href={SOCIAL_DATA.twitter.url} target='_blank'>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserMenu
