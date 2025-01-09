import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'
import BannerImage from '@/assets/hightlightBanner.png'
import highlightImageBackground from '@/assets/hightlightBannerBackground.png'
import StoreLink from '@/components/Atoms/Link'
import Image from 'next/image'

export default {
  title: 'Molecules/Highlight',
  component: Highlight,
  argTypes: {
    button: {
      control: false
    },
    image: {
      control: false
    },
    backgroundImage: {
      control: false
    }
  },
  args: {
    title: 'Highlight Title',
    subtitle: 'Highlight Subtitle',
    backgroundImage: highlightImageBackground.src,
    button: (
      <StoreLink button hoverEffect={false} href={'/'}>
        Highlight Button
      </StoreLink>
    ),
    image: <Image src={BannerImage} alt="Highlight Image" />
  }
} as Meta

export const Default: StoryObj = {}
