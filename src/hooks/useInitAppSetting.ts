import type { THEME as ALL_THEME, LANG as ALL_LANG } from '@/constants'

import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { LS_LANG, LS_THEME } from '@/constants'
import { setLang, setTheme } from '@/store/slice'

type THEME = (typeof ALL_THEME)[keyof typeof ALL_THEME]

type LANG = (typeof ALL_LANG)[keyof typeof ALL_LANG]

export const useInitAppSetting = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const localTheme = localStorage.getItem(LS_THEME) as THEME
    const localLang = localStorage.getItem(LS_LANG) as LANG

    dispatch(setTheme(localTheme))
    dispatch(setLang(localLang))
  }, [])
}
