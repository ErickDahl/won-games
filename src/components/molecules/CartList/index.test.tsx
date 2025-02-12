import { render, screen } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

import { CartList, CartListProps } from '.'
import { cartListMock } from './mock'

const Component = (props: CartListProps) => {
  return (
    <IntlProvider locale={'en'}>
      <CartList {...props} />
    </IntlProvider>
  )
}

describe('<CartList />', () => {
  it('should render the cart list', () => {
    render(<Component {...cartListMock} />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('$420.00')).toHaveClass('text-primary')
  })
})
