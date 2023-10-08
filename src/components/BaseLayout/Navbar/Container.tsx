import React from 'react'

// import { CenterContainer } from './CenterContainer'
import { LeftContainer } from './LeftContainer'
import { RightContainer } from './RightContainer'

export const Container = () => {
  return (
    <nav
      id='main-navbar'
      className='fixed left-0 right-0 top-0 flex w-full flex-nowrap items-center justify-between bg-white py-[0.6rem] text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700 dark:bg-zinc-700 lg:flex-wrap lg:justify-start xl:pl-60'
      data-te-navbar-ref
    >
      <div className='flex w-full flex-wrap items-center justify-between px-4'>
        <LeftContainer />

        {/* <CenterContainer /> */}

        <RightContainer />
      </div>
    </nav>
  )
}
