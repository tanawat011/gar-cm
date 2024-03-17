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
  FaChevronLeft,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaGithub,
  FaTrashCan,
  FaCheck,
  FaStar,
  FaEllipsisVertical,
  FaPencil,
  FaCopy,
  FaRegCopy,
  FaPlus,
  FaX,
  FaFilter,
  FaTableColumns,
  FaCalendarDays,
  FaCode,
  FaRegEye,
  FaRegEyeSlash,
} from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

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
  FaChevronLeft,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGoogle,
  FaGithub,
  FaTrashCan,
  FaCheck,
  FaStar,
  FaEllipsisVertical,
  FaPencil,
  FaCopy,
  FaRegCopy,
  FaPlus,
  FaX,
  FaFilter,
  FaTableColumns,
  FaCalendarDays,
  FaCode,
  FaRegEye,
  FaRegEyeSlash,
  FcGoogle,
}

export type IconType = keyof typeof ICON_ALLOWED

export type IconProps = {
  id?: string
  name: keyof typeof ICON_ALLOWED
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl'
  className?: string
  onClick?: () => void
}

export const Icon: React.FC<IconProps> = ({ id, name, size, className, onClick }) => {
  const IconComponent = ICON_ALLOWED[name]

  const getSize = (s: IconProps['size']) => {
    const base = 16

    switch (s) {
      case 'xs':
        return 12
      case 'sm':
        return 14
      case 'md':
        return base
      case 'lg':
        return 18
      case 'xl':
        return 20
      case '2xl':
        return 24
      case '3xl':
        return 30
      case '4xl':
        return 36
      case '5xl':
        return 48
      case '6xl':
        return 60
      case '7xl':
        return 72
      case '8xl':
        return 96
      default:
        return base
    }
  }

  return (
    <div id={id} className={['flex items-center justify-center', className].join(' ')} onClick={onClick}>
      <IconComponent size={getSize(size)} />
    </div>
  )
}
