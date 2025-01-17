import { Meta, StoryObj } from '@storybook/react'
import BannerImage from '@/assets/banner.png'
import BannerCarousel from '.'
export default {
  title: 'Molecules/BannerCarousel',
  component: BannerCarousel,
  argTypes: {
    banners: {
      control: false
    },
    className: {
      control: false
    }
  },
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
} as Meta
export const Default: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
      <BannerCarousel banners={[]} {...args} />
    </div>
  )
}
