import type { SidebarItem } from '@/types/sidebar'

import React, { useContext, useEffect } from 'react'

import Link from 'next/link'

import { RouteContext } from '@/contexts/RouteProvider'

type ItemProps = {
  title: string
  link: string
  active?: boolean
}

const Item: React.FC<ItemProps> = ({ title, link, active }) => {
  if (active) {
    return <li className='text-neutral-500 dark:text-neutral-400'>{title}</li>
  }

  return (
    <li>
      <Link
        href={{ pathname: link }}
        className='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
      >
        {title}
      </Link>
    </li>
  )
}

const Separator = () => {
  return (
    <li>
      <span className='mx-2 text-neutral-500 dark:text-neutral-400'>{'>'}</span>
    </li>
  )
}

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

  return (
    <nav className={`bg-grey-light w-full rounded-md ${className}`}>
      <ol className='list-reset flex'>
        <Item title='Home' link='/' />

        <Separator />

        {breadcrumbs.map((item, index) => {
          return (
            <React.Fragment key={`breadcrumb-${item.title}`}>
              <Item
                title={item.title}
                link={item.link}
                active={index === breadcrumbs.length - 1}
              />

              {index < breadcrumbs.length - 1 && <Separator />}
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
