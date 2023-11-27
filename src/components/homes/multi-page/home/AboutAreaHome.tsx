'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import about_img_1 from '../../../../../public/assets/img/about/img-2.jpg'
import about_img_2 from '../../../../../public/assets/img/about/img-1.jpg'
import about_shape_1 from '../../../../../public/assets/img/hero/home-2/shape-2.png'
import about_icon_1 from '../../../../../public/assets/img/about/home-2/marketing.svg'
import about_icon_2 from '../../../../../public/assets/img/about/home-2/dollar.svg'
import about_avatar from '../../../../../public/assets/img/about/home-2/user.jpg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

interface DataType {
  subtitle: string
  title: string
  sm_des: string
  features: {
    id: number
    img: any
    title: string
    sm_des: string
  }[]
  job_title: string
  avatar_name: string
}

const about_content: DataType = {
  subtitle: 'ABOUT US',
  title: 'Elevating your banking experience',
  sm_des:
    'Empowering Dreams, Ensuring Security. Discover flexible loans and secure fixed deposits tailored to your financial journey. Join us in building a future of financial empowerment and growth.',
  features: [
    {
      id: 1,
      img: about_icon_1,
      title: 'Loans',
      sm_des: 'Payment solutions enable to stand  to accept',
    },
    {
      id: 2,
      img: about_icon_2,
      title: 'Fixed deposit',
      sm_des: 'Payment solutions enable to stand  to accept',
    },
  ],
  job_title: 'Web Designer',
  avatar_name: 'Leslie Alexander',
}

const { subtitle, title, sm_des, features, job_title, avatar_name } =
  about_content

const AboutAreaHome = () => {
  return (
    <>
      <section
        id='about-one-page'
        className='tp-about-area-2 p-relative pt-130 pb-110'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='tp-about-thumb-wrapper-2 p-relative wow fadeInLeft'
                data-wow-duration='1s'
                data-wow-delay='.3s'
              >
                <Image
                  className='img-1'
                  src={about_img_1}
                  alt='image-title-here'
                />
                <div className='img-2'>
                  <Image src={about_img_2} alt='image-title-here' />
                </div>
                <Image
                  className='img-3'
                  src={about_shape_1}
                  alt='image-title-here'
                />

                {/* <div className='tp-about-progressbar'>
                  <div
                    className='circular tl-progress mx-auto'
                    style={{ width: '100px' }}
                  >
                    <CircularProgressbar
                      className='d-block'
                      value={70}
                      text={`${70}%`}
                      strokeWidth={3}
                      styles={buildStyles({
                        textColor: '#000',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#00A3C3',
                      })}
                    />
                  </div>
                  <h3>Daily Activity</h3>
                </div> */}
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='tp-about-wrapper-2'>
                <div className='tp-about-title-wrapper'>
                  <span className='tp-section-title-pre'>{subtitle}</span>
                  <h3 className='tp-section-title'>{title}</h3>
                </div>
                <p>{sm_des}</p>
                <div className='tp-about-item-2 d-flex'>
                  {features.map((item, index) => (
                    <div key={index} className='tp-about-item-2-inner d-flex'>
                      <div className='tp-about-item-2-icon'>
                        <span>
                          <Image src={item.img} alt='image-title-here' />
                        </span>
                      </div>
                      <div className='tp-about-item-2-content'>
                        <h5 className='tp-about-item-2-title'>{item.title}</h5>
                        <p>{item.sm_des}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='tp-about-btn-wrapper-2 d-flex align-items-center'>
                  <div className='tp-about-btn-2'>
                    <Link className='tp-btn' href='/about'>
                      Read More
                    </Link>
                  </div>
                  <div className='tp-about-user d-flex align-items-center'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutAreaHome
