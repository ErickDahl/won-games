import StoreLink from '@/components/atoms/Link'
import Image, { StaticImageData } from 'next/image'
import { HTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const highlightClasses = tv({
  slots: {
    base: 'relative flex w-full bg-cover bg-center after:absolute after:h-full after:w-full after:bg-black/60',
    content: 'z-10 flex w-full justify-between',
    titles: 'flex w-1/2 flex-col p-4 lg:justify-end lg:p-8',
    titleClass: 'mb-1 text-lg font-semibold text-white lg:text-3xl',
    subtitleClass: 'mb-8 text-sm font-light text-white lg:text-lg',
    buttonClass: '',
    imageClass: 'flex h-full w-1/3 items-end'
  },
  variants: {
    align: {
      left: {
        content: 'text-left',
        imageClass: 'justify-end'
      },
      right: {
        content: 'flex-row-reverse text-right',
        imageClass: 'justify-start'
      }
    }
  }
})

export type HighlightProps = VariantProps<typeof highlightClasses> &
  HTMLAttributes<HTMLDivElement> & {
    title: string
    subtitle: string
    backgroundImage: string | StaticImageData
    buttonLabel: string
    buttonLink: string
    image: StaticImageData
  }

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  align = 'left',
  buttonLabel,
  buttonLink,
  image,
  className
}: HighlightProps) => {
  const {
    base,
    content,
    titles,
    titleClass,
    subtitleClass,
    imageClass,
    buttonClass
  } = highlightClasses({ align })

  return (
    <div
      className={base({ className })}
      data-testid="highlight"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={content()}>
        <div className={titles()}>
          <h2 className={titleClass()}>{title}</h2>
          <h3 className={subtitleClass()}>{subtitle}</h3>
          <div className={buttonClass()}>
            {
              <StoreLink button hoverEffect={false} href={buttonLink}>
                {buttonLabel}
              </StoreLink>
            }
          </div>
        </div>
        <div className={imageClass()}>
          {!!image && (
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain'
              }}
              alt="Highlight Image"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Highlight
