import { Meta, StoryObj } from '@storybook/react'

import { WishListIcon } from '@/assets/icons'
import { TextField } from '.'

export default {
  title: 'Atoms/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      control: false
    }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}

export const WithIconLeft: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} icon={<WishListIcon />} />
    </div>
  )
}

export const WithIconRight: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField iconPosition="right" {...args} icon={<WishListIcon />} />
    </div>
  )
}

export const WithError: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField error errorMessage="error on this input" iconPosition="right" {...args} icon={<WishListIcon />} />
    </div>
  )
}
