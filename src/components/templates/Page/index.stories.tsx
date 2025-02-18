import { Meta, StoryObj } from '@storybook/react'

import { PageTemplate } from '.'

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
