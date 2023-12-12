import { StaticImageData } from 'next/image'
// home 01
import team_avatar_img_1 from '../../public/assets/img/team/img-1.jpg'
import team_md from '../../public/assets/img/team/team-md.jpg'

import team_avatar_img_2 from '../../public/assets/img/team/img-2.jpg'
import team_avatar_img_3 from '../../public/assets/img/team/img-3.jpg'
import team_avatar_img_4 from '../../public/assets/img/team/img-4.jpg'
// home 02

import board_chairman from '../../public/assets/img/team/chairman-new.jpg'
interface DataType {
  id: number
  home: number
  delay: string
  img: StaticImageData
  title: string
  designatio: string
}
;[]

const board_data: DataType[] = [
  // board of directors
  {
    id: 1,
    home: 1,
    delay: '.3s',
    img: team_md,
    title: 'Akintunde Ogunsan',
    designatio: 'Managing Director',
  },
  {
    id: 2,
    home: 1,
    delay: '.5s',
    img: board_chairman,
    title: 'Toye Osungbesan',
    designatio: 'Board Chairman',
  },
  {
    id: 3,
    home: 1,
    delay: '.7s',
    img: team_md,
    title: 'Nabo',
    designatio: 'Board Member',
  },
  {
    id: 4,
    home: 1,
    delay: '.9s',
    img: team_md,
    title: 'Hon Ali',
    designatio: 'Board Member',
  },
]

export default board_data
