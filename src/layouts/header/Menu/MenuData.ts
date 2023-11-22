import { StaticImageData } from 'next/image'

import demo_img_1 from '../../../../public/assets/img/menu/img-1.jpg'
import demo_img_2 from '../../../../public/assets/img/menu/img-2.jpg'
import demo_img_3 from '../../../../public/assets/img/menu/img-3.jpg'

interface DataType {
  id: number
  title: string
  link: string
  img_dropdown?: boolean
  has_dropdown?: boolean
  sub_menus?: {
    link: string
    title: string
    btn_title?: string
    one_page_link?: string | any
    demo_img?: StaticImageData | any
  }[]
}
;[]

const menu_data: DataType[] = [
  {
    id: 1,
    title: 'Home',
    link: '#',
    img_dropdown: true,
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about',
    has_dropdown: false,
  },
  {
    id: 3,
    title: 'Our Services',
    link: '#',
    has_dropdown: true,
    sub_menus: [
      { link: '/services', title: 'Services' },
      { link: '/services-details', title: 'Services Details' },
    ],
  },
  {
    id: 4,
    title: 'Our Channels',
    link: '#',
    has_dropdown: true,
    sub_menus: [
      { link: '/project', title: 'Project' },
      { link: '/project-details', title: 'Project Details' },
      { link: '/team', title: 'Team ' },
      { link: '/team-details', title: 'Team Details' },
      { link: '/faq', title: 'FAQ' },
    ],
  },

  {
    id: 6,
    title: 'Contact Us',
    link: '/contact',
    has_dropdown: false,
  },
]
export default menu_data