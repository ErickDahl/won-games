// Storybook config for Button
import { Meta, StoryObj } from '@storybook/react'
import { MdAddShoppingCart } from 'react-icons/md'
import Button from '.'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width of the button'
    },
    icon: {
      control: false,
      description: 'Icon of the button'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state of the button'
    },
    click: {
      table: {
        disable: true
      }
    },
    clickAnimation: {
      control: 'boolean',
      description: 'Set the clickAnimation'
    }
  },
  args: {
    loading: false,
    clickAnimation: true,
    click: false,
    iconPosition: 'left'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Default Button',
    fullWidth: false,
    size: 'medium'
  }
}

export const WithIcon: StoryObj = {
  args: {
    children: 'Default Button',
    fullWidth: false,
    size: 'medium',
    icon: <MdAddShoppingCart size={17} />
  }
}

export const Loading: StoryObj = {
  args: {
    children: 'Default Button',
    fullWidth: false,
    size: 'medium',
    icon: <MdAddShoppingCart size={17} />,
    loading: true
  }
}

export const Disabled: StoryObj = {
  args: {
    children: 'Default Button',
    fullWidth: false,
    disabled: true,
    size: 'medium',
    icon: <MdAddShoppingCart size={17} />,
    loading: false
  }
}
