import React from 'react'

type BackdropProps = {
  id?: string
  open?: boolean
  zIndex?: number
  onClick: () => void
}

export const Backdrop: React.FC<BackdropProps> = ({ id = 'backdrop', onClick, open, zIndex = 20 }) => {
  if (!open) return null

  return (
    <div
      id={id}
      style={{ zIndex }}
      className='fixed top-0 left-0 h-full w-full bg-black bg-opacity-70'
      onClick={onClick}
    />
  )
}

// ทำให้ Backdrop กลายเป็น portal ที่นอก root ของ DOM และให้มันอ่าน config เปิด/ปิด จาก context ได้
// เผื่ออย่างอื่น -> z-index: 10
// Backdrop -> z-index: 20
// Drawer -> z-index: 30
// Modal -> z-index: 40

// เช่นกันกับ Backdrop, Drawer และ Modal ก็จะกลายเป็น portal ที่อยู่นอก root ของ DOM และให้มันอ่าน config เปิด/ปิด จาก context ได้

// backdropOpen: boolean, drawerOpen: boolean, drawerPosition: DrawerPosition, modalOpen: boolean

// ----------------------------------
