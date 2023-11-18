import Lottie from 'lottie-react'

import lottieCat from '@/assets/json/lottieCat.json'
// import lottieMarkus from '@/assets/json/lottieMarkus.json'

export const Loading = () => {
  return <Lottie animationData={lottieCat} loop={true} className='bg-black' />
}
