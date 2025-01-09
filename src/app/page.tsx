import { createClient } from '@/utils/supabase/server'
import { AddCartIcon } from '@/assets/icons'
import Button from '@/components/Atoms/Button'
import Heading from '@/components/Atoms/Heading'
import Logo from '@/components/Atoms/Logo'
import Image from 'next/image'
import StoreLink from '@/components/Atoms/Link'
import Menu from '@/components/Organisms/Menu'
import Footer from '@/components/Molecules/Footer'
import Banner from '@/components/Molecules/Banner'
import BannerImage from '@/assets/banner.png'
import Ribbon from '@/components/Atoms/Ribbon'
import Highlight from '@/components/Molecules/Highlight'
import highlightImage from '@/assets/hightlightBanner.png'
import highlightImageBackground from '@/assets/hightlightBannerBackground.png'

export default async function Home() {
  const supabase = await createClient()
  const { data } = await supabase.from('games').select('*')

  console.log(data)

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 pb-20 sm:p-20">
      <main className="row-start-2 flex w-full flex-col items-center gap-8 sm:items-start">
        <Logo variant="white" />

        <StoreLink button hoverEffect={false} href={'/'}>
          Link
        </StoreLink>

        <Heading lineColor="secondary" linePosition="left">
          Heading
        </Heading>

        <Menu />

        <Banner
          img={BannerImage}
          title="Banner Title"
          subtitle="Banner Subtitle"
          buttonLabel="Click Here"
          buttonLink="/"
        />

        <Banner
          ribbon={<Ribbon backGroundColor="secondary">teste</Ribbon>}
          img={BannerImage}
          title="Banner Title"
          subtitle="Banner Subtitle"
          buttonLabel="Click Here"
          buttonLink="/"
        />

        <Button disabled clickAnimation icon={<AddCartIcon size={17} />}>
          teste
        </Button>

        <Highlight
          title={'Highlight Title'}
          subtitle={'Highlight Subtitle'}
          backgroundImage={highlightImageBackground.src}
          align="right"
          button={
            <StoreLink button hoverEffect={false} href={'/'}>
              Highlight Button
            </StoreLink>
          }
          image={<Image src={highlightImage} alt="Highlight Image" />}
        />

        <Button loading icon={<AddCartIcon size={17} />}>
          teste
        </Button>

        <Footer />
      </main>
    </div>
  )
}
