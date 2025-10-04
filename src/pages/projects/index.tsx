import { CNLink } from '@/components/chakra-next'
import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'

import { Flex, Heading, HStack, Separator, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLink } from 'react-icons/fa6'

export default function ProjectPage() {
  return (
    <Stack gap={8}>
      <Heading as="h1" fontSize="3xl" mb={4}>
        Projects 🚀
      </Heading>
      {projectData.map((i) => (
        <Project key={i.title} {...i} />
      ))}
    </Stack>
  )
}

type Project = {
  title: string
  description: string
  previewUrl?: string
  gitUrl?: string
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
            <CNLink hidden={!previewUrl} href={previewUrl!} target='_blank' color={'white'}>
              <FaLink size={'1.2rem'} />
            </CNLink>
            <CNLink hidden={!gitUrl} href={gitUrl!} target='_blank' color={'white'}>
              <FaGithub size={'1.2rem'} />
            </CNLink>
          </HStack>
        </Flex>
        <Separator opacity={0.2} />
        <Text>{description}</Text>
      </Stack>
    </>
  )
}

const projectData: Project[] = [
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
    title: 'Insi Chat',
    description:
      'Real-time chat app with React, Node.js, and MongoDB. Features secure JWT auth, Cloudinary for image uploads, and responsive design with Tailwind and DaisyUI.',
    previewUrl: 'https://insi-chat.vercel.app/',
    gitUrl: 'https://github.com/sidakdhingra25/Insi-chat',
  },
]