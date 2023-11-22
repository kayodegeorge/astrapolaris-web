'use client'

import UseSticky from '@/hooks/UseSticky'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import HeaderLogo from '../../../public/assets/img/logo/astra-logo.svg'
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
                      src={HeaderLogo}
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
                  <div className='tp-header-contact-2 d-flex align-items-center'>
                    <div className='tp-header-contact-search search-open-btn d-none d-xxl-block'>
                      <span onClick={() => setSearchOpen(true)}>
                        <i className='fa-solid fa-magnifying-glass'></i>
                      </span>
                    </div>
                    <div className='tp-header-contact-inner d-none d-xl-flex align-items-center'>
                      <div className='tp-header-contact-icon'>
                        <span>
                          <i className='fa-solid fa-phone'></i>
                        </span>
                      </div>
                      <div className='tp-header-contact-content'>
                        <p>Requesting A Call:</p>
                        <span>
                          <a href='tel:555-0111'>(+234) 902-0353-234</a>
                        </span>
                      </div>
                    </div>
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
