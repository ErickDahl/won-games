import { Meta, StoryObj } from '@storybook/react'

import { HeaderCart } from '.'

export default {
  title: 'Molecules/HeaderCart',
  component: HeaderCart,
  args: {
    count: 12
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
