import { Meta, StoryObj } from '@storybook/react'

import { Highlight } from '.'
import { highlightMock } from './mock'

export default {
  title: 'Molecules/Highlight',
  component: Highlight,
  argTypes: {
    button: {
      control: false
    },
    image: {
      control: false
    },
    backgroundImage: {
      control: false
    }
  },
  args: highlightMock
} as Meta

export const Default: StoryObj = {}
