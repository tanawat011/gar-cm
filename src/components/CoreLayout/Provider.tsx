import React, { createContext, useMemo, useState } from 'react'

type CoreLayoutContextProps = {
  openDrawer: boolean
  onToggleDrawer: (open?: boolean) => void
  openSidebar: boolean
  onToggleSidebar: (open?: boolean) => void
}

const initialState: CoreLayoutContextProps = {
  openDrawer: false,
  onToggleDrawer: () => {},
  openSidebar: false,
  onToggleSidebar: () => {},
}

export const CoreLayoutContext = createContext(initialState)

type CoreLayoutProviderProps = {
  children: React.ReactNode
}

export const CoreLayoutProvider: React.FC<CoreLayoutProviderProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)

  const onToggleDrawer = (open?: boolean) => {
    setOpenDrawer(open ?? !openDrawer)
  }

  const onToggleSidebar = (open?: boolean) => {
    setOpenSidebar(open ?? !openSidebar)
  }

  const memoValue = useMemo(
    () => ({
      openDrawer,
      onToggleDrawer,
      openSidebar,
      onToggleSidebar,
    }),
    [openDrawer, openSidebar],
  )

  return <CoreLayoutContext.Provider value={memoValue}>{children}</CoreLayoutContext.Provider>
}
