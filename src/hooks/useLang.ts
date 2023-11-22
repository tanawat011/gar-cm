import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { LANG as ALL_LANG } from '@/constants'
import { setLang as setLangSetting } from '@/store/slice'

type LANG = (typeof ALL_LANG)[keyof typeof ALL_LANG]

const storageName = 'lang'
const defaultLang = ALL_LANG.EN

export const useLang = () => {
  const dispatch = useDispatch()
  const [lang, setLang] = useState<LANG>(defaultLang)

  const setupLang = (_lang?: LANG) => {
    setLang(_lang || defaultLang)
    dispatch(setLangSetting(_lang || defaultLang))
  }

  const toggleLang = (_lang?: LANG) => {
    localStorage.setItem(storageName, _lang || defaultLang)
    setupLang(_lang)
  }

  useEffect(() => {
    const localLang = localStorage.getItem(storageName) as LANG

    setupLang(localLang)
  }, [])

  useEffect(() => {
    const htmlEl = document.getElementsByTagName('html')[0]
    const currLang = lang === ALL_LANG.TH ? ALL_LANG.EN : ALL_LANG.TH

    const combineLang = (_lang: LANG) => `lang-${_lang}`

    const allClass = htmlEl.classList.value
    const hasLang =
      allClass.includes(combineLang(ALL_LANG.TH)) ||
      allClass.includes(combineLang(ALL_LANG.EN))

    if (hasLang) {
      htmlEl.classList.replace(combineLang(currLang), combineLang(lang))
    } else {
      htmlEl.classList.add(combineLang(lang))
    }
  }, [lang])

  return { lang, toggleLang }
}
