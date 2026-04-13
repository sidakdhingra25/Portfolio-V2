'use client'

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineTextStyles,
} from '@chakra-ui/react'

import {
  Mona_Sans as BodyFont,
  Playfair_Display as HeadingFont,
} from 'next/font/google'

// *** Fonts ***
export const headingFont = HeadingFont({
  variable: '--font-heading',
  weight: ['400'],
  subsets: ['latin'],
})
export const bodyFont = BodyFont({
  variable: '--font-body',
  weight: ['400'],
  subsets: ['latin'],
})

const styleSystem = createSystem(defaultConfig, {
  globalCss: {
    'html, body': {
      bg: 'gray.950',
      color: 'gray.500',
      lineHeight: '1.5',
      scrollBehavior: 'smooth',
    },
    '*': {
      scrollbarWidth: 'none',
    },
    '*::-webkit-scrollbar': {
      display: 'none',
    },
    'h1, h2, h3, h4': {
      color: 'white',
    },
    'a:focus, a:focus-visible, button:focus, button:focus-visible, [role="button"]:focus, [role="button"]:focus-visible':
      {
        outline: 'none',
        boxShadow: 'none',
      },
  },
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: headingFont.style.fontFamily,
        },
        body: {
          value: bodyFont.style.fontFamily,
        },
      },
    },
    textStyles: defineTextStyles({
      cardHeading: {
        description: 'The heading for the card',
        value: {
          fontWeight: 'medium',
          fontSize: 'xl',
        },
      },
    }),
  },
})

type Props = {
  children: React.ReactNode
}

export function UiProvider(props: Props) {
  return <ChakraProvider value={styleSystem}>{props.children}</ChakraProvider>
}