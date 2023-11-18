import Lottie from 'lottie-react'

import lottieCat from '@/assets/json/lottieCat.json'

export const Loading = () => {
  return (
    <Lottie
      animationData={lottieCat}
      loop={true}
      className='bg-black w-screen h-screen'
    />
  )
}
