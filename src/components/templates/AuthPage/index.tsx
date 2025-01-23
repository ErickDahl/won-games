'use client'
import Heading from '@/components/Atoms/Heading'
import StoreLink from '@/components/Atoms/Link'
import Logo from '@/components/Atoms/Logo'
import backgroundImage from '@/assets/authBackground.png'
import { PropsWithChildren } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import useIsMobile from '@/hooks/useIsMobile'

const authClasses = tv({
  slots: {
    base: 'flex',
    leftDiv:
      'relative z-0 h-screen w-1/2 bg-cover bg-center after:absolute after:top-0 after:h-full after:w-full after:bg-black/60',
    leftDivContent:
      'relative z-10 flex h-screen flex-col items-start justify-between p-8',
    leftDivContentText: 'flex flex-col gap-3 p-5',
    leftDivContentTextHeading: 'm-0 text-5xl font-bold',
    leftDivContentSubTitle: 'text-2xl font-light text-white',
    footerText: 'w-full text-center text-sm font-normal text-white',
    strongClass: 'font-bold text-primary',
    rightDiv:
      'flex h-screen w-full flex-col items-center justify-center bg-white p-8 px-[10%] md:w-1/2',
    rightDivLogo: 'mb-[10%]',
    rightDivContent: 'flex w-full flex-col items-start justify-center gap-4',
    rightDivActionText: 'w-full text-center text-sm'
  }
})

type AuthPageProps = VariantProps<typeof authClasses> & {
  pageType: 'signup' | 'signin'
  className?: string
}

const RenderActionText = ({ pageType }: Pick<AuthPageProps, 'pageType'>) => {
  const { rightDivActionText } = authClasses()

  const isSignup = pageType === 'signup'
  const actionText = isSignup
    ? 'Already have an account'
    : 'Don’t have an account?'
  const linkText = isSignup ? 'Sign in' : 'Sign up'
  const linkHref = isSignup ? '/sign-in' : '/sign-up'

  return (
    <p className={rightDivActionText()}>
      {actionText}{' '}
      <StoreLink
        className="text-line text-sm text-secondary underline"
        hoverEffect={false}
        href={linkHref}
      >
        {linkText}
      </StoreLink>
    </p>
  )
}

const AuthPage = ({
  pageType,
  className,
  children
}: PropsWithChildren<AuthPageProps>) => {
  const {
    base,
    leftDiv,
    rightDiv,
    strongClass,
    footerText,
    leftDivContentTextHeading,
    leftDivContentSubTitle,
    leftDivContent,
    leftDivContentText,
    rightDivLogo,
    rightDivContent
  } = authClasses()

  const isSignup = pageType === 'signup'
  const isMobile = useIsMobile(768)

  return (
    <div className={base({ className })}>
      {!isMobile && (
        <div
          className={leftDiv()}
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
          <div className={leftDivContent()}>
            <StoreLink href={'/'} hoverEffect={false}>
              <Logo variant="white" size="small" />
            </StoreLink>
            <div className={leftDivContentText()}>
              <Heading className={leftDivContentTextHeading()}>
                All your favorite games in one place
              </Heading>
              <h3 className={leftDivContentSubTitle()}>
                <strong className={strongClass()}>WON</strong> is the best and
                most complete gaming platform.
              </h3>
            </div>
            <p className={footerText()}>
              Won Games 2020 © Todos os Direitos Reservados
            </p>
          </div>
        </div>
      )}

      <div className={rightDiv()}>
        <Logo className={rightDivLogo()} variant="black" size="large" />
        <div className={rightDivContent()}>
          <Heading
            className="m-0"
            color="black"
            lineColor="secondary"
            linePosition="left"
          >
            {isSignup ? 'Sign up' : 'Sign in'}
          </Heading>
          {children}
          <RenderActionText pageType={pageType} />
        </div>
      </div>
    </div>
  )
}

export default AuthPage
