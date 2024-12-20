import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger
} from '@/components/Molecules/Drawer'
import StoreLink from '@/components/Atoms/Link'
import { CloseIcon, MenuIcon } from '@/assets/icons'
import Button from '@/components/Atoms/Button'

interface MenuDrawerProps {
  iconSize: number
  iconsColor: string
}

const MenuDrawer = ({ iconSize, iconsColor }: MenuDrawerProps) => {
  return (
    <Drawer haveOverlay={false} size={50}>
      <DrawerTrigger>
        <MenuIcon aria-label="openDrawer" size={iconSize} color={iconsColor} />
      </DrawerTrigger>
      <DrawerContent className="justify-evenly">
        <div className="flex flex-col gap-7">
          <StoreLink href={'#'}>Home</StoreLink>
          <StoreLink href={'#'}>Explore</StoreLink>
        </div>
        <div className="flex w-4/6 flex-col items-center gap-4">
          <Button fullWidth>Log in now</Button>
          <span>or</span>
          <StoreLink
            href={'#'}
            className="text-primary"
            border="primary"
            hoverEffect={false}
          >
            Sign up
          </StoreLink>
        </div>
        <DrawerClose className="absolute right-0 top-3 mr-4">
          <CloseIcon color="#000000" size={30} aria-label="CloseDrawer" />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}

export default MenuDrawer
