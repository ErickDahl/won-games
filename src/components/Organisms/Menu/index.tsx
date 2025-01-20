'use client'

import { CartIcon, SearchIcon } from '@/assets/icons'
import Logo from '@/components/Atoms/Logo'
import MenuDrawer from './components/MenuDrawer'
import useIsMobile from '@/hooks/useIsMobile'
import { tv, VariantProps } from 'tailwind-variants'
import StoreLink from '@/components/Atoms/Link'
import Button from '@/components/Atoms/Button'
import { HTMLAttributes } from 'react'

const MenuClasses = tv({
  slots: {
    menu: 'relative inline-flex w-full items-center justify-between p-4',
    logo: '',
    icons: 'flex items-center justify-center gap-5',
    links: 'flex items-center justify-center gap-5',
    logoLinks: 'flex items-center justify-center gap-8',
    storeLinks: 'text-base font-medium text-white'
  },
  variants: {
    isMobile: {
      true: {
        logo: 'absolute left-2/4 top-2/4 w-14 -translate-x-1/2 -translate-y-1/2'
      }
    }
  }
})

type MenuProps = VariantProps<typeof MenuClasses> &
  HTMLAttributes<HTMLMenuElement> & {
    isLogged?: boolean
  }

const iconSize = 24
const iconsColor = 'rgb(var(--color-white))'

export const LoggedInLinks = ({ className }: { className?: string }) => {
  const { storeLinks } = MenuClasses()

  return (
    <>
      <StoreLink className={storeLinks({ className })} href={'#'}>
        My account
      </StoreLink>
      <StoreLink className={storeLinks({ className })} href={'#'}>
        Wishlist
      </StoreLink>
    </>
  )
}

export const DefaultLinks = ({ className }: { className?: string }) => {
  const { storeLinks } = MenuClasses()

  return (
    <>
      <StoreLink className={storeLinks({ className })} href={'#'}>
        Home
      </StoreLink>
      <StoreLink className={storeLinks({ className })} href={'#'}>
        Explore
      </StoreLink>
    </>
  )
}

const MenuIcons = ({
  className,
  isMobile
}: {
  className?: string
  isMobile: boolean
}) => (
  <div className={className}>
    <SearchIcon aria-label="Search" size={iconSize} color={iconsColor} />
    <CartIcon aria-label="openCart" size={iconSize} color={iconsColor} />
    {!isMobile && <Button onClick={() => console.log('teste')}>Sign in</Button>}
  </div>
)

const MenuLinks = ({
  isLogged,
  className
}: {
  isLogged?: boolean
  className?: string
}) => (
  <div className={className}>
    <DefaultLinks />
    {isLogged && <LoggedInLinks />}
  </div>
)

const Menu = ({ isLogged, className, ...rest }: MenuProps) => {
  const isMobile = useIsMobile()
  const { logo, menu, logoLinks, links, icons } = MenuClasses({ isMobile })

  return (
    <menu className={menu({ className })} {...rest}>
      {isMobile && (
        <MenuDrawer
          isLogged={isLogged}
          iconSize={iconSize}
          iconsColor={iconsColor}
        />
      )}
      <div className={logoLinks()}>
        <Logo
          className={logo()}
          variant={isMobile ? 'compact' : 'white'}
          size={'small'}
        />
        {!isMobile && <MenuLinks className={links()} isLogged={isLogged} />}
      </div>
      <MenuIcons className={icons()} isMobile={isMobile} />
    </menu>
  )
}

export default Menu
