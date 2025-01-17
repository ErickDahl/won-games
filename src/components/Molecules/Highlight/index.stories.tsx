import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'
import highlight from './mock'

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
  args: {
    ...highlight
  }
} as Meta

export const Default: StoryObj = {}
