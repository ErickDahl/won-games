import { Meta, StoryObj } from '@storybook/react'

import { Dropdown, DropdownContent, DropdownTrigger } from '.'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <Dropdown>
      <DropdownTrigger className="text-white">click</DropdownTrigger>
      <DropdownContent className="left-3 top-12">test</DropdownContent>
    </Dropdown>
  )
}
