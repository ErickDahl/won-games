import { Meta, StoryObj } from '@storybook/react'
import { IntlProvider } from 'react-intl'

import { headingBlackMock } from '@/components/atoms/Heading/mock'
import { ShowCase } from '.'
import { cardsMock } from '../../molecules/GameCardCarousel/mock'
import { highlightMock } from '../../molecules/Highlight/mock'

export default {
  title: 'Templates/ShowCase',
  component: ShowCase,
  args: {
    title: 'Most Popular'
  },
  argTypes: {
    highlight: {
      control: false
    },
    cards: {
      control: false
    }
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

const Component = (props: any) => {
  return (
    <IntlProvider locale="en">
      <ShowCase {...props} />
    </IntlProvider>
  )
}

export const Default: StoryObj = {
  render: (args) => <Component {...args} heading={headingBlackMock} highlight={highlightMock} cards={cardsMock} />
}

export const WithoutHighlight: StoryObj = {
  render: (args) => <Component {...args} heading={headingBlackMock} cards={cardsMock} />
}

export const WithoutGames: StoryObj = {
  render: (args) => <Component {...args} heading={headingBlackMock} highlight={highlightMock} />
}
