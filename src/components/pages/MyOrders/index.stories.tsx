import { Meta, StoryObj } from '@storybook/react'

import { MyOrders } from '.'
import { myOrdersMock } from './mock'

export default {
  title: 'Pages/MyOrders',
  component: MyOrders,
  args: myOrdersMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}

export const NoOrders: StoryObj = {
  render: () => <MyOrders items={[]} />
}
