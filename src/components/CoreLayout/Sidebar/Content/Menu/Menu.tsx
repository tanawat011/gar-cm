import type { ItemProps } from './items'

import type { KeyboardEvent } from 'react'
import { useRef, useState } from 'react'

import { BadgeAndArrow } from './BadgeAndArrow'
import { IconAndLabel } from './IconAndLabel'
import { StyledContainer, StyledItem, StyledUlContainer } from './Menu.styled'
import { SubItemContainer } from './SubItemContainer'
import { items } from './items'

type OpenedMenu = Record<string, { open: boolean; height: `${number}px` }>

export const Menu = () => {
  const activeLink = window.location.pathname

  const listRef = useRef<Record<string, HTMLUListElement | null>>({})

  const [isExpand, setIsExpand] = useState(true)
  const [isExpandOnHover, setIsExpandOnHover] = useState(false)
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

  const generateMenuItem = (item: ItemProps, idx: number, lvl: 1 | 2 | 3) => {
    const itemId = item.id
    const hasItems = 'items' in item
    const hasLink = 'link' in item

    if (activeItem === '' && item?.link && activeLink.includes(item?.link)) {
      setActiveItem(itemId)
    }

    const classesActive = activeItem === itemId ? 'active' : ''
    const onClick = () => {
      if (hasItems) return handleToggleItem(itemId)

      if (hasLink) return handleNavigate(itemId)
    }

    const onKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
      const { code } = e

      if (code === 'Space') {
        if (hasItems) return handleToggleItem(itemId)

        if (hasLink) return handleNavigate(itemId)
      }
    }

    return (
      <li key={idx}>
        <StyledItem
          role='button'
          tabIndex={0}
          onClick={onClick}
          onKeyDown={onKeyDown}
          id={itemId}
          lvl={lvl}
          activeItem={activeItem}
          className={classesActive}
          href='/'
          {...(!hasItems && { href: item?.link || '/' })}
        >
          <IconAndLabel {...item} isExpand={isExpand} isExpandOnHover={isExpandOnHover} />

          {hasItems && (
            <BadgeAndArrow
              isOpen={!!openedMenu?.[itemId]?.open}
              isExpand={isExpand}
              isExpandOnHover={isExpandOnHover}
            />
          )}
        </StyledItem>

        {hasItems && (
          <SubItemContainer
            handleRef={(el) => (listRef.current[itemId] = el)}
            id={itemId}
            height={openedMenu?.[itemId]?.height}
            isExpand={isExpand}
            isExpandOnHover={isExpandOnHover}
          >
            {item.items?.map((cldItem, cldIdx) => generateMenuItem(cldItem, cldIdx, (lvl + 1) as never))}
          </SubItemContainer>
        )}
      </li>
    )
  }

  return (
    <StyledContainer>
      <StyledUlContainer>{items.map((item, idx) => generateMenuItem(item, idx, 1))}</StyledUlContainer>
    </StyledContainer>
  )
}
