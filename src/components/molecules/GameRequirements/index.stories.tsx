import { Meta, StoryObj } from '@storybook/react'

import { GameRequirements } from '.'
import { gameRequirementsMock } from './mock'

export default {
  title: 'Molecules/GameRequirements',
  component: GameRequirements,
  args: gameRequirementsMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
