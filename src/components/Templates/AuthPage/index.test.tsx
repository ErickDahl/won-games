import { render, screen } from '@testing-library/react'
import AuthPage from '.'

describe('<AuthPage />', () => {
  it('should render all components and children', () => {
    render(
      <AuthPage pageType={'signup'}>
        <input type="text" />
      </AuthPage>
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
