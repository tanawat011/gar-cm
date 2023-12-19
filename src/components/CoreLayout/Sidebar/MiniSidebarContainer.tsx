import React from 'react'

import tw, { css, styled } from 'twin.macro'

type MiniSidebarContainerProps = {
  children?: React.ReactNode
}

export const MiniSidebarContainer: React.FC<MiniSidebarContainerProps> = ({ children }) => {
  return (
    <StyledContainer>
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.div(() => {
  return [tw`h-full w-20 transition-width`]
})

const StyledChildrenContainer = styled.div(() => {
  return [
    tw`h-full w-20 fixed z-20 border-solid border-r transition-width overflow-hidden bg-background`,
    tw`dark:border-gunmetal`,
    tw`hover:(w-64 overflow-auto)`,
    css`
      & > div {
        #item-label {
          ${tw`hidden`}
        }

        #arrow-down {
          ${tw`hidden`}
        }

        #mini-sidebar {
          ${tw`block`}
        }

        #full-sidebar {
          ${tw`hidden`}
        }

        #wrap-item-label-group-label {
          ${tw`hidden`}
        }
      }

      &:hover > div {
        ${tw`w-[calc(theme(spacing.64)-1px)]`}

        #logo {
          ${tw`flex`}
        }

        #logo-mini {
          ${tw`hidden`}
        }

        #mini-sidebar {
          ${tw`hidden`}
        }

        #full-sidebar {
          ${tw`block`}
        }

        #powered-by {
          ${tw`inline-block`}
        }

        #item-label {
          ${tw`block`}
        }

        #arrow-down {
          ${tw`block`}
        }

        #wrap-item-label-group-label {
          ${tw`flex`}
        }
      }
    `,
  ]
})
