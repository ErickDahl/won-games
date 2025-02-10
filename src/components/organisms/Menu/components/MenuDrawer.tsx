import { CloseIcon, MenuIcon } from '@/assets/icons'
import { StoreLink } from '@/components/atoms/Link'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/molecules/Drawer'
import { DefaultLinks, LoggedInLinks } from '..'

interface MenuDrawerProps {
  iconSize: number
  iconsColor: string
  isLogged?: boolean
  className?: string
}

const AuthButtons = () => (
  <div className="flex w-4/6 flex-col items-center gap-4">
    <StoreLink className="w-full" href={'/sign-in'} hoverEffect={false} button>
      Log in now
    </StoreLink>
    <span>or</span>
    <StoreLink href={'/sign-up'} className="text-base text-primary" border borderColor="primary" hoverEffect={false}>
      Sign up
    </StoreLink>
  </div>
)

const renderLoggedMenu = (isLogged: boolean) => (
  <>
    <div className="flex flex-col gap-7">
      <DefaultLinks className="text-black" />
      {isLogged && <LoggedInLinks className="text-black" />}
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
    <Drawer className={className} size={75}>
      <DrawerTrigger>
        <MenuIcon aria-label="openDrawer" size={iconSize} color={iconsColor} />
      </DrawerTrigger>
      <DrawerContent className="justify-evenly">
        {renderLoggedMenu(isLogged)}
        <DrawerClose className="absolute right-0 top-3 mr-4">
          <CloseIcon color="rgb(var(--color-black))" size={30} aria-label="CloseDrawer" />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}

export { MenuDrawer }
