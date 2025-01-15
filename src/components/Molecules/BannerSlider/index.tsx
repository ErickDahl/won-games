'use client'
import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Banner, { BannerProps } from '../Banner'

const BannerSliderClasses = tv({
  slots: {
    base: ''
  }
})

type BannerSliderProps = VariantProps<typeof BannerSliderClasses> & {
  className?: string
  banners?: BannerProps[]
}

const BannerSlider = ({ className, banners, ...rest }: BannerSliderProps) => {
  const { base } = BannerSliderClasses()

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnMouseEnter: true
        })
      ]}
      className={base({ className })}
      orientation="horizontal"
      {...rest}
    >
      <CarouselContent>
        {banners?.map((banner) => (
          <CarouselItem key={uuidv4()}>
            <Banner {...banner} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  )
}

export default BannerSlider
