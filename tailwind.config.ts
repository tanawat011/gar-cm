import type { Config } from 'tailwindcss'

import { nextui } from '@nextui-org/react'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/utils/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        //
        'light-bg': '#ffffff',
        'light-text': '#344767',
        'dark-bg': '#202940',
        'dark-text': '#344767',
        'cetacean-blue': '#070d2b',
        'rich-black': '#000312',
        gunmetal: '#2e313a',
        'charleston-green': '#282828',
      },
      fontFamily: {
        ['monaspace-argon']: ['Monaspace Argon', 'monospace', 'sans-serif'],
        ['monaspace-krypton']: ['Monaspace Krypton', 'monospace', 'sans-serif'],
        ['monaspace-neon']: ['Monaspace Neon', 'monospace', 'sans-serif'],
        ['monaspace-radon']: ['Monaspace Radon', 'monospace', 'sans-serif'],
        ['monaspace-xenon']: ['Monaspace Xenon', 'monospace', 'sans-serif'],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: {
              foreground: '#3c4158',
              DEFAULT: '#1a2035',
              '50': '#f4f8ff',
              '100': '#eff3ff',
              '200': '#e8ecff',
              '300': '#dadefc',
              '400': '#b7bbd8',
              '500': '#989cb8',
              '600': '#6f738d',
              '700': '#5b6079',
              '800': '#3c4158',
              '900': '#1a2035',
            },
            content1: '#282828',
          },
        },
        light: {
          colors: {
            background: {
              DEFAULT: '#f0f2f5',
              foreground: '#d9dfe6',
              '50': '#f0f2f5',
              '100': '#d9dfe6',
              '200': '#c1cad5',
              '300': '#a7b5c3',
              '400': '#92a3b4',
              '500': '#7e92a6',
              '600': '#708294',
              '700': '#5f6d7c',
              '800': '#4f5a65',
              '900': '#3c444d',
            },
            content1: '#d1d3d7',
          },
        },
      },
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-base-gradient-sidebar': {
          '@apply bg-gradient-to-l from-cetacean-blue to-rich-black': {},
        },
        '.bg-base-gradient-navbar': {
          '@apply bg-gradient-to-r from-cetacean-blue to-rich-black': {},
        },
        '.bg-base-gradient-content': {
          '@apply bg-gradient-to-r from-cetacean-blue to-rich-black': {},
        },
        '.scrolling-touch': { '-webkit-overflow-scrolling': 'touch' },
        '.scrolling-auto': { '-webkit-overflow-scrolling': 'auto' },
      })
    }),
  ],
}

export default config
