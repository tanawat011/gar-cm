import type { Config } from 'tailwindcss'

import { nextui } from '@nextui-org/react'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      fontFamily: {
        ['monaspace-argon']: ['Monaspace Argon', 'monospace', 'sans-serif'],
        ['monaspace-krypton']: ['Monaspace Krypton', 'monospace', 'sans-serif'],
        ['monaspace-neon']: ['Monaspace Neon', 'monospace', 'sans-serif'],
        ['monaspace-radon']: ['Monaspace Radon', 'monospace', 'sans-serif'],
        ['monaspace-xenon']: ['Monaspace Xenon', 'monospace', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui({}), plugin(() => {})],
}
export default config
