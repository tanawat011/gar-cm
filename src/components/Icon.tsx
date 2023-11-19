import React from 'react'

// NOTE: Import all icons from react-icons
import {
  FaAlignJustify,
  FaAngleDown,
  FaBars,
  FaFile,
  FaGear,
  FaGears,
  FaHouseChimneyCrack,
  FaIndent,
  FaLock,
  FaMagnifyingGlass,
  FaOutdent,
  FaRegBell,
  FaRegMoon,
  FaRegSun,
  FaSignal,
} from 'react-icons/fa6'

// NOTE: Add icon to this object
export const ICON_ALLOWED = {
  FaAlignJustify,
  FaAngleDown,
  FaBars,
  FaFile,
  FaGear,
  FaGears,
  FaHouseChimneyCrack,
  FaIndent,
  FaLock,
  FaMagnifyingGlass,
  FaOutdent,
  FaRegBell,
  FaRegMoon,
  FaRegSun,
  FaSignal,
}

export type IconProps = {
  id?: string
  name: keyof typeof ICON_ALLOWED
  className?: string
  onClick?: () => void
}

export const Icon: React.FC<IconProps> = ({ id, name, className, onClick }) => {
  const IconComponent = ICON_ALLOWED[name]

  return (
    <div id={id} className={className} onClick={onClick}>
      <IconComponent />
    </div>
  )
}
