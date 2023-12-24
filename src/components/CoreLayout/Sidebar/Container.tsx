import React, { useContext } from 'react'

import { useSelector } from 'react-redux'

import { Drawer } from '@/components/Common'
import { appSettingSelector } from '@/store/selector'

import { CoreLayoutContext } from '../Provider'

import { Content } from './Content'
import { FullSidebarContainer } from './FullSidebarContainer'

export const Container = () => {
  const { openSidebar, onToggleSidebar } = useContext(CoreLayoutContext)

  const { sidebarType } = useSelector(appSettingSelector)

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
