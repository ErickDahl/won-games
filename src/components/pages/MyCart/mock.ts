import { headingWhiteMock } from '@/components/atoms/Heading/mock'
import { cartListMock } from '@/components/molecules/CartList/mock'
import { cardsMock } from '@/components/molecules/GameCardCarousel/mock'
import { highlightMock } from '@/components/molecules/Highlight/mock'
import { paymentOptionMock } from '@/components/molecules/PaymentOptions/mock'
import { MyCartProps } from '.'

const myCartMock: MyCartProps = {
  cardList: cartListMock,
  paymentsOptions: paymentOptionMock,
  showCaseOptions: {
    highlight: highlightMock,
    cards: cardsMock,
    heading: headingWhiteMock
  }
}

export { myCartMock }
