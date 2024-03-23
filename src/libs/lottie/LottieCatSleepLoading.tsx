// import Lottie from 'lottie-react'

import dynamic from 'next/dynamic'

import lottieCat from './Animation - Cat Sleep.json'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export const LottieCatSleepLoading = () => {
  return <Lottie animationData={lottieCat} loop={true} className='bg-black w-screen h-screen fixed top-0 left-0 z-50' />
}