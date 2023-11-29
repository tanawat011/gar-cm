import type { DrawerPosition, Lang, Theme } from '@/types'

import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs/defaultAppSetting'
import { LS_DRAWER_POS, LS_LANG, LS_THEME } from '@/constants'
import { setDrawerPosition, setLang, setTheme } from '@/store/slice'

export const useInitAppSetting = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const localTheme = localStorage.getItem(LS_THEME) as Theme
    const localLang = localStorage.getItem(LS_LANG) as Lang
    const localDrawerPos = localStorage.getItem(LS_DRAWER_POS) as DrawerPosition

    dispatch(setTheme(localTheme || DEFAULT_APP_SETTING.theme))
    dispatch(setLang(localLang || DEFAULT_APP_SETTING.lang))
    dispatch(setDrawerPosition(localDrawerPos || DEFAULT_APP_SETTING.drawerPosition))
  }, [])
}
