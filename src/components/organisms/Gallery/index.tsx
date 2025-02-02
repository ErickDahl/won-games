'use client'

import { HTMLAttributes, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { Modal, ModalTrigger } from '@/components/molecules/Modal'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselProps
} from '@/components/ui/carousel'
import { SubGallery } from './components/SubGallery'

const galleryClasses = tv({
  slots: {
    base: '',
    carouselItemClass:
      'flex w-full flex-[0_0_70%] items-center justify-center lg:flex-[0_0_33%]'
  }
})

export type GalleryProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof galleryClasses> &
  CarouselProps & {
    images: StaticImageData[]
  }

const Gallery = ({ images, ...rest }: GalleryProps) => {
  const { base, carouselItemClass } = galleryClasses()
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Modal closeOnEsc>
      <Carousel className={base()} opts={{ align: 'start' }} {...rest}>
        <CarouselContent>
          {images?.map((image, index) => (
            <CarouselItem
              onClick={() => setCurrentIndex(index)}
              index={index}
              className={carouselItemClass()}
              key={uuidv4()}
            >
              <ModalTrigger>
                <Image
                  alt={'gallery image'}
                  role="button"
                  width={image?.width}
                  src={image?.src}
                  height={image?.height}
                  blurDataURL={image?.blurDataURL}
                  placeholder="blur"
                />
              </ModalTrigger>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
        <SubGallery images={images} index={currentIndex} />
      </Carousel>
    </Modal>
  )
}

export { Gallery }
