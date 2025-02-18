import { tv, VariantProps } from 'tailwind-variants'

import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { TextField } from '@/components/atoms/TextField'

const formProfileClasses = tv({
  slots: {
    base: 'flex flex-col gap-4',
    headingClass: 'm-0 text-lg font-semibold',
    formClass: 'grid grid-cols-1 gap-4 md:grid-cols-2',
    buttonClass: 'min-w-20 justify-self-end md:col-span-2'
  }
})

type FormProfileProps = VariantProps<typeof formProfileClasses> & {
  className?: string
}

const FormProfile = ({ className }: FormProfileProps) => {
  const { base, formClass, buttonClass, headingClass } = formProfileClasses()

  return (
    <div className={base({ className })}>
      <Heading className={headingClass()} color="black" linePosition="bottom" lineBottomColor="primary">
        My profile
      </Heading>

      <form className={formClass()}>
        <TextField name="name" label="Name" placeholder="Name" />
        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="E-mail"
          initialValue="email@email.com"
          disabled
        />
        <TextField name="password" type="password" label="Password" placeholder="Type your password" />
        <TextField name="new_password" type="password" label="New Password" placeholder="New password" />

        <Button className={buttonClass()}>Save</Button>
      </form>
    </div>
  )
}

export { FormProfile }
