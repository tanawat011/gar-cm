import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { SIDEBAR_TYPE as ALL_SIDEBAR_TYPE } from '@/constants'
import {
  setSidebarCollapsed,
  setSidebarType as setSidebarTypeSetting,
} from '@/store/appSettingSlice'

type SIDEBAR_TYPE = (typeof ALL_SIDEBAR_TYPE)[keyof typeof ALL_SIDEBAR_TYPE]

const storageNameSidebarType = 'sidebarType'
const defaultSidebarCollapsed = false
const defaultSidebarType = ALL_SIDEBAR_TYPE.FULL

export const useSidebar = (isMobileDevice?: boolean) => {
  const dispatch = useDispatch()
  const [isCollapse, setIsCollapse] = useState<boolean>(defaultSidebarCollapsed)
  const [sidebarType, setSidebarType] =
    useState<SIDEBAR_TYPE>(defaultSidebarType)

  const setupSidebarCollapse = (_isCollapse?: boolean) => {
    setIsCollapse(_isCollapse || defaultSidebarCollapsed)
    dispatch(setSidebarCollapsed(_isCollapse || defaultSidebarCollapsed))
  }

  const setupSidebarType = (_sidebarType?: SIDEBAR_TYPE) => {
    setSidebarType(_sidebarType || defaultSidebarType)
    dispatch(setSidebarTypeSetting(_sidebarType || defaultSidebarType))
  }

  const toggleSidebarCollapse = (_isCollapse?: boolean) => {
    setupSidebarCollapse(_isCollapse)
  }

  const toggleSidebarType = (_sidebarType?: SIDEBAR_TYPE) => {
    localStorage.setItem(
      storageNameSidebarType,
      `${_sidebarType || defaultSidebarType}`,
    )
    setupSidebarType(_sidebarType)
  }

  useEffect(() => {
    if (isMobileDevice) {
      toggleSidebarCollapse(true)
      toggleSidebarType('drawer')
    } else {
      const localSidebarType = localStorage.getItem(
        storageNameSidebarType,
      ) as SIDEBAR_TYPE

      setupSidebarType(localSidebarType)
      setupSidebarCollapse(false)
      window.addEventListener('resize', setupSidebarTypeByResize)

      return () =>
        window.removeEventListener('resize', setupSidebarTypeByResize)
    }
  }, [])

  const setupSidebarTypeByResize = () => {
    const elToggleIcon = document.getElementById('sidebar-toggle-icon-drawer')
    const display = elToggleIcon?.computedStyleMap().get('display')

    if (display && display.toString() === 'block') {
      toggleSidebarCollapse(true)
      toggleSidebarType('drawer')
    } else {
      toggleSidebarCollapse(false)
      toggleSidebarType('full')
    }
  }

  return { isCollapse, sidebarType, toggleSidebarCollapse, toggleSidebarType }
}
