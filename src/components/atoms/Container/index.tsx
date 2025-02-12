import { HTMLAttributes, PropsWithChildren } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const containerClasses = tv({
  slots: {
    base: 'mx-auto my-8 max-w-container lg:px-6'
  },
  variants: {
    paddingMobile: {
      true: {
        base: 'px-6'
      }
    }
  }
})

type ContainerProps = VariantProps<typeof containerClasses> &
  HTMLAttributes<HTMLDivElement> & {
    className?: string
  }

const Container = ({ paddingMobile, children, className, ...rest }: PropsWithChildren<ContainerProps>) => {
  const { base } = containerClasses()

  return (
    <section className={base({ className, paddingMobile })} {...rest}>
      {children}
    </section>
  )
}

export { Container }
