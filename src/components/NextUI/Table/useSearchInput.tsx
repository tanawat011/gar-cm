import { useCallback, useEffect, useMemo, useState } from 'react'

import { Input } from '@nextui-org/react'

import { Icon } from '@/components/Icon'

type UseSearchInputProps = {
  onSearch?: (value: string) => void
  search?: string
}

export const useSearchInput = (props: UseSearchInputProps) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    setSearch(props?.search || '')
  }, [props?.search])

  const handleSearch = useCallback((v: string) => {
    setSearch(v)
    props.onSearch?.(v)
  }, [])

  const renderSearchInput = useMemo(
    () => (
      <Input
        isClearable
        className='w-full sm:max-w-[44%]'
        placeholder='Search by name...'
        labelPlacement='outside'
        startContent={<Icon name='FaMagnifyingGlass' />}
        value={search}
        onClear={() => handleSearch('')}
        onValueChange={handleSearch}
      />
    ),
    [search],
  )

  return {
    renderSearchInput,
  }
}
