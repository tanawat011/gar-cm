import type { DRAWER_POSITION } from '@/constants'

import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { DEFAULT_APP_SETTING } from '@/configs/defaultAppSetting'
import { LS_DRAWER_POS } from '@/constants'
import { setDrawerPosition as setDrawerPosSetting } from '@/store/slice'

type DRAWER_POS = (typeof DRAWER_POSITION)[keyof typeof DRAWER_POSITION]

const storageName = LS_DRAWER_POS
const defaultPosition = DEFAULT_APP_SETTING.drawerPosition

export const useDrawerPosition = () => {
  const dispatch = useDispatch()
  const [position, setPosition] = useState<DRAWER_POS>(defaultPosition)

  const setupPosition = (pos?: DRAWER_POS, noDispatch?: boolean) => {
    setPosition(pos || defaultPosition)

    if (!noDispatch) {
      dispatch(setDrawerPosSetting(pos || defaultPosition))
    }
  }

  const togglePosition = (pos?: DRAWER_POS, noDispatch?: boolean) => {
    localStorage.setItem(storageName, pos || defaultPosition)
    setupPosition(pos, noDispatch)
  }

  return { position, togglePosition }
}
