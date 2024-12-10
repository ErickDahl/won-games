import Image from 'next/image'
import LogoBlack from '@/assets/logoBlack.svg'
import LogoCompact from '@/assets/logoCompact.svg'
import LogoWhite from '@/assets/logoWhite.svg'

type logoProps = {
  variant: 'black' | 'compact' | 'white'
}

const Logo = ({ variant = 'black' }: logoProps) => {
  let logo

  switch (variant) {
    case 'black':
      logo = LogoBlack
      break
    case 'compact':
      logo = LogoCompact
      break
    case 'white':
      logo = LogoWhite
      break
    default:
      logo = LogoBlack
      break
  }

  return <Image data-testid="svg-element-logo" src={logo} alt={''} />
}
export default Logo
