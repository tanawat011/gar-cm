import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

import '../src/assets/css/global.css'

import DarkTheme from './darkTheme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: DarkTheme,
    },
    themes: {
      default: 'dark',
      list: [
        { name: 'dark', class: 'dark', color: '#777777' },
        { name: 'light', class: 'light', color: '#ffffff' },
      ],
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
      attributeName: 'data-mode',
    }),
  ],
}

export default preview
