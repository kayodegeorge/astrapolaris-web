import Footer from '@/layouts/footer/Footer'
import Header from '@/layouts/header/Header'
import HeroAreaHomeTwo from './HeroAreaHome'
import AboutAreaHomeTwo from './AboutAreaHome'
import ServiceAreaHomeTwo from '../ServiceAreaHome'
import ContactAreaHome from './ContactAreaHome'

const HomeOne = () => {
  return (
    <>
      <Header />
      <main>
        <HeroAreaHomeTwo />
        <AboutAreaHomeTwo />
        <ServiceAreaHomeTwo />
        <ContactAreaHome />
      </main>
      <Footer />
    </>
  )
}

export default HomeOne
