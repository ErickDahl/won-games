import { tv, VariantProps } from 'tailwind-variants'

import { FormProfile } from '@/components/molecules/FormProfile'
import { PageTemplate } from '@/components/templates/Page'
import { ProfileTemplate } from '@/components/templates/Profile'

const myProfileClasses = tv({
  slots: {
    base: ''
  }
})

export type MyProfileProps = VariantProps<typeof myProfileClasses>

const MyProfile = () => {
  const { base } = myProfileClasses()

  return (
    <PageTemplate>
      <ProfileTemplate className={base()}>
        <FormProfile />
      </ProfileTemplate>
    </PageTemplate>
  )
}

export { MyProfile }
