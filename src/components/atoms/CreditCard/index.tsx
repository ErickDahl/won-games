import Image from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'

const creditCardClasses = tv({
  slots: {
    base: 'flex items-center justify-center gap-3'
  },
  variants: {
    invertOrder: {
      true: {
        base: 'flex-row-reverse'
      }
    }
  }
})

export type CreditCardProps = VariantProps<typeof creditCardClasses> & {
  flag: string
  number: string
  img: string
  className?: string
  invertOrder?: boolean
}

const CreditCard = ({ flag, number, img, className, invertOrder }: CreditCardProps) => {
  const { base } = creditCardClasses({ invertOrder })

  return (
    <div className={base({ className })}>
      <Image src={img} alt={flag} width={30} height={20} />
      {number}
    </div>
  )
}

export { CreditCard }
