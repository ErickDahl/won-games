import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { tv, VariantProps } from 'tailwind-variants'

import { Checkbox } from '@/components/atoms/Checkbox'
import { Heading } from '@/components/atoms/Heading'
import { Radio } from '@/components/atoms/Radio'
import useIsMobile from '@/hooks/useIsMobile'
import { FilterDrawer } from './components/FilterDrawer'

const filterClasses = tv({
  slots: {
    base: 'flex flex-col gap-6',
    filterBase:
      'flex w-full flex-col items-start gap-4 border-solid border-darkGray py-4 pb-6 [&:not(:last-child)]:border-b'
  }
})

type FilterOption = { label: string; value?: string }
type FilterGroup = { title: string; type: 'radio' | 'checkbox'; options: FilterOption[] }
type Values = Record<string, string | boolean>

export type FilterProps = VariantProps<typeof filterClasses> & {
  filters: FilterGroup[]
  onFilterChange?: (values: Values) => void
}

const FilterElements = ({ filters, onFilterChange }: FilterProps) => {
  const { filterBase } = filterClasses()
  const searchParams = useSearchParams()
  const router = useRouter()

  const updateSearchParams = (updates: Record<string, string | boolean>) => {
    const params = new URLSearchParams(searchParams)
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value.toString())
      } else {
        params.delete(key)
      }
    })
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  useEffect(() => {
    const newParamsObject: Values = {}
    searchParams.forEach((value, key) => {
      newParamsObject[key] = value
    })

    onFilterChange?.(newParamsObject)
  }, [searchParams, onFilterChange])

  return (
    <>
      {filters.map(({ title, type, options }) => {
        const titleKey = title.replace(/\s+/g, '_').toLowerCase()
        return (
          <div className={filterBase()} key={title}>
            <Heading className="m-0 mb-4 lg:mb-4" linePosition="bottom" lineBottomColor="secondary">
              {title}
            </Heading>
            {options.map(({ label, value }, index) => {
              const id = `${titleKey}-${value}-${index}`
              const labelKey = label
                .replace(/\s+/g, '_')
                .replace(/[^a-zA-Z0-9-]/g, '')
                .toLowerCase()

              return type === 'radio' ? (
                <Radio
                  key={id}
                  id={id}
                  labelFor={id}
                  label={label}
                  name={titleKey}
                  value={value || ''}
                  onCheck={(val) => updateSearchParams({ [titleKey]: val as string })}
                  defaultChecked={searchParams.get(titleKey) === value}
                />
              ) : (
                <Checkbox
                  key={id}
                  labelFor={id}
                  label={label}
                  onCheck={(val) => updateSearchParams({ [labelKey]: val })}
                  isChecked={searchParams.get(labelKey) === 'true'}
                />
              )
            })}
          </div>
        )
      })}
    </>
  )
}

const Filter = ({ filters, onFilterChange }: FilterProps) => {
  const { base } = filterClasses()
  const isMobile = useIsMobile(640)

  return (
    <div className={base()}>
      {isMobile ? (
        <FilterDrawer>
          <FilterElements filters={filters} onFilterChange={onFilterChange} />
        </FilterDrawer>
      ) : (
        <FilterElements filters={filters} onFilterChange={onFilterChange} />
      )}
    </div>
  )
}

export { Filter }
