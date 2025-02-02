import { Meta, StoryObj } from '@storybook/react'
import { AuthPage } from '.'

export default {
  title: 'Templates/AuthPage',
  component: AuthPage
} as Meta

export const Default: StoryObj = {
  render: () => <AuthPage pageType="signin">children</AuthPage>
}
