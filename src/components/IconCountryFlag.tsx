import type { LANG } from '@/constants'

import React from 'react'

export type IconCountryFlagProps = {
  lang: (typeof LANG)[number]
  className?: string
}

export const IconCountryFlag: React.FC<IconCountryFlagProps> = ({
  lang,
  className,
}) => {
  const transformLangToFlag = (l: string) => {
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
