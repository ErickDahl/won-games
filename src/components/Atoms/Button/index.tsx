'use client'
import { HTMLAttributes, ReactNode, useState, FC } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import ClipLoader from 'react-spinners/ClipLoader'

const buttonClasses = tv({
  slots: {
    button:
      'hover:bg-primaryDark inline-flex cursor-pointer items-center justify-center gap-2 rounded-radius bg-primary p-2 font-default text-white',
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
    disabled: {
      true: {
        button: 'bg-primaryDark hover:bg-primaryDark'
      }
    },
    fullWidth: {
      true: {
        button: 'w-full'
      }
    },
    click: {
      true: {
        button: 'bg-primaryDark transform'
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

type ButtonContentProps = Pick<
  ButtonProps,
  'icon' | 'iconPosition' | 'children'
>

const LoadingState = () => (
  <>
    <ClipLoader size={20} color="var(--color-white)" />
    <span className="text-sm">Loading...</span>
  </>
)

const ButtonContent = ({
  icon,
  iconPosition,
  children
}: ButtonContentProps) => (
  <>
    {!!icon && iconPosition === 'left' && icon}
    {children && <span>{children}</span>}
    {!!icon && iconPosition === 'right' && icon}
  </>
)

const Button: FC<ButtonProps> = ({
  size,
  fullWidth,
  icon,
  iconPosition = 'left',
  clickAnimation,
  loading = false,
  disabled,
  children,
  className,
  onClick,
  ...rest
}: ButtonProps) => {
  const [isClicked, setIsClicked] = useState(false)
  const isDisabled = disabled
  const { button, div } = buttonClasses({
    size,
    fullWidth,
    clickAnimation,
    click: isClicked,
    disabled: isDisabled
  })

  const handleMouseEvents = (isActive: boolean) => () => setIsClicked(isActive)
  const handleTouchEvents = (isActive: boolean) => () => setIsClicked(isActive)

  return (
    <button
      className={button({ className })}
      disabled={isDisabled}
      onClick={loading ? () => void 0 : onClick}
      onMouseDown={handleMouseEvents(true)}
      onMouseUp={handleMouseEvents(false)}
      onMouseLeave={handleMouseEvents(false)}
      onTouchStart={handleTouchEvents(true)}
      onTouchEnd={handleTouchEvents(false)}
      {...rest}
    >
      <div className={div({ className })}>
        {loading ? (
          <LoadingState />
        ) : (
          <ButtonContent icon={icon} iconPosition={iconPosition}>
            {children}
          </ButtonContent>
        )}
      </div>
    </button>
  )
}

export default Button
