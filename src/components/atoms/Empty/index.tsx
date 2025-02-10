import Image from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'

import { StoreLink } from '../Link'

const emptyClasses = tv({
  slots: {
    base: 'flex flex-col items-center text-center',
    titleClass: 'text-3xl text-primary',
    descriptionClass: 'mb-6 font-light text-white'
  }
})

export type EmptyProps = VariantProps<typeof emptyClasses> & {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => {
  const { base, titleClass, descriptionClass } = emptyClasses()

  return (
    <main className={base()}>
      <Image src={'/empty.svg'} width={300} height={300} alt={'a gamer in a couch'} />

      <h2 className={titleClass()}>{title}</h2>
      <p className={descriptionClass()}>{description}</p>

      {hasLink && (
        <StoreLink href={'/'} button hoverEffect={false}>
          go back to store
        </StoreLink>
      )}
    </main>
  )
}

export { Empty }
