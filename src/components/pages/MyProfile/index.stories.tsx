import { Meta, StoryObj } from '@storybook/react'

import { MyProfile } from '.'

export default {
  title: 'Pages/MyProfile',
  component: MyProfile,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
