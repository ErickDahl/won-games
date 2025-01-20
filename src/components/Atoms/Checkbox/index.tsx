import { HTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const checkboxClasses = tv({
  slots: {
    base: 'flex items-center justify-center gap-2',
    inputClass:
      'relative flex h-4 w-4 cursor-pointer appearance-none items-center justify-center rounded-sm border border-solid border-primary transition-all' +
      ' checked:border-primary checked:bg-primary checked:before:opacity-100' +
      ' before:absolute before:left-[35%] before:top-[0.15rem] before:h-2 before:w-1 before:rotate-45 before:border before:border-l-0 before:border-t-0 before:border-solid before:border-white before:opacity-0 before:transition-all',
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

type CheckboxProps = VariantProps<typeof checkboxClasses> &
  HTMLAttributes<HTMLInputElement> & {
    label?: string
    labelFor?: string
  }

const Checkbox = ({
  label,
  labelFor = '',
  labelColor,
  className,
  ...rest
}: CheckboxProps) => {
  const { base, labelClass, inputClass } = checkboxClasses({ labelColor })

  return (
    <div className={base({ className })}>
      <input className={inputClass()} id={labelFor} type="checkbox" {...rest} />
      {!!label && (
        <label className={labelClass()} htmlFor={labelFor}>
          {label}
        </label>
      )}
    </div>
  )
}

export default Checkbox
