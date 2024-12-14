import { Meta, StoryObj } from '@storybook/react'
import Heading from '.'

const meta: Meta = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    color: {
      control: 'radio',
      options: ['white', 'black'],
      description: 'Text color for the heading'
    },
    lineColor: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Color of the decorative line'
    },
    lineBottomColor: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Color of the decorative line'
    },
    linePosition: {
      control: 'radio',
      options: ['left', 'bottom'],
      description: 'Position of the decorative line'
    },
    children: {
      control: 'text',
      description: 'Content of the heading'
    }
  }
}

export default meta

type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Default Heading',
    color: 'black',
    lineColor: 'primary',
    linePosition: 'left',
    lineBottomColor: 'primary'
  }
}
