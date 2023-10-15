'use client'

import type { StepperItem } from '@/types'

import React from 'react'

import { Stepper } from '@/components/Common'
import {
  Content1,
  Content2,
  Content3,
  Content4,
  Content5,
  Content6,
} from '@/components/ExampleFizzBuzz'

const items: StepperItem[] = [
  {
    label: '1',
    title: 'What is TDD?',
    content: <Content1 />,
  },
  {
    label: '2',
    title: 'Let`s begin!',
    content: <Content2 />,
  },
  {
    label: '3',
    title: 'First Step',
    content: <Content3 />,
  },
  {
    label: '4',
    title: 'Write Test Case',
    content: <Content4 />,
  },
  {
    label: '5',
    title: 'Refactor',
    content: <Content5 />,
  },
  {
    label: '6',
    title: 'Summary',
    content: <Content6 />,
  },
]

const FizzBuzz = () => {
  return <Stepper items={items} />
}

export default FizzBuzz
