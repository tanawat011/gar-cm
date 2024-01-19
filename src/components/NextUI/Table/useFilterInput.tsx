import type { DropdownInputProps } from '../Input'
import type { Selection } from '@nextui-org/react'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownInput } from '../Input'

type UseFilterInputProps = {
  onFilterSelected?: (value: string[]) => void
  filterSelected?: string[]
  filterItems?: DropdownInputProps['items']
}

export const useFilterInput = (props: UseFilterInputProps) => {
  const [filterSelected, setFilterSelected] = useState<string[]>([])

  useEffect(() => {
    setFilterSelected(props?.filterSelected || [])
  }, [props?.filterSelected])

  const handleFilterSelected = useCallback((keys: Selection) => {
    const v = Array.from(keys) as string[]

    setFilterSelected(v)
    props.onFilterSelected?.(v)
  }, [])

  const renderFilterInput = useMemo(
    () => (
      <DropdownInput
        uncontrolled
        name='filter-actions'
        selectionMode='multiple'
        variant='faded'
        closeOnSelect={false}
        selectedKeys={new Set(filterSelected)}
        onSelectionChange={handleFilterSelected}
        items={props.filterItems || []}
        buttonOptions={{
          iconOnly: true,
          icon: 'FaFilter',
        }}
      />
    ),
    [props.filterItems, filterSelected],
  )

  return {
    renderFilterInput,
  }
}
