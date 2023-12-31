import Count from '@/components/common/Count'
import process_icon_1 from '../../../../../public/assets/img/process/icon-1.svg'
import process_icon_2 from '../../../../../public/assets/img/process/icon-2.svg'
import process_icon_3 from '../../../../../public/assets/img/process/icon-3.svg'

import Image from 'next/image'

interface DataType {
  subtitle: string
  title: React.JSX.Element
  features: {
    img: any
    title: string
    sm_des: string
  }[]
}

const process_counter: DataType = {
  subtitle: 'Our Latest Product',
  title: <>Introducing SafeSave</>,
  features: [
    {
      img: process_icon_1,
      title: 'Automate Your Savings',
      sm_des:
        'Safesave enables intelligent automation of your savings, eliminating the need to manually remember and execute regular fixed daily or weekly contributions.',
    },
    {
      img: process_icon_2,
      title: 'Easy Onboarding',
      sm_des:
        'Getting started with the SafeSave app is as easy as pie. Simply download the app from the PlayStore or AppStore, enter your BVN, and you will be up and running in no time!',
    },
    {
      img: process_icon_3,
      title: ' Competitive Interests Rates',
      sm_des:
        'Explore dynamic interest rates on the SafeSave app. From EasiSave with rates up to 10% to AutoSave reaching up to 15%, achieve your goals and live your dreams effortlessly!',
    },
  ],
}

const { subtitle, title, features } = process_counter

const ProjectAreaHome = () => {
  return (
    <>
      <section
        className='tp-process-arae pt-120 pb-120'
        style={{ backgroundColor: '#F6F6F9' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='tp-process-wrapper'>
                <div className='tp-process-title mb-40'>
                  <span className='tp-section-title-pre'>{subtitle}</span>
                  <h3 className='tp-section-title'>{title}</h3>
                </div>

                {features.map((item, index) => (
                  <div
                    className='tp-process-item d-flex align-items-center'
                    key={index}
                  >
                    <div className='tp-process-item-icon'>
                      <span>
                        <Image
                          width={200}
                          height={200}
                          src='/assets/img/process/icon-1.svg'
                          alt='image-title-here'
                        />
                      </span>
                    </div>
                    <div className='tp-process-item-content'>
                      <h4 className='tp-process-item-title'>{item.title}</h4>
                      <p>{item.sm_des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-lg-6'>
              <div
                className='tp-process-thumb-wrapper p-relative wow fadeInRight'
                data-wow-duration='1s'
                data-wow-delay='.3s'
              >
                <div className='tp-process-thumb p-relative'>
                  <div className='main'>
                    <Image
                      width={400}
                      height={300}
                      src='/assets/img/process/wowzer.jpg'
                      alt='image-title-here'
                    />
                  </div>
                </div>
                <div className='tp-process-counter d-flex align-items-center'>
                  <div className='tp-process-counter-icon'>
                    <span>
                      <i className='flaticon-030-machine-repair'></i>
                    </span>
                  </div>
                  <div className='tp-process-content'>
                    <h4 className='tp-process-counter-title d-flex'>
                      <Count number={300} /> +
                    </h4>
                    <p>Downloads</p>
                  </div>
                </div>
                <div className='tp-process-trusted text-center'>
                  <p>
                    Trusted By <br />{' '}
                    <span style={{ fontSize: '30px' }}>customers</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectAreaHome
