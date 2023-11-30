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
      {items.map((lv1) => {
        if (lv1.items) {
        }

        return (
          <StyledMenuContainer key={lv1.id}>
            <StyledMenuItem id={lv1.id} onClick={() => handleToggleItem(lv1.id)}>
              <div className='flex items-center'>
                <Icon name={lv1.icon as never} className='mr-2 w-4 h-4' />
                <p>{lv1.label}</p>
              </div>

              {lv1.items && <Icon id='arrow-down' name='FaChevronDown' className='transition-all' />}
            </StyledMenuItem>

            {lv1.items && (
              <StyledMenuItemChildrenContainer id={`${lv1.id}-children`} count={lv1.items.length}>
                {lv1.items.map((lv2) => {
                  return (
                    <>
                      <StyledMenuItem key={lv2.id} isChildren id={lv2.id} onClick={() => handleToggleItem(lv2.id)}>
                        <div className='flex items-center'>
                          <div className='w-6' />
                          <p>{lv2.label}</p>
                        </div>

                        {lv2.items && <Icon id='arrow-down' name='FaChevronDown' className='transition-all' />}
                      </StyledMenuItem>

                      {lv2.items && (
                        <StyledMenuItemChildrenContainer id={`${lv2.id}-children`}>
                          {lv2.items.map((lv3) => {
                            return (
                              <StyledMenuItem
                                key={lv3.id}
                                isChildren
                                id={lv3.id}
                                onClick={() => handleToggleItem(lv3.id)}
                              >
                                <div className='flex items-center'>
                                  <div className='w-12' />
                                  <p>{lv3.label}</p>
                                </div>
                              </StyledMenuItem>
                            )
                          })}
                        </StyledMenuItemChildrenContainer>
                      )}
                    </>
                  )
                })}
              </StyledMenuItemChildrenContainer>
            )}
          </StyledMenuContainer>
        )
      })}
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

const StyledMenuItemChildrenContainer = styled.div<{ count?: number }>(({ count = 0 }) => {
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
