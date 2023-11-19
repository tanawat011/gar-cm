import type { ICON_ALLOWED } from '@/components/Icon'

import { useEffect, useState } from 'react'

import { useTheme as useNextTheme } from 'next-themes'

import { THEME as ALL_THEME } from '@/constants'

type ICON = keyof typeof ICON_ALLOWED

type THEME = (typeof ALL_THEME)[keyof typeof ALL_THEME]

const defaultTheme = ALL_THEME.DARK

export const useTheme = () => {
  const { setTheme: setNextTheme } = useNextTheme()

  const [theme, setTheme] = useState<THEME>(defaultTheme)
  const [themeIcon, setThemeIcon] = useState<ICON>('FaRegMoon')

  const setupTheme = (_theme?: THEME) => {
    setThemeIcon(_theme === ALL_THEME.LIGHT ? 'FaRegSun' : 'FaRegMoon')
    setTheme(_theme || defaultTheme)
  }

  const toggleTheme = () => {
    const localTheme = localStorage.getItem('theme') as THEME
    const isDark = localTheme === ALL_THEME.DARK
    const currTheme = isDark ? ALL_THEME.LIGHT : ALL_THEME.DARK

    localStorage.setItem('theme', currTheme)
    setThemeIcon(isDark ? 'FaRegSun' : 'FaRegMoon')
    setTheme(currTheme)
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as THEME

    setupTheme(localTheme)
  }, [])

  useEffect(() => {
    setNextTheme(theme)
  }, [theme])

  return { theme, themeIcon, toggleTheme }
}
