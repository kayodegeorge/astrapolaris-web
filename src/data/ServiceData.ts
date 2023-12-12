import { StaticImageData } from 'next/image'

import service_img_2 from '../../public/assets/img/service/home-2/img-2.jpg'
import service_img_1 from '../../public/assets/img/service/home-2/img-1.jpg'
import service_img_3 from '../../public/assets/img/service/home-2/img-3.jpg'
import service_img_4 from '../../public/assets/img/service/home-2/img-4.jpg'

import service_icon_1 from '../../public/assets/img/service/home-2/icon-1.svg'
import service_icon_2 from '../../public/assets/img/service/home-2/icon-2.svg'
import service_icon_3 from '../../public/assets/img/service/home-2/icon-3.svg'
import service_icon_4 from '../../public/assets/img/service/home-2/icon-4.svg'

import service_thumb_img_1 from '../../public/assets/img/service/img-1.jpg'
import service_thumb_img_2 from '../../public/assets/img/service/img-2.jpg'
import service_thumb_img_3 from '../../public/assets/img/service/img-3.jpg'

interface DataType {
  id: number
  home: number | string
  img: StaticImageData | any
  icon?: StaticImageData | any
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
    img: service_img_1,
    icon: service_icon_1,
    category: 'Our services',
    title: 'Loan Products',
    delay: '.3s',
  },
  {
    id: 2,
    home: 2,
    img: service_img_2,
    icon: service_icon_2,
    category: 'Our services',
    title: 'Saving and Investment Products',
    delay: '.5s',
  },
  {
    id: 3,
    home: 2,
    img: service_img_3,
    icon: service_icon_3,
    category: 'Our services',
    title: 'Advisory Services',
    delay: '.7s',
  },

  // service page
  {
    id: 1,
    home: 'service',
    img: service_thumb_img_1,
    title: 'Propel Consulting',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.3s',
  },
  {
    id: 2,
    home: 'service',
    img: service_thumb_img_2,
    title: 'Velocity Solutions',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.5s',
  },
  {
    id: 3,
    home: 'service',
    img: service_thumb_img_3,
    title: 'Revive Business',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.7s',
  },
  {
    id: 2,
    home: 'service',
    img: service_thumb_img_2,
    title: 'Velocity Solutions',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.5s',
  },
  {
    id: 3,
    home: 'service',
    img: service_thumb_img_3,
    title: 'Revive Business',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.7s',
  },
  {
    id: 1,
    home: 'service',
    img: service_thumb_img_1,
    title: 'Propel Consulting',
    sm_des:
      "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people",
    delay: '.3s',
  },
]

export default service_data
