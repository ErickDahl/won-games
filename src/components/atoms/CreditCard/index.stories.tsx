import { Meta, StoryObj } from '@storybook/react'

import { CreditCard } from '.'
import { creditCardMock } from './mock'

export default {
  title: 'Atoms/CreditCard',
  component: CreditCard,
  args: creditCardMock
} as Meta

export const Default: StoryObj = {}
