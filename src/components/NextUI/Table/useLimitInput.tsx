import type { DropdownInputProps } from '../Input'
import type { Selection } from '@nextui-org/react'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownInput } from '../Input'

import { defaultLimit, defaultLimitItems } from './constant'

type UseLimitInputProps = {
  onLimitSelected?: (value: number) => void
  limit?: number
  limitItems?: DropdownInputProps['items']
}

export const useLimitInput = (props: UseLimitInputProps) => {
  const [limit, setLimit] = useState(defaultLimit)

  useEffect(() => {
    setLimit(props?.limit || defaultLimit)
  }, [props?.limit])

  const handleLimit = useCallback((keys: Selection) => {
    const v = Array.from(keys) as number[]
    const newLimit = Number(v[0]) || 0

    setLimit(newLimit)
    props.onLimitSelected?.(newLimit)
  }, [])

  const renderLimitInput = useMemo(
    () => (
      <DropdownInput
        uncontrolled
        name='limit-actions'
        variant='faded'
        label={`${limit || 'ALL'}`}
        selectedKeys={new Set([`${limit}`])}
        onSelectionChange={handleLimit}
        items={props?.limitItems || defaultLimitItems}
      />
    ),
    [props?.limitItems, limit],
  )

  return {
    renderLimitInput,
  }
}
