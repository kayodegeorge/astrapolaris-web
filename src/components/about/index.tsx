import React from 'react'

import CtaAreaHome from '../homes/multi-page/home/CtaAreaHome'

import Header from '@/layouts/header/Header'
import Footer from '@/layouts/footer/Footer'
import Breadcrumb from '../common/BreadCrumb'
import AboutAreaHome from '../homes/multi-page/home/AboutAreaHome'
import ProjectAreaHome from '../homes/multi-page/home/ProductAreaHome'
import TeamAreaHome from '../homes/multi-page/home/BoardAreaHome'
import ManagementTeamAreaHome from '../homes/multi-page/home/ManagementTeamAreaHome'

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title='About Us' page_title='About Us' />
        <AboutAreaHome />

        {/* <ProjectAreaHome /> */}
        <TeamAreaHome style={true} />
        <ManagementTeamAreaHome />
        {/* <CtaAreaHome /> */}
      </main>
      <Footer />
    </>
  )
}

export default About
