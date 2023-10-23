import type { Meta, StoryObj } from '@storybook/react'

import { Stepper2 } from './Stepper2'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Common/Stepper2',
  component: Stepper2,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Stepper2>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    items: [
      {
        title: 'Step 1',
        label: 'Step 1',
        content: 'Step 1',
      },
      {
        title: 'Step 2',
        label: 'Step 2',
        content: 'Step 2',
      },
    ],
  },
}
