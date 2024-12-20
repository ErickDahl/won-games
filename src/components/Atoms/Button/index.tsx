'use client'
import { HTMLAttributes, ReactNode, useState, FC } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import ClipLoader from 'react-spinners/ClipLoader'

const buttonClasses = tv({
  slots: {
    button:
      'inline-flex cursor-pointer items-center justify-center gap-2 rounded-radius bg-[linear-gradient(180deg,_#FF5F5F_0%,_#F062C0_50%)] p-2 font-default text-white hover:bg-[linear-gradient(180deg,_#E04E4E_0%,_#D053A8_50%)]',
    div: 'flex items-center justify-center gap-2'
  },
  variants: {
    size: {
      small: {
        button: 'h-small px-7 text-xs'
      },
      medium: {
        button: 'h-medium px-8 text-sm'
      },
      large: {
        button: 'h-large px-14 text-base'
      }
    },
    fullWidth: {
      true: {
        button: 'w-full'
      }
    },
    click: {
      true: {
        button:
          'transform bg-[linear-gradient(180deg,_#E04E4E_0%,_#D053A8_50%)]'
      }
    },
    clickAnimation: {
      true: {
        div: 'transition-transform duration-150 ease-in-out'
      }
    }
  },
  compoundVariants: [
    {
      clickAnimation: true,
      click: true,
      className: {
        div: 'scale-[.97]'
      }
    },
    {
      clickAnimation: true,
      click: false,
      className: {
        div: 'scale-[1]'
      }
    }
  ],
  defaultVariants: {
    size: 'medium',
    clickAnimation: true,
    fullWidth: false
  }
})

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonClasses> & {
    children: ReactNode
    icon?: JSX.Element
    iconPosition?: 'left' | 'right'
    loading?: boolean
  }

const Button: FC<ButtonProps> = ({
  size,
  fullWidth,
  icon,
  iconPosition = 'left',
  clickAnimation,
  loading = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const { button, div } = buttonClasses({
    size,
    fullWidth,
    clickAnimation,
    click: isClicked
  })

  const handleMouseEvents = (isActive: boolean) => () => setIsClicked(isActive)
  const handleTouchEvents = (isActive: boolean) => () => setIsClicked(isActive)

  const LoadingState = () => (
    <>
      <ClipLoader size={20} color="#fff" />
      <span className="text-sm">Loading...</span>
    </>
  )

  const ButtonContent = () => (
    <>
      {!!icon && iconPosition === 'left' && icon}
      {children && <span>{children}</span>}
      {!!icon && iconPosition === 'right' && icon}
    </>
  )

  return (
    <button
      className={button({ className })}
      disabled={loading}
      onMouseDown={handleMouseEvents(true)}
      onMouseUp={handleMouseEvents(false)}
      onMouseLeave={handleMouseEvents(false)}
      onTouchStart={handleTouchEvents(true)}
      onTouchEnd={handleTouchEvents(false)}
      {...rest}
    >
      <div className={div({ className })}>
        {loading ? <LoadingState /> : <ButtonContent />}
      </div>
    </button>
  )
}

export default Button
