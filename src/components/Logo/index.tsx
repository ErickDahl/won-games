import Image from 'next/image'
import LogoBlack from '@/assets/logoBlack.svg'
import LogoCompact from '@/assets/logoCompact.svg'
import LogoWhite from '@/assets/logoWhite.svg'

type logoProps = {
  variant?: 'black' | 'compact' | 'white'
  size?: 'large' | 'small'
}

const logoMap = {
  black: LogoBlack,
  compact: LogoCompact,
  white: LogoWhite
}

const sizeMap = {
  large: 200,
  small: 110
}

const Logo = ({ variant = 'black', size = 'large' }: logoProps) => {
  const logo = logoMap[variant] || LogoBlack
  const width = sizeMap[size] || sizeMap.small

  return (
    <Image
      data-testid="svg-element-logo"
      src={logo.src}
      alt={'won games'}
      width={width}
      height={0}
    />
  )
}

export default Logo
