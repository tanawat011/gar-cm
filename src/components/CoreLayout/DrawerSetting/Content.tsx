import { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { useDrawerPosition, useLang, useTheme } from '@/hooks'
import { appSettingSelector } from '@/store/selector'

export const coreDrawerId = 'drawer'

export const Content = () => {
  const { drawerPosition } = useSelector(appSettingSelector)

  const { toggleTheme } = useTheme()
  const { toggleLang } = useLang()
  const { togglePosition } = useDrawerPosition()

  useEffect(() => {
    togglePosition(drawerPosition)
  }, [drawerPosition])

  return (
    <div className='flex flex-col gap-8'>
      <div>
        <p>Theme</p>

        <div className='flex items-center justify-around'>
          <p className='cursor-pointer' onClick={() => toggleTheme('dark')}>
            Dark
          </p>
          <p className='cursor-pointer' onClick={() => toggleTheme('light')}>
            Light
          </p>
        </div>
      </div>

      <div>
        <p>Language</p>

        <div className='flex items-center justify-around'>
          <p className='cursor-pointer' onClick={() => toggleLang('th')}>
            TH
          </p>
          <p className='cursor-pointer' onClick={() => toggleLang('en')}>
            EN
          </p>
        </div>
      </div>

      <div>
        <p>Sidebar</p>

        <div className='flex items-center justify-around'>
          <p className='cursor-pointer'>Drawer</p>
          <p className='cursor-pointer'>Mini</p>
          <p className='cursor-pointer'>Full</p>
        </div>
      </div>

      <div>
        <p>Drawer Setting Position</p>

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
    </div>
  )
}
