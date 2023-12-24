import type { SidebarType } from '@/types'

import React from 'react'

import { Card, CardBody } from '@nextui-org/react'
import { useSelector } from 'react-redux'
import tw, { css, styled } from 'twin.macro'

import { appSettingSelector } from '@/store/selector'

type FullSidebarContainerProps = {
  children?: React.ReactNode
}

export const FullSidebarContainer: React.FC<FullSidebarContainerProps> = ({ children }) => {
  const { sidebarType, sidebarStyle } = useSelector(appSettingSelector)

  const isModern = sidebarStyle === 'modern'

  if (isModern) {
    return (
      <StyledCardContainer $sidebarType={sidebarType}>
        <CardBody>{children}</CardBody>
      </StyledCardContainer>
    )
  }

  return <StyledContainer $sidebarType={sidebarType}>{children}</StyledContainer>
}

const twStyle = ({ $sidebarType }: { $sidebarType: SidebarType }) => [
  tw`transition-width`,
  $sidebarType === 'mini' ? tw`w-20` : tw`w-64`,
  $sidebarType === 'mini' &&
    css`
      &:hover {
        ${tw`w-64`}
      }

      & > * {
        #logo {
          ${tw`hidden`}
        }

        #logo-mini {
          ${tw`flex`}
        }

        #wrap-item-group-label {
          ${tw`hidden`}
        }

        #sub-item-container {
          ${tw`hidden`}
        }

        #powered-by {
          ${tw`hidden`}
        }
      }

      &:hover > * {
        #logo {
          ${tw`flex`}
        }

        #logo-mini {
          ${tw`hidden`}
        }

        #wrap-item-group-label {
          ${tw`flex`}
        }

        #sub-item-container {
          ${tw`block`}
        }

        #powered-by {
          ${tw`inline`}
        }
      }
    `,
]

const StyledContainer = styled.div<{ $sidebarType: SidebarType }>(({ $sidebarType }) => {
  return [twStyle({ $sidebarType }), tw`bg-content1 p-4`]
})

const StyledCardContainer = styled(Card)<{ $sidebarType: SidebarType }>(({ $sidebarType }) => {
  return [twStyle({ $sidebarType }), tw`m-4`]
})
