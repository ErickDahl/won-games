import { Meta, StoryObj } from '@storybook/react'

import { Home } from '.'
import { homeMockData } from './mock'

export default {
  title: 'Pages/Home',
  component: Home
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ backgroundColor: '#06092b' }}>
      <Home {...homeMockData} />
    </div>
  )
}
