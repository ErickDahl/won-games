import { Meta, StoryObj } from '@storybook/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '.'

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: () => (
    <Tabs defaultTab="Windows">
      <TabsList>
        <TabsTrigger value="Windows">Windows</TabsTrigger>
        <TabsTrigger value="MacOS">MacOS</TabsTrigger>
      </TabsList>
      <TabsContent value="Windows">Windows</TabsContent>
      <TabsContent value="MacOS">MacOS</TabsContent>
    </Tabs>
  )
}
