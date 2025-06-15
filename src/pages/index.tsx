/* eslint-disable react/no-unescaped-entities */

import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'
import { Heading, Separator, Stack, Text } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <>
      <Metahead
        title="Home | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={siteMap.home}
      />
      <Stack separator={<Separator opacity={0.2} />}>
        <Stack>
          <Heading as="h1" fontSize="3xl" mb={5}>
            Hi, I'm Sidak Dhingra
          </Heading>
          <Text>
            A full-stack developer from Delhi, India, i love building things that are both beautiful and functional. whether it’s a slick frontend or a solid backend,i love the process of turning ideas into real, working products.
          </Text>
        <Text>
          Lately, i’ve worked on projects like walled, insi chat, and spotifind  covering everything from real-time messaging to ai-powered playlists. i’ve also done some freelance work and an internship, which helped me grow as a developer and a teammate.
        </Text>
        <Text>
          When i’m not coding, i’m usually listening to music, exploring new tools, or geeking out over a random idea.
        </Text>
        </Stack>
      </Stack>
    </>
  )
}