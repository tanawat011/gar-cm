import React from 'react'

import { Brand } from './Brand'
import { Content } from './Content'
import { Footer } from './Footer'

export const Container = () => {
  return (
    <nav
      id='sidenav-1'
      className="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800 xl:data-[te-sidenav-hidden='false']:translate-x-0"
      data-te-sidenav-init
      data-te-sidenav-hidden='false'
      data-te-sidenav-mode-breakpoint-over='0'
      data-te-sidenav-mode-breakpoint-side='xl'
      data-te-sidenav-content='#content'
      data-te-sidenav-accordion='true'
    >
      <Brand />

      <Content />

      <Footer />
    </nav>
  )
}
