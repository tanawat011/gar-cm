import React from 'react'

// NOTE: Import all icons from react-icons
import {
  FaAngleDown,
  FaBell,
  FaFile,
  FaGear,
  FaGears,
  FaHouseChimneyCrack,
  FaLock,
  FaMagnifyingGlass,
  FaSignal,
} from 'react-icons/fa6'

// NOTE: Add icon to this object
const iconAllowed = {
  FaAngleDown,
  FaBell,
  FaFile,
  FaGear,
  FaGears,
  FaHouseChimneyCrack,
  FaLock,
  FaMagnifyingGlass,
  FaSignal,
}

export type IconProps = {
  name: keyof typeof iconAllowed
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  const IconComponent = iconAllowed[name]

  return (
    <div className={className}>
      <IconComponent />
    </div>
  )
}
