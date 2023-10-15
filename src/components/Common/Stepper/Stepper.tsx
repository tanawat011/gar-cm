'use client'

import type { StepperItem } from '@/types'

import React, { useEffect } from 'react'

import clsx from 'clsx'

type StepperProps = {
  items: StepperItem[]
}

export const Stepper: React.FC<StepperProps> = ({ items }) => {
  const [activeIdx, setActiveIdx] = React.useState(0)

  const onClickStep = (idx: number) => {
    setActiveIdx(idx)
  }

  useEffect(() => {
    const init = async () => {
      const { initTE, Stepper: _Stepper } = await import('tw-elements')
      initTE({
        Stepper: _Stepper,
      })
    }

    init()
  }, [])

  return (
    <>
      <ul
        data-te-stepper-init
        className='relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out'
      >
        {items.map((item, idx) => {
          const firstIdx = idx === 0
          const isActive = idx === activeIdx

          return (
            <li
              data-te-stepper-step-ref
              data-te-stepper-step-active={isActive}
              className='w-[4.5rem] flex-auto'
              key={idx}
              onClick={() => onClickStep(idx)}
            >
              <div
                data-te-stepper-head-ref
                tabIndex={isActive ? 0 : -1}
                className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
              >
                <span
                  data-te-stepper-head-icon-ref
                  className={clsx(
                    isActive
                      ? 'my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]'
                      : 'my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]',
                  )}
                >
                  {item.label}
                </span>
                <span
                  data-te-stepper-head-text-ref
                  className={clsx(
                    isActive
                      ? 'font-medium text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300'
                      : 'text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300',
                  )}
                >
                  {item.title}
                </span>
              </div>
              <div
                data-te-stepper-content-ref
                className={clsx(
                  firstIdx
                    ? 'absolute w-full p-4 transition-all duration-500 ease-in-out'
                    : 'absolute left-0 w-full translate-x-[150%] p-4 transition-all duration-500 ease-in-out',
                )}
              >
                {item.content}
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
