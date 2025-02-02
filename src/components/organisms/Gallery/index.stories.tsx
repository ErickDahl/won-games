import { Meta, StoryObj } from '@storybook/react'
import { Gallery } from '.'
import { galleryMock } from './mock'

export default {
  title: 'Organisms/Gallery',
  component: Gallery,
  args: galleryMock
} as Meta

export const Default: StoryObj = {}
