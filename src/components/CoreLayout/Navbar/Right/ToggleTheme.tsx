import type { IconType } from '@/components/Icon'

import { useEffect } from 'react'

import { useTheme } from 'next-themes'
import { useSelector } from 'react-redux'

import { Icon } from '@/components/Icon'
import { DEFAULT_APP_SETTING } from '@/configs'
import { LS_THEME, THEME_LABEL } from '@/constants'
import { useToggleAppSetting } from '@/hooks'
import { appSettingSelector } from '@/store/selector'
import { setTheme } from '@/store/slice'

export const ToggleTheme = () => {
  const { setTheme: setNextTheme } = useTheme()
  const { theme } = useSelector(appSettingSelector)

  const icon = THEME_LABEL.find((item) => item.key === theme)?.icon as IconType

  const { toggleSetting } = useToggleAppSetting({
    storageName: LS_THEME,
    defaultValue: DEFAULT_APP_SETTING.theme,
    items: [...THEME_LABEL],
    dispatchSetting: setTheme,
    cb: (value) => {
      setNextTheme(value)
    },
  })

  useEffect(() => {
    toggleSetting(theme, true)
  }, [theme])

  return (
    <Icon
      name={icon}
      className='cursor-pointer mx-3 hover:opacity-80'
      onClick={() => toggleSetting(theme === 'dark' ? 'light' : 'dark')}
    />
  )
}
