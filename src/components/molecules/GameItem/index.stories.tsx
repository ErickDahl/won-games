import { Meta, StoryObj } from '@storybook/react'
import { IntlProvider } from 'react-intl'

import { GameItem } from '.'
import { gameItemMock } from './mock'

export default {
  title: 'Molecules/GameItem',
  component: GameItem
} as Meta<typeof GameItem>

const Component = (props: any) => {
  return (
    <IntlProvider locale="en">
      <GameItem {...props} />
    </IntlProvider>
  )
}

export const Default: StoryObj<typeof GameItem> = {
  render: (args) => <Component {...gameItemMock} {...args} downloadLink={undefined} paymentInfo={undefined} />
}

export const WithDownloadLink: StoryObj<typeof GameItem> = {
  render: (args) => <Component {...gameItemMock} {...args} paymentInfo={undefined} />
}

export const WithPaymentInfo: StoryObj<typeof GameItem> = {
  render: (args) => <Component {...gameItemMock} {...args} />
}
