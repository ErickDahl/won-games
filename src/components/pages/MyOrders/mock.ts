import gameImage from '@/assets/gameCard.png'
import { MyOrdersProps } from '.'

const myOrdersMock: MyOrdersProps = {
  items: [
    {
      image: gameImage,
      title: 'Red Dead Redemption 2',
      price: 210,
      downloadLink: '/',
      paymentInfo: {
        flag: 'mastercard',
        number: '**** **** **** 1234',
        purchaseDate: '2019-11-15T00:00:00Z',
        img: '/mastercard.png'
      }
    },
    {
      image: gameImage,
      title: 'Red Dead Redemption 2',
      price: 210,
      downloadLink: '/',
      paymentInfo: {
        flag: 'mastercard',
        number: '**** **** **** 1234',
        purchaseDate: '2019-11-15T00:00:00Z',
        img: '/mastercard.png'
      }
    },
    {
      image: gameImage,
      title: 'Red Dead Redemption 2',
      price: 210,
      downloadLink: '/',
      paymentInfo: {
        flag: 'mastercard',
        number: '**** **** **** 1234',
        purchaseDate: '2019-11-15T00:00:00Z',
        img: '/mastercard.png'
      }
    }
  ]
}

export { myOrdersMock }
