'use client'

import { HTMLAttributes, PropsWithChildren, useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { tv, VariantProps } from 'tailwind-variants'

import { Container } from '@/components/atoms/Container'
import { Footer } from '../../molecules/Footer'
import { Menu } from '../../organisms/Menu'

const pageTemplateClasses = tv({
  slots: {
    base: 'flex min-h-screen w-full flex-col',
    header: 'sticky top-0 z-20 transition-all duration-500',
    menuClass: 'mt-4',
    clipPathFooter:
      'm-0 max-w-full bg-lightBg pb-4 pt-16 [clip-path:polygon(0_5%,_100%_0%,_100%_100%,_0_100%)] lg:[clip-path:polygon(0_15%,_100%_0%,_100%_100%,_0_100%)]'
  }
})

type PageTemplateProps = VariantProps<typeof pageTemplateClasses> &
  HTMLAttributes<HTMLDivElement> & {
    className?: string
  }

const PageTemplate = ({
  children,
  className,
  ...rest
}: PropsWithChildren<PageTemplateProps>) => {
  const { base, header, menuClass, clipPathFooter } = pageTemplateClasses()

  const [isScrolled, setIsScrolled] = useState(false)
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    setLocale(navigator.language)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <IntlProvider locale={locale} defaultLocale="en">
      <section className={base({ className })} {...rest}>
        <div
          className={`${header()} ${isScrolled ? 'bg-mainBg/80 backdrop-blur-lg' : 'bg-mainBg/0'}`}
        >
          <Container className="my-0">
            <header>
              <Menu className={menuClass()} />
            </header>
          </Container>
        </div>

        <div className="flex-1">{children}</div>

        <div className={clipPathFooter()}>
          <Container className="my-0">
            <Footer />
          </Container>
        </div>
      </section>
    </IntlProvider>
  )
}

export { PageTemplate }
