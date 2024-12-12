import { HTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const headingClasses = tv({
  base: `text-xlarge lg:text-xxlarge`,
  variants: {
    color: {
      white: 'text-white',
      black: 'text-black'
    },
    linePosition: {
      left: 'border-l-8 border-solid pl-3',
      bottom: 'border-b-8 border-solid pb-3'
    },
    lineColor: {
      primary: 'border-primary',
      secondary: 'border-secondary'
    }
  },
  defaultVariants: {
    color: 'white',
    lineColor: 'primary'
  }
})

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingClasses> & {
    children: ReactNode
  }

const Heading = ({
  children,
  color,
  lineColor,
  linePosition,
  className,
  ...rest
}: HeadingProps) => {
  return (
    <h2
      data-testid="heading"
      className={headingClasses({ color, lineColor, linePosition, className })}
      {...rest}
    >
      {children}
    </h2>
  )
}

export default Heading
