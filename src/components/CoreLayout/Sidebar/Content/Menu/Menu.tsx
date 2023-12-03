import type { IconType } from '@/components/Icon'

import type { KeyboardEvent } from 'react'
import { useRef, useState } from 'react'

import tw, { styled } from 'twin.macro'

import { BadgeAndArrow } from './BadgeAndArrow'
import { IconAndLabel } from './IconAndLabel'
import { SubItemContainer } from './SubItemContainer'

type ItemProps = {
  label: string
  icon?: IconType
  id: string
  link?: string
  items?: ItemProps[]
}

export const Menu = () => {
  const items: ItemProps[] = [
    {
      label: 'Dashboard',
      icon: 'FaShop',
      id: 'dashboard',
    },
    {
      label: 'Children',
      icon: 'FaSignal',
      id: 'children',
      items: [
        {
          label: 'Children 2',
          id: 'children2',
        },
      ],
    },
    {
      label: 'Level 1',
      icon: 'FaRegSun',
      id: 'level1',
      items: [
        {
          label: 'Level 2',
          id: 'level2',
        },
        {
          label: 'Level 2(2)',
          id: 'level22',
          items: [
            {
              label: 'Level 3',
              id: 'level3',
            },
          ],
        },
      ],
    },
    {
      label: 'Dashboard 2',
      icon: 'FaShop',
      id: 'dashboard2',
    },
  ]

  const activeLink = window.location.pathname

  const listRef = useRef<Record<string, HTMLUListElement | null>>({})

  const [isExpand, setIsExpand] = useState(true)
  const [isExpandOnHover, setIsExpandOnHover] = useState(false)
  const [activeName, setActiveName] = useState('')
  const [openedMenu, setOpenedMenu] = useState<Record<string, any>>({})

  const handleToggleItem = (itemId: string) => {
    const rootEl = itemId.split('.')[0]

    if (openedMenu[itemId]?.open === true) {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [itemId]: {
          open: false,
          height: '0px',
        },
        [rootEl]: {
          open: rootEl === itemId ? false : true,
          height: `${(listRef.current[rootEl]?.scrollHeight || 0) - (listRef.current[itemId]?.scrollHeight || 0)}px`,
        },
      }))
    } else {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [itemId]: {
          open: true,
          height: `${listRef.current[itemId]?.scrollHeight || 0}px`,
        },
        [rootEl]: {
          open: true,
          height: `${(listRef.current[rootEl]?.scrollHeight || 0) + (listRef.current[itemId]?.scrollHeight || 0)}px`,
        },
      }))
    }
  }

  const generateMenuItem = (item: ItemProps, idx: number, lvl: 1 | 2 | 3) => {
    const hasItems = 'items' in item
    const hasLink = 'link' in item

    if (activeName === '' && item?.link && activeLink.includes(item?.link)) {
      setActiveName(item.id)
    }

    const classesActive = activeName === item.id ? 'active' : ''
    const onClick = () => {
      if (hasItems) return handleToggleItem(item.id)

      if (hasLink) {
        // handleNavigate(item.id)
      }
    }

    const onKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
      const { code } = e

      if (code === 'Space') {
        if (hasItems) return handleToggleItem(item.id)

        if (hasLink) {
          // handleNavigate(item.id)
        }
      }
    }

    return (
      <li key={idx}>
        <StyledItem
          role='button'
          tabIndex={0}
          onClick={onClick}
          onKeyDown={onKeyDown}
          id={item.id}
          lvl={lvl}
          activeName={activeName}
          className={classesActive}
        >
          <IconAndLabel {...item} isExpand={isExpand} isExpandOnHover={isExpandOnHover} />

          {hasItems && (
            <BadgeAndArrow
              isOpen={!!openedMenu?.[item.id]?.open}
              isExpand={isExpand}
              isExpandOnHover={isExpandOnHover}
            />
          )}
        </StyledItem>

        {hasItems && (
          <SubItemContainer
            handleRef={(el) => (listRef.current[item.id] = el)}
            id={item.id}
            height={openedMenu?.[item.id]?.height}
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

const StyledContainer = styled.div(() => {
  return [tw`h-[calc(100%-(var(--navbar-h)*2))] text-sm  select-none`]
})

const StyledUlContainer = styled.ul(() => {
  return [tw`list-none px-3`]
})

const StyledItem = styled.a<{ id: string; lvl: 1 | 2 | 3; activeName: string }>(({ id, lvl, activeName }) => {
  const activated = activeName === id || activeName.split('.')[0] === id

  return [
    tw`cursor-pointer rounded-lg flex items-center justify-between h-12 pr-3 mb-1 `,
    tw`hover:bg-slate-300/20 `,
    lvl === 1 && tw`pl-4`,
    lvl === 2 && tw`pl-11`,
    lvl === 3 && tw`pl-16`,
    activated ? tw`text-blue-600 font-semibold` : tw`text-slate-500`,
    activated && lvl === 1 ? tw`bg-blue-200/20` : tw`bg-transparent`,
  ]
})
