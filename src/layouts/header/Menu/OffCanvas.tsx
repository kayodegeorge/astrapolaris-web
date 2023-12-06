import Image from 'next/image'
import React from 'react'
import Logo from '../../../../public/assets/img/logo/logo.png'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import OnePageMobileMenu from './OnePageMobileMenu'

const Offcanvas = ({ menuOpen, setMenuOpen, onePageHomeOne }: any) => {
  return (
    <>
      <div className={`offcanvas__area ${menuOpen ? 'offcanvas-opened' : ''}`}>
        <div className='offcanvas__wrapper'>
          <div className='offcanvas__close'>
            <button
              className='offcanvas__close-btn offcanvas-close-btn'
              onClick={() => setMenuOpen(false)}
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
          <div className='offcanvas__content'>
            <div className='offcanvas__top mb-50 d-flex justify-content-between align-items-center'>
              <div className='offcanvas__logo logo'>
                <Link href='/' onClick={() => setMenuOpen(false)}>
                  <Image src={Logo} alt='logo' />
                </Link>
              </div>
            </div>

            <div className='tp-main-menu-mobile fix d-xl-none mb-40'>
              {!onePageHomeOne && <MobileMenu />}
              {onePageHomeOne && (
                <OnePageMobileMenu onePageHomeOne={onePageHomeOne} />
              )}
            </div>

            <div className='offcanvas__contact'>
              <h4 className='offcanvas__title'>Contacts</h4>
              <div className='offcanvas__contact-content d-flex'>
                <div className='offcanvas__contact-content-icon'>
                  <i className='fa-sharp fa-solid fa-location-dot'></i>
                </div>
                <div className='offcanvas__contact-content-content'>
                  <a href='https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1'>
                    Astra Polaris Building, Onikolobo, Abeokuta, Ogun State.
                  </a>
                </div>
              </div>
              <div className='offcanvas__contact-content d-flex'>
                <div className='offcanvas__contact-content-icon'>
                  <i className='fa-solid fa-envelope'></i>
                </div>
                <div className='offcanvas__contact-content-content'>
                  <a href='mailto:needhelp@company.com'>
                    info@astrapolaris.com
                  </a>
                </div>
              </div>
              <div className='offcanvas__contact-content d-flex'>
                <div className='offcanvas__contact-content-icon'>
                  <i className='fa-solid fa-phone'></i>
                </div>
                <div className='offcanvas__contact-content-content'>
                  <a href='tel:01310-069824'> +234 902 0353 234</a>
                </div>
              </div>
            </div>
            <div className='offcanvas__social'>
              <a className='icon facebook' href='#'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a className='icon twitter' href='#'>
                <i className='fab fa-twitter'></i>
              </a>
              <a className='icon youtube' href='#'>
                <i className='fab fa-youtube'></i>
              </a>
              <a className='icon linkedin' href='#'>
                <i className='fab fa-linkedin'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${menuOpen ? 'opened' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  )
}

export default Offcanvas
