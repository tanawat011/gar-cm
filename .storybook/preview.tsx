import type { Preview } from '@storybook/react'
// import React from 'react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
// import { ThemeProvider } from 'styled-components'

import '../src/assets/css/global.css'

import DarkTheme from './darkTheme'

// // Function to obtain the intended theme
// const getTheme = (themeName) => {
//   return DarkTheme[themeName]
// }

// const withThemeProvider = (Story, context) => {
//   const theme = getTheme(context.globals.theme)
//   const Aaa = withThemeByDataAttribute({
//     // Themes switcher for Tailwind CSS in the Storybook
//     themes: {
//       light: 'light',
//       dark: 'dark',
//     },
//     defaultTheme: 'dark',
//     attributeName: 'tw-theme-mode',
//   })

//   return (
//     <ThemeProvider theme={DarkTheme}>
//       <Story />
//     </ThemeProvider>
//   )
// }

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
    // Backgrounds switcher for the Storybook
    backgrounds: {
      values: [
        { name: 'light', value: '#f8f8f8' },
        { name: 'dark', value: '#333333' },
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  // decorators: [withThemeProvider],
  decorators: [
    withThemeByDataAttribute({
      // Themes switcher for Tailwind CSS in the Storybook
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
      attributeName: 'class',
    }),
  ],
  globalTypes: {
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'th', right: 'th', title: 'Thai' },
        ],
      },
    },
    // theme: {
    //   name: 'Theme',
    //   description: 'Global theme for components',
    //   defaultValue: 'dark',
    //   toolbar: {
    //     icon: 'circlehollow',
    //     attributeName: 'tw-theme-mode',
    //     items: [
    //       { value: 'light', right: '🌞', title: 'Light' },
    //       { value: 'dark', right: '🌚', title: 'Dark' },
    //     ],
    //   },
    // },
  },
}

export default preview
