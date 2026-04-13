'use client'

import { Box, Flex } from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HOME_REVEAL_MS, shouldPlayHomeReveal } from '@/lib/config/home-reveal'
import { siteMap } from '@/lib/config/site-config'
import { CNLink } from './chakra-next'

const easeOutStrong = 'cubic-bezier(0.23, 1, 0.32, 1)'

/** Shared layout id — single pill instance morphs to the next active item. */
const NAV_ACTIVE_LAYOUT_ID = 'navbar-active-pill'

const MotionPill = motion.create(Box)
const MotionFlex = motion.create(Flex)

const navFadeEase = [0.23, 1, 0.32, 1] as const

export default function Navbar() {
  const { pathname } = useRouter()
  const [entered, setEntered] = useState(
    () => pathname !== '/' || !shouldPlayHomeReveal(),
  )
  const prefersReducedMotion = useReducedMotion()

  /** Same timing as `StaggeredFooter` on first `/` visit in this session only. */
  useEffect(() => {
    if (pathname !== '/') {
      setEntered(true)
      return
    }

    if (!shouldPlayHomeReveal()) {
      setEntered(true)
      return
    }

    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setEntered(true)
      return
    }

    setEntered(false)
    const t = window.setTimeout(() => setEntered(true), HOME_REVEAL_MS.footer)
    return () => window.clearTimeout(t)
  }, [pathname])

  const pillTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 420, damping: 34, mass: 0.9 }

  const items = [
    { title: 'Home', href: siteMap.home },
    { title: 'Work', href: siteMap.resume },
    { title: 'Projects', href: siteMap.projects },
    { title: 'Contact', href: siteMap.contact },
  ]

  return (
    <Box
      overflowX={{ base: 'auto', md: 'visible' }}
      overflowY="hidden"
      maxW="100%"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
    <MotionFlex
      gap={{ base: 2, md: 3 }}
      flexWrap="nowrap"
      alignItems="center"
      py={{
        base: 6,
        md: 8,
        lg: 12,
      }}
      initial={false}
      animate={{
        opacity: entered ? 1 : 0,
      }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: navFadeEase,
      }}
      style={{ pointerEvents: entered ? 'auto' : 'none' }}
      maxW="100%"
    >
      {items.map((item) => {
        const isActive = pathname === item.href
        return (
          <Box
            key={item.title}
            position="relative"
            display="inline-flex"
            alignItems="center"
            flexShrink={0}
            px={{ base: 2.5, md: 3 }}
            py={{ base: 1.5, md: 1.5 }}
            borderRadius="md"
          >
            {isActive && (
              <MotionPill
                layoutId={NAV_ACTIVE_LAYOUT_ID}
                initial={false}
                transition={pillTransition}
                position="absolute"
                inset={0}
                borderRadius="md"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="gray.500"
                pointerEvents="none"
                zIndex={0}
                aria-hidden
              />
            )}
            <CNLink
              href={item.href}
              position="relative"
              zIndex={1}
              fontSize={{ base: 'sm', md: 'md' }}
              whiteSpace="nowrap"
              color={isActive ? 'gray.300' : 'gray.500'}
              transitionProperty="transform"
              transitionDuration="120ms"
              transitionTimingFunction={easeOutStrong}
              _hover={{
                transform: 'none',
                color: isActive ? 'gray.300' : 'gray.400',
                textDecoration: 'none',
              }}
            >
              {item.title}
            </CNLink>
          </Box>
        )
      })}
    </MotionFlex>
    </Box>
  )
}
