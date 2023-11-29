import type { SidebarType } from '@/types'

import { useEffect, useState } from 'react'

import { isMobile } from 'react-device-detect'
import { useDispatch } from 'react-redux'

import { SIDEBAR_TYPE as ALL_SIDEBAR_TYPE } from '@/constants'
import { setSidebarType as setSidebarTypeSetting } from '@/store/slice'

const storageNameSidebarType = 'sidebarType'
const defaultSidebarType = ALL_SIDEBAR_TYPE.FULL

export const useSidebar = () => {
  const dispatch = useDispatch()
  const [sidebarType, setSidebarType] = useState<SidebarType>(defaultSidebarType)

  const setupSidebarType = (_sidebarType?: SidebarType) => {
    setSidebarType(_sidebarType || defaultSidebarType)
    dispatch(setSidebarTypeSetting(_sidebarType || defaultSidebarType))
  }

  const toggleSidebarType = (_sidebarType?: SidebarType) => {
    localStorage.setItem(storageNameSidebarType, `${_sidebarType || defaultSidebarType}`)
    setupSidebarType(_sidebarType)
  }

  useEffect(() => {
    if (isMobile) {
      toggleSidebarType('drawer')
    } else {
      const localSidebarType = localStorage.getItem(storageNameSidebarType) as SidebarType

      setupSidebarType(localSidebarType)
    }
  }, [])

  return { sidebarType, toggleSidebarType }
}
