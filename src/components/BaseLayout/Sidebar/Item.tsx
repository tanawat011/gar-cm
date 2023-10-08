import type { SidebarItem } from '@/types/sidebar'

import React from 'react'

import clsx from 'clsx'
import Link from 'next/link'

import { Icon } from '@/components/Icon'

type ItemProps = {
  item: SidebarItem
  subItems?: SidebarItem[]
  baseUri?: string
  parent?: SidebarItem
  onClick?: (item: SidebarItem) => void
}

const defaultClsItem = {
  position: 'flex cursor-pointer items-center truncate rounded-[5px] py-4',
  animation:
    'transition duration-300 ease-linear motion-reduce:transition-none',
  outline:
    'outline-none hover:outline-none focus:outline-none active:outline-none data-[te-sidenav-state-focus]:outline-none',
  text: {
    default:
      'text-gray-700 focus:text-primary-600 active:text-primary-600 data-[te-sidenav-state-active]:text-primary-600',
    dark: 'dark:text-gray-300',
  },
  bg: {
    default:
      'hover:bg-primary-400/10 hover:text-primary-600 focus:bg-primary-400/10 active:bg-primary-400/10',
    dark: 'dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10',
  },
  firstFloorOnlyClass: 'group h-12 px-6 text-[0.875rem]',
  secondFloorOnlyClass: 'h-6 pl-[3.4rem] pr-6 text-[0.78rem]',
}

const _defaultClsItem = clsx(
  defaultClsItem.position,
  defaultClsItem.animation,
  defaultClsItem.text.default,
  defaultClsItem.text.dark,
  defaultClsItem.bg.default,
  defaultClsItem.bg.dark,
)
const firstFloorOnlyClass = clsx(
  defaultClsItem.firstFloorOnlyClass,
  _defaultClsItem,
)
const secondFloorOnlyClass = clsx(
  defaultClsItem.secondFloorOnlyClass,
  _defaultClsItem,
)

const defaultClsIcon = {
  position: 'mr-4',
  size: '[&>svg]:h-3.5 [&>svg]:w-3.5',
  animation:
    '[&>svg]:transition [&>svg]:duration-300 [&>svg]:ease-linear motion-reduce:[&>svg]:transition-none',
  fill: {
    default:
      '[&>svg]:fill-gray-700 group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600',
    dark: 'dark:[&>svg]:fill-gray-300 dark:group-hover:[&>svg]:fill-gray-300',
  },
}
const _defaultClsIcon = clsx(
  defaultClsIcon.position,
  defaultClsIcon.size,
  defaultClsIcon.animation,
  defaultClsIcon.fill.default,
  defaultClsIcon.fill.dark,
)

const defaultClsAngleIcon = {
  position: 'absolute right-0 ml-auto mr-[0.8rem]',
  size: '[&>svg]:h-3 [&>svg]:w-3',
  animation: 'transition-transform duration-300 motion-reduce:transition-none',
  fill: {
    default:
      '[&>svg]:fill-gray-600 group-hover:[&>svg]:fill-primary-600 group-focus:[&>svg]:fill-primary-600 group-active:[&>svg]:fill-primary-600 group-[te-sidenav-state-active]:[&>svg]:fill-primary-600',
    dark: 'dark:[&>svg]:fill-gray-300',
  },
}
const _defaultClsAngleIcon = clsx(
  defaultClsAngleIcon.position,
  defaultClsAngleIcon.size,
  defaultClsAngleIcon.animation,
  defaultClsAngleIcon.fill.default,
  defaultClsAngleIcon.fill.dark,
)

const CustomLink: React.FC<{
  item: SidebarItem
  fullLink: string
  children: React.ReactNode
  className?: string
  onClick?: (item: SidebarItem) => void
  fullParent?: SidebarItem
}> = ({ item, fullLink, className, children, onClick, fullParent }) => {
  if (fullLink && !item?.subItems) {
    return (
      <Link
        className={className}
        data-te-sidenav-link-ref
        href={{
          pathname: fullLink,
        }}
        onFocus={() => {
          onClick?.(fullParent || item)
        }}
      >
        {children}
      </Link>
    )
  }

  return (
    <a className={className} data-te-sidenav-link-ref>
      {children}
    </a>
  )
}

export const Item: React.FC<ItemProps> = ({
  item,
  subItems,
  baseUri,
  parent,
  onClick,
}) => {
  const { link, title, icon } = item
  const _baseUri = baseUri && baseUri === '/' ? '' : `/${baseUri}`
  const _link = link && link === '/' ? '' : link
  const fullLink = `${_baseUri}/${_link}`.replace(/\/+/g, '/')
  const usingClass =
    parent && !subItems ? secondFloorOnlyClass : firstFloorOnlyClass

  return (
    <li className='relative'>
      <CustomLink
        item={item}
        className={usingClass}
        fullLink={fullLink}
        onClick={onClick}
        fullParent={
          parent ? { ...parent, subItem: item, subItems: undefined } : undefined
        }
      >
        {icon && !parent && (
          <span className={_defaultClsIcon}>
            <Icon name={icon} />
          </span>
        )}

        <span>{title}</span>

        {subItems && (
          <span
            className={_defaultClsAngleIcon}
            data-te-sidenav-rotate-icon-ref
          >
            <Icon name='FaAngleDown' />
          </span>
        )}
      </CustomLink>

      {subItems && (
        <ul
          className='!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block'
          data-te-sidenav-collapse-ref
        >
          {subItems.map((subItem) => (
            <Item
              key={subItem.title}
              item={subItem}
              baseUri={fullLink}
              parent={item}
              onClick={onClick}
            />
          ))}
        </ul>
      )}
    </li>
  )
}