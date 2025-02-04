import { HTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { Heading } from '@/components/atoms/Heading'
import { StoreLink } from '@/components/atoms/Link'
import { Logo } from '@/components/atoms/Logo'
import { content } from './mock'

const footerClasses = tv({
  slots: {
    footer: 'flex w-full flex-col gap-6 text-white',
    logoClass: 'pl-5',
    contentsContainers:
      'grid grid-cols-2 gap-6 pl-6 pr-2 lg:grid-cols-4 lg:gap-8',
    headingClass: 'm-0 text-base uppercase text-black',
    contentContainer: 'flex flex-col gap-4',
    link: 'text-sm font-normal text-gray',
    copyRight: 'text-center text-xs font-normal text-gray'
  }
})

type FooterContent = {
  text: string
  link: string
}

export type ContentProps = {
  heading: string
  content: FooterContent[]
}

type FooterProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof footerClasses>

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
          <li key={uuidv4()} className="break-words">
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

export { Footer }
