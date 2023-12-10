import { StaticImageData } from 'next/image'
// home 01

interface DataType {
  id: number
  home: number
  delay: string
  img: string
  title: string
  designatio: string
}
;[]

const team_data: DataType[] = [
  // management team
  {
    id: 1,
    home: 1,
    delay: '.3s',
    img: '/assets/img/team/team-md.jpg',
    title: 'Akintunde Ogunsan',
    designatio: 'Managing Director',
  },
  {
    id: 3,
    home: 1,
    delay: '.7s',
    img: '/assets/img/team/team-wole.jpg',
    title: 'Oluwole Idowu',
    designatio: 'CRO',
  },
  {
    id: 4,
    home: 1,
    delay: '.9s',
    img: '/assets/img/team/team-cto.jpg',
    title: 'Adesina Akomolafe',
    designatio: 'CTO',
  },
  {
    id: 2,
    home: 1,
    delay: '.5s',
    img: '/assets/img/team/team-coo.jpg',
    title: 'Mayowa Omolade',
    designatio: 'Chief Operating Officer',
  },
  {
    id: 1,
    home: 1,
    delay: '.3s',
    img: '/assets/img/team/team-admin.jpg',
    title: 'Oluwaseun Ayelotan',
    designatio: 'Head, Admin',
  },

  {
    id: 1,
    home: 1,
    delay: '.3s',
    img: '/assets/img/team/team-icu.jpg',
    title: 'Samson Omoyemi',
    designatio: 'Head, ICU',
  },
  {
    id: 2,
    home: 1,
    delay: '.5s',
    img: '/assets/img/team/team-hr.jpg',
    title: 'Olubunmi Adegbite',
    designatio: 'Head, Human Capital Management',
  },
  {
    id: 3,
    home: 1,
    delay: '.7s',
    img: '/assets/img/team/team-cfo.jpg',
    title: 'Idowu Falade',
    designatio: 'Chief Financial Officer',
  },
]

export default team_data
