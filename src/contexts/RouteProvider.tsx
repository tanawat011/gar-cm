'use client'

import type { SidebarItem } from '@/types/sidebar'

import { createContext, useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import { sidebarItems } from '@/configs'

export const RouteContext = createContext({})

type RouteProviderProps = {
  children: React.ReactNode
  value?: SidebarItem
}

export const RouteProvider = ({ children, value }: RouteProviderProps) => {
  const pathname = usePathname() || '/'

  // Extract the relevant part of the pathname
  const pathParts = pathname.split('/').filter(Boolean)

  const [context, setContext] = useState<SidebarItem>()

  useEffect(() => {
    const currItem = findActiveSidebarItem(sidebarItems, pathParts)

    setContext(currItem)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (value) {
      setContext(value)
    }
  }, [value])

  const findActiveSidebarItem = (
    items: SidebarItem[],
    _pathParts: string[],
    parent?: SidebarItem,
  ): SidebarItem => {
    for (const item of items) {
      if (item.link === _pathParts[0]) {
        // If the current item matches the first part of the path
        if (_pathParts.length === 1 || !item.subItems) {
          // If it's a match, and either it's a leaf node or there are no sub-items
          if (parent) return { ...parent, subItem: item, subItems: undefined }

          return item
        }

        // If there are sub-items, recursively search for the active sub-item
        return findActiveSidebarItem(item.subItems, _pathParts.slice(1), item)
      }
    }

    return sidebarItems[0]
  }

  return (
    <RouteContext.Provider value={{ ...context }}>
      {children}
    </RouteContext.Provider>
  )
}
