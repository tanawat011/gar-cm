import type { Lang } from '@/types'

import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs/defaultAppSetting'
import { LANG as ALL_LANG, LS_LANG } from '@/constants'
import { setLang as setLangSetting } from '@/store/slice'

const storageName = LS_LANG
const defaultLang = DEFAULT_APP_SETTING.lang

export const useLang = () => {
  const dispatch = useDispatch()
  const [lang, setLang] = useState<Lang>(defaultLang)

  const setupLang = (_lang?: Lang, noDispatch?: boolean) => {
    setLang(_lang || defaultLang)

    if (!noDispatch) {
      dispatch(setLangSetting(_lang || defaultLang))
    }
  }

  const toggleLang = (_lang?: Lang, noDispatch?: boolean) => {
    localStorage.setItem(storageName, _lang || defaultLang)
    setupLang(_lang, noDispatch)
  }

  useEffect(() => {
    const htmlEl = document.getElementsByTagName('html')[0]
    const currLang = lang === ALL_LANG.TH ? ALL_LANG.EN : ALL_LANG.TH

    const combineLang = (_lang: Lang) => `lang-${_lang}`

    const allClass = htmlEl.classList.value
    const hasLang = allClass.includes(combineLang(ALL_LANG.TH)) || allClass.includes(combineLang(ALL_LANG.EN))

    if (hasLang) {
      htmlEl.classList.replace(combineLang(currLang), combineLang(lang))
    } else {
      htmlEl.classList.add(combineLang(lang))
    }
  }, [lang])

  return { lang, toggleLang }
}
