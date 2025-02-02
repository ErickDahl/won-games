'use client'
import { v4 as uuidv4 } from 'uuid'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselProps
} from '@/components/ui/carousel'
import { HTMLAttributes } from 'react'
import Image, { StaticImageData } from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'

const galleryClasses = tv({
  slots: {
    base: 'mx-auto max-w-[90%]',
    carouselItemClass: 'flex-[0_0_70%] lg:flex-[0_0_33%]'
  }
})

export type GalleryProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof galleryClasses> &
  CarouselProps & {
    images: StaticImageData[]
  }

const Gallery = ({ images, ...rest }: GalleryProps) => {
  const { base, carouselItemClass } = galleryClasses()

  return (
    <Carousel className={base()} opts={{ align: 'start' }} {...rest}>
      <CarouselContent>
        {images?.map((image) => (
          <CarouselItem className={carouselItemClass()} key={uuidv4()}>
            <Image
              alt={'gallery image'}
              role="button"
              width={image?.width}
              src={image?.src}
              height={image?.height}
              blurDataURL={image?.blurDataURL}
              placeholder="blur"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  )
}

export { Gallery }
