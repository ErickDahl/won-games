import { tv, VariantProps } from 'tailwind-variants'

import { Heading } from '@/components/atoms/Heading'
import { sanitize } from '@/utils/sanitize'

const gameDescriptionClasses = tv({
  slots: {
    base: 'flex flex-col gap-5 bg-white p-5',
    contentClass: 'text-base font-normal text-black'
  }
})

export type GameDescriptionProps = VariantProps<
  typeof gameDescriptionClasses
> & {
  title?: string
  content: string
}

const GameDescription = ({ title, content }: GameDescriptionProps) => {
  const { base, contentClass } = gameDescriptionClasses()

  return (
    <div className={base()}>
      {!!title && (
        <Heading
          className="m-0"
          linePosition="left"
          lineColor="secondary"
          color="black"
        >
          {title}
        </Heading>
      )}

      <div
        className={contentClass()}
        dangerouslySetInnerHTML={{ __html: sanitize(content) }}
      />
    </div>
  )
}

export { GameDescription }
