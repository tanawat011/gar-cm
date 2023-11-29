import type { Lang } from '@/types'

import React from 'react'

export type IconFlagType = Lang

export type IconCountryFlagProps = {
  lang: IconFlagType
  className?: string
}

export const IconCountryFlag: React.FC<IconCountryFlagProps> = ({ lang, className }) => {
  const transformLangToFlag = (l: IconFlagType) => {
    switch (l) {
      case 'en':
        return 'us'
      case 'th':
      default:
        return 'th'
    }
  }

  return (
    <div className={className}>
      <span className={`fi fi-${transformLangToFlag(lang)}`} />
    </div>
  )
}
