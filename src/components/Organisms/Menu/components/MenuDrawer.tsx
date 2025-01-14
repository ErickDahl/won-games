import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger
} from '@/components/Molecules/Drawer'
import StoreLink from '@/components/Atoms/Link'
import { CloseIcon, MenuIcon } from '@/assets/icons'
import Button from '@/components/Atoms/Button'
import { DefaultLinks, LoggedInLinks } from '..'

interface MenuDrawerProps {
  iconSize: number
  iconsColor: string
  isLogged?: boolean
  className?: string
}

const AuthButtons = () => (
  <div className="flex w-4/6 flex-col items-center gap-4">
    <Button fullWidth>Log in now</Button>
    <span>or</span>
    <StoreLink
      href={'#'}
      className="text-base text-primary"
      border="primary"
      hoverEffect={false}
    >
      Sign up
    </StoreLink>
  </div>
)

const renderLoggedMenu = (isLogged: boolean) => (
  <>
    <div className="flex flex-col gap-7">
      <DefaultLinks />
      {isLogged && <LoggedInLinks />}
    </div>
    {!isLogged && <AuthButtons />}
  </>
)

const MenuDrawer: React.FC<MenuDrawerProps> = ({
  iconSize,
  iconsColor,
  className,
  isLogged = false
}: MenuDrawerProps) => {
  return (
    <Drawer className={className} haveOverlay={false} size={50}>
      <DrawerTrigger>
        <MenuIcon aria-label="openDrawer" size={iconSize} color={iconsColor} />
      </DrawerTrigger>
      <DrawerContent className="justify-evenly">
        {renderLoggedMenu(isLogged)}
        <DrawerClose className="absolute right-0 top-3 mr-4">
          <CloseIcon
            color="var(--color-black)"
            size={30}
            aria-label="CloseDrawer"
          />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}

export default MenuDrawer
