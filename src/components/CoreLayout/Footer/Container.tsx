import React from 'react'

type FooterProps = {
  id?: string
}

export const Container: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className='flex items-center justify-center lg:flex-row lg:justify-between m-4 p-3'>
      <div className='text-sm text-center inline'>
        © 2024, made with ❤️ by <span className='font-bold'>tDev GAR</span> for developers
      </div>
    </footer>
  )
}
