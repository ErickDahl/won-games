import { Meta, StoryObj } from '@storybook/react'
import GameDetails from '.'
import { IntlProvider } from 'react-intl'
import { gameDetailsMock } from './mock'
export default {
  title: 'Organisms/GameDetails',
  component: GameDetails,
  args: gameDetailsMock,
  argTypes: {
    date: {
      control: 'date'
    },
    platforms: {
      control: 'check',
      options: ['Windows', 'Mac', 'Linux']
    },
    genres: {
      control: 'check',
      options: ['Action', 'Adventure']
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => (
    <IntlProvider locale={'en'}>
      <GameDetails {...args} />
    </IntlProvider>
  )
}
