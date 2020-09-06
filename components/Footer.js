import Link from 'next/link'
import moment from 'moment'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'

function Footer() {
  let today = moment().format('YYYY')

  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='col'>
            <img src='/img/logo_small.png' alt='EducIT Logo'></img>
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
                <Link href='#'>
                  <a>Kapcsolat</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a>Adatvédelmi tájékoztató</a>
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <a>Hírlevél</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col'>
            <Link href='#'>
              <a>
                <FaTwitter />
              </a>
            </Link>

            <Link href='#'>
              <a>
                <FaFacebookF />
              </a>
            </Link>
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
