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
        mainBg: 'var(--color-mainBg)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        lightGray: 'var(--color-lightGray)',
        gray: 'var(--color-gray)',
        darkGray: 'var(--color-darkGray)'
      },
      fontSize: {
        xsmall: '1.2rem',
        small: '1.4rem',
        medium: '1.6rem',
        large: '1.8rem',
        xlarge: '2.0rem',
        xxlarge: '2.8rem'
      },
      borderRadius: {
        radius: '0.4rem'
      },
      fontFamily: {
        default: ['var(--font-poppins)']
      }
    }
  },
  plugins: []
})

export default config
