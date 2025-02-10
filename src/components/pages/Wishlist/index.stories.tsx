import { Meta, StoryObj } from '@storybook/react'

import { Wishlist } from '.'
import { wishlistMock } from './mocks'

export default {
  title: 'Pages/Wishlist',
  component: Wishlist,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => <Wishlist {...wishlistMock} />
}
