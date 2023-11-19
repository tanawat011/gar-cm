import { useEffect, useState } from 'react'

import clsx from 'clsx'

import { Icon } from '@/components/Icon'

type ContainerProps = {
  isMobileDevice?: boolean
}

export const LeftContainer: React.FC<ContainerProps> = ({ isMobileDevice }) => {
  const [isCollapse, setIsCollapse] = useState<boolean>()

  const toggleSidebar = (collapse?: boolean) => {
    localStorage.setItem('sidebarCollapse', `${!!collapse}`)
    setIsCollapse(collapse)
  }

  const setupSidebarType = () => {
    const elToggleIcon = document.getElementById('sidebar-toggle')
    const display = elToggleIcon?.computedStyleMap().get('display')

    if (display && display.toString() === 'block') {
      return localStorage.setItem('sidebarType', 'drawer')
    }

    localStorage.setItem('sidebarType', 'normal')
  }

  useEffect(() => {
    const collapse = localStorage.getItem('sidebarCollapse')

    setIsCollapse(collapse === 'true')
  }, [])

  useEffect(() => {
    if (isMobileDevice) {
      localStorage.setItem('sidebarType', 'drawer')
    } else {
      window.addEventListener('resize', setupSidebarType)

      return () => window.removeEventListener('resize', setupSidebarType)
    }
  }, [])

  const DesktopIcon = () => {
    return (
      <>
        {isCollapse ? (
          <Icon
            name='FaIndent'
            className='cursor-pointer mx-3 hidden md:block'
            onClick={() => toggleSidebar()}
          />
        ) : (
          <Icon
            name='FaOutdent'
            className='cursor-pointer mx-3 hidden md:block'
            onClick={() => toggleSidebar(true)}
          />
        )}

        <Icon
          id='sidebar-toggle'
          name='FaBars'
          className='cursor-pointer mx-3 block md:hidden'
          onClick={() => toggleSidebar(!isCollapse)}
        />
      </>
    )
  }

  const MobileIcon = () => {
    return (
      <Icon
        name='FaBars'
        className={'cursor-pointer mx-3'}
        onClick={() => toggleSidebar(!isCollapse)}
      />
    )
  }

  return (
    <div className='ml-6 py-4 flex items-center'>
      {isMobileDevice ? <MobileIcon /> : <DesktopIcon />}
    </div>
  )
}
