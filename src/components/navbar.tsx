
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { CNLink } from './chakra-next'
import { usePathname } from 'next/navigation'
import { siteMap } from '@/lib/config/site-config'

export default function Navbar() {
  const pathname = usePathname()

  const items = [
    {
      title: 'Home',
      href: siteMap.home,
    },
    {
      title: 'Resume',
      href: siteMap.resume,
    },
    {
      title: 'Projects',
      href: siteMap.projects,
    },
    {
      title: 'Contact',
      href: siteMap.contact,
    },
  ]

  return (
    <Flex
      gap={5}
      flexWrap={'wrap'}
      py={{
        base: 8,
        lg: 12,
      }}
    >
      {items.map((item) => (
        <CNLink
          key={item.title}
          href={item.href}
          color={pathname === item.href ? 'gray.300' : 'gray.500'}
        >
          {item.title}
        </CNLink>
      ))}
    </Flex>
  )
}