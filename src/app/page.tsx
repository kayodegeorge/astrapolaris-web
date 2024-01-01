'use client'
import HomeOne from '@/components/homes/multi-page/home'
import Wrapper from '@/layouts/Wrapper'
import { useEffect } from 'react'

// export const metadata = {
//   title: ' Home - Astra-Polaris Microfinance Bank',
// }

const index = () => {
  // useEffect(() => {
  //   const audio = new Audio('/assets/astra-anthem.mp3')
  //   audio.play()
  //   audio.volume = 0.5 // Set volume (0.0 to 1.0)
  //   audio.loop = true
  //   // Optionally, you can loop the music
  //   audio.addEventListener('ended', () => {
  //     audio.play()
  //   })
  // }, [])
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}

export default index
