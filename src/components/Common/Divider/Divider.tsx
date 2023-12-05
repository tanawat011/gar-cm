import React from 'react'

import { Divider as NextDivider } from '@nextui-org/react'
import { css, styled } from 'twin.macro'

type DividerProps = {
  gradient?: boolean
}

export const Divider: React.FC<DividerProps> = ({ gradient }) => {
  if (gradient) return <StyledDivider className='my-1' />

  return <NextDivider className='my-1' />
}

const StyledDivider = styled.hr(() => {
  return css`
    background-image: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0),
      hsla(var(--nextui-foreground)),
      hsla(0, 0%, 100%, 0)
    );
    background-color: transparent;
    opacity: 0.25;
    border: 0;
    height: 1px;
  `
})
