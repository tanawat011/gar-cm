import Link from 'next/link'
import tw, { css, styled } from 'twin.macro'

import { Icon } from '@/components/Icon'

export const Menu = () => {
  const handleToggleItem = (itemId: string) => {
    const el = document.getElementById(itemId)
    const elChildren = document.getElementById(`${itemId}-children`)

    if (el) {
      const isActive = el.classList.contains('active')

      el.classList.toggle('active', !isActive)

      if (elChildren) {
        elChildren.classList.toggle('active', !isActive)
      }
    }
  }

  const items = [
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
  ]

  return (
    <StyledContainer>
      {/* 3 Level */}
      <StyledMenuContainer>
        <StyledMenuItem id='dashboard11' onClick={() => handleToggleItem('dashboard11')}>
          <div className='flex items-center'>
            <Icon name='FaShop' className='mr-2 w-4 h-4' />
            <p>Level 1</p>
          </div>

          <Icon id='arrow-down' name='FaChevronDown' className='transition-all' />
        </StyledMenuItem>

        <StyledMenuItemChildrenContainer id='dashboard11-children'>
          <StyledMenuItem id='sub-dashboard11' isChildren onClick={() => handleToggleItem('sub-dashboard11')}>
            <div className='flex items-center'>
              <div className='w-6' />
              <p>Level 2</p>
            </div>
          </StyledMenuItem>

          <StyledMenuContainer>
            <StyledMenuItem id='sub-dashboard21' isChildren onClick={() => handleToggleItem('sub-dashboard21')}>
              <div className='flex items-center'>
                <div className='w-6' />
                <p>Level 2(2)</p>
              </div>

              <Icon id='arrow-down' name='FaChevronDown' className='transition-all' />
            </StyledMenuItem>

            <StyledMenuItemChildrenContainer id='sub-dashboard21-children'>
              <StyledMenuItem id='sub-dashboard111' isChildren onClick={() => handleToggleItem('sub-dashboard111')}>
                <div className='flex items-center'>
                  <div className='w-6' />
                  <p>Level 3</p>
                </div>
              </StyledMenuItem>
            </StyledMenuItemChildrenContainer>
          </StyledMenuContainer>
        </StyledMenuItemChildrenContainer>
      </StyledMenuContainer>

      {/* 2 Level */}
      <StyledMenuContainer>
        <StyledMenuItem id='dashboard' onClick={() => handleToggleItem('dashboard')}>
          <div className='flex items-center'>
            <Icon name='FaShop' className='mr-2 w-4 h-4' />
            <p>Dashboard</p>
          </div>

          <Icon id='arrow-down' name='FaChevronDown' className='transition-all' />
        </StyledMenuItem>

        <StyledMenuItemChildrenContainer id='dashboard-children'>
          <StyledMenuItem id='sub-dashboard' isChildren onClick={() => handleToggleItem('sub-dashboard')}>
            <div className='flex items-center'>
              <div className='w-6' />
              <p>Dashboard</p>
            </div>
          </StyledMenuItem>

          <StyledMenuItem id='sub-dashboard2' isChildren onClick={() => handleToggleItem('sub-dashboard2')}>
            <div className='flex items-center'>
              <div className='w-6' />
              <p>Dashboard</p>
            </div>
          </StyledMenuItem>
        </StyledMenuItemChildrenContainer>
      </StyledMenuContainer>

      {/* 1 Level */}
      <StyledMenuContainer>
        <StyledMenuItem id='dashboard1' onClick={() => handleToggleItem('dashboard1')}>
          <div className='flex items-center'>
            <Icon name='FaShop' className='mr-2 w-4 h-4' />
            <p>Dashboard</p>
          </div>
        </StyledMenuItem>
      </StyledMenuContainer>

      {items.map((lv1) => {
        if (lv1.items) {
          return (
            <StyledMenuContainer key={lv1.id}>
              <StyledMenuItem id={lv1.id} onClick={() => handleToggleItem(lv1.id)}>
                <div className='flex items-center'>
                  <Icon name={lv1.icon as never} className='mr-2 w-4 h-4' />
                  <p>{lv1.label}</p>
                </div>

                <Icon id='arrow-down' name='FaChevronDown' className='transition-all' />
              </StyledMenuItem>

              <StyledMenuItemChildrenContainer id={`${lv1.id}-children`} count={lv1.items.length}>
                {lv1.items.map((lv2) => {
                  if (lv2.items) {
                    return (
                      <StyledMenuContainer key={lv2.id}>
                        <StyledMenuItem id={lv2.id} onClick={() => handleToggleItem(lv2.id)}>
                          <div className='flex items-center'>
                            <div className='w-6' />
                            <p>{lv2.label}</p>
                          </div>

                          <Icon id='arrow-down' name='FaChevronDown' className='transition-all' />
                        </StyledMenuItem>

                        <StyledMenuItemChildrenContainer id={`${lv2.id}-children`} count={lv2.items.length}>
                          {lv2.items.map((lv3) => {
                            return (
                              <StyledMenuItem id={lv3.id} isChildren key={lv3.id}>
                                <div className='flex items-center'>
                                  <div className='w-6' />
                                  <p>{lv3.label}</p>
                                </div>
                              </StyledMenuItem>
                            )
                          })}
                        </StyledMenuItemChildrenContainer>
                      </StyledMenuContainer>
                    )
                  }

                  return (
                    <StyledMenuItem id={lv2.id} isChildren key={lv2.id}>
                      <div className='flex items-center'>
                        <div className='w-6' />
                        <p>{lv2.label}</p>
                      </div>
                    </StyledMenuItem>
                  )
                })}
              </StyledMenuItemChildrenContainer>
            </StyledMenuContainer>
          )
        }

        return (
          <StyledMenuContainer key={lv1.id}>
            <StyledMenuItem id={lv1.id} onClick={() => handleToggleItem(lv1.id)}>
              <div className='flex items-center'>
                <Icon name={lv1.icon as never} className='mr-2 w-4 h-4' />
                <p>{lv1.label}</p>
              </div>
            </StyledMenuItem>
          </StyledMenuContainer>
        )
      })}

      {/* <br />
      <br />

      <p className='underline'>
        <Link href={'/'}>Dashboard</Link>
      </p>

      <p className='underline'>
        <Link href={'/app/link-remember'}>Link Remember</Link>
      </p>

      <p className='underline'>
        <Link href={'/app/to-do'}>Road Map</Link>
      </p>

      <p className='underline'>
        <Link href={'/error'}>Example Error Page</Link>
      </p>

      <p className='underline'>
        <Link href={'/not-found'}>Example Not-Found Page</Link>
      </p> */}
    </StyledContainer>
  )
}

const StyledContainer = styled.div(() => {
  return [tw`h-[calc(100%-(var(--navbar-h)*2))] px-4`]
})

const StyledMenuContainer = styled.div(() => {
  return [tw`flex flex-col items-center rounded-lg cursor-pointer select-none`]
})

const StyledMenuItem = styled.div<{ isChildren?: boolean }>(({ isChildren }) => {
  return [
    isChildren ? tw`h-0` : tw`h-10`,
    tw`flex items-center justify-between h-10 rounded-lg w-full px-4`,
    tw`hover:bg-gray-800`,
    css`
      &.active {
        #arrow-down {
          ${tw`-rotate-180`}
        }
      }
    `,
  ]
})

const StyledMenuItemChildrenContainer = styled.div<{ count: number }>(({ count }) => {
  return [
    tw`w-full flex flex-col h-0 opacity-0 overflow-hidden transform duration-150`,
    css`
      &.active {
        ${tw`opacity-100`}
        height: calc(2.5rem * ${count});
      }
    `,
  ]
})
