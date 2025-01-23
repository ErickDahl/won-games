import { Meta, StoryObj } from '@storybook/react'
import Auth from '.'
export default {
  title: 'Templates/Auth',
  component: Auth
} as Meta
export const Default: StoryObj = {
  render: () => (
    <Auth onClick={() => {}} pageType="signin">
      children
    </Auth>
  )
}
