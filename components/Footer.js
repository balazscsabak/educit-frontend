import Link from 'next/link'
import moment from 'moment'
import { SOCIAL_DATA } from '../utils/constans'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'

function Footer() {
  let today = moment().format('YYYY')

  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='col'>
            <Link href='/'>
              <a>
                <img src='/img/logo_small.png' alt='EducIT Logo'></img>
              </a>
            </Link>
          </div>
          <div className='col'>
            <ul>
              <li>
                <Link href='/cikkek'>
                  <a>Cikkek</a>
                </Link>
              </li>
              <li>
                <Link href='/kategoriak'>
                  <a>Kategóriák</a>
                </Link>
              </li>
              <li>
                <Link href='/tags'>
                  <a>Címkék</a>
                </Link>
              </li>
              <li>
                <Link href='/gyorstalpalo'>
                  <a>Gyorstalpaló</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <li>
                <Link href='/kapcsolat'>
                  <a>Kapcsolat</a>
                </Link>
              </li>
              <li>
                <Link href='/adatvedelmi-tajekoztato'>
                  <a>Adatvédelmi tájékoztató</a>
                </Link>
              </li>
              <li>
                <a href='/hirlevel'>Hírlevél</a>
              </li>
            </ul>
          </div>
          <div className='col'>
            <a href={SOCIAL_DATA.twitter.url} target='_blank'>
              <FaTwitter />
            </a>

            <a href={SOCIAL_DATA.facebook.url} target='_blank'>
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          © {today} Minden jog fenntartva. A weboldalt keszítette:{' '}
          <a href='#' target='_blank'>
            balazscsabak.hu
          </a>{' '}
        </div>
      </div>
    </div>
  )
}

export default Footer
