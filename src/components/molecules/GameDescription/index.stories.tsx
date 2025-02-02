import { Meta, StoryObj } from '@storybook/react'
import { gameDescriptionMock } from './mock'
import { GameDescription } from '.'

export default {
  title: 'Molecules/GameDescription',
  component: GameDescription,
  args: gameDescriptionMock
} as Meta

export const Default: StoryObj = {}
