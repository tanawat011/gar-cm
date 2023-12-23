import type { NavbarType } from '@/types'

import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs/defaultAppSetting'
import { NAVBAR_TYPE as ALL_NAVBAR_TYPE, LS_NAVBAR_TYPE } from '@/constants'
import { setNavbarType as setNavbarTypeSetting } from '@/store/slice'

const storageName = LS_NAVBAR_TYPE
const defaultTheme = DEFAULT_APP_SETTING.navbarType

export const useNavbarType = () => {
  const dispatch = useDispatch()

  const [navbarType, setNavbarType] = useState<NavbarType>(defaultTheme)

  const setupNavbarType = (_navbarType?: NavbarType, noDispatch?: boolean) => {
    setNavbarType(_navbarType || defaultTheme)

    if (!noDispatch) {
      dispatch(setNavbarTypeSetting(_navbarType || defaultTheme))
    }
  }

  const toggleNavbarType = (_navbarType?: NavbarType, noDispatch?: boolean) => {
    if (_navbarType) {
      localStorage.setItem(storageName, _navbarType)
      setupNavbarType(_navbarType, noDispatch)

      return
    }

    const localNavbarType = localStorage.getItem(storageName) as NavbarType
    const isNormal = localNavbarType === ALL_NAVBAR_TYPE.NORMAL
    const currTheme = isNormal ? ALL_NAVBAR_TYPE.STICKY : ALL_NAVBAR_TYPE.NORMAL

    localStorage.setItem(storageName, currTheme)
    setupNavbarType(currTheme)
  }

  useEffect(() => {
    const localSidebarType = localStorage.getItem(storageName) as NavbarType

    setupNavbarType(localSidebarType)
  }, [])

  return { navbarType, toggleNavbarType }
}
