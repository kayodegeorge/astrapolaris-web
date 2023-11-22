import HomeOne from '@/components/homes/multi-page/home'
import Wrapper from '@/layouts/Wrapper'
import React from 'react'

export const metadata = {
  title: 'Main Home - Finbest - Banking and Finance React Next js Template',
}

const index = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}

export default index
