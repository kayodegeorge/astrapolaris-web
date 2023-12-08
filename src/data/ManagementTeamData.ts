import { StaticImageData } from 'next/image'
// home 01
import team_avatar_img_1 from '../../public/assets/img/team/img-1.jpg'
import team_md from '../../public/assets/img/team/team-md.jpg'
import team_wole from '../../public/assets/img/team/team-wole.jpg'
import team_cto from '../../public/assets/img/team/team-cto.jpg'
import team_coo from '../../public/assets/img/team/team-coo.jpg'
import team_hr from '../../public/assets/img/team/team-hr.jpg'
import team_admin from '../../public/assets/img/team/team-admin.jpg'
import team_derin from '../../public/assets/img/team/team-derin.jpg'
import team_icu from '../../public/assets/img/team/team-icu.jpg'
import team_kolbdm from '../../public/assets/img/team/team-kolbdm.jpg'
import team_azeez from '../../public/assets/img/team/team-azeez.jpg'
import team_avatar_img_2 from '../../public/assets/img/team/img-2.jpg'
import team_avatar_img_3 from '../../public/assets/img/team/img-3.jpg'
import team_avatar_img_4 from '../../public/assets/img/team/img-4.jpg'
// home 02
import team_avatar_img_2_1 from '../../public/assets/img/team/home-2/user-1.jpg'
import team_avatar_img_2_2 from '../../public/assets/img/team/home-2/user-2.jpg'
import team_avatar_img_2_3 from '../../public/assets/img/team/home-2/user-3.jpg'
import team_icunew from '../../public/assets/img/team/team-icunew.jpg'
interface DataType {
  id: number
  home: number
  delay: string
  img: StaticImageData
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
    img: team_md,
    title: 'Akintunde Ogunsan',
    designatio: 'Managing Director',
  },
  {
    id: 3,
    home: 1,
    delay: '.7s',
    img: team_wole,
    title: 'Oluwole Idowu',
    designatio: 'CRO',
  },
  {
    id: 4,
    home: 1,
    delay: '.9s',
    img: team_cto,
    title: 'Adesina Akomolafe',
    designatio: 'CTO',
  },
  {
    id: 2,
    home: 1,
    delay: '.5s',
    img: team_coo,
    title: 'Mayowa Omolade',
    designatio: 'Chief Operating Officer',
  },
  {
    id: 1,
    home: 1,
    delay: '.3s',
    img: team_admin,
    title: 'Oluwaseun Ayelotan',
    designatio: 'Head, Admin',
  },

  {
    id: 1,
    home: 1,
    delay: '.3s',
    img: team_icu,
    title: 'Samson Omoyemi',
    designatio: 'Head, ICU',
  },
  {
    id: 2,
    home: 1,
    delay: '.5s',
    img: team_hr,
    title: 'Olubunmi Adegbite',
    designatio: 'Head, Human Capital Management',
  },
  {
    id: 3,
    home: 1,
    delay: '.7s',
    img: team_kolbdm,
    title: 'Idowu Falade',
    designatio: 'Chief Financial Officer',
  },
]

export default team_data
