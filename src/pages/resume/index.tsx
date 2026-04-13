import { CNLink } from '@/components/chakra-next'
import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'
import { Box, Flex, Heading, Separator, Stack, Text } from '@chakra-ui/react'

/** Renders "from – to" only when both exist; otherwise a single date with no stray dash. */
function formatDateRange(fromDate: string, toDate: string): string {
  const from = fromDate.trim()
  const to = toDate.trim()
  if (from && to) return `${from} - ${to}`
  if (from) return from
  if (to) return to
  return ''
}

/** Pill tag — light surface on dark theme (reference: rounded “chip” with contrasting label). */
function FreelanceTag() {
  return (
    <Text
      as="span"
      display="inline-block"
      verticalAlign="middle"
      fontFamily="body"
      fontSize="xs"
      fontWeight="semibold"
      lineHeight="1.2"
      px={3}
      py={1}
      borderRadius="full"
      bg="gray.100"
      color="gray.900"
    >
      Freelance
    </Text>
  )
}

export default function ResumePage() {
  return (
    <>
      <Metahead
        title="Sidak Dhingra"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={siteMap.resume}
      />
      <Stack gap={12}>
        <Flex
          justifyContent={'space-between'}
          alignItems={{ base: 'flex-start', sm: 'center' }}
          flexDirection={{ base: 'column', sm: 'row' }}
          gap={{ base: 4, sm: 0 }}
          flexWrap="wrap"
        >
          <Heading as="h1" fontSize={{ base: '2xl', sm: '3xl' }}>
            My Resume📝
          </Heading>
          <CNLink
            href="https://drive.google.com/file/d/1QM_zT936-oKHq_y_j5Yg7dskN_yLpJ7W/view?usp=sharing"
            border={'1px solid'}
            borderColor={'gray.500'}
            borderRadius={'sm'}
            color={'white'}
            target={'_blank'}
            px={4}
            py={2}
            fontSize={'sm'}
            alignSelf={{ base: 'stretch', sm: 'auto' }}
            textAlign="center"
            whiteSpace={{ base: 'normal', sm: 'nowrap' }}
            _hover={{
              textDecoration: 'none',
            }}
          >
            Download Resume
          </CNLink>
        </Flex>
        <Stack id="Experience" gap={8}>
          <Heading as="h2" fontSize="2xl">
            Work Experience
          </Heading>
          {experienceData.map((item) => (
            <Experience key={item.company} {...item} />
          ))}
        </Stack>
        <Stack id="Education" gap={8}>
          <Heading as="h2" fontSize="2xl">
            Education
          </Heading>
          {educationData.map((item) => (
            <Education key={item.degree} {...item} />
          ))}
        </Stack>
        <Stack id="Award" gap={8}>
          <Heading as="h2" fontSize="2xl">
            Certification
          </Heading>
          <Stack separator={<Separator opacity={0.2} />}>
            {awardData.map((item) => (
              <Award key={item.title} {...item} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

type Experience = {
  company: string
  title: string
  fromDate: string
  toDate: string
  deliverables: string[]
  website?: string
  freelance?: boolean
  /** Overrides card heading size for the company | title row only. */
  headingFontSize?: string
}

const Experience = ({
  company,
  deliverables,
  fromDate,
  title,
  toDate,
  website,
  freelance,
  headingFontSize,
}: Experience) => {
  const companyEl =
    website != null && website !== '' ? (
      <CNLink
        href={website}
        underline
        target="_blank"
        rel="noopener noreferrer"
        color="white"
        textStyle="cardHeading"
        fontSize={headingFontSize}
        display="inline"
        _hover={{
          color: 'gray.300',
          transform: 'scale(1.01)',
          textDecoration: 'underline',
        }}
      >
        {company}
      </CNLink>
    ) : (
      company
    )

  return (
    <Stack gap={4}>
      <Flex
        justifyContent={'space-between'}
        alignItems={{ base: 'flex-start', md: 'center' }}
        flexDirection={{ base: 'column', md: 'row' }}
        flexWrap={'wrap'}
        gap={{ base: 3, md: 2 }}
      >
        {freelance ? (
          <Stack gap={{ base: 0, md: 2 }} flex="1" minW={0} align="flex-start">
            <Text
              textStyle={'cardHeading'}
              color={'white'}
              fontSize={headingFontSize}
            >
              {companyEl} | {title}
              <Text as="span" display={{ base: 'inline', md: 'none' }} ml={2}>
                <FreelanceTag />
              </Text>
            </Text>
            <Box display={{ base: 'none', md: 'block' }} w="fit-content">
              <FreelanceTag />
            </Box>
          </Stack>
        ) : (
          <Text
            textStyle={'cardHeading'}
            color={'white'}
            fontSize={headingFontSize}
          >
            {companyEl} | {title}
          </Text>
        )}
        <Text fontSize={'sm'}>{formatDateRange(fromDate, toDate)}</Text>
      </Flex>
      <Separator opacity={0.2} />
      <Stack as={'ul'} listStyleType={'disc'} ml={5}>
        {deliverables.map((item) => (
          <Text as="li" key={item}>
            {item}
          </Text>
        ))}
      </Stack>
    </Stack>
  )
}

const experienceData: Experience[] = [
  {
    company: 'Quadlabs',
    title: 'Software Developer',
    fromDate: 'August-2025',
    toDate: 'Present',
    deliverables: [
      'Worked on 20+ third‑party and internal APIs for flights, quotations, client preferences, payments, and banners, making sure responses are handled cleanly and users always see clear error or success states.',
      'Improved performance on heavy flight pages by adding lazy loading and other optimizations so large search results and filters feel smooth for B2B agents.',
      'Built and refined 10+ admin features like user/client/agency management, roles and rights, supplementary profiles, preferences, frequent flyers, feedback, and banner/ads using reactive forms, ng-select, and strong validation.',
    ],
    website: 'https://www.quadlabs.com/',
    headingFontSize: '18px',
  },
  {
    company: 'FLIB',
    title: 'Frontend Developer Contract',
    fromDate: 'March-2025',
    toDate: 'May-2025',
    deliverables: [
      'Developed a high-performance marketplace website using Next.js and TypeScript, achieving a reduction in page load times by 30% through advanced SEO and lazy loading techniques.',
      'Integrated Hygraph CMS with Next.js.',
    ],
    website: 'https://www.flib.store/',
    headingFontSize: '18px',
  },
  {
    company: 'Studio Marici',
    title: 'Frontend Developer Contract',
    fromDate: 'Jan-2025',
    toDate: 'Jan-2025',
    deliverables: [
      "Designed and developed Studio Marici using React, TypeScript, and Tailwind CSS, crafting a high-performance website tailored to the client's design vision for showcasing creative projects.",
      'Implemented  a  responsive  and  interactive  UI  with  Tailwind  CSS,  ensuring  seamless  navigation  and  an  optimized  user experience while maintaining design accuracy',
    ],
    website: 'https://www.studiomarici.in/',
    headingFontSize: '18px',
  },
]

type Education = {
  degree: string
  stream: string
  fromDate: string
  toDate: string
  location: string
}

const Education = ({ stream, degree, fromDate, location, toDate }: Education) => {
  return (
    <Stack gap={4}>
      <Flex
        justifyContent={'space-between'}
        alignItems={{ base: 'flex-start', md: 'center' }}
        flexDirection={{ base: 'column', md: 'row' }}
        flexWrap={'wrap'}
        gap={{ base: 3, md: 2 }}
      >
        <Text textStyle={'cardHeading'} color={'white'}>
          {degree}
        </Text>
        <Text fontSize={'sm'}>{formatDateRange(fromDate, toDate)}</Text>
      </Flex>
      <Separator opacity={0.2} />
      <Stack as={'ul'} listStyleType={'disc'} ml={5}>
        <Text as="li">{stream}</Text>
        <Text as="li">{location}</Text>
      </Stack>
    </Stack>
  )
}

export const educationData: Education[] = [
  {
    degree: 'The Northcap University, Gurugram ',
    stream: 'Bachelor of Technology (BTech), CSE with specialisation in Full-Stack Development',
    fromDate: 'Sept 2021',
    toDate: 'June 2025',
    location: 'Gurugram, Haryana, India',
  },
  {
    degree: 'G.D Salwan Public School',
    stream: 'Science (PCM)',
    fromDate: '',
    toDate: 'April 2021',
    location: 'Rajindar Nagar, New Delhi - 110060',
  },
]

type Award = {
  title: string
  date: string
  url: string
}

const Award = ({ title, date, url }: Award) => {
  return (
    <Stack>
      <Text textStyle={'cardHeading'} color={'white'}>
        {title}
      </Text>
      <Text fontSize={'sm'}>
        {date} | <CNLink href={url} target='_blank'>View Certificate</CNLink>
      </Text>
    </Stack>
  )
}

export const awardData: Award[] = [
  {
    title: 'AWS Cloud Practitioner',
    date: 'Aug-2024',
    url: 'https://www.credly.com/badges/69a5acdb-efec-4820-8163-949d892831d9/public_url',
  },
]