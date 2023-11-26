import { DrawerProvider as DrawerContextProvider } from '@/contexts'

type DrawerProviderProps = {
  children: React.ReactNode
}

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  return <DrawerContextProvider>{children}</DrawerContextProvider>
}
