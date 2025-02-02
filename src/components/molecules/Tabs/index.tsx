'use client'

import {
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState
} from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { TabContext, useTabContext } from './context/context'

const tabsClasses = tv({
  slots: {
    base: '',
    tabsListClass: 'relative grid w-full grid-cols-3',
    tabsTriggerClass: 'relative py-2 text-white',
    tabsTriggerClassHide: 'py-2 text-gray',
    tabsContentClass: 'mt-4 text-white opacity-100 transition-all duration-300',
    tabsContentClassHide:
      'pointer-events-none absolute mt-4 text-white opacity-0',
    borderClass:
      'absolute bottom-0 h-1 bg-primary transition-all duration-300 ease-in-out'
  }
})

type TabsProps = VariantProps<typeof tabsClasses> &
  HTMLAttributes<HTMLDivElement> & {
    defaultTab: string
  }

export const Tabs = ({
  defaultTab,
  className,
  children,
  ...rest
}: PropsWithChildren<TabsProps>) => {
  const { base } = tabsClasses()
  const [currentTab, setCurrentTab] = useState(defaultTab)

  return (
    <TabContext.Provider
      value={{
        currentTab,
        setCurrentTab
      }}
    >
      <div className={base({ className })} {...rest}>
        {children}
      </div>
    </TabContext.Provider>
  )
}

type TabsListProps = HTMLAttributes<HTMLElement>

export const TabsList = ({
  className,
  children,
  ...rest
}: PropsWithChildren<TabsListProps>) => {
  const { tabsListClass, borderClass } = tabsClasses()
  const { currentTab } = useTabContext()
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const containerRef = useRef<HTMLElement>(null)

  const updateIndicator = () => {
    if (containerRef.current) {
      const activeButton = containerRef.current.querySelector(
        '[data-active="true"]'
      ) as HTMLElement
      if (activeButton) {
        const activeButtonRect = activeButton.getBoundingClientRect()
        const containerRect = containerRef.current.getBoundingClientRect()

        const left = activeButtonRect.left - containerRect.left
        const width = activeButtonRect.width
        const adjustedWidth = width / 3

        setIndicatorStyle({
          left: left + (width - adjustedWidth) / 2,
          width: adjustedWidth
        })
      }
    }
  }

  useEffect(() => {
    updateIndicator()

    window.addEventListener('resize', updateIndicator)

    return () => {
      window.removeEventListener('resize', updateIndicator)
    }
  }, [currentTab])

  return (
    <nav ref={containerRef} className={tabsListClass({ className })} {...rest}>
      {children}
      <span
        className={borderClass()}
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width
        }}
      />
    </nav>
  )
}

type TabsTriggerProps = HTMLAttributes<HTMLButtonElement> & {
  value: string
}

export const TabsTrigger = ({
  value,
  className,
  children,
  ...rest
}: PropsWithChildren<TabsTriggerProps>) => {
  const { tabsTriggerClass, tabsTriggerClassHide } = tabsClasses()
  const { currentTab, setCurrentTab } = useTabContext()

  const isActive = value === currentTab
  const tabTriggerClass = isActive ? tabsTriggerClass : tabsTriggerClassHide

  return (
    <button
      data-active={isActive ? 'true' : 'false'}
      className={tabTriggerClass({ className })}
      onClick={() => setCurrentTab(value)}
      {...rest}
    >
      {children}
    </button>
  )
}

type TabsContentProps = HTMLAttributes<HTMLDivElement> & {
  value: string
}

export const TabsContent = ({
  value,
  className,
  children,
  ...rest
}: PropsWithChildren<TabsContentProps>) => {
  const { tabsContentClass, tabsContentClassHide } = tabsClasses()
  const { currentTab } = useTabContext()

  const tabTriggerClass =
    value === currentTab ? tabsContentClass : tabsContentClassHide

  return (
    <div className={tabTriggerClass({ className })} {...rest}>
      {children}
    </div>
  )
}
