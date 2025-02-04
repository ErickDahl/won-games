import { Meta, StoryObj } from '@storybook/react'

import { Gallery } from '.'
import { galleryMock } from './mock'

export default {
  title: 'Organisms/Gallery',
  component: Gallery,
  args: galleryMock,
  argTypes: {
    plugins: {
      control: false
    }
  }
} as Meta

export const Default: StoryObj = {}
