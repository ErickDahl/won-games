'use client'

import { FC, HTMLAttributes, ReactNode, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { tv, VariantProps } from 'tailwind-variants'

const buttonClasses = tv({
  slots: {
    button: 'inline-flex cursor-pointer items-center justify-center gap-2 rounded-radius p-2 text-white',
    buttonContainer: 'flex w-full items-center justify-center gap-1'
  },
  variants: {
    size: {
      xsmall: {
        button: 'h-5'
      },
      small: {
        button: 'h-small text-xs'
      },
      medium: {
        button: 'h-medium text-sm'
      },
      large: {
        button: 'h-large text-base'
      }
    },
    variation: {
      primary: {
        button: 'bg-primary hover:bg-primaryDark'
      },
      secondary: {
        button: 'bg-secondary hover:bg-secondaryDark'
      },
      noBackground: {
        button: 'bg-transparent hover:bg-transparent'
      }
    },
    disabled: {
      true: {
        button: 'cursor-default saturate-[0.7]'
      }
    },
    fullWidth: {
      true: {
        button: 'w-full'
      }
    },
    click: {
      true: {
        button: 'transform'
      }
    },
    clickAnimation: {
      true: {
        buttonContainer: 'transition-transform duration-150 ease-in-out'
      }
    }
  },
  compoundVariants: [
    {
      clickAnimation: true,
      click: true,
      className: {
        buttonContainer: 'scale-[.97]'
      }
    },
    {
      click: true,
      variation: 'primary',
      className: {
        button: 'bg-primaryDark'
      }
    },
    {
      click: true,
      variation: 'secondary',
      className: {
        button: 'bg-secondaryDark'
      }
    }
  ],
  defaultVariants: {
    variation: 'primary',
    size: 'medium',
    clickAnimation: true,
    fullWidth: false
  }
})

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonClasses> & {
    children?: ReactNode
    icon?: ReactNode
    iconPosition?: 'left' | 'right'
    loading?: boolean
  }

type ButtonContentProps = Pick<ButtonProps, 'icon' | 'iconPosition' | 'children'>

const LoadingState = () => (
  <>
    <ClipLoader size={20} color="rgb(var(--color-white))" />
    <span className="text-sm">Loading...</span>
  </>
)

const ButtonContent = ({ icon, iconPosition, children }: ButtonContentProps) => (
  <>
    {!!icon && iconPosition === 'left' && icon}
    {children && <span className="leading-none">{children}</span>}
    {!!icon && iconPosition === 'right' && icon}
  </>
)

const Button: FC<ButtonProps> = ({
  size,
  variation,
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
  const { button, buttonContainer } = buttonClasses({
    size,
    variation,
    fullWidth,
    clickAnimation,
    click: isClicked,
    disabled: isDisabled
  })

  const handleMouseEvents = (isActive: boolean) => () => {
    if (!isDisabled) {
      setIsClicked(isActive)
    }
  }

  const handleTouchEvents = (isActive: boolean) => () => {
    if (!isDisabled) {
      setIsClicked(isActive)
    }
  }

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
      <div className={buttonContainer()}>
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

export { Button }
