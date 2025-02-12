import { PaymentOptionsProps } from '.'

const paymentOptionMock: PaymentOptionsProps = {
  cards: [
    {
      flag: 'mastercard',
      number: '**** **** **** 1234',
      img: '/mastercard.png'
    },
    {
      flag: 'visa',
      number: '**** **** **** 1111',
      img: '/visa.png'
    }
  ]
}

export { paymentOptionMock }
