import type {
  THEME as ALL_THEME,
  LANG as ALL_LANG,
  DRAWER_POSITION,
} from '@/constants'

import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs/defaultAppSetting'
import { LS_DRAWER_POS, LS_LANG, LS_THEME } from '@/constants'
import { setDrawerPosition, setLang, setTheme } from '@/store/slice'

type THEME = (typeof ALL_THEME)[keyof typeof ALL_THEME]

type LANG = (typeof ALL_LANG)[keyof typeof ALL_LANG]

type DRAWER_POS = (typeof DRAWER_POSITION)[keyof typeof DRAWER_POSITION]

export const useInitAppSetting = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const localTheme = localStorage.getItem(LS_THEME) as THEME
    const localLang = localStorage.getItem(LS_LANG) as LANG
    const localDrawerPos = localStorage.getItem(LS_DRAWER_POS) as DRAWER_POS

    dispatch(setTheme(localTheme || DEFAULT_APP_SETTING.theme))
    dispatch(setLang(localLang || DEFAULT_APP_SETTING.lang))
    dispatch(
      setDrawerPosition(localDrawerPos || DEFAULT_APP_SETTING.drawerPosition),
    )
  }, [])
}
