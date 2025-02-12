'use client'

import { HTMLAttributes } from 'react'
import Image, { StaticImageData } from 'next/image'
import { FormattedDate, FormattedNumber } from 'react-intl'
import { tv, VariantProps } from 'tailwind-variants'

import { DownloadIcon } from '@/assets/icons'
import { StoreLink } from '@/components/atoms/Link'
import { useCurrency } from '@/hooks/useCurrency'

const gameItemClasses = tv({
  slots: {
    base: 'flex w-full flex-col justify-center gap-6 border-b border-lightGray p-4 sm:flex-row lg:flex-row',
    gameContentClass: 'flex h-full w-full flex-col gap-2',
    titleClass: 'flex items-center gap-2 text-xl font-semibold text-black',
    downloadClass: 'text-lg text-primary',
    contentContainerClass:
      'flex w-full flex-col items-center justify-center gap-4 sm:w-[70%] sm:flex-row sm:justify-between',
    priceClass: 'w-fit rounded-md bg-secondary px-3 py-1 text-sm font-semibold text-white',
    paymentInfoContainer: 'flex h-full w-full flex-col items-start justify-between gap-3 text-sm sm:items-end sm:gap-0',
    paymentCardClass: 'flex items-center gap-2'
  }
})

type GameItemPaymentProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = VariantProps<typeof gameItemClasses> &
  HTMLAttributes<HTMLDivElement> & {
    image: string | StaticImageData
    title: string
    price: number
    downloadLink?: string
    paymentInfo?: GameItemPaymentProps
    timeZone?: string
  }

const GameItem = ({ image, title, price, downloadLink, paymentInfo, timeZone, className, ...rest }: GameItemProps) => {
  const {
    base,
    gameContentClass,
    titleClass,
    downloadClass,
    priceClass,
    paymentInfoContainer,
    paymentCardClass,
    contentContainerClass
  } = gameItemClasses()

  const currency = useCurrency()

  return (
    <div className={base({ className })} {...rest}>
      <div className="sm:max-w-[30%]">
        <Image src={image} alt="game image" layout="responsive" />
      </div>

      <div className={contentContainerClass()}>
        <div className={gameContentClass()}>
          <div className="flex items-center justify-start gap-2">
            <h3 className={titleClass()}>{title} </h3>
            {!!downloadLink && (
              <StoreLink
                className={downloadClass()}
                href={downloadLink}
                hoverEffect={false}
                aria-label={`Download ${title}`}
              >
                <DownloadIcon />
              </StoreLink>
            )}
          </div>

          <p className={priceClass()}>
            <FormattedNumber value={price} style="currency" currency={currency} />
          </p>
        </div>

        {!!paymentInfo && (
          <div className={paymentInfoContainer()}>
            <div className={paymentCardClass()}>
              <span>{paymentInfo.number}</span>
              <Image src={paymentInfo.img} width={30} height={20} alt={paymentInfo.flag} />
            </div>
            <p>
              Purchase made on{' '}
              <FormattedDate
                value={paymentInfo.purchaseDate}
                year="numeric"
                month="2-digit"
                day="2-digit"
                hour="2-digit"
                minute="2-digit"
                timeZone={timeZone}
              />
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export { GameItem }
