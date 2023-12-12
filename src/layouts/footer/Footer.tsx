'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import SocialLinks, { CopyRight } from '@/components/common/SocialLinks'

interface Datatype {
  sm_info: string
  link_title: string
  link_list: {
    title: string
    link: string
  }[]
  post_title: string
  post_list: {
    title: string
    publish: string
    link: string
  }[]
  news_text: string
  news_title: string
  footer_links: string[]
}

const footer_content: Datatype = {
  sm_info:
    'Astra Polaris MFB is a state licensed micro finance bank  regulated by the CBN. It has distinguished itself as one of the fastest growing MFBs offering a broad range of financial services, capacity building to micro, small and medium-scale enterprises (MSMEs), Agro allied, High Net-worth individuals and investment advisory services.',
  link_title: 'Quick links',
  link_list: [
    { title: 'Our Heritage', link: '/about' },
    { title: 'Our Board', link: '#' },
    { title: 'Contact Us', link: '#' },
  ],
  post_title: 'Our Products',
  post_list: [
    {
      title: 'AstraPay',
      publish: 'Mobile banking platform',
      link: '#',
    },
    {
      title: 'SafeSave',
      publish: 'Savings platform',
      link: '#',
    },
  ],
  news_text: 'Newsletter',
  news_title: "It's important for businesses to carefully consider their pay.",
  footer_links: ['About us', 'Services', 'Contact Us'],
}
const {
  sm_info,
  link_title,
  link_list,
  post_title,
  post_list,
  news_text,
  news_title,
  footer_links,
} = footer_content

const Footer = () => {
  return (
    <>
      <footer
        className='tp-footer-area-2 pt-140 p-relative z-index-1'
        style={{ backgroundColor: '#16243E' }}
      >
        <div className='tp-footer-main-area tp-footer-border'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
                <div className='tp-footer-widget tp-footer-2-col-1 mb-50'>
                  <div className='tp-footer-logo mb-20'>
                    <Link href='/'>
                      <Image
                        width={300}
                        height={300}
                        src='/assets/img/logo/astra-white-removebg.png'
                        alt='image-title-here'
                      />
                    </Link>
                  </div>
                  <div className='tp-footer-widget-content'>
                    <p>{sm_info}</p>
                    <div className='tp-footer-widget-social'>
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6'>
                <div className='tp-footer-widget tp-footer-2-col-2 mb-50'>
                  <h3 className='tp-footer-widget-title'>{link_title}</h3>
                  <div className='tp-footer-widget-content'>
                    <ul>
                      {link_list.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                <div className='tp-footer-widget tp-footer-2-col-3 mb-50'>
                  <h3 className='tp-footer-widget-title'>{post_title}</h3>
                  <div className='tp-footer-widget-content'>
                    {post_list.map((item, index) => (
                      <div key={index} className='tp-footer-widget-item'>
                        <h4 className='tp-footer-widget-item-title'>
                          <Link href='/blog-details'>{item.title}</Link>
                        </h4>
                        <span>
                          <i className='fa-regular fa-calendar-days'></i>
                          {item.publish}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                <div className='tp-footer-widget tp-footer-2-col-4 mb-50'>
                  <h3 className='tp-footer-widget-title'>{news_text}</h3>
                  <div className='tp-footer-widget-content'>
                    <p>{news_title}</p>
                    <div className='tp-footer-content-email'>
                      <div
                        className=''
                        style={{ display: 'flex', gap: '10px' }}
                      >
                        <Image
                          src='/assets/img/footer/appstore-dn.svg'
                          alt='App Store'
                          width={100}
                          height={100}
                        />
                        <Image
                          src='/assets/img/footer/googleplay-dn.svg'
                          alt='App Store'
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tp-footer-copyright-area p-relative'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 col-lg-6'>
                <div className='tp-footer-copyright-inner'>
                  <p>
                    <CopyRight />
                  </p>
                </div>
              </div>
              <div className='col-md-12 col-lg-6'>
                <div className='tp-footer-copyright-inner text-lg-end'>
                  {footer_links.map((item, index) => (
                    <Link key={index} href='#'>
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
