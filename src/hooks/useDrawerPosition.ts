import type { DrawerPosition } from '@/types'

import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs/defaultAppSetting'
import { LS_DRAWER_POS } from '@/constants'
import { setDrawerPosition as setDrawerPosSetting } from '@/store/slice'

const storageName = LS_DRAWER_POS
const defaultPosition = DEFAULT_APP_SETTING.drawerPosition

export const useDrawerPosition = () => {
  const dispatch = useDispatch()
  const [position, setPosition] = useState<DrawerPosition>(defaultPosition)

  const setupPosition = (pos?: DrawerPosition, noDispatch?: boolean) => {
    setPosition(pos || defaultPosition)

    if (!noDispatch) {
      dispatch(setDrawerPosSetting(pos || defaultPosition))
    }
  }

  const togglePosition = (pos?: DrawerPosition, noDispatch?: boolean) => {
    localStorage.setItem(storageName, pos || defaultPosition)
    setupPosition(pos, noDispatch)
  }

  return { position, togglePosition }
}
