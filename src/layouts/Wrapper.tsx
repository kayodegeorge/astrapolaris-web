'use client'

import { useEffect } from 'react'
import { animationCreate } from '@/utils/utils'
import ScrollToTop from '@/components/common/ScrollToTop'

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap')
}

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {children}
      <ScrollToTop />
    </>
  )
}

export default Wrapper
