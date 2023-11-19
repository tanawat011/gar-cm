import Link from 'next/link'

export const FullScreenNotFound = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen  bg-white dark:bg-base-gradient-content flex flex-col items-center justify-center text-center'>
      <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
      <Link href='/'>Back to home</Link>
    </div>
  )
}
