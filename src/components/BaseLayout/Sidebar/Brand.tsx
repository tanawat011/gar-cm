import Image from 'next/image'

export const Brand = () => {
  return (
    <a
      className='mb-3 flex items-center justify-center py-6 outline-none'
      href='#!'
      data-te-ripple-init
      data-te-ripple-color='primary'
    >
      <Image
        id='te-logo'
        className='mr-2'
        width={32}
        height={32}
        src='https://tailwind-elements.com/img/logo.png'
        alt='TE Logo'
        draggable='false'
      />
      <span>GAR NST2023</span>
    </a>
  )
}
