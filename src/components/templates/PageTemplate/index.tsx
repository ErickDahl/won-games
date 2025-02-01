'use client'
import { HTMLAttributes, PropsWithChildren } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import Container from '@/components/atoms/Container'
import Menu from '../../organisms/Menu'
import Footer from '../../molecules/Footer'
import { IntlProvider } from 'react-intl'

const pageTemplateClasses = tv({
  slots: {
    base: 'flex min-h-screen w-full flex-col',
    header: 'sticky top-0 z-20 bg-mainBg/80 backdrop-blur-lg',
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

  return (
    <IntlProvider locale={navigator.language} defaultLocale="en">
      <section className={base({ className })} {...rest}>
        <div className={header()}>
          <Container className="m-0">
            <header>
              <Menu className={menuClass()} />
            </header>
          </Container>
        </div>

        <div className="flex-1">{children}</div>

        <div className={clipPathFooter()}>
          <Container className="m-0">
            <Footer />
          </Container>
        </div>
      </section>
    </IntlProvider>
  )
}

export default PageTemplate
