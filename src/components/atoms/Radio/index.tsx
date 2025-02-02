import { HTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const radioClasses = tv({
  slots: {
    base: 'flex items-end justify-center gap-2',
    inputClass:
      'relative flex h-[0.9rem] w-[0.9rem] cursor-pointer appearance-none items-center justify-center rounded-full border border-solid border-primary transition-all' +
      ' before:absolute before:inset-0 before:m-auto before:h-[0.4rem] before:w-[0.4rem] before:rounded-full before:bg-primary before:opacity-0 before:transition-all checked:before:opacity-100',
    labelClass: 'cursor-pointer leading-none'
  },
  variants: {
    labelColor: {
      black: {
        labelClass: 'text-black'
      },
      white: {
        labelClass: 'text-white'
      }
    }
  },
  defaultVariants: {
    labelColor: 'white'
  }
})

type RadioValue = string | ReadonlyArray<string> | number

type RadioProps = VariantProps<typeof radioClasses> &
  HTMLAttributes<HTMLInputElement> & {
    onCheck?: (value?: RadioValue) => void
    label?: string
    labelColor?: 'white' | 'black'
    labelFor?: string
    value?: RadioValue
    name: string
    className?: string
  }

const Radio = ({
  onCheck,
  label,
  labelColor,
  labelFor,
  name,
  value,
  className,
  ...rest
}: RadioProps) => {
  const { base, inputClass, labelClass } = radioClasses({ labelColor })

  const onChange = () => {
    if (onCheck) {
      onCheck(value)
    }
  }

  return (
    <div className={base({ className })}>
      <input
        className={inputClass()}
        id={labelFor}
        type="radio"
        onChange={onChange}
        name={name}
        {...rest}
      />
      {!!label && (
        <label className={labelClass()} htmlFor={labelFor}>
          {label}
        </label>
      )}
    </div>
  )
}

export { Radio }
