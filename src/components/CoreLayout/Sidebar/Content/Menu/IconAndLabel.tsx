import type { IconType } from '@/components/Icon'

import { Icon } from '@/components/Icon'

type IconAndLabelProps = {
  id?: string
  icon?: IconType
  label: string
  isGroupLabel?: boolean
  isExpand?: boolean
  isExpandOnHover?: boolean
}

export const IconAndLabel: React.FC<IconAndLabelProps> = ({
  id,
  icon,
  label,
  isGroupLabel,
  isExpand,
  isExpandOnHover,
}) => {
  const getClassNameWrapper = () => {
    return ['flex items-center gap-3', isGroupLabel ? 'h-9 pl-3' : ''].join(' ')
  }

  const getClassNameLabel = () => {
    return [
      'truncate',
      isExpand ? '' : isExpandOnHover ? '' : 'w-0 h-0 opacity-0',
      isGroupLabel ? 'font-bold text-gray-500' : '',
    ].join(' ')
  }

  return (
    <div id={id || `wrap-item-label${isGroupLabel ? '-group-label' : ''}`} className={getClassNameWrapper()}>
      {icon && <Icon name={icon} className='mr-2 w-5 h-5' />}

      <div id='item-label' className={getClassNameLabel()}>
        {label}
      </div>
    </div>
  )
}
