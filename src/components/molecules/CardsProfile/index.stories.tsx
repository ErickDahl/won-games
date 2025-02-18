import { Meta, StoryObj } from '@storybook/react'

import { CardsProfile } from '.'
import { cardsProfileMock } from './mock'

export default {
  title: ' Molecules/CardsProfile',
  component: CardsProfile,
  args: cardsProfileMock
} as Meta

export const Default: StoryObj = {}
