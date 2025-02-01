import { tv, VariantProps } from 'tailwind-variants'

const modalClasses = tv({
  slots: {
    base: 'flex'
  }
})

type ModalProps = VariantProps<typeof modalClasses> & {
  title?: string
}

const Modal = ({ title }: ModalProps) => {
  const { base } = modalClasses()

  return (
    <main className={base()}>
      <h1>{title}</h1>
    </main>
  )
}

export default Modal
