import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import menu_data from './MenuData'

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li
            key={i}
            className={`${
              item.has_dropdown || item.img_dropdown ? 'has-dropdown' : ''
            }`}
          >
            <Link href={item.link}>{item.title}</Link>
            {item.img_dropdown && (
              <div className='tp-submenu submenu has-homemenu'>
                <div className='row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-3'>
                  {item.sub_menus?.map((sub_item, index) => (
                    <div key={index} className='col homemenu'>
                      <div className='homemenu-thumb mb-15'>
                        <Image src={sub_item.demo_img} alt='image-title-here' />
                        <div className='homemenu-btn'>
                          <Link
                            className='menu-btn show-1'
                            href={sub_item.link}
                          >
                            Multi Page
                          </Link>
                          <br />
                          <Link
                            className='menu-btn show-2'
                            href={sub_item.one_page_link}
                          >
                            One Page
                          </Link>
                        </div>
                      </div>
                      <div className='homemenu-content text-center'>
                        <h4 className='homemenu-title'>
                          <Link href={sub_item.link}>{sub_item.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.has_dropdown && (
              <ul className='submenu'>
                {item.sub_menus?.map((sub_item, i) => (
                  <li key={i}>
                    <Link href={sub_item.link}>
                      <span>{sub_item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavMenu
