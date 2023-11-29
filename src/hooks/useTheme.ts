import type { IconType } from '@/components/Icon'
import type { Theme } from '@/types'

import { useEffect, useState } from 'react'

import { useTheme as useNextTheme } from 'next-themes'
import { useDispatch } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs/defaultAppSetting'
import { THEME as ALL_THEME, LS_THEME } from '@/constants'
import { setTheme as setThemeSetting } from '@/store/slice'

const storageName = LS_THEME
const defaultTheme = DEFAULT_APP_SETTING.theme
const ICON_TOGGLE: { [key in Theme]: IconType } = {
  dark: 'FaRegMoon',
  light: 'FaRegSun',
}

export const useTheme = () => {
  const dispatch = useDispatch()
  const { setTheme: setNextTheme } = useNextTheme()

  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [themeIcon, setThemeIcon] = useState<IconType>(ICON_TOGGLE.dark)

  const setupTheme = (_theme?: Theme, noDispatch?: boolean) => {
    const isDark = _theme === ALL_THEME.DARK

    setThemeIcon(isDark ? ICON_TOGGLE.dark : ICON_TOGGLE.light)
    setTheme(_theme || defaultTheme)

    if (!noDispatch) {
      dispatch(setThemeSetting(_theme || defaultTheme))
    }
  }

  const toggleTheme = (_theme?: Theme, noDispatch?: boolean) => {
    if (_theme) {
      localStorage.setItem(storageName, _theme)
      setupTheme(_theme, noDispatch)

      return
    }

    const localTheme = localStorage.getItem(storageName) as Theme
    const isDark = localTheme === ALL_THEME.DARK
    const currTheme = isDark ? ALL_THEME.LIGHT : ALL_THEME.DARK

    localStorage.setItem(storageName, currTheme)
    setupTheme(currTheme)
  }

  useEffect(() => {
    setNextTheme(theme)
  }, [theme])

  return { theme, themeIcon, toggleTheme }
}
