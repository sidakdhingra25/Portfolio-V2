

import Navbar from '@/components/navbar'
import Footer from '@/components/ui/footer'
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
      >
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </Container>
    </UiProvider>
  )
}