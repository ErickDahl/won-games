import { Meta, StoryObj } from '@storybook/react'

import { Ribbon } from '@/components/atoms/Ribbon'
import { Banner } from '.'
import { bannerMock } from './mock'

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
  args: bannerMock
}

export const WithRibbon: StoryObj = {
  render: () => <Banner {...bannerMock} ribbon={<Ribbon backGroundColor="secondary">teste</Ribbon>} />
}
