import type { DRAWER_POSITION } from '@/constants'

import { useState } from 'react'

import { Drawer } from '@/components/Common'
import { useLang, useTheme } from '@/hooks'

type POSITION = (typeof DRAWER_POSITION)[keyof typeof DRAWER_POSITION]

export const coreDrawerId = 'drawer'

export const DrawerSetting = () => {
  const { toggleTheme } = useTheme()
  const { toggleLang } = useLang()

  const [position, setPosition] = useState<POSITION>('right')

  return (
    <Drawer id={coreDrawerId} position={position} className='p-4'>
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
            <p className='cursor-pointer' onClick={() => setPosition('top')}>
              TOP
            </p>
            <p className='cursor-pointer' onClick={() => setPosition('right')}>
              RIGHT
            </p>
            <p className='cursor-pointer' onClick={() => setPosition('bottom')}>
              BOTTOM
            </p>
            <p className='cursor-pointer' onClick={() => setPosition('left')}>
              LEFT
            </p>
          </div>
        </div>
      </div>
    </Drawer>
  )
}
