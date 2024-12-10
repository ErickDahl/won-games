import type { Config } from 'tailwindcss'

export default {
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
        mainBg: 'var( --color-mainBg)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        lightGray: 'var( --color-lightGray)',
        gray: 'var(--color-gray)',
        darkGray: 'var(--color-darkGray)'
      },
      spacing: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
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
} satisfies Config
