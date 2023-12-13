import Header from '@/layouts/header/Header'
import Breadcrumb from '../common/BreadCrumb'
import Footer from '@/layouts/footer/Footer'
import ServiceDetailsArea from './ServiceDetailsArea'

const Services = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title='Our Services' page_title='Our Services' />
        <ServiceDetailsArea />
      </main>
      <Footer />
    </>
  )
}

export default Services
