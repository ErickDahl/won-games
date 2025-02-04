import { Meta, StoryObj } from '@storybook/react'

import { GamePage } from '.'
import { gamePageMock } from './mock'

export default {
  title: 'Pages/Game',
  component: GamePage,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div>
      <GamePage {...gamePageMock} />
    </div>
  )
}
