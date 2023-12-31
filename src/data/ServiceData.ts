import { StaticImageData } from 'next/image'

import service_img_2 from '../../public/assets/img/service/home-2/investment-1.jpg'
import service_img_1 from '../../public/assets/img/service/home-2/loan-1.jpg'
import service_img_3 from '../../public/assets/img/service/home-2/img-3.jpg'
import service_img_4 from '../../public/assets/img/service/home-2/digital-services.png'

import service_thumb_img_1 from '../../public/assets/img/service/img-1.jpg'
import service_thumb_img_2 from '../../public/assets/img/service/img-2.jpg'
import service_thumb_img_3 from '../../public/assets/img/service/img-3.jpg'

interface DataType {
  id: number
  home: number | string
  img: string
  category?: string
  title: string
  sm_des?: string
  delay: string
}
;[]

const service_data: DataType[] = [
  {
    id: 1,
    home: 2,
    img: '/assets/img/service/home-2/loan-1.jpg',
    category: 'Our services',
    title: 'Loan Products',
    delay: '.3s',
  },
  {
    id: 2,
    home: 2,
    img: '/assets/img/service/home-2/investment-1.jpg',
    category: 'Our services',
    title: 'Saving & Investment Products',
    delay: '.5s',
  },
  {
    id: 3,
    home: 2,
    img: '/assets/img/service/home-2/digital-services.png',
    category: 'Our services',
    title: 'Digital Services',
    delay: '.7s',
  },
  {
    id: 3,
    home: 2,
    img: '/assets/img/service/home-2/img-3.jpg',
    category: 'Our services',
    title: 'Market Research',
    delay: '.7s',
  },

  // service page
  {
    id: 1,
    home: 'service',
    img: '/assets/img/service/img-1.jpg',
    title: 'Propel Consulting',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.3s',
  },
  {
    id: 2,
    home: 'service',
    img: '/assets/img/service/img-2.jpg',
    title: 'Velocity Solutions',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.5s',
  },
  {
    id: 3,
    home: 'service',
    img: '/assets/img/service/img-3.jpg',
    title: 'Revive Business',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.7s',
  },
  {
    id: 2,
    home: 'service',
    img: '/assets/img/service/img-2.jpg',
    title: 'Velocity Solutions',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.5s',
  },
  {
    id: 3,
    home: 'service',
    img: '/assets/img/service/img-3.jpg',
    title: 'Revive Business',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.7s',
  },
  {
    id: 1,
    home: 'service',
    img: '/assets/img/service/img-1.jpg',
    title: 'Propel Consulting',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.3s',
  },
]

export default service_data
