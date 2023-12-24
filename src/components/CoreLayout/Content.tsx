import React from 'react'

import tw from 'twin.macro'

type ContentProps = {
  children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <StyledContent>{children}</StyledContent>
}

const StyledContent = tw.div`m-4`
