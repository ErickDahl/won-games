import { Meta, StoryObj } from '@storybook/react'

import { Menu } from '.'

export default {
  title: 'Organisms/Menu',
  component: Menu,
  args: {
    isLogged: false
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
