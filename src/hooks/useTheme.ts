import type { ICON_ALLOWED } from '@/components/Icon'

import { useEffect, useState } from 'react'

import { useTheme as useNextTheme } from 'next-themes'
import { useDispatch } from 'react-redux'

import { THEME as ALL_THEME, LS_THEME } from '@/constants'
import { setTheme as setThemeSetting } from '@/store/slice'

type ICON = keyof typeof ICON_ALLOWED

type THEME = (typeof ALL_THEME)[keyof typeof ALL_THEME]

const storageName = LS_THEME
const defaultTheme = ALL_THEME.DARK
const ICON_TOGGLE: { [key in THEME]: ICON } = {
  dark: 'FaRegMoon',
  light: 'FaRegSun',
}

export const useTheme = () => {
  const dispatch = useDispatch()
  const { setTheme: setNextTheme } = useNextTheme()

  const [theme, setTheme] = useState<THEME>(defaultTheme)
  const [themeIcon, setThemeIcon] = useState<ICON>(ICON_TOGGLE.dark)

  const setupTheme = (_theme?: THEME, noDispatch?: boolean) => {
    const isDark = _theme === ALL_THEME.DARK

    setThemeIcon(isDark ? ICON_TOGGLE.dark : ICON_TOGGLE.light)
    setTheme(_theme || defaultTheme)

    if (!noDispatch) {
      dispatch(setThemeSetting(_theme || defaultTheme))
    }
  }

  const toggleTheme = (_theme?: THEME, noDispatch?: boolean) => {
    if (_theme) {
      localStorage.setItem(storageName, _theme)
      setupTheme(_theme, noDispatch)

      return
    }

    const localTheme = localStorage.getItem(storageName) as THEME
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
