import { Icon } from '@/components/Icon'

type BadgeAndArrowProps = {
  id?: string
  isOpen?: boolean
  isExpand?: boolean
  isExpandOnHover?: boolean
}

export const BadgeAndArrow: React.FC<BadgeAndArrowProps> = ({ id, isOpen, isExpand, isExpandOnHover }) => {
  return (
    <div id={id} className={`${isExpand ? '' : isExpandOnHover ? '' : 'w-0 h-0 opacity-0'}`}>
      <Icon id='arrow-down' name='FaChevronDown' className={['transition-all', isOpen && '-rotate-180'].join(' ')} />
    </div>
  )
}
