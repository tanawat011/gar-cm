import type { CommonOption } from '@/types'
import type { AnyAction } from '@reduxjs/toolkit'

import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

type UseToggleAppSetting<T> = {
  storageName: string
  defaultValue?: T
  dispatchSetting: (value: T) => AnyAction
  items: CommonOption<T>[]
  cb?: (value: T) => void
}

export const useToggleAppSetting = <T>({
  storageName,
  defaultValue,
  dispatchSetting,
  items,
  cb,
}: UseToggleAppSetting<T>) => {
  const _defaultValue = defaultValue || items[0].key

  const dispatch = useDispatch()

  const [value, setValue] = useState<T>(_defaultValue)

  const setupSetting = (_value: T, noDispatch?: boolean) => {
    setValue(_value || _defaultValue)

    if (!noDispatch) {
      dispatch(dispatchSetting(_value || _defaultValue))
    }
  }

  const toggleSetting = (_value: T, noDispatch?: boolean) => {
    localStorage.setItem(storageName, _value as string)
    setupSetting(_value || _defaultValue, noDispatch)
  }

  useEffect(() => {
    const localSetting = localStorage.getItem(storageName) as T

    setupSetting(localSetting || _defaultValue)
  }, [])

  useEffect(() => {
    cb?.(value)
  }, [value])

  return { value, toggleSetting }
}
