import { Meta, StoryObj } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Molecules/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    paddings: {
      values: [{ name: 'No Padding', value: '0' }],
      default: 'No Padding'
    }
  }
} as Meta

export const Default: StoryObj = {}
