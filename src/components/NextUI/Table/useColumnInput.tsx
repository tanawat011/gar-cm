import type { DropdownInputProps } from '../Input'
import type { Selection } from '@nextui-org/react'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { DropdownInput } from '../Input'

type UseColumnInputProps = {
  onColumnSelected?: (value: string[]) => void
  columnSelected?: string[]
  columnItems?: DropdownInputProps['items']
}

export const useColumnInput = (props: UseColumnInputProps) => {
  const [columnSelected, setColumnSelected] = useState<string[]>([])

  useEffect(() => {
    setColumnSelected(props?.columnSelected || [])
  }, [props?.columnSelected])

  const handleColumnSelected = useCallback((keys: Selection) => {
    const v = Array.from(keys) as string[]

    setColumnSelected(v)
    props.onColumnSelected?.(v)
  }, [])

  const renderColumnInput = useMemo(
    () => (
      <DropdownInput
        uncontrolled
        name='columns-actions'
        selectionMode='multiple'
        variant='faded'
        closeOnSelect={false}
        selectedKeys={new Set(columnSelected)}
        onSelectionChange={handleColumnSelected}
        items={props.columnItems || []}
        buttonOptions={{
          iconOnly: true,
          icon: 'FaTableColumns',
        }}
      />
    ),
    [props.columnItems, columnSelected],
  )

  return {
    renderColumnInput,
  }
}
