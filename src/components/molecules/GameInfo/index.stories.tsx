import { Meta, StoryObj } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'
import { IntlProvider } from 'react-intl'
import { gameInfoMock } from './mock'

export default {
  title: 'Molecules/GameInfo',
  component: GameInfo,
  args: gameInfoMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
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
