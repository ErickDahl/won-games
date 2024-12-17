import { Meta, StoryObj } from '@storybook/react'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '.'

export default {
  title: 'Atoms/Drawer',
  component: Drawer,
  argTypes: {
    children: {
      control: false,
      description: 'Children of the drawer'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <Drawer>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <p>Drawer content goes here</p>
        <DrawerClose>Close Drawer</DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}
