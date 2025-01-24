import { Meta, StoryObj } from '@storybook/react'
import ShowCase from '.'
import highlightMock from '../../Molecules/Highlight/mock'
import cardsMock from '../../Molecules/GameCardCarousel/mock'
import { headingBlackMock } from '@/components/Atoms/Heading/mock'

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

export const Default: StoryObj = {
  render: (args) => (
    <ShowCase
      {...args}
      heading={headingBlackMock}
      highlight={highlightMock}
      cards={cardsMock}
    />
  )
}

export const WithoutHighlight: StoryObj = {
  render: (args) => (
    <ShowCase {...args} heading={headingBlackMock} cards={cardsMock} />
  )
}

export const WithoutGames: StoryObj = {
  render: (args) => (
    <ShowCase {...args} heading={headingBlackMock} highlight={highlightMock} />
  )
}
