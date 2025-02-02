import Image, { ImageProps } from 'next/image'
import LogoBlack from '@/assets/logoBlack.svg'
import LogoCompact from '@/assets/logoCompact.svg'
import LogoWhite from '@/assets/logoWhite.svg'

interface LogoProps
  extends Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'> {
  variant?: 'black' | 'compact' | 'white'
  size?: 'large' | 'small'
}

const logoMap: Record<NonNullable<LogoProps['variant']>, typeof LogoBlack> = {
  black: LogoBlack,
  compact: LogoCompact,
  white: LogoWhite
}

const sizeMap: Record<NonNullable<LogoProps['size']>, number> = {
  large: 200,
  small: 110
}

const Logo = ({ variant = 'black', size = 'large', ...rest }: LogoProps) => {
  const logo = logoMap[variant]
  const width = sizeMap[size]
  const height = (logo.height / logo.width) * width

  return (
    <Image
      src={logo.src}
      alt="won games"
      width={width}
      height={height}
      {...rest}
    />
  )
}

export { Logo }
