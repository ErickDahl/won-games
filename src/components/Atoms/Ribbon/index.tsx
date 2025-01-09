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
    }
  }
})

type RibbonProps = VariantProps<typeof ribbonClasses> &
  HTMLAttributes<HTMLDivElement>

const Ribbon = ({
  children,
  className,
  backGroundColor = 'primary',
  size = 'normal',
  ...rest
}: PropsWithChildren<RibbonProps>) => {
  const { base, text } = ribbonClasses({ backGroundColor, size })

  return (
    <div className={base({ className })} {...rest}>
      <span className={text()}>{children}</span>
    </div>
  )
}
export default Ribbon
