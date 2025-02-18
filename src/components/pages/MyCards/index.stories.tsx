import { Meta, StoryObj } from '@storybook/react'

import { MyCards } from '.'
import { myCardsMock } from './mock'

export default {
  title: 'Pages/MyCards',
  component: MyCards,
  args: myCardsMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
