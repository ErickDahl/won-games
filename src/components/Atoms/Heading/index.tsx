import { HTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const headingClasses = tv({
  base: 'ml-[4.8%] inline-block cursor-default text-3xl',
  variants: {
    color: {
      white: 'text-white',
      black: 'text-black'
    },
    lineColor: {
      primary: 'border-primary',
      secondary: 'border-secondary'
    },
    linePosition: {
      left: 'border-l-7 border-solid pl-3',
      bottom:
        'relative after:absolute after:-bottom-2 after:left-0 after:w-5 after:border-b-5 after:border-solid after:content-[""]'
    },
    lineBottomColor: {
      primary: 'after:border-primary',
      secondary: 'after:border-secondary'
    }
  },
  defaultVariants: {
    color: 'white',
    lineColor: 'primary',
    lineBottomColor: 'primary'
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
  lineBottomColor,
  className,
  ...rest
}: HeadingProps) => {
  return (
    <h2
      className={headingClasses({
        color,
        lineColor,
        linePosition,
        lineBottomColor,
        className
      })}
      {...rest}
    >
      {children}
    </h2>
  )
}

export default Heading
