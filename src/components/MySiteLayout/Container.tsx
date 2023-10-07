import React, { useEffect } from 'react'

import { Children } from './Children'
import { Content } from './Content'
// import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  useEffect(() => {
    const init = async () => {
      const { Datepicker, Input, initTE, Collapse, Dropdown, Sidenav, Ripple } =
        await import('tw-elements')
      initTE({
        Datepicker,
        Input,
        Collapse,
        Dropdown,
        Sidenav,
        Ripple,
      })
    }

    init()
  }, [])

  return (
    <>
      <header>
        <Sidebar />

        <Navbar />
      </header>

      <Content>
        <Children>{children}</Children>
      </Content>

      {/* <Footer /> */}
    </>
  )
}
