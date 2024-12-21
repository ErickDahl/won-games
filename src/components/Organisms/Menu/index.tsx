'use client'

import { CartIcon, SearchIcon } from '@/assets/icons'
import Logo from '@/components/Atoms/Logo'
import MenuDrawer from './components/MenuDrawer'
import useIsMobile from '@/hooks/useIsMobile'
import { tv, VariantProps } from 'tailwind-variants'
import StoreLink from '@/components/Atoms/Link'
import Button from '@/components/Atoms/Button'

const MenuClasses = tv({
  slots: {
    menu: 'relative inline-flex w-full items-center justify-between p-2',
    logo: '',
    icons: 'flex items-center justify-center gap-5',
    links: 'flex items-center justify-center gap-5',
    logoLinks: 'flex items-center justify-center gap-8'
  },
  variants: {
    isMobile: {
      true: {
        logo: 'absolute left-2/4 top-2/4 w-14 -translate-x-1/2 -translate-y-1/2'
      }
    }
  }
})

type MenuProps = VariantProps<typeof MenuClasses> & {
  isLogged?: boolean
}

const iconSize = 24
const iconsColor = '#fafafa'

export const LoggedInLinks = () => (
  <>
    <StoreLink href={'#'}>My account</StoreLink>
    <StoreLink href={'#'}>Wishlist</StoreLink>
  </>
)

export const DefaultLinks = () => (
  <>
    <StoreLink href={'#'}>Home</StoreLink>
    <StoreLink href={'#'}>Explore</StoreLink>
  </>
)

const MenuIcons = ({ className }: { className?: string }) => (
  <div className={className}>
    <SearchIcon aria-label="Search" size={iconSize} color={iconsColor} />
    <CartIcon aria-label="openCart" size={iconSize} color={iconsColor} />
    <Button>Sign in</Button>
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

const Menu = ({ isLogged }: MenuProps) => {
  const isMobile = useIsMobile()
  const { logo, menu, logoLinks, links, icons } = MenuClasses({ isMobile })

  return (
    <menu className={menu()}>
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
      <MenuIcons className={icons()} />
    </menu>
  )
}

export default Menu
