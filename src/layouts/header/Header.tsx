'use client'

import UseSticky from '@/hooks/UseSticky'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import NavMenu from './Menu/NavMenu'
import OnPageMenu from './Menu/OnePageMenu'
import Offcanvas from './Menu/OffCanvas'
import SearchBar from './Menu/SearchBar'

const Header = ({ onePageHomeOne }: any) => {
  const { sticky } = UseSticky()
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <>
      <header
        id='header-sticky'
        className={`tp-header-area-2 p-relative tp-header-height ${
          sticky ? 'tp-header-sticky' : ''
        }`}
        style={{ backgroundColor: '#fff' }}
      >
        <div className='tp-header-space-2'>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-xl-3 col-6'>
                <div className='tp-header-logo-1 p-relative'>
                  <Link href='/'>
                    <Image
                      width={200}
                      height={200}
                      src='/assets/img/logo/astra-blue.png'
                      alt='image-title-here'
                    />
                  </Link>
                </div>
              </div>
              <div className='col-lg-6 d-none d-xl-block'>
                <div className='tp-main-menu home-2 d-none d-xl-block'>
                  <nav className='tp-main-menu-content'>
                    {!onePageHomeOne && <NavMenu />}
                    {onePageHomeOne && (
                      <OnPageMenu onePageHomeOne={onePageHomeOne} />
                    )}
                  </nav>
                </div>
              </div>
              <div className='col-xl-3 col-6'>
                <div className='tp-header-main-right-2 d-flex align-items-center justify-content-xl-end'>
                  <div
                    className='tp-hero-btn mr-30 '
                    style={{ display: 'block' }}
                  >
                    <Link className='tp-btn' href='/contact'>
                      Online Banking
                      <span>
                        <i className='fa-regular fa-arrow-right'></i>
                      </span>
                    </Link>
                  </div>
                  <div className='tp-header-main-right-hamburger-btn d-xl-none offcanvas-open-btn text-end'>
                    <button
                      className='hamburger-btn'
                      onClick={() => setMenuOpen(true)}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <Offcanvas
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onePageHomeOne={onePageHomeOne}
      />
    </>
  )
}

export default Header
