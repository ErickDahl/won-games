import { fireEvent, render, screen } from '@testing-library/react'

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '.'

describe('<Drawer />', () => {
  it('should open and close the drawer correctly from the left', () => {
    render(
      <Drawer from="left" size={50}>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>Drawer Content</DrawerContent>
        <DrawerClose>Close Drawer</DrawerClose>
      </Drawer>
    )

    const drawerContent = screen.getByText('Drawer Content')

    expect(drawerContent).toHaveClass('-translate-x-[101%]')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(screen.getByText('Open Drawer'))
    expect(drawerContent).toHaveClass('translate-x-0')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'false')

    fireEvent.click(screen.getByText('Close Drawer'))
    expect(drawerContent).toHaveClass('-translate-x-[101%]')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'true')
  })

  it('should open and close the drawer correctly from the right', () => {
    render(
      <Drawer from="right" size={50}>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>Drawer Content</DrawerContent>
        <DrawerClose>Close Drawer</DrawerClose>
      </Drawer>
    )

    const drawerContent = screen.getByText('Drawer Content')

    expect(drawerContent).toHaveClass('translate-x-[101%]')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(screen.getByText('Open Drawer'))
    expect(drawerContent).toHaveClass('translate-x-0')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'false')

    fireEvent.click(screen.getByText('Close Drawer'))
    expect(drawerContent).toHaveClass('translate-x-[101%]')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'true')
  })

  it('should open and close the drawer correctly from the top', () => {
    render(
      <Drawer from="top" size={50}>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>Drawer Content</DrawerContent>
        <DrawerClose>Close Drawer</DrawerClose>
      </Drawer>
    )

    const drawerContent = screen.getByText('Drawer Content')

    expect(drawerContent).toHaveClass('translate-y-[-101%]')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(screen.getByText('Open Drawer'))
    expect(drawerContent).toHaveClass('translate-y-0')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'false')

    fireEvent.click(screen.getByText('Close Drawer'))
    expect(drawerContent).toHaveClass('translate-y-[-101%]')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'true')
  })

  it('should open and close the drawer correctly from the bottom', () => {
    render(
      <Drawer from="bottom" size={50}>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>Drawer Content</DrawerContent>
        <DrawerClose>Close Drawer</DrawerClose>
      </Drawer>
    )

    const drawerContent = screen.getByText('Drawer Content')

    expect(drawerContent).toHaveClass('translate-y-[101%]')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(screen.getByText('Open Drawer'))
    expect(drawerContent).toHaveClass('translate-y-0')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'false')

    fireEvent.click(screen.getByText('Close Drawer'))
    expect(drawerContent).toHaveClass('translate-y-[101%]')
    expect(drawerContent).toHaveAttribute('aria-hidden', 'true')
  })

  it('should render the correct drawer width from left', () => {
    render(
      <Drawer from="left" size={50}>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>Drawer Content</DrawerContent>
        <DrawerClose>Close Drawer</DrawerClose>
      </Drawer>
    )

    const drawerContent = screen.getByText('Drawer Content')
    expect(drawerContent).toHaveStyle({ width: '50%' })
  })

  it('should render the correct drawer width from right', () => {
    render(
      <Drawer from="right" size={50}>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>Drawer Content</DrawerContent>
        <DrawerClose>Close Drawer</DrawerClose>
      </Drawer>
    )

    const drawerContent = screen.getByText('Drawer Content')
    expect(drawerContent).toHaveStyle({ width: '50%' })
  })

  it('should render the correct drawer height from bottom', () => {
    render(
      <Drawer from="bottom" size={50}>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>Drawer Content</DrawerContent>
        <DrawerClose>Close Drawer</DrawerClose>
      </Drawer>
    )

    const drawerContent = screen.getByText('Drawer Content')
    expect(drawerContent).toHaveStyle({ height: '50%' })
  })

  it('should render the correct drawer height from top', () => {
    render(
      <Drawer from="top" size={50}>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>Drawer Content</DrawerContent>
        <DrawerClose>Close Drawer</DrawerClose>
      </Drawer>
    )

    const drawerContent = screen.getByText('Drawer Content')
    expect(drawerContent).toHaveStyle({ height: '50%' })
  })
})
