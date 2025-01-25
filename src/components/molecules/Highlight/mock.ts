import BannerImage from '@/assets/hightlightBanner.png'
import highlightImageBackground from '@/assets/hightlightBannerBackground.png'
import { HighlightProps } from './index'

const highlightMock: HighlightProps = {
  title: 'Highlight Title',
  subtitle: 'Highlight Subtitle',
  backgroundImage: highlightImageBackground.src,
  buttonLabel: 'Click Here',
  buttonLink: '/',
  image: BannerImage
}

export default highlightMock
