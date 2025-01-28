import { Meta, StoryObj } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'
import { IntlProvider } from 'react-intl'
export default {
  title: 'Molecules/GameInfo',
  component: GameInfo,
  args: {
    title: 'My Game Title',
    description: 'Game Description',
    price: 210
  }
} as Meta

const DefaultRender = (props: GameInfoProps) => {
  return (
    <IntlProvider locale={'en'}>
      <GameInfo {...props} />
    </IntlProvider>
  )
}

export const Default: StoryObj<GameInfoProps> = {
  render: (args: GameInfoProps) => (
    <>
      <DefaultRender {...args} />
    </>
  )
}
