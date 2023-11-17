import type { Config } from 'tailwindcss'

import { nextui } from '@nextui-org/react'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ['monaspace-argon']: ['Monaspace Argon', 'monospace', 'sans-serif'],
        ['monaspace-krypton']: ['Monaspace Krypton', 'monospace', 'sans-serif'],
        ['monaspace-neon']: ['Monaspace Neon', 'monospace', 'sans-serif'],
        ['monaspace-radon']: ['Monaspace Radon', 'monospace', 'sans-serif'],
        ['monaspace-xenon']: ['Monaspace Xenon', 'monospace', 'sans-serif'],
      },
    },
  },
  plugins: [nextui()],
}

export default config
