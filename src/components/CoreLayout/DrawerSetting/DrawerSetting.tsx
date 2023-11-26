import { Drawer } from '@/components/Common'
import { useLang, useTheme } from '@/hooks'

export const coreDrawerId = 'drawer'

export const DrawerSetting = () => {
  const { toggleTheme } = useTheme()
  const { toggleLang } = useLang()

  return (
    <Drawer id={coreDrawerId} position='right' className='p-4 w-[300px]'>
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
            <p className='cursor-pointer'>TOP</p>
            <p className='cursor-pointer'>RIGHT</p>
            <p className='cursor-pointer'>BOTTOM</p>
            <p className='cursor-pointer'>LEFT</p>
          </div>
        </div>
      </div>
    </Drawer>
  )
}
