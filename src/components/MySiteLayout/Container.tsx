import React, { useEffect } from 'react'

import { Children } from './Children'
import { Content } from './Content'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  useEffect(() => {
    const init = async () => {
      const { Datepicker, Input, initTE } = await import('tw-elements')
      initTE({ Datepicker, Input })
    }

    init()
  }, [])

  return (
    <div className='w-full'>
      <Header />

      <Content>
        <Sidebar />

        <Children>{children}</Children>
      </Content>
    </div>
  )
}
