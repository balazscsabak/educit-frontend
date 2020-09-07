import { FaSearch } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function SearchModal(props) {
  return (
    <div
      className='searchModal'
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.closeModal()
        }
      }}
    >
      <div className='input'>
        <div>
          <div className='closeBtn'>
            <AiOutlineClose onClick={props.closeModal} />
          </div>
          <div className='input-box'>
            <form action='/search'>
              <input
                name='s'
                id='search-input'
                type='text'
                placeholder='Keresés'
              ></input>
              <button type='submit'>
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
