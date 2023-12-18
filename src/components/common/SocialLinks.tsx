import Image from 'next/image'
import Link from 'next/link'

interface social_links_type {
  link: string
  target: string
  icon: string
}

const social_links: social_links_type[] = [
  {
    link: 'http://facebook.com',
    target: '_blank',
    icon: 'fab fa-facebook-f',
  },
  {
    link: 'http://twitter.com',
    target: '_blank',
    icon: 'fab fa-twitter',
  },
  {
    link: 'https://www.instagram.com',
    target: '_blank',
    icon: 'fab fa-instagram',
  },
  {
    link: 'https://www.youtube.com',
    target: '_blank',
    icon: 'fab fa-youtube',
  },
]

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link key={i} href={l.link} target={l.target ? l.target : ''}>
          <i className={l.icon}></i>{' '}
        </Link>
      ))}
    </>
  )
}

export default SocialLinks

interface social_links_type_2 {
  link: string
  color: string
  icon: string
}

const social_links_2: social_links_type_2[] = [
  {
    link: 'http://facebook.com',
    color: 'footer-facebook',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    link: 'http://twitter.com/astrapolarisMFB',
    color: '',
    icon: 'fa-brands fa-twitter',
  },
  {
    link: 'http://www.instagram.com/astrapolaris_mfb',
    color: 'footer-instagram',
    icon: 'fa-brands fa-instagram',
  },
  {
    link: 'http://www.instagram.com',
    color: 'footer-insta',
    icon: 'fa-brands fa-instagram',
  },
]

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_2.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className={link.color}
          target='_blank'
        >
          <i className={link.icon}></i>{' '}
        </Link>
      ))}
    </>
  )
}

// team social links
interface DataType {
  id: number
  link: string
  icon: string
}
const team_social_data: DataType[] = [
  {
    id: 1,
    link: 'http://facebook.com/ astrapolarisMFB',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    id: 2,
    link: 'http://instagram.com/astrapolaris_mfb',
    icon: 'fa-brands fa-instagram',
  },
  {
    id: 3,
    link: 'http://twitter.com',
    icon: 'fa-brands fa-twitter',
  },
  {
    id: 4,
    link: 'http://youtube.com',
    icon: 'fa-brands fa-linkedin-in',
  },
]

export const TeamSocialLinks = () => {
  return (
    <>
      {team_social_data.map((t_item, t_index) => (
        <Link
          key={t_index}
          href={t_item.link}
          className={`icon-${t_item.id}`}
          target='_blank'
        >
          <i className={t_item.icon}></i>{' '}
        </Link>
      ))}
    </>
  )
}

// copy right text
type copy_right_text_type = {
  copy_right: JSX.Element
}

const copy_right_text: copy_right_text_type = {
  copy_right: (
    <>
      <span className='flex '>
        © AstraPolaris {new Date().getFullYear()} || Licensed by Central Bank of
        Nigeria.
        <span>
          <Image
            className='mt-1'
            width={50}
            height={50}
            alt='cbn logo'
            src='/assets/img/logo/cbn-plain.png'
          />
        </span>
      </span>
    </>
  ),
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return <> {copy_right}</>
}
