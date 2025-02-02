import { withTV } from 'tailwind-variants/transformer'
import type { Config } from 'tailwindcss'

const config: Config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
        mainBg: 'rgb(var(--color-mainBg) / <alpha-value>)',
        lightBg: 'rgb(var(--color-lightBg) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)',
        black: 'rgb(var(--color-black) / <alpha-value>)',
        lightGray: 'rgb(var(--color-lightGray) / <alpha-value>)',
        gray: 'rgb(var(--color-gray) / <alpha-value>)',
        darkGray: 'rgb(var(--color-darkGray) / <alpha-value>)',
        primaryDark: 'rgb(var(--color-primaryDark) / <alpha-value>)',
        secondaryDark: 'rgb(var(--color-secondaryDark) / <alpha-value>)',
        tertiaryDark: 'rgb(var(--color-tertiaryDark) / <alpha-value>)'
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
        small: '1.875rem',
        medium: '2.5rem',
        large: '3.125rem'
      },
      maxWidth: {
        container: '100rem'
      }
    }
  },
  plugins: []
})

export default config
