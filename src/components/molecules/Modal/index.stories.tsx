import { Meta, StoryObj } from '@storybook/react'

import { Modal, ModalContent, ModalTrigger } from '.'

export default {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <Modal>
      <ModalTrigger>Open</ModalTrigger>
      <ModalContent>content</ModalContent>
    </Modal>
  )
}
