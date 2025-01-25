import Heading, { HeadingProps } from '@/components/atoms/Heading'
import Highlight, { HighlightProps } from '@/components/molecules/Highlight'
import { tv, VariantProps } from 'tailwind-variants'
import GameCardCarousel from '@/components/molecules/GameCardCarousel'
import { GameCardProps } from '@/components/molecules/GameCard'

const showCaseClasses = tv({
  slots: {
    base: 'mx-auto mb-8 flex max-w-container flex-col gap-10 lg:px-6'
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

export default ShowCase
