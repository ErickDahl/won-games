import { Meta, StoryObj } from '@storybook/react'

import { AuthTemplate } from '.'

export default {
  title: 'Templates/AuthPage',
  component: AuthTemplate
} as Meta

export const Default: StoryObj = {
  render: () => <AuthTemplate pageType="signin">children</AuthTemplate>
}
