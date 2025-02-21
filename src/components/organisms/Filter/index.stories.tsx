import { Meta, StoryObj } from '@storybook/react'

import { Filter } from '.'
import { filterMock } from './mock'

export default {
  title: 'Organisms/Filter',
  component: Filter,
  args: filterMock
} as Meta

export const Default: StoryObj = {}
