import clsx from 'clsx'
import { Inter } from 'next/font/google'
import 'tw-elements/dist/css/tw-elements.min.css'

import '@/styles/css/global.css'
import '@/styles/css/reset.css'

const inter = Inter({ subsets: ['latin'] })

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className='dark'>
      <body className={clsx(inter.className, 'dark:bg-zinc-800')}>
        {children}
      </body>
    </html>
  )
}
