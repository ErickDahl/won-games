import { Meta, StoryObj } from '@storybook/react'

import { Ribbon } from '.'

export default {
  title: 'Atoms/Ribbon',
  component: Ribbon
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Best Seller'
  }
}
