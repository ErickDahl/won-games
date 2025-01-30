import { Meta, StoryObj } from '@storybook/react'
import BannerCarousel from '.'
import { bannersMock } from './mock'

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
    banners: bannersMock
  }
} as Meta
export const Default: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
      <BannerCarousel banners={[]} {...args} />
    </div>
  )
}
