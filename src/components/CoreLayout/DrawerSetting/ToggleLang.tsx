import type { Lang } from '@/types'

import { useSelector } from 'react-redux'

import { IconCountryFlag } from '@/components/IconCountryFlag'
import { DEFAULT_APP_SETTING } from '@/configs'
import { LANG_LABEL, LS_LANG } from '@/constants'
import { appSettingSelector } from '@/store/selector'
import { setLang } from '@/store/slice'

import { ToggleAppSetting } from './ToggleAppSetting'

export const ToggleLang = () => {
  const { lang } = useSelector(appSettingSelector)

  return (
    <ToggleAppSetting
      toggleStyle='tab'
      title='Language'
      value={lang}
      defaultValue={DEFAULT_APP_SETTING.lang}
      storageName={LS_LANG}
      dispatchSetting={setLang}
      items={[...LANG_LABEL]}
      renderTab={(l) => (
        <div className='flex items-center'>
          <IconCountryFlag lang={l.key as Lang} className='mx-3' />
          <span>{l.label}</span>
        </div>
      )}
    />
  )
}
