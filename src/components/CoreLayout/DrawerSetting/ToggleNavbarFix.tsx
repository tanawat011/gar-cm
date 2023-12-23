import { Switch } from '@nextui-org/react'
import { useSelector } from 'react-redux'

import { NAVBAR_TYPE } from '@/constants'
import { useNavbarType } from '@/hooks'
import { appSettingSelector } from '@/store/selector'
import { toCapitalCase } from '@/utils'

import { Item } from './Item'

export const ToggleNavbarFix = () => {
  const { navbarType } = useSelector(appSettingSelector)
  const { toggleNavbarType } = useNavbarType()

  return (
    <Item label='Navbar Fixed' center>
      <p className='cursor-pointer' onClick={() => toggleNavbarType(NAVBAR_TYPE.NORMAL)}>
        {toCapitalCase(NAVBAR_TYPE.NORMAL)}
      </p>

      <Switch
        defaultSelected
        size='lg'
        value={navbarType}
        isSelected={navbarType === NAVBAR_TYPE.STICKY}
        onValueChange={(isSticky) => {
          toggleNavbarType(isSticky ? NAVBAR_TYPE.STICKY : NAVBAR_TYPE.NORMAL)
        }}
      />

      <p className='cursor-pointer' onClick={() => toggleNavbarType(NAVBAR_TYPE.STICKY)}>
        {toCapitalCase(NAVBAR_TYPE.STICKY)}
      </p>
    </Item>
  )
}
