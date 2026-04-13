'use client'

import type { CSSProperties } from 'react'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { tapSpring, tapWhile } from '@/lib/config/tap-interaction'

const MotionLink = motion(NextLink)

interface CNLinkProps extends ChakraLinkProps {
  href: string
  children: React.ReactNode
  nextProps?: Omit<NextLinkProps, 'href'>
  /** When true, link stays underlined (default link style is no underline). */
  underline?: boolean
}

const noFocusRing: Pick<
  ChakraLinkProps,
  'outline' | 'boxShadow' | '_focus' | '_focusVisible'
> = {
  outline: 'none',
  boxShadow: 'none',
  _focus: { outline: 'none', boxShadow: 'none', ring: 0 },
  _focusVisible: { outline: 'none', boxShadow: 'none', ring: 0 },
}

/** Hover uses transform; press uses Framer whileTap (spring bounce). */
const linkInteraction: Pick<
  ChakraLinkProps,
  | 'transitionProperty'
  | 'transitionDuration'
  | 'transitionTimingFunction'
  | 'display'
  | 'alignItems'
  | 'justifyContent'
  | '_hover'
> &
  typeof noFocusRing = {
  ...noFocusRing,
  transitionProperty: 'transform',
  transitionDuration: '140ms',
  transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  _hover: {
    transform: 'scale(1.01)',
  },
}

export const CNLink = ({
  href,
  children,
  nextProps,
  underline = false,
  ...props
}: CNLinkProps) => {
  const decoration = underline ? 'underline' : 'none'
  const rawNext = nextProps as
    | (Omit<NextLinkProps, 'href'> & { style?: CSSProperties })
    | undefined
  const { style: nextStyle, ...restNextProps } = rawNext ?? {}
  const merged: ChakraLinkProps = {
    ...linkInteraction,
    ...props,
    textDecoration: decoration,
    _hover: {
      ...linkInteraction._hover,
      textDecoration: decoration,
      ...(props._hover ?? {}),
    },
    _focus: { ...noFocusRing._focus, ...(props._focus ?? {}) },
    _focusVisible: { ...noFocusRing._focusVisible, ...(props._focusVisible ?? {}) },
  }

  return (
    <ChakraLink color={'gray.400'} {...merged} asChild>
      <MotionLink
        href={href}
        whileTap={tapWhile}
        transition={tapSpring}
        style={{
          outline: 'none',
          textDecoration: decoration,
          ...nextStyle,
        }}
        {...restNextProps}
      >
        {children}
      </MotionLink>
    </ChakraLink>
  )
}
