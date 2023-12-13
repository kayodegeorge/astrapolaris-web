import React from 'react'
import Image from 'next/image'

// service details data types
interface DataType {
  title: string
  sm_des_1: string
  sm_des_2: string
  features: {
    img: any
    title: string
    sm_des: string
  }[]
  title_2: string
  sm_des_3: string
  sm_des_4: string
  quote: string
  service_title: string
  service_list: {
    title: string
    link: string
  }[]
  some_list: string[]
}
// service details content
const service_details: DataType = {
  title: '(Content title goes here)',
  sm_des_1:
    'Lorem ipsum dolor sit amet, consectetur adip lorem orem ipsum dolor sit amet, consectetur adip orem ipsum dolor sit amet, consectetur adip orem ipsum dolor sit amet, consectetur adip',
  sm_des_2:
    'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis no vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo',
  features: [
    {
      img: '/assets/img/service/service-details/icon-1.svg',
      title: 'Loan Products',
      sm_des:
        'Lorem Ipsum is simply is dumiom in thi yadvice design in us repairs and  is text Lorem Ipsum is simply design company  text Lorem Ipsum',
    },
    {
      img: '/assets/img/service/service-details/icon-2.svg',
      title: 'Deposits',
      sm_des:
        'Lorem Ipsum is simply is dumiom in thi yadvice design in us repairs and  is text Lorem Ipsum is simply design company  text Lorem Ipsum',
    },
  ],
  title_2: 'Other stuff here',
  sm_des_3:
    'Aliquam eros justo, posu ere loborti viver lao reet matti ullam corpe.Aliquam eros justo, posuere lobortis non',
  sm_des_4:
    'Aliquam eros justo, posuere loboh viverra laoreet matti ullamcorper posuere viverr.Aliquam eros justo, posuere lobortis non, viverra laoreet augue mattis fermentum ullamcorper.',
  quote:
    'Aliquam eros justo, posuere loborti viverra laoreet matti uacorper posuere viverra .Aliquam eros no justo des posuere lobortis non, viverra laoreet ue mattis fermentum ullamcorper viverra laoreet. Aliquam eros industry posuere loborti viverra laoreet matti ullamcorpe',
  service_title: 'Our services',
  service_list: [
    { title: 'Loans', link: '#' },
    { title: 'Investments', link: '#' },
    { title: 'Deposits', link: '#' },
    { title: 'Proof of Funds', link: '#' },
    { title: 'Savings', link: '#' },
  ],
  some_list: [
    'Mistakes To Avoid to dum',
    'Startup industry stan Aliquam',
    'Knew About Fots text posuere',
  ],
}
const {
  title,
  sm_des_1,
  sm_des_2,
  features,
  title_2,
  sm_des_3,
  sm_des_4,
  quote,
  service_list,
  service_title,
  some_list,
} = service_details

const ServiceDetailsArea = () => {
  return (
    <>
      <section className='tp-service-details-area pt-120 pb-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='tp-service-details-wrapper'>
                <div className='tp-service-details-thumb'>
                  <Image
                    src='/assets/img/service/service-details/img-1.jpg'
                    width={500}
                    height={500}
                    style={{ width: '100%', height: 'auto' }}
                    alt='image-title-here'
                  />
                </div>
                <h3 className='tp-service-details-title'>{title}</h3>
                <p>{sm_des_1}</p>
                <p>{sm_des_2}</p>

                <div className='tp-service-details-box d-flex mb-60'>
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className={`tp-service-details-item d-flex ${
                        index === 0 ? 'mr-30' : ''
                      }`}
                    >
                      <div className='tp-service-details-icon'>
                        <Image
                          width={300}
                          height={200}
                          src={item.img}
                          alt='image-title-here'
                        />
                      </div>
                      <div className='tp-service-details-content'>
                        <h3 className='tp-service-details-subtitle'>
                          {item.title}
                        </h3>
                        <p>{item.sm_des}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='tp-service-details-box d-flex mb-60'>
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className={`tp-service-details-item d-flex ${
                        index === 0 ? 'mr-30' : ''
                      }`}
                    >
                      <div className='tp-service-details-icon'>
                        <Image
                          width={300}
                          height={200}
                          src={item.img}
                          alt='image-title-here'
                        />
                      </div>
                      <div className='tp-service-details-content'>
                        <h3 className='tp-service-details-subtitle'>
                          {item.title}
                        </h3>
                        <p>{item.sm_des}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='tp-service-details-box-2 d-flex mb-40'>
                  <div className='tp-service-details-box-content mr-30'>
                    <h3 className='tp-service-details-subtitle-2'>{title_2}</h3>
                    <p>{sm_des_3}</p>
                    <p>{sm_des_4}</p>
                  </div>
                  <div className='tp-service-details-box-thumb'>
                    <Image
                      width={500}
                      height={500}
                      src='/assets/img/service/service-details/img-2.jpg'
                      alt='image-title-here'
                    />
                  </div>
                </div>

                <div className='tp-service-details-quote'>
                  <span>{quote}</span>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='tp-service-widget'>
                <div className='tp-service-widget-item mb-40'>
                  <div className='tp-service-widget-tab'>
                    <h3 className='tp-service-widget-title'>{service_title}</h3>
                    <ul>
                      {service_list.map((item, index) => (
                        <li key={index} className={index === 0 ? 'active' : ''}>
                          <a href={item.link}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className='tp-service-widget-contact mb-40'
                  style={{
                    backgroundImage: `url(/assets/img/service/service-details/img-3.jpg)`,
                  }}
                >
                  <div className='tp-service-widget-contact-content text-center'>
                    <div className='tp-service-widget-contact-icon'>
                      <span>
                        <i className='fa-solid fa-phone'></i>
                      </span>
                    </div>
                    <p>Requesting A Call:</p>
                    <a href='tel:55555555'>+234 902 0353 234</a>
                  </div>
                </div>

                <div className='tp-service-widget-download mb-40'>
                  <a href='#'>
                    <span>
                      Download Profile
                      <Image
                        width={500}
                        height={500}
                        src='/assets/img/service/service-details/icon-3.jpg'
                        alt='image-title-here'
                      />
                    </span>
                  </a>
                </div>

                <div className='tp-service-widget-list'>
                  <div className='tp-service-widget-list-content'>
                    <ul>
                      {some_list.map((item, i) => (
                        <li key={i}>
                          <i className='fa-light fa-circle-check'></i> {item}
                        </li>
                      ))}
                    </ul>
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

export default ServiceDetailsArea
