'use client'

import { ChangeEvent, HTMLAttributes, HTMLInputTypeAttribute, ReactNode, useState } from 'react'
import { ClassNameValue } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const textFieldClasses = tv({
  slots: {
    base: 'flex flex-col items-start justify-center gap-1',
    labelClass: 'cursor-pointer text-black',
    inputDiv:
      'flex w-full items-center justify-center gap-2 rounded-md border border-solid border-lightGray bg-lightGray px-3 transition-all focus-within:shadow-md',
    inputClass: 'w-full border-none bg-transparent py-1 text-black outline-none',
    iconClass: 'flex max-w-4 text-gray',
    errorClass: 'text-sm text-red-500'
  },
  variants: {
    error: {
      true: {
        inputDiv: 'border-red-500',
        inputClass: 'text-red-500',
        labelClass: 'text-red-500'
      }
    },
    disabled: {
      true: {
        base: 'opacity-50',
        inputClass: 'cursor-not-allowed',
        labelClass: 'cursor-not-allowed'
      }
    },
    iconPosition: {
      left: {
        iconClass: 'order-first'
      },
      right: {
        iconClass: 'order-last'
      }
    },
    color: {
      dark: {
        inputDiv: 'border-darkGray bg-darkGray',
        inputClass: 'placeholder:gray text-white'
      }
    }
  },
  defaultVariants: {
    iconPosition: 'left',
    error: false
  }
})

type TextFieldProps = VariantProps<typeof textFieldClasses> &
  HTMLAttributes<HTMLInputElement> & {
    onInput?: (value: string) => void
    label?: string
    initialValue?: string
    placeholder?: string
    icon?: ReactNode
    errorMessage?: string
    className?: string
    bgColor?: ClassNameValue
    name?: string
    type?: HTMLInputTypeAttribute
  }

const TextField = ({
  onInput,
  label,
  initialValue,
  placeholder,
  icon,
  iconPosition,
  disabled,
  error,
  errorMessage,
  className,
  name,
  type,
  color,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const { base, labelClass, inputDiv, inputClass, iconClass, errorClass } = textFieldClasses({
    iconPosition,
    disabled,
    error,
    color
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    if (onInput) {
      onInput(newValue)
    }
  }

  return (
    <div className={base({ className })}>
      {!!label && (
        <label className={labelClass()} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={inputDiv()}>
        {icon && <div className={iconClass()}>{icon}</div>}
        <input
          className={inputClass()}
          type={type || 'text'}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          value={value}
          name={name}
          {...(label && { id: name })}
          {...rest}
        />
      </div>
      {error && <span className={errorClass()}>{errorMessage}</span>}
    </div>
  )
}

export { TextField }
