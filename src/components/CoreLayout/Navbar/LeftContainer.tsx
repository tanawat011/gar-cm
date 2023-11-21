import { Icon } from '@/components/Icon'
import { useSidebar } from '@/hooks'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const LeftContainer: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  const { isCollapse, toggleSidebarCollapse } = useSidebar(isMobileDevice)

  const DesktopIcon = () => {
    return (
      <>
        {isCollapse ? (
          <Icon
            name='FaIndent'
            className='cursor-pointer mx-3 hidden md:block'
            onClick={() => toggleSidebarCollapse()}
          />
        ) : (
          <Icon
            name='FaOutdent'
            className='cursor-pointer mx-3 hidden md:block'
            onClick={() => toggleSidebarCollapse(true)}
          />
        )}

        <Icon
          id='sidebar-toggle-icon-drawer'
          name='FaBars'
          className='cursor-pointer mx-3 block md:hidden'
          onClick={() => toggleSidebarCollapse(!isCollapse)}
        />
      </>
    )
  }

  const MobileIcon = () => {
    return (
      <Icon
        name='FaBars'
        className={'cursor-pointer mx-3'}
        onClick={() => toggleSidebarCollapse(!isCollapse)}
      />
    )
  }

  return (
    <div className='ml-6 py-4 flex items-center'>
      {isMobileDevice ? <MobileIcon /> : <DesktopIcon />}
    </div>
  )
}
