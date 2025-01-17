import type { Preview } from '@storybook/react'
import '@/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'var(--color-white)'
        },
        {
          name: 'dark',
          value: 'var(--color-mainBg)'
        }
      ]
    }
  },
  tags: ['autodocs']
}

export default preview
