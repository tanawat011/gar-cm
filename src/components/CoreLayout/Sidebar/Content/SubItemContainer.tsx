type SubItemContainerProps = {
  handleRef: (el: HTMLUListElement | null) => void
  id: string
  height?: `${number}px`
  isExpand?: boolean
  isExpandOnHover?: boolean
  children?: React.ReactNode
}

export const SubItemContainer: React.FC<SubItemContainerProps> = ({
  handleRef,
  id,
  height,
  isExpand,
  isExpandOnHover,
  children,
}) => {
  return (
    <ul
      ref={handleRef}
      className={['overflow-hidden duration-300 ease-in-out', isExpand ? '' : isExpandOnHover ? '' : 'h-0'].join(' ')}
      style={{ maxHeight: `${height || '0px'}` }}
      key={id}
    >
      {children}
    </ul>
  )
}
