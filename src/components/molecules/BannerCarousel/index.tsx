'use client'

import { HTMLAttributes } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselProps } from '@/components/ui/carousel'
import { Banner, BannerProps } from '../Banner'

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

const BannerCarousel = ({ className, banners, ...rest }: BannerCarouselProps) => {
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
        {banners?.map((banner, index) => (
          <CarouselItem className="flex items-center justify-center" key={uuidv4()} index={index}>
            <Banner {...banner} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  )
}

export { BannerCarousel }
