'use client'
import { EmailIcon, PasswordIcon } from '@/assets/icons'
import Button from '@/components/atoms/Button'
import StoreLink from '@/components/atoms/Link'
import TextField from '@/components/atoms/TextField'
import AuthPage from '@/components/templates/AuthPage'
import { tv } from 'tailwind-variants'

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
    <AuthPage className={base()} pageType="signin">
      <form className={content()}>
        <TextField
          className={input()}
          labelFor="Email"
          placeholder="Email"
          icon={<EmailIcon />}
        />
        <TextField
          className={input()}
          labelFor="Password"
          placeholder="Password"
          icon={<PasswordIcon />}
        />
        <StoreLink className={forgotPassword()} href={'#'} hoverEffect={false}>
          Forgot your password?
        </StoreLink>

        <Button fullWidth>Sign in now</Button>
      </form>
    </AuthPage>
  )
}

export default SignIn
