import { tv } from 'tailwind-variants'

const breakLineClasses = tv({
  slots: {
    base: 'border border-solid border-darkGray'
  }
})

const BreakLine = () => {
  const { base } = breakLineClasses()

  return <div className={base()} />
}

export { BreakLine }
