import { Meta, StoryObj } from '@storybook/react'
import Checkbox from '.'
export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: {
    label: 'checkbox label',
    labelFor: 'action',
    labelColor: 'black'
  },
  argTypes: {
    isChecked: {
      description: 'only controls the inital state'
    }
  }
} as Meta
export const Default: StoryObj = {}
