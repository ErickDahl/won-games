import { Meta, StoryObj } from '@storybook/react'

import { Badge } from '.'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    children: { control: 'text' }
  }
} as Meta<typeof Badge>

export const Default: StoryObj<typeof Badge> = {
  args: {
    children: '123'
  }
}
