import { v4 as uuidv4 } from 'uuid'
import Heading from '@/components/Atoms/Heading'
import Logo from '@/components/Atoms/Logo'
import StoreLink from '@/components/Atoms/Link'
import { content } from './content'
import { tv, VariantProps } from 'tailwind-variants'
import { HTMLAttributes } from 'react'

const footerClasses = tv({
  slots: {
    footer: 'flex w-full flex-col gap-6 text-white',
    logoClass: 'pl-5',
    contentsContainers:
      'grid grid-cols-2 gap-6 pl-6 pr-2 lg:grid-cols-4 lg:gap-8',
    headingClass: 'text-base uppercase text-black',
    contentContainer: 'flex flex-col gap-4',
    link: 'text-sm font-normal text-gray',
    copyRight: 'text-center text-xs font-normal text-gray'
  }
})

type FooterProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof footerClasses>

type ContentProps = {
  heading: string
  content: { text: string; link: string }[]
}

const Content = ({ heading, content }: ContentProps) => {
  const { link, contentContainer, headingClass } = footerClasses()

  return (
    <div className={contentContainer()}>
      <Heading
        className={headingClass()}
        lineBottomColor="secondary"
        linePosition="bottom"
      >
        {heading}
      </Heading>
      <ul>
        {content.map((item) => (
          <li key={uuidv4()}>
            <StoreLink className={link()} hoverEffect={false} href={item.link}>
              {item.text}
            </StoreLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = ({ ...rest }: FooterProps) => {
  const { footer, contentsContainers, copyRight, logoClass } = footerClasses()

  return (
    <footer className={footer()} {...rest}>
      <Logo className={logoClass()} size="small" variant="black" />
      <div className={contentsContainers()}>
        {content.map((section) => (
          <Content
            key={uuidv4()}
            heading={section.heading}
            content={section.content}
          />
        ))}
      </div>
      <span className={copyRight()}>
        Won Games 2020 © Todos os Direitos Reservados
      </span>
    </footer>
  )
}

export default Footer
