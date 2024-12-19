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
