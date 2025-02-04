import { HTMLAttributes, PropsWithChildren } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const ribbonClasses = tv({
  slots: {
    base: 'absolute right-0 top-[10%] flex w-full max-w-36 items-center justify-center after:absolute after:right-0 after:hidden after:border-b-[1rem] after:border-l-0 after:border-solid after:content-[""] lg:after:block',
    text: 'text-base capitalize text-white'
  },
  variants: {
    backGroundColor: {
      primary: {
        base: 'bg-primary after:border-primaryDark after:border-b-transparent after:border-r-transparent'
      },
      secondary: {
        base: 'bg-secondary after:border-secondaryDark after:border-b-transparent after:border-r-transparent'
      },
      tertiary: {
        base: 'bg-tertiary after:border-tertiaryDark after:border-b-transparent after:border-r-transparent'
      }
    },
    size: {
      normal: {
        base: 'h-10 after:top-10 after:border-r-[2rem] after:border-t-[1rem] lg:-right-8',
        text: 'text-1xl'
      },
      small: {
        base: 'h-8 after:top-8 after:border-r-[1.5rem] after:border-t-[0.75rem] lg:-right-6',
        text: 'text-sm'
      }
    },
    decoration: {
      false: {
        base: 'after:content-none'
      }
    }
  },
  defaultVariants: {
    backGroundColor: 'primary',
    size: 'normal',
    decoration: true
  }
})

type RibbonProps = VariantProps<typeof ribbonClasses> &
  HTMLAttributes<HTMLDivElement>

const Ribbon = ({
  backGroundColor,
  size,
  decoration,
  children,
  className,
  ...rest
}: PropsWithChildren<RibbonProps>) => {
  const { base, text } = ribbonClasses({ backGroundColor, size, decoration })

  return (
    <div className={base({ className })} {...rest}>
      <p className={text()}>{children}</p>
    </div>
  )
}
export { Ribbon }
