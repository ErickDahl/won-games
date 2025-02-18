import { Meta, StoryObj } from '@storybook/react'

import { ProfileMenu } from '.'
import { profileMenuMock } from './mock'

export default {
  title: 'Molecules/ProfileMenu',
  component: ProfileMenu,
  args: {
    links: profileMenuMock.links,
    isActive: {
      control: false
    }
  }
} as Meta

export const Default: StoryObj = {}
