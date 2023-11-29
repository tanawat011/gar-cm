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
    tw`h-full w-20 fixed z-20 border-solid border-r transition-width overflow-hidden`,
    tw`bg-white`,
    tw`dark:bg-base-gradient-sidebar dark:border-gunmetal`,
    tw`hover:(w-64 overflow-auto)`,
    css`
      &:hover > div {
        ${tw`w-[calc(theme(spacing.64)-1px)]`}

        & > #logo {
          ${tw`flex`}
        }

        & > #logo-mini {
          ${tw`hidden`}
        }

        & > div p #powered-by {
          ${tw`inline-block`}
        }
      }
    `,
  ]
})
