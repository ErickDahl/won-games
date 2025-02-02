import { fireEvent, render, screen } from '@testing-library/react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '.'

describe('<Tabs />', () => {
  const Component = () => (
    <Tabs defaultTab="Windows">
      <TabsList>
        <TabsTrigger value="Windows">Windows</TabsTrigger>
        <TabsTrigger value="MacOS">MacOS</TabsTrigger>
      </TabsList>
      <TabsContent value="Windows">Windows Content</TabsContent>
      <TabsContent value="MacOS">MacOS Content</TabsContent>
    </Tabs>
  )

  it('should render the Tabs component correctly', () => {
    render(<Component />)
    expect(screen.getByText('Windows')).toBeInTheDocument()
    expect(screen.getByText('MacOS')).toBeInTheDocument()
    expect(screen.getByText('Windows Content')).toBeInTheDocument()
    expect(screen.queryByText('MacOS Content')).toHaveClass('opacity-0')
  })

  it('should switch tabs when clicked', () => {
    render(<Component />)

    fireEvent.click(screen.getByText('MacOS'))

    expect(screen.getByText('MacOS Content')).toBeInTheDocument()
    expect(screen.queryByText('Windows Content')).toHaveClass('opacity-0')
  })

  it('should highlight the active tab', () => {
    render(<Component />)

    const windowsTab = screen.getByText('Windows')
    const macosTab = screen.getByText('MacOS')

    expect(windowsTab).toHaveAttribute('data-active', 'true')
    expect(macosTab).toHaveAttribute('data-active', 'false')

    fireEvent.click(macosTab)
    expect(windowsTab).toHaveAttribute('data-active', 'false')
    expect(macosTab).toHaveAttribute('data-active', 'true')
  })
})
