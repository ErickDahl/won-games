'use client'
import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselProps
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Banner, { BannerProps } from '../Banner'
import { HTMLAttributes } from 'react'

const BannerSliderClasses = tv({
  slots: {
    base: ''
  }
})

type BannerCarouselProps = VariantProps<typeof BannerSliderClasses> &
  HTMLAttributes<HTMLDivElement> &
  CarouselProps & {
    banners: BannerProps[]
    className?: string
  }

const BannerCarousel = ({
  className,
  banners,
  ...rest
}: BannerCarouselProps) => {
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
            <Banner className="mx-auto" {...banner} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  )
}

export default BannerCarousel
