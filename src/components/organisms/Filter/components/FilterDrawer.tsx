import { PropsWithChildren } from 'react'

import { CloseIcon, FilterIcon } from '@/assets/icons'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/molecules/Drawer'

interface FilterDrawerProps {
  className?: string
}

const FilterDrawer = ({ className, children }: PropsWithChildren<FilterDrawerProps>) => {
  return (
    <Drawer className={className} size={100}>
      <DrawerTrigger>
        <FilterIcon aria-label="openDrawer" size={30} color={'rgb(var(--color-white))'} />
      </DrawerTrigger>
      <DrawerContent className="justify-evenly bg-mainBg">
        <DrawerClose className="absolute right-0 top-3 mr-4">
          <CloseIcon color="rgb(var(--color-white))" size={30} aria-label="CloseDrawer" />
        </DrawerClose>
        {children}
      </DrawerContent>
    </Drawer>
  )
}

export { FilterDrawer }
