import clsx from 'clsx'
import { Inter } from 'next/font/google'
import 'tw-elements/dist/css/tw-elements.min.css'

import '@/assets/css/global.css'
import '@/assets/css/reset.css'
import { ThemeProvider } from '@/contexts/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className='dark'>
      <body className={clsx(inter.className, 'dark:bg-zinc-800')}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
