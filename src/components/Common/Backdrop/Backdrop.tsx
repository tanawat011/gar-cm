import React from 'react'

type BackdropProps = {
  children?: React.ReactNode
  id?: string
  open?: boolean
  zIndex?: number
  onClick?: () => void
}

export const Backdrop: React.FC<BackdropProps> = ({ id = 'backdrop', onClick, open, zIndex = 20, children }) => {
  if (!open) return null

  return (
    <div
      id={id}
      style={{ zIndex }}
      className='fixed top-0 left-0 h-full w-full bg-black bg-opacity-70'
      onClick={onClick}
    >
      {children}
    </div>
  )
}
