import { Meta, StoryObj } from '@storybook/react'
import BannerImage from '@/assets/banner.png'
import Banner from '.'
import Ribbon from '@/components/atoms/Ribbon'

export default {
  title: 'Molecules/Banner',
  component: Banner,
  argTypes: {
    img: {
      control: false,
      description: 'image url'
    },
    ribbon: {
      control: false
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

export const WithRibbon: StoryObj = {
  args: {
    img: BannerImage,
    ribbon: <Ribbon backGroundColor="secondary">teste</Ribbon>,
    title: 'Banner title',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Button label',
    buttonLink: '#'
  }
}
