import { Meta, StoryObj } from '@storybook/react'

import { GamesPage } from '.'
import { gamesPageMock } from './mock'

export default {
  title: 'Pages/Games',
  component: GamesPage,
  args: gamesPageMock,
  parameters: {
    nextjs: {
      appDirectory: true
    },
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {}
