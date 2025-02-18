import React from 'react'

import { CreditCardIcon, ListIcon, SignOutIcon, UserIcon } from '@/assets/icons'
import { ProfileMenuProps } from '.'

const profileMenuMock: ProfileMenuProps = {
  links: [
    {
      title: 'My profile',
      href: '/profile/me',
      icon: React.createElement(UserIcon)
    },
    {
      title: 'My cards',
      href: '/profile/cards',
      icon: React.createElement(CreditCardIcon)
    },
    {
      title: 'My orders',
      href: '/profile/orders',
      icon: React.createElement(ListIcon)
    },
    {
      title: 'Sign out',
      href: '/logout',
      icon: React.createElement(SignOutIcon)
    }
  ]
}

export { profileMenuMock }
