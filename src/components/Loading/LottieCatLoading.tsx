import Lottie from 'lottie-react'

import lottieCat from '@/assets/json/lottieCat.json'

export const LottieCatLoading = () => {
  return <Lottie animationData={lottieCat} loop={true} className='bg-black w-screen h-screen' />
}
