'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
// internal
import menu_data from './MenuData'
import ScrollspyNav from 'react-scrollspy-nav'

const OnePageMobileMenu = ({ onePageHomeOne }: any) => {
  const [navTitle, setNavTitle] = useState('')
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle('')
    } else {
      setNavTitle(menu)
    }
  }

  return (
    <>
      <ul>
        {menu_data.map((menu, i) => (
          <React.Fragment key={i}>
            {menu.img_dropdown && (
              <li className='has-dropdown'>
                <Link href={menu.link}>
                  {menu.title}
                  <button
                    className={`dropdown-toggle-btn ${
                      navTitle === menu.title ? 'dropdown-opened' : ''
                    }`}
                    onClick={() => openMobileMenu(menu.title)}
                    style={{ fontSize: '18px', cursor: 'pointer' }}
                  >
                    <i className='fa-regular fa-angle-right'></i>
                  </button>
                </Link>
                <div
                  className='tp-submenu submenu has-homemenu'
                  style={{
                    display: navTitle === menu.title ? 'block' : 'none',
                  }}
                >
                  <div className='row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-3'>
                    {menu.sub_menus?.map((sub_menu, index) => (
                      <div key={index} className='col homemenu'>
                        <div className='homemenu-thumb mb-15'>
                          <Image
                            src={sub_menu.demo_img}
                            style={{ width: '100%', height: 'auto' }}
                            alt='image-title'
                          />
                          <div className='homemenu-btn'>
                            <Link
                              className='menu-btn show-1'
                              href={sub_menu.link}
                            >
                              <span>Multi Page</span>
                            </Link>{' '}
                            <br />
                            <Link
                              className='menu-btn show-2'
                              href={sub_menu.one_page_link}
                            >
                              <span>One Page</span>
                            </Link>
                          </div>
                        </div>
                        <div className='homemenu-content text-center'>
                          <div className='homemenu-title'>
                            <Link href={sub_menu.link}>
                              <span>{sub_menu.title}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            )}
          </React.Fragment>
        ))}
        {onePageHomeOne && (
          <ScrollspyNav
            scrollTargetIds={['About', 'Service', 'Project', 'Blog', 'Contact']}
            offset={50}
            activeNavClass='is-active'
            scrollDuration='100'
            headerBackground='true'
          >
            <ul>
              <li>
                <a href='#about-one-page'>About</a>
              </li>
              <li>
                <a href='#services-one-page'>Service</a>
              </li>
              <li>
                <a href='#project-one-page'>Project</a>
              </li>
              <li>
                <a href='#blog-one-page'>Blog </a>
              </li>
              <li>
                <a href='#contact-one-page'>Contact</a>
              </li>
            </ul>
          </ScrollspyNav>
        )}
      </ul>
    </>
  )
}

export default OnePageMobileMenu
