import { Meta, StoryObj } from '@storybook/react'

import { ProfileTemplate } from '.'

export default {
  title: 'Templates/ProfileTemplate',
  component: ProfileTemplate,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
