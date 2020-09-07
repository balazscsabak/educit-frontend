import Layout from '../components/Layout'
import { SOCIAL_DATA } from '../utils/constans'
import { NextSeo } from 'next-seo'
import { FaTwitter, FaFacebookF } from 'react-icons/fa'
import { useState } from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { BiMessageRoundedError } from 'react-icons/bi'

function kapcsolat() {
  const [nameVal, setNameVal] = useState('')
  const [emailVal, setEmailVal] = useState('')
  const [msgVal, setMsgVal] = useState('')
  const [resStatus, setResStatus] = useState(false)
  const [msgRes, setMsgRes] = useState(false)

  const displayResStyle = resStatus ? 'visible' : 'hidden'
  const resStyleHelper = resStatus ? 'show' : null
  const displayRes = msgRes ? (
    <div className='success'>
      <HiCheckCircle />
      <p>Üzenet elküldve</p>
      <div className='again' onClick={() => setResStatus(false)}>
        Új üzenet
      </div>
    </div>
  ) : (
    <div className='error'>
      <BiMessageRoundedError />
      <p>HIBA</p>
      <div className='again' onClick={() => setResStatus(false)}>
        Újra
      </div>
    </div>
  )

  const sendMessage = async () => {
    let name = nameVal.trim()
    let email = emailVal.trim()
    let msg = msgVal.trim()

    if (name !== '' && email !== '' && msg !== '') {
      const body = {
        name,
        email,
        msg: msgVal
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages`, {
        method: 'post',
        body: JSON.stringify(body)
      })

      if (res.ok) {
        setResStatus(true)
        setMsgRes(true)
      } else {
        setResStatus(true)
        setMsgRes(false)
      }
    }
  }
  return (
    <>
      <NextSeo title='Adatvédelmi Tájékozató' />

      <Layout>
        <div className='kapcsolat-page-wrapper page'>
          <div className='container'>
            <div className='kapcsolat-page'>
              <div className='kapcsolat'>
                <div className='left'>
                  <div className='data'>
                    <h2>EducIT</h2>
                    <p>
                      <span>weboldal:</span> www.educit.hu
                    </p>
                    <p>
                      <span>email:</span> {SOCIAL_DATA.email}
                    </p>
                    <p>
                      <span>tulajdonos:</span> Csabák Balázs
                    </p>
                    <div className='social'>
                      <span>
                        <a href={SOCIAL_DATA.twitter.url} target='_blank'>
                          <FaTwitter />
                        </a>
                      </span>
                      <span>
                        <a href={SOCIAL_DATA.facebook.url} target='_blank'>
                          <FaFacebookF />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='right'>
                  <div className='form'>
                    <img src='/img/logo_small.png' alt='EducIT logo' />
                    <p>Lépjen velünk kapcsolatba</p>
                    <div className='form-grp'>
                      <label htmlFor='name'>Név</label>
                      <input
                        type='text'
                        id='name'
                        value={nameVal}
                        onChange={(e) => setNameVal(e.target.value)}
                      />
                    </div>
                    <div className='form-grp'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='email'
                        id='email'
                        value={emailVal}
                        onChange={(e) => setEmailVal(e.target.value)}
                      />
                    </div>
                    <div className='form-grp'>
                      <label htmlFor='msg'>Üzenet</label>
                      <textarea
                        type='text'
                        id='msg'
                        value={msgVal}
                        onChange={(e) => setMsgVal(e.target.value)}
                      />
                    </div>
                    <div className='form-grp'>
                      <div className='send-btn' onClick={sendMessage}>
                        <span>Elküld</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`response ${resStyleHelper}`}
                    style={{ visibility: displayResStyle }}
                  >
                    {displayRes}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default kapcsolat
