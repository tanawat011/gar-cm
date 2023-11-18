import clsx from 'clsx'

import { Icon } from '@/components/Icon'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const LeftContainer: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  return (
    <div className='ml-6 py-4 flex items-center'>
      <div className={clsx(isMobileDevice ? 'block' : 'block lg:hidden')}>
        <Icon name='FaBars' className='cursor-pointer mx-3' />
      </div>
    </div>
  )
}
