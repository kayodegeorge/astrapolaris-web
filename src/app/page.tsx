'use client'
import HomeOne from '@/components/homes/multi-page/home'
import Wrapper from '@/layouts/Wrapper'
import { useEffect } from 'react'

// export const metadata = {
//   title: ' Home - Astra-Polaris Microfinance Bank',
// }

const index = () => {
  useEffect(() => {
    const audio = new Audio('/assets/astra-anthem.mp3')
    audio.play()

    // Optionally, you can loop the music
    audio.addEventListener('ended', () => {
      audio.play()
    })

    return () => {
      audio.pause()
    }
  }, [])
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}

export default index
