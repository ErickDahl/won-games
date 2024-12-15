import { CartIcon, MenuIcon, SearchIcon } from '@/assets/iconst'
import Logo from '../Atoms/Logo'

const Menu = () => {
  const iconSize = 24
  const iconsColor = '#fafafa'

  return (
    <menu className="relative inline-flex w-full items-center justify-between p-2">
      <MenuIcon aria-label="openMenu" size={iconSize} color={iconsColor} />
      <Logo
        className="absolute left-2/4 top-2/4 w-14 -translate-x-1/2 -translate-y-1/2"
        variant="compact"
        size="small"
      />
      <div className="flex items-center justify-center gap-5">
        <SearchIcon aria-label="Search" size={iconSize} color={iconsColor} />
        <CartIcon aria-label="openCart" size={iconSize} color={iconsColor} />
      </div>
    </menu>
  )
}
export default Menu
