import { Meta, StoryObj } from '@storybook/react'

import { Logo } from '.'

export default {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['black', 'compact', 'white'],

      description: 'Variant of the logo'
    },
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Size of the button'
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    variant: 'black',
    size: 'small'
  }
}
