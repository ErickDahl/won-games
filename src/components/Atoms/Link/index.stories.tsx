import { Meta, StoryObj } from '@storybook/react'
import Link from '.'
export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    children: {
      control: 'text',
      description: 'Content of the Link'
    },
    href: {
      control: false,
      description: 'Link URL'
    },
    hoverEffect: {
      control: {
        type: 'boolean'
      },
      description: 'Whether to show the hover effect or not'
    },
    hoverEffectColor: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Color of the hover effect'
    },
    border: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Color of the border'
    },
    className: {
      control: false,
      description: 'Class name'
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Link',
    href: '#',
    hoverEffect: true,
    hoverEffectColor: 'primary'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}

export const WithBorder: StoryObj = {
  args: {
    children: 'Link',
    href: '#',
    hoverEffect: false,
    border: 'primary'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}
