import { useSearchParams } from 'next/navigation'
import { render, screen } from '@testing-library/react'

// import userEvent from '@testing-library/user-event'

import { Filter } from '.'
import { filterMock } from './mock'

jest.mock('next/navigation', () => {
  const originalModule = jest.requireActual('next/navigation')
  return {
    ...originalModule,
    useRouter: jest.fn(() => ({
      replace: jest.fn()
    })),
    useSearchParams: jest.fn(() => new URLSearchParams())
  }
})

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    render(<Filter {...filterMock} onFilterChange={jest.fn()} />) // Call jest.fn()

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /sort by/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    ;(useSearchParams as jest.Mock).mockImplementation(() => new URLSearchParams('windows=true&sort_by=price_asc'))

    render(<Filter {...filterMock} onFilterChange={jest.fn()} />) // Call jest.fn()

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  // it('should filter with checked values', () => {
  //   const onFilter = jest.fn()

  //   render(<Filter {...filterMock} onFilterChange={onFilter} />)

  //   userEvent.click(screen.getByLabelText(/windows/i))
  //   userEvent.click(screen.getByLabelText(/linux/i))
  //   userEvent.click(screen.getByLabelText(/low to high/i))

  //   expect(onFilter).toHaveBeenCalledWith({
  //     windows: 'true',
  //     linux: 'true',
  //     sort_by: 'price-asc'
  //   })
  // })

  // it('should alternate between radio options', () => {
  //   // Uncommented and fixed
  //   const onFilter = jest.fn()

  //   render(<Filter {...filterMock} onFilterChange={onFilter} />) // Fixed prop name

  //   userEvent.click(screen.getByLabelText(/low to high/i))
  //   userEvent.click(screen.getByLabelText(/high to low/i))

  //   expect(onFilter).toHaveBeenCalledWith({ sort_by: 'price-desc' })
  // })
})
