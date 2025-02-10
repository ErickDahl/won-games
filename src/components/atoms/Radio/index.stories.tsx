import { Meta, StoryObj } from '@storybook/react'

import { Radio } from '.'

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'changed' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => (
    <>
      <div
        style={{
          padding: 10,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Radio label="first" labelFor="first" id="first" value="first" name="radio" defaultChecked {...args} />
      </div>
      <div
        style={{
          padding: 10,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Radio label="second" labelFor="second" id="second" name="radio" value="second" {...args} />
      </div>
      <div
        style={{
          padding: 10,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <Radio label="third" labelFor="third" id="third" name="radio" value="third" {...args} />
      </div>
    </>
  )
}
