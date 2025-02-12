import { tv, VariantProps } from 'tailwind-variants'

import { InformationIcon } from '@/assets/icons'
import { BreakLine } from '@/components/atoms/BreakLine'
import { Container } from '@/components/atoms/Container'
import { Empty } from '@/components/atoms/Empty'
import { Heading } from '@/components/atoms/Heading'
import { StoreLink } from '@/components/atoms/Link'
import { CartList, CartListProps } from '@/components/molecules/CartList'
import { PaymentOptions, PaymentOptionsProps } from '@/components/molecules/PaymentOptions'
import { PageTemplate } from '@/components/templates/Page'
import { ShowCase, ShowCaseProps } from '@/components/templates/ShowCase'

const myCartClasses = tv({
  slots: {
    base: '',
    mainContentClass: 'flex flex-col items-start justify-center gap-7 md:flex-row',
    cartListClass: 'w-full md:w-[70%]',
    paymentOptionsClass: 'w-full md:w-[30%]',
    informationContainerClass: 'mb-32 text-primary',
    textInformationClass: 'text-base text-gray'
  }
})

export type MyCartProps = VariantProps<typeof myCartClasses> & {
  cardList: CartListProps
  paymentsOptions: PaymentOptionsProps
  showCaseOptions: ShowCaseProps
}

const MyCart = ({ cardList, paymentsOptions, showCaseOptions }: MyCartProps) => {
  const {
    base,
    mainContentClass,
    cartListClass,
    paymentOptionsClass,
    informationContainerClass,
    textInformationClass
  } = myCartClasses()

  return (
    <PageTemplate className={base()}>
      <Container>
        <Heading lineColor="secondary">My cart</Heading>
      </Container>

      <Container className={mainContentClass()} paddingMobile>
        {cardList?.items?.length ? (
          <>
            <CartList className={cartListClass()} {...cardList} />
            <PaymentOptions className={paymentOptionsClass()} {...paymentsOptions} />
          </>
        ) : (
          <Empty
            title={'Your cart is empty'}
            description={'Go back to the store and explore great games and offers'}
            hasLink
          />
        )}
      </Container>

      <Container paddingMobile>
        <p className={informationContainerClass()}>
          <InformationIcon className="inline-block align-middle" />
          <span className={textInformationClass()}>
            Your purchase is protected by a secure connection from the WON platform. By purchasing from our store you
            agree and agree to our{' '}
            <StoreLink className="text-base font-medium text-primary" href={'/'} hoverEffect={false}>
              terms of use
            </StoreLink>
            . After making the purchase you are entitled to a refund within a maximum of 30 days, without any additional
            cost, as long as the download of the purchased game has not occurred after your purchase.
          </span>
        </p>
      </Container>

      <Container>
        <BreakLine />
      </Container>

      <ShowCase title="You may like these games" {...showCaseOptions} />
    </PageTemplate>
  )
}

export { MyCart }
