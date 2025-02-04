import { render, screen } from '@testing-library/react'

import { AuthTemplate } from '.'

describe('<AuthTemplate />', () => {
  it('should render all components and children', () => {
    render(
      <AuthTemplate pageType={'signup'}>
        <input type="text" />
      </AuthTemplate>
    )

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
