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
  FaChevronDown,
  FaShop,
  FaChevronRight,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaGithub,
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
  FaChevronDown,
  FaShop,
  FaChevronRight,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaGithub,
}

export type IconType = keyof typeof ICON_ALLOWED

export type IconProps = {
  id?: string
  name: keyof typeof ICON_ALLOWED
  className?: string
  onClick?: () => void
}

export const Icon: React.FC<IconProps> = ({ id, name, className, onClick }) => {
  const IconComponent = ICON_ALLOWED[name]

  return (
    <div id={id} className={['flex items-center justify-center', className].join(' ')} onClick={onClick}>
      <IconComponent />
    </div>
  )
}
