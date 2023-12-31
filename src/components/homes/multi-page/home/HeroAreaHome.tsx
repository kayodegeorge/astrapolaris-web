import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface DataType {
  subtitle: string
  title: React.JSX.Element
  sm_des: React.JSX.Element
  phone: string
}

const hero_content: DataType = {
  subtitle: 'We Are Astra',
  title: <>Astra Polaris, The Bank of The Future</>,
  sm_des: (
    <>... making our customers happy by creating wealth to the stakeholders.</>
  ),
  phone: '+234-902-0353-234',
}

const { subtitle, title, sm_des, phone } = hero_content

const HeroAreaHomeTwo = () => {
  return (
    <>
      <section
        className='tp-hero-area-2 tp-hero-height-2 p-relative pt-120 pb-110'
        style={{ backgroundColor: '#F4F5FA' }}
      >
        <div className='tp-hero-bg-2'>
          <Image
            width={200}
            height={200}
            src='/assets/img/hero/home-2/shape-3.png'
            alt='image-title-here'
          />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xxl-7 col-lg-6'>
              <div className='tp-hero-content-2 p-relative'>
                <div className='tp-hero-title-wrapper-2'>
                  <span
                    className='tp-hero-subtitle-2 wow fadeInUp'
                    data-wow-duration='1s'
                    data-wow-delay='.3s'
                  >
                    {subtitle}
                  </span>
                  <h2
                    className='tp-hero-title-2 wow fadeInUp'
                    data-wow-duration='1s'
                    data-wow-delay='.5s'
                  >
                    {title}
                  </h2>
                  <p
                    className=' wow fadeInUp'
                    data-wow-duration='1s'
                    data-wow-delay='.5s'
                  >
                    {sm_des}
                  </p>
                </div>
                <div
                  className='tp-hero-button-wrapper-2 d-flex flex-wrap wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay='.7s'
                >
                  <div className='tp-hero-btn mr-30'>
                    <Link className='tp-btn' href='/contact'>
                      Download AstraPay{' '}
                      <span>
                        <i className='fa-regular fa-arrow-right'></i>
                      </span>
                    </Link>
                  </div>
                  <div className='tp-hero-call-2 d-flex align-items-center'>
                    <span>
                      {/* <HeroPhoneIcon />                            */}
                    </span>
                    <div className='tp-hero-call-inner-2'>
                      <p>Need help?</p>
                      <span>
                        <a href='tel:5550111'>{phone}</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-5 col-lg-6'>
              <div
                className='tp-hero-thumb-2 d-flex p-relative wow fadeInUp'
                data-wow-duration='1s'
                data-wow-delay='.3s'
              >
                <div className='tp-hero-img-1'>
                  <Image
                    width={200}
                    height={200}
                    src='/assets/img/hero/home-2/shape-2.png'
                    alt='image-title-here'
                  />
                </div>
                <div className='tp-hero-img-2'>
                  <Image
                    width={400}
                    height={300}
                    src='/assets/img/hero/astra-lady.png'
                    alt='image-title-here'
                  />
                </div>
                <div className='tp-hero-shape-2'>
                  <Image
                    width={100}
                    height={100}
                    className='shape-1'
                    src='/assets/img/hero/home-2/shape-3.png'
                    alt='image-title-here'
                  />
                  <Image
                    width={100}
                    height={100}
                    className='shape-2'
                    src='/assets/img/hero/home-2/shape-3.png'
                    alt='image-title-here'
                  />
                  <div className='shape-3'>
                    <Image
                      width={140}
                      height={140}
                      src='/assets/img/hero/home-2/30-shrink.png'
                      alt='image-title-here'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroAreaHomeTwo
