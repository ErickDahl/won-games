import { tv, VariantProps } from 'tailwind-variants'

import { Heading, HeadingProps } from '@/components/atoms/Heading'
import { GameCardProps } from '@/components/molecules/GameCard'
import { GameCardCarousel } from '@/components/molecules/GameCardCarousel'
import { Highlight, HighlightProps } from '@/components/molecules/Highlight'

const showCaseClasses = tv({
  slots: {
    base: 'mx-auto my-8 flex max-w-container flex-col gap-10 lg:px-6'
  }
})

type ShowCaseProps = VariantProps<typeof showCaseClasses> & {
  title?: string
  heading?: HeadingProps
  highlight?: HighlightProps
  cards?: GameCardProps[]
}

const ShowCase = ({ title, heading, highlight, cards }: ShowCaseProps) => {
  const { base } = showCaseClasses()

  return (
    <section className={base()}>
      {!!title && !!heading && <Heading {...heading}>{title}</Heading>}
      {!!highlight && <Highlight {...highlight} />}
      {!!cards && <GameCardCarousel cards={cards} />}
    </section>
  )
}

export { ShowCase }
