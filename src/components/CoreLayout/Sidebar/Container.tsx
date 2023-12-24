import React, { useContext, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Drawer } from '@/components/Common'
import { appSettingSelector } from '@/store/selector'

import { CoreLayoutContext } from '../Provider'

import { Content } from './Content'
import { FullSidebarContainer } from './FullSidebarContainer'

const sidebarId = 'sidebar-container'

export const Container = () => {
  const { openSidebar, onToggleSidebar } = useContext(CoreLayoutContext)

  const { sidebarType } = useSelector(appSettingSelector)

  useEffect(() => {
    const sidebarEl = document.getElementById(sidebarId)
    const setup = (add: string[], remove: string[]) => {
      sidebarEl?.classList.add(...add)
      sidebarEl?.classList.remove(...remove)
    }

    switch (sidebarType) {
      case 'drawer':
        return setup(['w-0'], ['w-20', 'w-64'])
      case 'mini':
        return setup(['w-20'], ['w-64', 'w-0'])
      case 'full':
        return setup(['w-64'], ['w-20', 'w-0'])
    }
  }, [sidebarType])

  return (
    <div className='transition-width'>
      {sidebarType === 'drawer' && (
        <Drawer
          id='sidebar-drawer'
          open={openSidebar}
          onClose={() => onToggleSidebar(false)}
          containerClassName='bg-content1 p-4'
        >
          <Content />
        </Drawer>
      )}

      {sidebarType !== 'drawer' && (
        <FullSidebarContainer>
          <Content />
        </FullSidebarContainer>
      )}
    </div>
  )
}
