import { useSelector } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs'
import { LS_THEME, THEME_LABEL } from '@/constants'
import { appSettingSelector } from '@/store/selector'
import { setTheme } from '@/store/slice'

import { ToggleAppSetting } from './ToggleAppSetting'

export const ToggleTheme = () => {
  const { theme } = useSelector(appSettingSelector)

  return (
    <ToggleAppSetting
      title='Theme'
      value={theme}
      defaultValue={DEFAULT_APP_SETTING.theme}
      storageName={LS_THEME}
      dispatchSetting={setTheme}
      items={[...THEME_LABEL]}
    />
  )
}
