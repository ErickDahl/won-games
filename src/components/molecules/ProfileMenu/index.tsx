import { ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { StoreLink } from '@/components/atoms/Link'

const profileMenuClasses = tv({
  slots: {
    base: 'flex items-center justify-center border-b border-solid border-lightGray bg-white md:block md:border-none',
    linkClass:
      'flex flex-1 items-center justify-center gap-3 p-4 text-lg font-normal transition-all duration-100 last:border-none hover:bg-primary hover:text-white md:justify-start md:border-b md:border-solid md:border-lightGray',
    spanClass: 'hidden md:block'
  },
  variants: {
    isActive: {
      true: {
        linkClass: 'bg-primary text-white'
      }
    }
  }
})

type MenuProps = {
  icon: ReactNode
  title: string
  href: string
}

export type ActiveLinkProps = '/profile/me' | '/profile/cards' | '/profile/orders'

export type ProfileMenuProps = VariantProps<typeof profileMenuClasses> & {
  links: MenuProps[]
  activeLink?: ActiveLinkProps
  className?: string
}

const ProfileMenu = ({ links, activeLink, className }: ProfileMenuProps) => {
  const { base, linkClass, spanClass } = profileMenuClasses()

  return (
    <nav className={base({ className })}>
      {links?.map((link) => (
        <StoreLink
          className={linkClass({ isActive: activeLink === link.href })}
          title={link.title}
          key={uuidv4()}
          href={link.href}
          hoverEffect={false}
        >
          {link.icon}
          <span className={spanClass()}>{link.title}</span>
        </StoreLink>
      ))}
    </nav>
  )
}

export { ProfileMenu }
