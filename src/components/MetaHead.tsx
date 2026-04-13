import React from 'react'
import Head from 'next/head'
import {
  defaultOgDescription,
  ogImagePath,
  pageAbsoluteUrl,
} from '@/lib/config/site-config'

type Props = {
  title: string
  description: string
  url: string
  keywords: string[]
}

export default function Metahead({ title, description, url, keywords }: Props) {
  const canonical = pageAbsoluteUrl(url)
  const ogImage = pageAbsoluteUrl(ogImagePath)

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonical} />

      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={defaultOgDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sidak Dhingra" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={defaultOgDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}
