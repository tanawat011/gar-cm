import { useEffect } from 'react'

import { Divider, Switch } from '@nextui-org/react'
import { isMobile } from 'react-device-detect'
import { useSelector } from 'react-redux'

import { Icon } from '@/components/Icon'
import { useDrawerPosition, useLang, useSidebar, useTheme } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

export const coreDrawerId = 'drawer'

export const Content = () => {
  const { theme, drawerPosition } = useSelector(appSettingSelector)

  const { toggleTheme } = useTheme()
  const { toggleLang } = useLang()
  const { toggleSidebarType } = useSidebar()
  const { togglePosition } = useDrawerPosition()

  useEffect(() => {
    togglePosition(drawerPosition)
  }, [drawerPosition])

  return (
    <>
      <div className='my-4'>
        <p className='text-xl font-bold flex'>
          <span className='mr-2'>
            <Icon name='FaGear' />
          </span>
          <span>Configurations</span>
        </p>

        <p className='flex items-center text-slate-400'>
          <span>See all setting</span>
        </p>
      </div>

      <Divider className='my-1' />

      <div className='my-4'>
        <p className='text-lg font-bold flex'>
          <span>Core Colors</span>
        </p>

        <div className='flex gap-2'>
          <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-default' />
          <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-primary' />
          <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-secondary' />
          <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-success' />
          <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-warning' />
          <div className='cursor-pointer w-6 h-6 rounded-full border border-solid border-white bg-danger' />
        </div>
      </div>

      <Divider className='my-1' />

      <div className='my-4'>
        <p className='text-lg font-bold flex'>
          <span>Theme</span>
        </p>

        <div className='flex gap-2'>
          <Switch
            defaultSelected
            size='lg'
            color='success'
            startContent={<Icon name='FaRegSun' />}
            endContent={<Icon name='FaRegMoon' />}
            value={theme}
            isSelected={theme === 'light'}
            onValueChange={(isLight) => {
              toggleTheme(isLight ? 'light' : 'dark')
            }}
          >
            {theme[0].toUpperCase() + theme.slice(1)} mode
          </Switch>
        </div>
      </div>

      <Divider className='my-1' />

      <div className='my-4'>
        <p className='text-lg font-bold flex'>
          <span>Language</span>
        </p>

        <div className='flex items-center justify-around'>
          <p className='cursor-pointer' onClick={() => toggleLang('th')}>
            TH
          </p>
          <p className='cursor-pointer' onClick={() => toggleLang('en')}>
            EN
          </p>
        </div>
      </div>

      <Divider className='my-1' />

      {!isMobile && (
        <>
          <div className='my-4'>
            <p className='text-lg font-bold flex'>
              <span>Sidebar Type</span>
            </p>

            <div className='flex items-center justify-around'>
              <p className='cursor-pointer' onClick={() => toggleSidebarType('drawer')}>
                Drawer
              </p>
              <p className='cursor-pointer' onClick={() => toggleSidebarType('mini')}>
                Mini
              </p>
              <p className='cursor-pointer' onClick={() => toggleSidebarType('full')}>
                Full
              </p>
            </div>
          </div>
          <Divider className='my-1' />
        </>
      )}

      <div className='my-4'>
        <p className='text-lg font-bold flex'>
          <span>Drawer Position</span>
        </p>

        <div className='flex items-center justify-around'>
          <p className='cursor-pointer' onClick={() => togglePosition('top')}>
            TOP
          </p>
          <p className='cursor-pointer' onClick={() => togglePosition('right')}>
            RIGHT
          </p>
          <p className='cursor-pointer' onClick={() => togglePosition('bottom')}>
            BOTTOM
          </p>
          <p className='cursor-pointer' onClick={() => togglePosition('left')}>
            LEFT
          </p>
        </div>
      </div>

      <Divider className='my-1' />
    </>
  )
}
