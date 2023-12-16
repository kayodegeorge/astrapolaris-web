import React from 'react'
import Image from 'next/image'

// service details data types
interface DataType {
  title: string
  sm_des_1: string

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
  title: 'Our Services',
  sm_des_1:
    'Astra Polaris Microfinance Bank is your financial partner of choice, specializing in a comprehensive range of services to meet your diverse needs. From flexible loan options tailored for all, including the underserved and unbanked, to attractive deposit and savings solutions, we are dedicated to fostering financial inclusivity. Experience seamless savings with our innovative SafeSave app, ensuring your financial goals are within easy reach. Whether you are an entrepreneur, an average saver, or a digital merchant, Astra Polaris is here to elevate your financial journey. Connect with us for a personalized and rewarding banking experience.',

  features: [
    {
      img: '/assets/img/service/service-details/icon-1.svg',
      title: 'Loans',
      sm_des:
        'Astra Polaris microfinance bank is committed to addressing financial challenges, extends attractive facilities beyond the elite class to the underserved and unbanked populations. Our diverse loan packages cater to everyone, from the average tomato seller to the Instagram merchant. Connect with us to explore tailored options that perfectly fit your needs.',
    },
    {
      img: '/assets/img/service/service-details/icon-2.svg',
      title: 'Deposits',
      sm_des:
        'Elevate your savings journey with Astra Polaris Microfinance Bank. Our diverse deposit products and services are designed to accommodate individuals, communities, small-scale businesses, cooperatives, religious bodies, and even provide tailored solutions for your childrens future. Connect with us today to explore the ideal deposit options that align with your financial goals.',
    },
    {
      img: '/assets/img/service/service-details/icon-2.svg',
      title: 'Savings',
      sm_des:
        'Astra Polaris Microfinance Bank revolutionizes savings through its innovative platform, SafeSave. Seamlessly automate your savings, monitor accounts, and enjoy tailored solutions for individuals, communities, small-scale businesses, cooperatives, and even children. With our commitment to financial inclusivity, SafeSave ensures a convenient and inclusive savings experience, making Astra Polaris your ideal partner in achieving your financial goals.',
    },
  ],
  title_2: 'Financial Wellness Solutions',
  sm_des_3:
    'Experience comprehensive financial wellness with Astra Polaris. Benefit from personalized financial advice, educational resources, and tools to enhance your overall financial health. Our commitment extends beyond transactions; we are your partner in achieving financial success.',
  sm_des_4:
    'Micro-Business Support: Empowering micro-businesses, Astra Polaris provides specialized support services tailored to the unique needs of small enterprises. From financial education to customized financial solutions, we are dedicated to fueling the growth of your business.',
  quote: 'Astra Polaris Micro-Finance Bank, saying the future is now.',
  service_title: 'Our services',
  service_list: [
    { title: 'Loans', link: '#' },
    { title: 'Investments', link: '#' },
    { title: 'Deposits', link: '#' },
    { title: 'Proof of Funds', link: '#' },
    { title: 'Savings', link: '#' },
  ],
  some_list: [
    'Tailored Loan Solutions',
    'Innovative SafeSave App',
    'Inclusive Financial Services',
  ],
}
const {
  title,
  sm_des_1,
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
                    src='/assets/img/service/service-try.jpg'
                    width={20}
                    height={20}
                    style={{ width: '100%', height: 'auto' }}
                    alt='image-title-here'
                  />
                </div>
                <h3 className='tp-service-details-title'>{title}</h3>
                <p>{sm_des_1}</p>

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
                    backgroundImage: `url(/assets/img/contact/contact-man.jpg)`,
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
