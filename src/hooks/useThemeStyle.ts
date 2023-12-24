import type { ThemeStyle } from '@/types'

import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs/defaultAppSetting'
import { THEME_STYLE as ALL_THEME_STYLE, LS_THEME_STYLE } from '@/constants'
import { setThemeStyle as setSetting } from '@/store/slice'

const storageName = LS_THEME_STYLE
const defaultValue = DEFAULT_APP_SETTING.themeStyle

export const useThemeStyle = () => {
  const dispatch = useDispatch()

  const [themeStyle, setThemeStyle] = useState<ThemeStyle>(defaultValue)

  const setupSetting = (_themeStyle?: ThemeStyle, noDispatch?: boolean) => {
    setThemeStyle(_themeStyle || defaultValue)

    if (!noDispatch) {
      dispatch(setSetting(_themeStyle || defaultValue))
    }
  }

  const toggleSetting = (_themeStyle?: ThemeStyle, noDispatch?: boolean) => {
    if (_themeStyle) {
      localStorage.setItem(storageName, _themeStyle)
      setupSetting(_themeStyle, noDispatch)

      return
    }

    const localTheme = localStorage.getItem(storageName) as ThemeStyle
    const isModern = localTheme === ALL_THEME_STYLE.MODERN
    const currTheme = isModern ? ALL_THEME_STYLE.CLASSIC : ALL_THEME_STYLE.MODERN

    localStorage.setItem(storageName, currTheme)
    setupSetting(currTheme)
  }

  return { themeStyle, toggleSetting }
}
