import { Meta, StoryObj } from '@storybook/react'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '.'
import { CloseIcon } from '@/assets/icons'

export default {
  title: 'Atoms/Drawer',
  component: Drawer,
  argTypes: {
    children: {
      control: false,
      description: 'Children of the drawer'
    },
    size: {
      control: 'number',
      description: 'How much of the drawer cover the screen'
    },
    from: {
      control: 'radio',
      options: ['left', 'right', 'top', 'bottom'],
      description: 'Direction from which the drawer will appear'
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '1rem',
          maxWidth: '40vw',
          margin: 'auto',
          height: '50vh'
        }}
      >
        <Story />
      </div>
    )
  ]
} as Meta

const Template: StoryObj = {
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <DrawerContent>
        <p>Drawer content goes here</p>
        <DrawerClose className="absolute right-0 top-3 mr-4 cursor-pointer">
          <CloseIcon color="#000000" size={30} />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}

export const Default: StoryObj = {
  ...Template,
  args: {
    size: 50,
    from: 'left'
  }
}

export const RightDrawer: StoryObj = {
  ...Template,
  args: {
    size: 50,
    from: 'right'
  }
}

export const BottomDrawer: StoryObj = {
  ...Template,
  args: {
    size: 50,
    from: 'bottom'
  }
}

export const LargeDrawer: StoryObj = {
  ...Template,
  args: {
    size: 90,
    from: 'left'
  }
}
