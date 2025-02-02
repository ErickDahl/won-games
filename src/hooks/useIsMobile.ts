'use client'

import { useLayoutEffect, useState } from 'react'

const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint)
    }

    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)

    return () => window.removeEventListener('resize', updateIsMobile)
  }, [breakpoint])

  return isMobile
}

export default useIsMobile
