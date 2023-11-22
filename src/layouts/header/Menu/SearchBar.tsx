import React, { useState } from 'react'

const SearchBar = ({ searchOpen, setSearchOpen }: any) => {
  const [searchText, setSearchText] = useState('')

  const searchHanle = (e: any) => {
    e.preventDefault()
    setSearchOpen(false)
    console.log(searchText)
    setSearchText('')
  }

  return (
    <>
      <div className={`search-area ${searchOpen ? 'search-opened' : ''}`}>
        <div className='search-inner p-relative'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='search-wrapper'>
                  <div className='search-close'>
                    <button
                      className='search-close-btn'
                      onClick={() => setSearchOpen(false)}
                    >
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11 1L1 11'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M1 1L11 11'
                          stroke='currentColor'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </button>
                  </div>
                  <div className='search-content pt-35'>
                    <h3 className='heading text-center mb-30'>
                      Hi! How can we help You?
                    </h3>
                    <div className='d-flex justify-content-center px-5'>
                      <div className='search w-100 p-relative'>
                        <form onSubmit={searchHanle}>
                          <input
                            type='text'
                            className='search-input'
                            placeholder='Search...'
                            defaultValue={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                          />
                          <button className='search-icon' type='submit'>
                            <i className='fa fa-search'></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`search-overlay ${searchOpen ? 'opened' : ''}`}
        onClick={() => setSearchOpen(false)}
      ></div>
    </>
  )
}

export default SearchBar
