import type { TableProps } from './Table'

type BottomContentProps<T> = {
  rows: TableProps<T>['rows']
  selected?: TableProps<T>['selected']
}

export const BottomContent = <T,>(props: BottomContentProps<T>) => {
  const { rows, selected = [] } = props

  return (
    <div className='py-2 px-2 flex justify-between items-center'>
      <span className='w-[30%] text-small text-default-400'>{`${selected.length} of ${rows.length} selected`}</span>
    </div>
  )
}
