import { StaticImageData } from 'next/image'
// home 01

import team_md from '../../public/assets/img/team/team-md.jpg'

// home 02

import board_chairman from '../../public/assets/img/team/chairman-new.jpg'
import ajanaku_board from '../../public/assets/img/team/ajanaku-board.jpg'
import olusegun_board from '../../public/assets/img/team/olusegun-board.jpg'
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
    id: 2,
    home: 1,
    delay: '.5s',
    img: board_chairman,
    title: 'Toye Osungbesan',
    designatio: 'Board Chairman',
  },
  {
    id: 1,
    home: 1,
    delay: '.3s',
    img: team_md,
    title: 'Akintunde Ogunsan',
    designatio: 'Managing Director',
  },
  {
    id: 3,
    home: 1,
    delay: '.7s',
    img: ajanaku_board,
    title: 'Olusegun Ajanaku, Dr',
    designatio: 'Board Member',
  },
  {
    id: 4,
    home: 1,
    delay: '.9s',
    img: olusegun_board,
    title: 'Olusegun Asekun, Dr',
    designatio: 'Board Member',
  },
]

export default board_data
