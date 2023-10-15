import type { SidebarItem } from '@/types/sidebar'

import React, { useContext, useEffect } from 'react'

import { Breadcrumb as BreadcrumbComp } from '@/components/Common'
import { RouteContext } from '@/contexts/RouteProvider'

type BreadcrumbProps = {
  className?: string
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className }) => {
  const context = useContext(RouteContext) as SidebarItem

  const [breadcrumbs, setBreadcrumbs] = React.useState<SidebarItem[]>([])

  useEffect(() => {
    if (context) {
      transformToBreadcrumb({ ...context })
    }
  }, [context])

  const transformToBreadcrumb = (item: SidebarItem) => {
    const bc: SidebarItem[] = []

    const transformer = (_item: SidebarItem) => {
      bc.push({
        ..._item,
        subItem: undefined,
      })

      if (_item.subItem) {
        transformer(_item.subItem)
      }
    }

    transformer(item)
    setBreadcrumbs(bc)
  }

  return <BreadcrumbComp className={className} items={breadcrumbs} />
}

export default Breadcrumb
