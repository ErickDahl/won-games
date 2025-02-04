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
          value: 'rbg(var(--color-white))'
        },
        {
          name: 'dark',
          value: 'rgb(var(--color-mainBg))'
        }
      ]
    }
  },
  tags: ['autodocs']
}

export default preview
