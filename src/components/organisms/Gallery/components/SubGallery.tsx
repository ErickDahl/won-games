'use client'

import { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { ModalContent } from '@/components/molecules/Modal'
import { Carousel, CarouselApi, CarouselContent, CarouselDots, CarouselItem } from '@/components/ui/carousel'

const subGalleryClasses = tv({
  slots: {
    base: 'mx-auto w-full max-w-6xl px-4',
    carouselItemClass: 'flex w-full flex-[0_0_100%] items-center justify-center',
    modalContentClass: 'flex w-full max-w-6xl items-center justify-center bg-transparent shadow-none'
  }
})

export type SubGalleryProps = VariantProps<typeof subGalleryClasses> & {
  images: StaticImageData[]
  index: number
}

const SubGallery = ({ images, index, ...rest }: SubGalleryProps) => {
  const { base, carouselItemClass, modalContentClass } = subGalleryClasses()
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return
    api.scrollTo(index, true)
  }, [api, index])

  return (
    <ModalContent className={modalContentClass()}>
      <Carousel setApi={setApi} className={base()} opts={{ align: 'start' }} {...rest}>
        <CarouselContent>
          {images?.map((image, index) => (
            <CarouselItem index={index} className={carouselItemClass()} key={uuidv4()}>
              <Image
                className="w-full"
                alt={'gallery image'}
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
    </ModalContent>
  )
}

export { SubGallery }
