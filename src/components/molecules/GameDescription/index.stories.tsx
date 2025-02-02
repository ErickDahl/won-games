import { Meta, StoryObj } from '@storybook/react'

import { GameDescription } from '.'
import { gameDescriptionMock } from './mock'

export default {
  title: 'Molecules/GameDescription',
  component: GameDescription,
  args: gameDescriptionMock
} as Meta

export const Default: StoryObj = {}
