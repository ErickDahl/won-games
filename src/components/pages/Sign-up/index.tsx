'use client'

import { tv } from 'tailwind-variants'

import { EmailIcon, PasswordIcon, UserIcon } from '@/assets/icons'
import { Button } from '@/components/atoms/Button'
import { TextField } from '@/components/atoms/TextField'
import { AuthTemplate } from '@/components/templates/Auth'

const SignUpClass = tv({
  slots: {
    base: '',
    content: 'flex w-full flex-col gap-4',
    input: ''
  }
})

const SignUp = () => {
  const { base, content, input } = SignUpClass()

  return (
    <AuthTemplate className={base()} pageType="signup">
      <form className={content()}>
        <TextField className={input()} labelFor="Name" placeholder="Name" icon={<UserIcon />} />
        <TextField className={input()} labelFor="Email" placeholder="Email" icon={<EmailIcon />} />
        <TextField className={input()} labelFor="Password" placeholder="Password" icon={<PasswordIcon />} />
        <TextField
          className={input()}
          labelFor="Confirm Password"
          placeholder="Confirm Password"
          icon={<PasswordIcon />}
        />
        <Button fullWidth>Sign up now</Button>
      </form>
    </AuthTemplate>
  )
}

export { SignUp }
