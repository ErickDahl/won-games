import { Meta, StoryObj } from '@storybook/react'

import { MyCart } from '.'
import { myCartMock } from './mock'

export default {
  title: 'Pages/MyCart',
  component: MyCart,
  args: myCartMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}

export const withNoItems: StoryObj = {
  render: () => <MyCart {...myCartMock} cardList={{ items: [], total: 210 }} />
}
