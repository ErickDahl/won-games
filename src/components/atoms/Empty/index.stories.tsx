import { Meta, StoryObj } from '@storybook/react'

import { Empty } from '.'

export default {
  title: 'Atoms/Empty',
  component: Empty,
  args: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
