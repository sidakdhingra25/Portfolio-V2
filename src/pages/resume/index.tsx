import { CNLink } from '@/components/chakra-next'
import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'
import { Flex, Heading, Separator, Stack, Text } from '@chakra-ui/react'
import { FaLink } from 'react-icons/fa6'

export default function ResumePage() {
  return (
    <>
      <Metahead
        title="Resume | Sidak Dhingra"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={siteMap.resume}
      />
      <Stack gap={12}>
        <Flex justifyContent={'space-between'}>
          <Heading as="h1" fontSize="3xl">
            My Resume📝
          </Heading>
          <CNLink
            href="https://drive.google.com/file/d/1e5sZ9GRSBxOY0eip9Pi1B9w6D4zko8Cp/view?usp=sharing"
            border={'1px solid'}
            borderColor={'gray.500'}
            borderRadius={'sm'}
            color={'white'}
            target={'_blank'}
            px={4}
            py={0}
            fontSize={'sm'}
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
  website?: string // Added website property
}

const Experience = ({
  company,
  deliverables,
  fromDate,
  title,
  toDate,
  website, // Added website prop
}: Experience) => {
  return (
    <Stack gap={4}>
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        flexWrap={'wrap'}
        gap={2}
      >
        <Text textStyle={'cardHeading'} color={'white'}>
          {company} | {title}
          {website && (
            <>
              {' '}
              |{' '}
              <CNLink href={website} target="_blank" rel="noopener noreferrer">
                <FaLink size={'1.2rem'} />
              </CNLink>
            </>
          )}
        </Text>
        <Text fontSize={'sm'}>
          {fromDate} - {toDate}
        </Text>
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
    title: 'Software Engineer',
    fromDate: 'August-2025',
    toDate: 'Present',
    deliverables: [
      'Worked on 20+ third‑party and internal APIs for flights, quotations, client preferences, payments, and banners, making sure responses are handled cleanly and users always see clear error or success states.',
      'Improved performance on heavy flight pages by adding lazy loading and other optimizations so large search results and filters feel smooth for B2B agents.',
      'Built and refined 10+ admin features like user/client/agency management, roles and rights, supplementary profiles, preferences, frequent flyers, feedback, and banner/ads using reactive forms, ng-select, and strong validation.',
    ],
    website: 'https://www.quadlabs.com/'
  },
  {
    company: 'Fincon Research',
    title: 'Frontend Developer Freelancer',
    fromDate: 'March-2025',
    toDate: 'May-2025',
    deliverables: [
      'Developing the FinCon Research website using React.js to create a dynamic and interactive user experience.',
      'Integrated Framer Motion for smooth animations and transitions, enhancing engagement.',
    ],
    website: 'https://www.finconresearch.com/', // Add your company website link here
  },
  {
    company: 'Studio Marici',
    title: 'Frontend Developer Freelancer',
    fromDate: 'Jan-2025',
    toDate: 'Jan-2025',
    deliverables: [
      "Designed and developed Studio Marici using React, TypeScript, and Tailwind CSS, crafting a high-performance website tailored to the client's design vision for showcasing creative projects.",
      'Implemented  a  responsive  and  interactive  UI  with  Tailwind  CSS,  ensuring  seamless  navigation  and  an  optimized  user experience while maintaining design accuracy',
    ],
    website: 'https://www.studiomarici.in/', // Add your company website link here
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
        alignItems={'center'}
        flexWrap={'wrap'}
        gap={2}
      >
        <Text textStyle={'cardHeading'} color={'white'}>
          {degree}
        </Text>
        <Text fontSize={'sm'}>
          {fromDate} - {toDate}
        </Text>
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
    fromDate: 'sept 2021',
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