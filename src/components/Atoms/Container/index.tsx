import { HTMLAttributes, PropsWithChildren } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const containerClasses = tv({
  slots: {
    base: 'mx-auto max-w-container lg:px-6'
  }
})

type ContainerProps = VariantProps<typeof containerClasses> &
  HTMLAttributes<HTMLDivElement> & {
    className?: string
  }

const Container = ({
  children,
  className,
  ...rest
}: PropsWithChildren<ContainerProps>) => {
  const { base } = containerClasses()

  return (
    <div className={base({ className })} {...rest}>
      {children}
    </div>
  )
}

export default Container
