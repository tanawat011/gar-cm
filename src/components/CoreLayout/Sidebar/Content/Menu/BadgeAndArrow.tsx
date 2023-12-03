import { Icon } from '@/components/Icon'

type BadgeAndArrowProps = {
  isOpen?: boolean
  isExpand?: boolean
  isExpandOnHover?: boolean
}

export const BadgeAndArrow: React.FC<BadgeAndArrowProps> = ({ isOpen, isExpand, isExpandOnHover }) => {
  return (
    <div className={`${isExpand ? '' : isExpandOnHover ? '' : 'w-0 h-0 opacity-0'}`}>
      <Icon id='arrow-down' name='FaChevronDown' className={['transition-all', isOpen && '-rotate-180'].join(' ')} />
    </div>
  )
}
