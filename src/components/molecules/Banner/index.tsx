'use client'
import {
  HTMLAttributes,
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react'
import Image, { StaticImageData } from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'
import StoreLink from '../../atoms/Link'
import Ribbon from '@/components/atoms/Ribbon'

const bannerClasses = tv({
  slots: {
    base: 'relative flex w-full flex-col',
    image: 'rounded-md',
    containerInformation:
      'bottom-0 left-0 w-full bg-darkGray p-5 lg:absolute lg:rounded-b-md lg:bg-black/60',
    containerTitles: 'mb-3',
    titleClassName: 'text-xl font-semibold text-white',
    subtitleClassName: 'text-sm font-normal text-white',
    linkClassName: 'px-5 text-sm font-medium'
  }
})

export type BannerProps = VariantProps<typeof bannerClasses> &
  HTMLAttributes<HTMLDivElement> & {
    img: string | StaticImageData
    title: string
    subtitle: string
    buttonLabel: string
    buttonLink: string
    ribbon?: ReactElement<typeof Ribbon>
  }

const Banner = ({
  img,
  ribbon,
  title = 'title',
  subtitle = 'subtitle',
  buttonLabel = 'button label',
  buttonLink = '#',
  className,
  ...rest
}: BannerProps) => {
  const {
    base,
    image,
    containerInformation,
    containerTitles,
    titleClassName,
    subtitleClassName,
    linkClassName
  } = bannerClasses()

  const imgRef = useRef<HTMLImageElement>(null)
  const [imgWidth, setImgWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (imgRef.current) {
      setImgWidth(imgRef.current.clientWidth)
    }
  }, [])

  return (
    <div
      className={base({ className })}
      style={{ maxWidth: imgWidth }}
      {...rest}
    >
      <Image className={image()} ref={imgRef} src={img} alt={'game banner'} />
      {!!ribbon && ribbon}
      <div className={containerInformation()}>
        <div className={containerTitles()}>
          <h2 className={titleClassName()}>{title}</h2>
          <h3
            dangerouslySetInnerHTML={{
              __html: subtitle.replace(
                '<strong>',
                '<strong class="text-primary">'
              )
            }}
            className={subtitleClassName()}
          />
        </div>
        <StoreLink
          className={linkClassName()}
          button
          hoverEffect={false}
          href={buttonLink}
        >
          {buttonLabel}
        </StoreLink>
      </div>
    </div>
  )
}

export default Banner
