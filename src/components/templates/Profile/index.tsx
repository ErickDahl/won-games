'use client'

import { PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import { tv, VariantProps } from 'tailwind-variants'

import { Container } from '@/components/atoms/Container'
import { Heading } from '@/components/atoms/Heading'
import { ActiveLinkProps, ProfileMenu } from '@/components/molecules/ProfileMenu'
import { profileMenuMock } from '@/components/molecules/ProfileMenu/mock'

const profileClasses = tv({
  slots: {
    containerClass: 'flex flex-col gap-32',
    containerContentClass: 'flex w-full flex-col justify-center md:flex-row md:gap-8',
    contentClass: 'bg-white p-4 md:w-[70%]',
    profileClass: 'h-fit md:w-[30%]'
  }
})

export type ProfileTemplateProps = VariantProps<typeof profileClasses> & {
  className?: string
}

const ProfileTemplate = ({ children, className }: PropsWithChildren<ProfileTemplateProps>) => {
  const { containerClass, containerContentClass, contentClass, profileClass } = profileClasses()
  const pathname = usePathname()

  return (
    <main>
      <Container className={containerClass({ className })} paddingMobile>
        <Heading className="m-0" linePosition="left" lineColor="secondary">
          My Profile
        </Heading>

        <div className={containerContentClass()}>
          <ProfileMenu className={profileClass()} {...profileMenuMock} activeLink={pathname as ActiveLinkProps} />
          <div className={contentClass()}>{children}</div>
        </div>
      </Container>
    </main>
  )
}

export { ProfileTemplate }
