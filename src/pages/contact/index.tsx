
import { CNLink } from '@/components/chakra-next'
import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'
import { Heading, Separator, Stack } from '@chakra-ui/react'
import { CiMail } from 'react-icons/ci'
import { SlCalender } from 'react-icons/sl'

export default function ContactPage() {
  return (
    <>
      <Metahead
        title="Contact | Sidak Dhingra"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={siteMap.contact}
      />
      <Stack gap={8}>
        <Heading as="h1" fontSize="3xl">
          Contact 📞
        </Heading>
        <Stack gap={2}>
          <Heading as={'h2'} fontSize="2xl">
            Feel free to reach out to me via email:
          </Heading>
          <CNLink
            width={'fit-content'}
            _focus={{ outline: 'none', boxShadow: 'none' }}
            display={'flex'}
            href={siteMap.mailTo}
            target="_blank"
          >
            <CiMail />
            sidakdhingra73@gmail.com
          </CNLink>
        </Stack>
        <Separator opacity={0.2} />
        <Stack gap={2}>
          <Heading as={'h2'} fontSize="2xl">
            Book a meeting
          </Heading>
          <CNLink
            width={'fit-content'}
            _focus={{ outline: 'none', boxShadow: 'none' }}
            display={'flex'}
            href="https://calendly.com/sidakdhingra73/30min"
            target="_blank"
          >
            <SlCalender />
            Schedule a meet{' '}
          </CNLink>
        </Stack>
      </Stack>
    </>
  )
}