import { CNLink } from '@/components/chakra-next'
import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'

import { Flex, Heading, HStack, Separator, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLink } from 'react-icons/fa6'

export default function ProjectPage() {
  return (
    <Stack gap={8}>
      <Flex
        justifyContent={'space-between'}
        alignItems={{ base: 'flex-start', sm: 'center' }}
        flexDirection={{ base: 'column', sm: 'row' }}
        gap={{ base: 4, sm: 0 }}
        flexWrap="wrap"
      >
        <Heading as="h1" fontSize={{ base: '2xl', sm: '3xl' }}>
          Projects 🚀
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
      {projectData.map((i) => (
        <Project key={i.title} {...i} />
      ))}
    </Stack>
  )
}

type Project = {
  title: string
  description: string | readonly string[]
  previewUrl?: string
  gitUrl?: string
}

const ProjectDescription = ({ description }: { description: string | readonly string[] }) => {
  if (Array.isArray(description)) {
    return (
      <Stack as="ul" gap={2} pl={5}>
        {description.map((line, i) => (
          <Text as="li" key={i} display="list-item">
            {line}
          </Text>
        ))}
      </Stack>
    )
  }
  return <Text>{description}</Text>
}

const Project = ({ title, description, previewUrl, gitUrl }: Project) => {
  return (
    <>
      <Metahead
        title="Projects | Sidak Dhingra"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={siteMap.projects}
      />
      <Stack gap={4}>
        <Flex flexWrap={'wrap'} gapX={4} gapY={2}>
          <Text textStyle={'cardHeading'} color={'white'}>
            {title}
          </Text>
          <HStack gap={4}>
            {previewUrl && (
              <CNLink href={previewUrl} target='_blank' color={'white'}>
                <FaLink size={'1.2rem'} />
              </CNLink>
            )}
            {gitUrl && (
              <CNLink href={gitUrl} target='_blank' color={'white'}>
                <FaGithub size={'1.2rem'} />
              </CNLink>
            )}
          </HStack>
        </Flex>
        <Separator opacity={0.2} />
        <ProjectDescription description={description} />
      </Stack>
    </>
  )
}

const projectData: Project[] = [
  {
    title: 'Schelo',
    description: [
      'Built a TypeScript + Zod-based runtime API validation package with fetch interception, schema enforcement, and real-time error reporting.',
      'Designed route-based validation and CLI tooling, improving API reliability, debugging, and developer experience in React/Next.js apps.',
    ],
    previewUrl: 'https://schelo.xyz/',
    gitUrl: 'https://github.com/sidakdhingra25/schelo',
  },
  {
    title: 'Pageo',
    description: [
      'Built a scalable all-in-one link management platform using Next.js, TypeScript, Tailwind CSS, Drizzle ORM, and PostgreSQL (NeonDB).',
      'Implemented authentication, analytics tracking, custom domains, and third-party integrations (Google Analytics, YouTube, GitHub, Instagram, Dribbble).',
      'Scaled to 100+ active users by continuously shipping features and improving UX, performance, and DX.',
    ],
    previewUrl: 'https://www.pageo.me',
  },
  {
    title: 'Walled',
    description:
      'Made a todo list app into personalized wallpapers using React Context API and html2canvas for dynamic image export.',
    previewUrl: 'https://walled-sand.vercel.app/',
    gitUrl: 'https://github.com/sidakdhingra25/Walled',
  },
  // {
  //   title: 'FinCon Research',
  //   description:
  //     'Built a financial research platform using Next.js and React.js. Integrated Framer Motion for animations and Recharts for interactive data visualization.',
  //   previewUrl: 'https://www.finconresearch.com/',
  // },
  {
    title: 'SpotiFind',
    description:
      'Created an AI-driven playlist recommender with Spotify OAuth integration. Personalized music suggestions enhance user engagement with Spotify’s library.',
    previewUrl: 'https://spotifindd.vercel.app/',
    gitUrl: 'https://github.com/sidakdhingra25/Spotify-Playlist',
  },
  // {
  //   title: 'Studio Marici',
  //   description:
  //     'Designed and built a responsive site using Next.js, TypeScript, and Tailwind CSS to showcase creative projects. Ensured fast performance and precise design implementation.',
  //   previewUrl: 'https://www.studiomarici.in/',
  // },
  {
    title: 'FLIB',
    description:
      'Developed a high-performance marketplace website using Next.js and TypeScript, achieving a reduction in page load times by 30% through advanced SEO and lazy loading techniques. Integrated Hygraph CMS with Next.js',
    previewUrl: 'https://www.flib.store/',
  },  
  {
    title: 'Insi Chat',
    description:
      'Real-time chat app with React, Node.js, and MongoDB. Features secure JWT auth, Cloudinary for image uploads, and responsive design with Tailwind and DaisyUI.',
    previewUrl: 'https://insi-chat.vercel.app/',
    gitUrl: 'https://github.com/sidakdhingra25/Insi-chat',
  },
]