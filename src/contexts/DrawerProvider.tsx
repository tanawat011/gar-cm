import { createContext, useEffect, useMemo, useState } from 'react'

type DrawerContextType = {
  collapsed: boolean
  setCollapsed: (value?: boolean) => void
}

export const DrawerContext = createContext<DrawerContextType>({
  collapsed: true,
  setCollapsed: () => void 0,
})

type DrawerProviderProps = {
  children: React.ReactNode
}

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [collapsed, setCollapsed] = useState(true)

  const memoValue = useMemo(
    () => ({
      collapsed,
      setCollapsed: (isCollapsed?: boolean) => setCollapsed(!!isCollapsed),
    }),
    [collapsed],
  )

  useEffect(() => {
    const elCoreBody = document.getElementById('core-body')

    if (collapsed) {
      elCoreBody?.classList.remove('overflow-hidden')
    } else {
      elCoreBody?.classList.add('overflow-hidden')
    }
  }, [collapsed])

  return (
    <DrawerContext.Provider value={memoValue}>
      {children}
    </DrawerContext.Provider>
  )
}
