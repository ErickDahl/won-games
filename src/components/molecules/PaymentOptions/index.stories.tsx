import { Meta, StoryObj } from '@storybook/react'

import { PaymentOptions } from '.'
import { paymentOptionMock } from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: paymentOptionMock,
  argTypes: {
    cards: {
      control: false
    },
    handlePayment: {
      control: false,
      action: 'clicked'
    }
  }
} as Meta

export const Default: StoryObj = {}
