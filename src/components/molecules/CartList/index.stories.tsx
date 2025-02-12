import { Meta, StoryObj } from '@storybook/react'
import { IntlProvider } from 'react-intl'

import { CartList } from '.'
import { cartListMock } from './mock'

export default {
  title: 'Molecules/CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

const Component = (props: any) => {
  return (
    <IntlProvider locale="en">
      <CartList {...props} />
    </IntlProvider>
  )
}

export const Default: StoryObj = {
  render: (args) => <Component {...args} {...cartListMock} />
}
