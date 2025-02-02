import { Container } from '@/components/atoms/Container'
import { GameDetails } from '@/components/organisms/GameDetails'
import { gameDetailsMock } from '@/components/organisms/GameDetails/mock'
import { GameInfo } from '@/components/molecules/GameInfo'
import { gameInfoMock } from '@/components/molecules/GameInfo/mock'
import { PageTemplate } from '@/components/templates/PageTemplate'
import { GameDescription } from '@/components/molecules/GameDescription'
import { gameDescriptionMock } from '@/components/molecules/GameDescription/mock'
import { tv } from 'tailwind-variants'
import { Modal, ModalContent, ModalTrigger } from '@/components/molecules/Modal'
import { Gallery } from '@/components/organisms/Gallery'
import { galleryMock } from '@/components/organisms/Gallery/mock'

const productPageClasses = tv({
  slots: {
    container: 'sm:px-4'
  }
})

const ProductPage = () => {
  const { container } = productPageClasses()

  return (
    <PageTemplate>
      <Container className={container()}>
        <GameInfo {...gameInfoMock} />
      </Container>
      <Container className={container()}>
        <GameDescription {...gameDescriptionMock} />
      </Container>
      <Container className={container()}>
        <GameDetails {...gameDetailsMock} />
      </Container>
      <Container className={container()}>
        <Gallery {...galleryMock} />
      </Container>
      <Container className={container()}>
        <Modal>
          <ModalTrigger>Open</ModalTrigger>
          <ModalContent>teste</ModalContent>
        </Modal>
      </Container>
    </PageTemplate>
  )
}

export { ProductPage }
