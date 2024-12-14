import { HTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonClasses = tv({
  base: `inline-flex cursor-pointer items-center justify-center gap-2 rounded-radius bg-[linear-gradient(180deg,_#FF5F5F_0%,_#F062C0_50%)] p-2 font-default text-white`,
  variants: {
    size: {
      small: 'h-small px-7 text-xs',
      medium: 'h-medium px-8 text-sm',
      large: 'h-large px-14 text-base'
    },
    fullWidth: {
      true: 'w-full'
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonClasses> & {
    children: ReactNode
    icon?: JSX.Element
  }

const Button = ({ size, fullWidth, icon, children, ...rest }: ButtonProps) => (
  <button className={buttonClasses({ size, fullWidth })} {...rest}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </button>
)
export default Button
