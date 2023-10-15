import React from 'react'

// NOTE: Import all icons from react-icons
import {
  FaHouseChimneyCrack,
  FaLock,
  FaGears,
  FaAngleDown,
  FaFile,
  FaSignal,
} from 'react-icons/fa6'

// NOTE: Add icon to this object
const iconAllowed = {
  FaHouseChimneyCrack,
  FaLock,
  FaGears,
  FaAngleDown,
  FaFile,
  FaSignal,
}

export type IconProps = {
  name: keyof typeof iconAllowed
}

export const Icon: React.FC<IconProps> = ({ name }) => {
  const IconComponent = iconAllowed[name]

  return <IconComponent />
}
