import { Meta, StoryObj } from '@storybook/react'
import { IntlProvider } from 'react-intl'

import { GameCardCarousel } from '.'
import { cardsMock } from './mock'

export default {
  title: 'Molecules/GameCardCarousel',
  component: GameCardCarousel,
  args: {
    cards: cardsMock
  },
  argTypes: {
    cards: {
      control: false
    }
  }
} as Meta
export const Default: StoryObj = {
  render: (args) => (
    <IntlProvider locale={'en'}>
      <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
        <GameCardCarousel cards={[]} {...args} />
      </div>
    </IntlProvider>
  )
}
