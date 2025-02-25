import { Meta, StoryObj } from '@storybook/react'

import { Filter } from '.'
import { filterMock } from './mock'

export default {
  title: 'Organisms/Filter',
  component: Filter,
  args: filterMock,
  parameters: {
    nextjs: {
      appDirectory: true
    },
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => <Filter filters={filterMock.filters} {...args} />
}
