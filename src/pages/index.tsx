/* eslint-disable react/no-unescaped-entities */

'use client'

import Metahead from '@/components/MetaHead'
import {
  HOME_REVEAL_MS,
  markHomeRevealComplete,
  shouldPlayHomeReveal,
} from '@/lib/config/home-reveal'
import { siteMap } from '@/lib/config/site-config'
import { Box, Heading, Separator, Stack, Text } from '@chakra-ui/react'
import { motion, useReducedMotion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const MotionHeading = motion.create(Heading)

export default function HomePage() {
  const router = useRouter()
  const [bioVisible, setBioVisible] = useState(() => !shouldPlayHomeReveal())
  const [hoveredBio, setHoveredBio] = useState<number | null>(null)
  const [reduceMotion, setReduceMotion] = useState(false)
  const headingReducedMotion = useReducedMotion()

  useEffect(() => {
    if (typeof window === 'undefined') return
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (!shouldPlayHomeReveal()) {
      setBioVisible(true)
      return
    }

    let reduceMotion = false
    if (typeof window !== 'undefined') {
      reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }

    if (reduceMotion) {
      setBioVisible(true)
      return
    }

    const t = window.setTimeout(() => setBioVisible(true), HOME_REVEAL_MS.bio)
    return () => window.clearTimeout(t)
  }, [])

  /**
   * One reveal per SPA session (in-memory); full reload resets `homeRevealConsumed`.
   * Mark when leaving `/` (real navigation) or after stagger finishes (timer).
   */
  useEffect(() => {
    if (!shouldPlayHomeReveal()) return
    const onLeave = () => {
      if (router.pathname === '/') markHomeRevealComplete()
    }
    router.events.on('routeChangeStart', onLeave)
    return () => router.events.off('routeChangeStart', onLeave)
  }, [router])

  useEffect(() => {
    if (!shouldPlayHomeReveal()) return
    const t = window.setTimeout(
      () => markHomeRevealComplete(),
      HOME_REVEAL_MS.footer + HOME_REVEAL_MS.bio + 3500,
    )
    return () => window.clearTimeout(t)
  }, [])

  const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'

  const bioParagraphProps = (index: number) => {
    const isFocused = hoveredBio === index
    const isOther = hoveredBio !== null && hoveredBio !== index
    /** Color eases slower than blur/opacity so switching paragraphs feels smooth, not snappy. */
    const transition = reduceMotion
      ? `color 0.2s ${ease}, opacity 0.2s ${ease}, filter 0.2s ${ease}`
      : `color 0.55s ${ease}, opacity 0.3s ${ease}, filter 0.3s ${ease}`

    return {
      onMouseEnter: () => setHoveredBio(index),
      color: isFocused ? 'white' : 'gray.500',
      opacity: isOther ? 0.42 : 1,
      filter: reduceMotion || !isOther ? 'none' : 'blur(6px)',
      transition,
      cursor: 'default' as const,
    }
  }

  return (
    <>
      <Metahead
        title="Sidak Dhingra"
        description=" A full-stack developer from Delhi, India"
        keywords={[
          'Portfolio',
          'Resume',
          'Sidak Dhingra',
          'Sidak Dhingra Portfolio',
          'Sidak Dhingra Resume',
          'Sidak Dhingra Projects',
          'Sidak Dhingra Contact',
          'Sidak Dhingra About',
          'Sidak Dhingra Portfolio',
          'Sidak Dhingra Resume',
          'Sidak Dhingra Projects',
          'Sidak Dhingra Contact',
          'Sidak Dhingra About',
        ]}
        url={siteMap.home}
      />
      <Stack separator={<Separator opacity={0.2} />}>
        <Stack>
          <MotionHeading
            as="h1"
            fontSize="3xl"
            mb={5}
            data-framer-hero=""
            initial={
              headingReducedMotion || !shouldPlayHomeReveal()
                ? false
                : { opacity: 0, y: 14 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={
              headingReducedMotion || !shouldPlayHomeReveal()
                ? { duration: 0 }
                : {
                    delay: 0.28,
                    duration: 0.7,
                    ease: [0.23, 1, 0.32, 1],
                  }
            }
          >
            Hi, I'm Sidak Dhingra
          </MotionHeading>
          <Box
            opacity={bioVisible ? 1 : 0}
            transition="opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1)"
          >
            <Stack gap={4} onMouseLeave={() => setHoveredBio(null)}>
              <Text {...bioParagraphProps(0)}>
                A Software Engineer from Delhi, India, i love building things that are both beautiful and
                functional. whether it’s a slick frontend or a solid backend,i love the process of turning ideas
                into real, working products.
              </Text>
              <Text {...bioParagraphProps(1)}>
                Lately, i’ve been learning by writing a lot of code, breaking things, fixing them, and getting
                better along the way.
              </Text>
              <Text {...bioParagraphProps(2)}>
                When i’m not coding, i’m usually listening to music, exploring new tools, or geeking out over a
                random idea.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  )
}
