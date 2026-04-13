'use client'

import Footer from '@/components/ui/footer'
import { HOME_REVEAL_MS, shouldPlayHomeReveal } from '@/lib/config/home-reveal'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function StaggeredFooter() {
  const { pathname } = useRouter()
  const [visible, setVisible] = useState(
    () => pathname !== '/' || !shouldPlayHomeReveal(),
  )

  useEffect(() => {
    if (pathname !== '/') {
      setVisible(true)
      return
    }

    if (!shouldPlayHomeReveal()) {
      setVisible(true)
      return
    }

    let reduceMotion = false
    if (typeof window !== 'undefined') {
      reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }

    if (reduceMotion) {
      setVisible(true)
      return
    }

    setVisible(false)
    const t = window.setTimeout(() => setVisible(true), HOME_REVEAL_MS.footer)
    return () => window.clearTimeout(t)
  }, [pathname])

  return (
    <Box
      opacity={visible ? 1 : 0}
      transition="opacity 0.65s cubic-bezier(0.23, 1, 0.32, 1)"
      visibility={visible ? 'visible' : 'hidden'}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      {...(!visible ? { inert: true as const } : {})}
    >
      <Footer />
    </Box>
  )
}
