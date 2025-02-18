'use client'

import { tv } from 'tailwind-variants'

import { EmailIcon, PasswordIcon } from '@/assets/icons'
import { Button } from '@/components/atoms/Button'
import { StoreLink } from '@/components/atoms/Link'
import { TextField } from '@/components/atoms/TextField'
import { AuthTemplate } from '@/components/templates/Auth'

const SignInClass = tv({
  slots: {
    base: '',
    content: 'flex w-full flex-col gap-4',
    input: '',
    forgotPassword: 'text-end text-sm font-normal text-black'
  }
})

const SignIn = () => {
  const { base, content, input, forgotPassword } = SignInClass()

  return (
    <AuthTemplate className={base()} pageType="signin">
      <form className={content()}>
        <TextField className={input()} name="Email" placeholder="Email" icon={<EmailIcon />} />
        <TextField className={input()} name="Password" placeholder="Password" icon={<PasswordIcon />} />
        <StoreLink className={forgotPassword()} href={'#'} hoverEffect={false}>
          Forgot your password?
        </StoreLink>

        <Button fullWidth>Sign in now</Button>
      </form>
    </AuthTemplate>
  )
}

export { SignIn }
