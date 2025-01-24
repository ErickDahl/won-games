import { HTMLAttributes, PropsWithChildren } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import Container from '../../Atoms/Container'
import Menu from '../../Organisms/Menu'
import Footer from '../../Molecules/Footer'

const pageTemplateClasses = tv({
  slots: {
    base: '',
    header: 'sticky top-0 z-20 mx-auto bg-mainBg/80 backdrop-blur-lg',
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
    <section className={base({ className })} {...rest}>
      <div className={header()}>
        <Container>
          <header>
            <Menu className={menuClass()} />
          </header>
        </Container>
      </div>

      {children}

      <div className={clipPathFooter()}>
        <Container>
          <Footer />
        </Container>
      </div>
    </section>
  )
}

export default PageTemplate
