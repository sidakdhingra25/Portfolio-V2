/* eslint-disable react/no-unescaped-entities */

import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'
import { Heading, Separator, Stack, Text } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <>
      <Metahead
        title="Sidak Dhingra"
        description=" A full-stack developer from Delhi, India"
        keywords={['Portfolio', 'Resume',  'Sidak Dhingra', 'Sidak Dhingra Portfolio', 'Sidak Dhingra Resume', 'Sidak Dhingra Projects', 'Sidak Dhingra Contact', 'Sidak Dhingra About', 'Sidak Dhingra Portfolio', 'Sidak Dhingra Resume', 'Sidak Dhingra Projects', 'Sidak Dhingra Contact', 'Sidak Dhingra About']}
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
          Lately, i’ve been learning by writing a lot of code, breaking things, fixing them, and getting better along the way. Freelance work and an internship taught me how to collaborate, stay curious, and build with a purpose.
        </Text>
        <Text>
          When i’m not coding, i’m usually listening to music, exploring new tools, or geeking out over a random idea.
        </Text>
        </Stack>
      </Stack>
    </>
  )
}