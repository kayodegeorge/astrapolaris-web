import Count from '@/components/common/Count'
import process_icon_1 from '../../../../../public/assets/img/process/icon-1.svg'
import process_icon_2 from '../../../../../public/assets/img/process/icon-2.svg'
import process_icon_3 from '../../../../../public/assets/img/process/icon-3.svg'

import process_img_1 from '../../../../../public/assets/img/process/img-1.jpg'
import process_img_2 from '../../../../../public/assets/img/process/img-2.jpg'
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
  subtitle: 'Our Latest Project',
  title: <>Introducing SafeSave</>,
  features: [
    {
      img: process_icon_1,
      title: 'Best emplementation',
      sm_des:
        'Ished fact that a reader will be distrol acted bioiiy desig the.ished fact that a reader will be distrol acted bioiiy bioiiy desig the.ished fact that a reader.',
    },
    {
      img: process_icon_2,
      title: 'Design make for you',
      sm_des:
        'Ished fact that a reader will be distrol acted bioiiy desig the.ished fact that a reader will be distrol acted bioiiy bioiiy desig the.ished fact that a reader.',
    },
    {
      img: process_icon_3,
      title: 'Finished the process',
      sm_des:
        'Ished fact that a reader will be distrol acted bioiiy desig the.ished fact that a reader will be distrol acted bioiiy bioiiy desig the.ished fact that a reader.',
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
                        <Image src={item.img} alt='image-title-here' />
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
                    <Image src={process_img_1} alt='image-title-here' />
                  </div>
                  <Image
                    className='shape-1'
                    src={process_img_2}
                    alt='image-title-here'
                  />
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
                    Trusted By <br /> <span>2345</span>
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