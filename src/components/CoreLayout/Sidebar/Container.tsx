import React, { useContext, useEffect } from 'react'

import { useSelector } from 'react-redux'

import { Drawer } from '@/components/Common'
import { appSettingSelector } from '@/store/selector'

import { CoreLayoutContext } from '../Provider'

import { Content } from './Content'
import { FullSidebarContainer } from './FullSidebarContainer'
import { MiniSidebarContainer } from './MiniSidebarContainer'

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
        return setup(['w-0'], ['w-16', 'w-64'])
      case 'mini':
        return setup(['w-16'], ['w-64', 'w-0'])
      case 'full':
        return setup(['w-64'], ['w-16', 'w-0'])
    }
  }, [sidebarType])

  return (
    <div id={sidebarId} className='transition-width'>
      {sidebarType === 'drawer' && (
        <Drawer id='sidebar-drawer' open={openSidebar} onClose={() => onToggleSidebar(false)}>
          <Content className='w-64' />
        </Drawer>
      )}

      {sidebarType === 'mini' && (
        <MiniSidebarContainer>
          <Content className='w-16' />
        </MiniSidebarContainer>
      )}

      {sidebarType === 'full' && (
        <FullSidebarContainer>
          <Content className='w-64' />
        </FullSidebarContainer>
      )}
    </div>
  )
}
