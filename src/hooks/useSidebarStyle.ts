import type { SidebarStyle } from '@/types'

import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs/defaultAppSetting'
import { SIDEBAR_STYLE, LS_SIDEBAR_STYLE } from '@/constants'
import { setSidebarStyle } from '@/store/slice'

const storageName = LS_SIDEBAR_STYLE
const defaultValue = DEFAULT_APP_SETTING.sidebarStyle

export const useSidebarStyle = () => {
  const dispatch = useDispatch()

  const [settingValue, setSettingValue] = useState<SidebarStyle>(defaultValue)

  const setupSetting = (_settingValue?: SidebarStyle, noDispatch?: boolean) => {
    setSettingValue(_settingValue || defaultValue)

    if (!noDispatch) {
      dispatch(setSidebarStyle(_settingValue || defaultValue))
    }
  }

  const toggleSetting = (_settingValue?: SidebarStyle, noDispatch?: boolean) => {
    if (_settingValue) {
      localStorage.setItem(storageName, _settingValue)
      setupSetting(_settingValue, noDispatch)

      return
    }

    const localTheme = localStorage.getItem(storageName) as SidebarStyle
    const isModern = localTheme === SIDEBAR_STYLE.MODERN
    const currTheme = isModern ? SIDEBAR_STYLE.CLASSIC : SIDEBAR_STYLE.MODERN

    localStorage.setItem(storageName, currTheme)
    setupSetting(currTheme)
  }

  useEffect(() => {
    const localSetting = localStorage.getItem(storageName) as SidebarStyle

    setupSetting(localSetting)
  }, [])

  return { settingValue, toggleSetting }
}
