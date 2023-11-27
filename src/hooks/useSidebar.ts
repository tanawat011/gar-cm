import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { SIDEBAR_TYPE as ALL_SIDEBAR_TYPE } from '@/constants'
import { setSidebarType as setSidebarTypeSetting } from '@/store/slice'

type SIDEBAR_TYPE = (typeof ALL_SIDEBAR_TYPE)[keyof typeof ALL_SIDEBAR_TYPE]

const storageNameSidebarType = 'sidebarType'
const defaultSidebarType = ALL_SIDEBAR_TYPE.FULL

export const useSidebar = (isMobileDevice?: boolean) => {
  const dispatch = useDispatch()
  const [sidebarType, setSidebarType] = useState<SIDEBAR_TYPE>(defaultSidebarType)

  const setupSidebarType = (_sidebarType?: SIDEBAR_TYPE) => {
    setSidebarType(_sidebarType || defaultSidebarType)
    dispatch(setSidebarTypeSetting(_sidebarType || defaultSidebarType))
  }

  const toggleSidebarType = (_sidebarType?: SIDEBAR_TYPE) => {
    localStorage.setItem(storageNameSidebarType, `${_sidebarType || defaultSidebarType}`)
    setupSidebarType(_sidebarType)
  }

  useEffect(() => {
    if (isMobileDevice) {
      toggleSidebarType('drawer')
    } else {
      const localSidebarType = localStorage.getItem(storageNameSidebarType) as SIDEBAR_TYPE

      setupSidebarType(localSidebarType)
    }
  }, [])

  return { sidebarType, toggleSidebarType }
}
