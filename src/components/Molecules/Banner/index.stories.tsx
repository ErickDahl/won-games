import { Meta, StoryObj } from '@storybook/react'
import BannerImage from '@/assets/banner.png'
import Banner from '.'
export default {
  title: 'Molecules/Banner',
  component: Banner,
  argTypes: {
    img: {
      control: false,
      description: 'image url'
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    img: BannerImage,
    title: 'Banner title',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Button label',
    buttonLink: '#'
  }
}
