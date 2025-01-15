import type { Config } from 'tailwindcss'
import { withTV } from 'tailwind-variants/transformer'

const config: Config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        mainBg: 'var(--color-mainBg)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        lightGray: 'var(--color-lightGray)',
        gray: 'var(--color-gray)',
        darkGray: 'var(--color-darkGray)',
        primaryDark: 'var(--color-primaryDark)',
        secondaryDark: 'var(--color-secondaryDark)',
        tertiaryDark: 'var(--color-tertiaryDark)',
        transparentBlack: 'var(--color-transparentBlack)'
      },
      borderRadius: {
        radius: '0.4rem'
      },
      fontFamily: {
        default: ['var(--font-poppins)']
      },
      borderWidth: {
        '5': '5px',
        '7': '7px',
        '3': '3px'
      },
      height: {
        small: '30px',
        medium: '40px',
        large: '50px'
      }
    }
  },
  plugins: []
})

export default config
