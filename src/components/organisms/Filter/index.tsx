import { tv, VariantProps } from 'tailwind-variants'

import { Checkbox } from '@/components/atoms/Checkbox'
import { Heading } from '@/components/atoms/Heading'
import { Radio } from '@/components/atoms/Radio'

const filterClasses = tv({
  slots: {
    base: 'flex flex-col gap-6',
    filterBase:
      'flex flex-col items-start justify-center gap-4 border-solid border-darkGray pb-6 [&:not(:last-child)]:border-b'
  }
})

type FilterOption = {
  label: string
  value: string
}

type FilterGroup = {
  title: string
  type: 'radio' | 'checkbox'
  options: FilterOption[]
}

export type FilterProps = VariantProps<typeof filterClasses> & {
  filters: FilterGroup[]
}

const Filter = ({ filters }: FilterProps) => {
  const { base, filterBase } = filterClasses()

  return (
    <div className={base()}>
      {filters.map((filter) => {
        const type = filter.type

        return (
          <div className={filterBase()} key={filter.title}>
            <Heading className="m-0 mb-4 lg:mb-4" linePosition="bottom" lineBottomColor="secondary">
              {filter.title}
            </Heading>
            {filter.options.map((optionData, index) => {
              const id = `${filter.title}-${optionData.value}-${index}`

              return (
                <div key={id}>
                  {type === 'radio' ? (
                    <Radio labelFor={id} label={optionData.label} name={filter.title} value={optionData.value} />
                  ) : (
                    <Checkbox labelFor={id} label={optionData.label} />
                  )}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export { Filter }
