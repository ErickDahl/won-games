import { Meta, StoryObj } from '@storybook/react'
import GameCardCarousel from '.'
import { cardsMock } from './mock'
import { IntlProvider } from 'react-intl'

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
