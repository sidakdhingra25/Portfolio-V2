import Navbar from '@/components/navbar'
import StaggeredFooter from '@/components/ui/staggered-footer'
import { UiProvider } from '@/components/ui/ui-provider'
import { Container } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <Container
        maxW={{
          md: 'xl',
        }}
        px={{ base: 4, sm: 6 }}
        w="full"
      >
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
        <StaggeredFooter />
      </Container>
    </UiProvider>
  )
}