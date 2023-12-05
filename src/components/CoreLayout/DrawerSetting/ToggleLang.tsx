import type { Lang } from '@/types'

import { useSelector } from 'react-redux'

import { Tabs } from '@/components/Common'
import { IconCountryFlag } from '@/components/IconCountryFlag'
import { LANG_LABEL } from '@/constants'
import { useLang } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

import { Item } from './Item'

export const ToggleLang = () => {
  const { lang } = useSelector(appSettingSelector)
  const { toggleLang } = useLang()

  return (
    <Item label='Language' center>
      <Tabs
        items={[...LANG_LABEL]}
        selectedKey={lang}
        onSelectionChange={(key) => toggleLang(key as Lang)}
        fullWidth
        size='sm'
        radius='full'
        renderTab={(l) => (
          <div className='flex items-center'>
            <IconCountryFlag lang={l.key as Lang} className='mx-3' />
            <span>{l.label}</span>
          </div>
        )}
      />
    </Item>
  )
}
