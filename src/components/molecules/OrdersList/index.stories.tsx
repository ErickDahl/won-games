import { Meta, StoryObj } from '@storybook/react'
import { IntlProvider } from 'react-intl'

import { OrdersList } from '.'
import { ordersListMock } from './mock'

export default {
  title: 'Molecules/OrdersList',
  component: OrdersList
} as Meta

const Component = (props: any) => {
  return (
    <IntlProvider locale="en">
      <OrdersList {...props} />
    </IntlProvider>
  )
}

export const Default: StoryObj = {
  render: (args) => <Component {...ordersListMock} {...args} />
}

export const NoOrders: StoryObj = {
  render: (args) => <Component {...args} {...ordersListMock} items={[]} />
}
