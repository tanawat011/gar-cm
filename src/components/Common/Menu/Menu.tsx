import type { MenuProps as ItemProps } from '@/configs'

import type { KeyboardEvent } from 'react'
import React, { useRef, useState } from 'react'

import { Divider } from '@/components/Common'

import { BadgeAndArrow } from './BadgeAndArrow'
import { IconAndLabel } from './IconAndLabel'
import { StyledItem, StyledUlContainer } from './Menu.styled'
import { SubItemContainer } from './SubItemContainer'

type OpenedMenu = Record<string, { open: boolean; height: `${number}px` }>

type MenuProps = {
  items: ItemProps[]
}

export const Menu: React.FC<MenuProps> = ({ items }) => {
  const activeLink = window.location.pathname

  const listRef = useRef<Record<string, HTMLUListElement | null>>({})

  const [isExpand] = useState(true)
  const [isExpandOnHover] = useState(false)
  const [activeItem, setActiveItem] = useState('')
  const [openedMenu, setOpenedMenu] = useState<OpenedMenu>({})

  const handleNavigate = (path: string) => {
    setActiveItem(path)
  }

  const handleToggleItem = (itemId: string) => {
    const rootEl = itemId.split('.')[0]
    const rootHeight = listRef.current[rootEl]?.scrollHeight || 0
    const itemHeight = listRef.current[itemId]?.scrollHeight || 0

    if (!!openedMenu[itemId]?.open) {
      return setOpenedMenu({
        ...openedMenu,
        [itemId]: { open: false, height: '0px' },
        [rootEl]: {
          open: !(rootEl === itemId),
          height: `${rootHeight - itemHeight}px`,
        },
      })
    }

    setOpenedMenu({
      ...openedMenu,
      [itemId]: { open: true, height: `${itemHeight}px` },
      [rootEl]: {
        open: true,
        height: `${rootHeight + itemHeight}px`,
      },
    })
  }

  const getLink = (itemId: string, parentId?: string, link?: string) => {
    if (link) return link

    return parentId ? `/${parentId.replaceAll('.', '/')}/${itemId}` : `/${itemId}`
  }

  const generateMenuItem = (item: ItemProps, idx: number, lvl: 1 | 2 | 3, parentId?: string) => {
    const itemId = parentId ? `${parentId}.${item.id}` : item.id
    const itemLink = getLink(item.id, parentId, item?.link)
    const hasItems = 'items' in item

    if (activeItem === '' && activeLink === itemLink) {
      setActiveItem(itemId)
    }

    const classesActive = activeItem === itemId ? 'active' : ''
    const onClick = () => {
      if (hasItems) return handleToggleItem(itemId)

      handleNavigate(itemId)
    }

    const onKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
      const { code } = e

      if (code === 'Space') onClick()
    }

    return (
      <li key={idx}>
        {item.isGroupLabel && (
          <>
            <Divider gradient />

            <IconAndLabel
              {...item}
              {...(lvl > 1 && { icon: undefined })}
              id='wrap-item-group-label'
              isExpand={isExpand}
              isExpandOnHover={isExpandOnHover}
            />
          </>
        )}

        {!item.isGroupLabel && (
          <>
            <StyledItem
              role='button'
              tabIndex={0}
              onClick={onClick}
              onKeyDown={onKeyDown}
              id={itemId}
              lvl={lvl}
              $activeItem={activeItem}
              className={classesActive}
              href='#'
              {...(!hasItems && { href: itemLink })}
            >
              <IconAndLabel
                {...item}
                {...(lvl > 1 && { icon: undefined })}
                isExpand={isExpand}
                isExpandOnHover={isExpandOnHover}
              />

              {hasItems && (
                <BadgeAndArrow
                  isOpen={!!openedMenu?.[itemId]?.open}
                  isExpand={isExpand}
                  isExpandOnHover={isExpandOnHover}
                />
              )}
            </StyledItem>

            {hasItems && (
              <div id='sub-item-container'>
                <SubItemContainer
                  handleRef={(el) => (listRef.current[itemId] = el)}
                  id={itemId}
                  height={openedMenu?.[itemId]?.height}
                  isExpand={isExpand}
                  isExpandOnHover={isExpandOnHover}
                >
                  {item.items?.map((cldItem, cldIdx) => generateMenuItem(cldItem, cldIdx, (lvl + 1) as never, itemId))}
                </SubItemContainer>
              </div>
            )}
          </>
        )}
      </li>
    )
  }

  return <StyledUlContainer>{items.map((item, idx) => generateMenuItem(item, idx, 1))}</StyledUlContainer>
}
