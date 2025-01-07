import { HTMLAttributes, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const ribbonClasses = tv({
  slots: {
    base:
      'absolute flex w-full max-w-36 items-center justify-center after:absolute after:right-0 after:border-b-[1rem]' +
      'after:border-l-0 after:border-solid after:content-[""]',
    text: 'text-base capitalize text-white'
  },
  variants: {
    backGroundColor: {
      primary: {
        base: 'bg-primary after:border-primaryDark after:border-b-transparent after:border-r-transparent'
      },
      secondary: {
        base: 'after:border-secondaryDark bg-secondary after:border-b-transparent after:border-r-transparent'
      }
    },
    size: {
      normal: {
        base: 'h-10 after:top-10 after:border-r-[2rem] after:border-t-[1rem]',
        text: 'text-1xl'
      },
      small: {
        base: 'h-8 after:top-8 after:border-r-[1.5rem] after:border-t-[0.75rem]',
        text: 'text-sm'
      }
    }
  }
})

type RibbonProps = VariantProps<typeof ribbonClasses> &
  HTMLAttributes<HTMLDivElement> & {
    children: ReactNode
  }

const Ribbon = ({
  children,
  backGroundColor = 'primary',
  size = 'normal'
}: RibbonProps) => {
  const { base, text } = ribbonClasses({ backGroundColor, size })

  return (
    <div className={base()}>
      <span className={text()}>{children}</span>
    </div>
  )
}
export default Ribbon
