import { Spinner } from '@nextui-org/react'

export const FullScreenLoading = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center text-center bg-black bg-opacity-70 z-[51]'>
      <Spinner size='lg' />
    </div>
  )
}
