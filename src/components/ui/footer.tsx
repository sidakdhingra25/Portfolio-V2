'use client'

import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuMailPlus } from 'react-icons/lu'
import { CNLink } from '../chakra-next'

export default function Footer() {
  const items: {
    Icon: IconType
    href: string
    title: string
  }[] = [
    {
      Icon: LuMailPlus,
      href: 'mailto:sidakdhingra73@gmail.com',
      title: 'Email',
    },
    {
      Icon: FaGithub,
      href: 'https://github.com/sidakdhingra25',
      title: 'Github',
    },
    {
      Icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/sidak-dhingra/',
      title: 'LinkedIn',
    },
    {
      Icon: FaFilePdf,
      href: 'https://drive.google.com/file/d/1QM_zT936-oKHq_y_j5Yg7dskN_yLpJ7W/view?usp=sharing',
      title: 'Resume',
    },
  ]
  return (
    <Flex
      justifyContent={'flex-start'}
      gap={5}
      py={{
        base: 8,
        lg: 12,
      }}
    >
      {items.map((item) => {
        return (
          <Button
            as="div"
            key={item.title}
            variant={'plain'}
            p={2}
            outline="none"
            boxShadow="none"
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _focusVisible={{ outline: 'none', boxShadow: 'none' }}
          >
            <CNLink href={item.href} target="_blank">
              <item.Icon />
            </CNLink>
          </Button>
        )
      })}
    </Flex>
  )
}
