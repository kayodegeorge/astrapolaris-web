import service_data from '@/data/ServiceData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = service_data.filter((item) => item.home === 2)

const ServiceAreaHomeTwo = () => {
  return (
    <>
      <section
        id='services-one-page'
        className='tp-service-area-2 pt-120 pb-145'
        style={{ backgroundColor: '#F6F6F9' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='tp-service-title-wrapper-2 mb-140 text-center'>
                <span className='tp-section-title-pre'>Our services</span>
                <h3 className='tp-section-title'>
                  Invest in your future <br /> with us
                </h3>
              </div>
            </div>
          </div>
          <div className='row'>
            {services.map((item, index) => (
              <div key={index} className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                <div
                  className='tp-service-item-2 p-relative wow fadeInUp'
                  data-wow-duration='1s'
                  data-wow-delay={item.delay}
                >
                  <div className='tp-service-thumb-2 text-center'>
                    <Link href='/service-details'>
                      <Image
                        width={300}
                        height={300}
                        src={item.img}
                        alt='image-title-here'
                      />
                    </Link>
                  </div>

                  <div className='tp-service-content-2'>
                    <p>{item.category}</p>
                    <h3 className='tp-service-title-2'>
                      <Link href='/service-details'>{item.title}</Link>
                    </h3>
                  </div>
                  <div className='tp-service-btn-2'>
                    <Link href='/service-details'>
                      <i className='fa-regular fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceAreaHomeTwo
