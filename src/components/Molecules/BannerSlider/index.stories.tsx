import { Meta, StoryObj } from '@storybook/react'
import BannerImage from '@/assets/banner.png'
import BannerSlider from '.'
export default {
  title: 'Molecules/BannerSlider',
  component: BannerSlider,
  argTypes: {
    banners: {
      control: false
    },
    className: {
      control: false
    }
  }
} as Meta
export const Default: StoryObj = {
  args: {
    banners: [
      {
        img: BannerImage,
        title: 'Banner Title',
        subtitle: 'Banner Subtitle',
        buttonLabel: 'Click Here',
        buttonLink: '/'
      },
      {
        img: BannerImage,
        title: 'Banner Title',
        subtitle: 'Banner Subtitle',
        buttonLabel: 'Click Here',
        buttonLink: '/'
      }
    ]
  }
}
