import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import React from 'react'

export const metadata = {
  title: 'About - Astra Polaris',
}

const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

export default index
