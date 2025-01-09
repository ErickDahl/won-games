import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'
import BannerImage from '@/assets/hightlightBanner.png'
import highlightImageBackground from '@/assets/hightlightBannerBackground.png'

export default {
  title: 'Molecules/Highlight',
  component: Highlight,
  argTypes: {
    button: {
      control: false
    },
    image: {
      control: false
    },
    backgroundImage: {
      control: false
    }
  },
  args: {
    title: 'Highlight Title',
    subtitle: 'Highlight Subtitle',
    backgroundImage: highlightImageBackground.src,
    buttonLabel: 'Click Here',
    buttonLink: '/',
    image: BannerImage
  }
} as Meta

export const Default: StoryObj = {}
