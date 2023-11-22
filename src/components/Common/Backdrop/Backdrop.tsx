import React from 'react'

type BackdropProps = {
  open?: boolean
  zIndex?: number
  onClick: () => void
}

export const Backdrop: React.FC<BackdropProps> = ({
  onClick,
  open,
  zIndex = 1,
}) => {
  if (!open) return null

  return (
    <div
      style={{ zIndex }}
      className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-70'
      onClick={onClick}
    />
  )
}
