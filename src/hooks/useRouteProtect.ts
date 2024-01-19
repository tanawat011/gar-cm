import type { MenuProps, Permission } from '@/configs'

import { useLayoutEffect } from 'react'

import { redirect, usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

import { menu } from '@/configs'
import { profileSelector } from '@/store/profile'

export const handlePermission = (m: MenuProps, permission: Permission[]) => {
  const isAlwaysShow = !m.permission || m.permission?.length === 0
  const isMatchedPermission = m.permission?.some((p) => permission?.includes(p))

  return isAlwaysShow || isMatchedPermission
}

export const useRouteProtect = () => {
  const pathname = usePathname()
  const { permission } = useSelector(profileSelector)

  useLayoutEffect(() => {
    const getFlatMenu = (m: MenuProps, parent?: MenuProps): MenuProps[] => {
      const newM = { permission: [], link: '', ...m }

      if (parent) {
        newM.link = `${parent.link || `/${parent.id}`}/${m.id}`
      } else {
        newM.link = m.link || `/${m.id}`
      }

      return [newM, ...(m.items?.flatMap((mm) => getFlatMenu(mm, m)) || [])]
    }

    const _menuFound = [...menu]
      .filter((m) => !m.isGroupLabel)
      .flatMap((m) => getFlatMenu(m))
      .find((m) => m?.link === pathname)

    if (_menuFound) {
      const isAuth = handlePermission(_menuFound, permission)

      if (!isAuth) {
        redirect('/')
      }
    }
  }, [])
}
