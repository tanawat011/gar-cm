import type { IconType } from '@/components/Icon'

import { Icon } from '@/components/Icon'

type IconAndLabelProps = {
  icon?: IconType
  label: string
  isExpand?: boolean
  isExpandOnHover?: boolean
}

export const IconAndLabel: React.FC<IconAndLabelProps> = ({ icon, label, isExpand, isExpandOnHover }) => {
  return (
    <div className='flex items-center gap-3'>
      {icon && <Icon name={icon} className='mr-2 w-5 h-5' />}

      <div id='item-label' className={`truncate ${isExpand ? '' : isExpandOnHover ? '' : 'w-0 h-0 opacity-0'}`}>
        {label}
      </div>
    </div>
  )
}
