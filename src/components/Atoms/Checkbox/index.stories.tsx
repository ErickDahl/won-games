import { Meta, StoryObj } from '@storybook/react'
import Checkbox from '.'
export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: 'checkbox label',
    labelFor: 'action',
    labelColor: 'black'
  }
} as Meta
export const Default: StoryObj = {}
