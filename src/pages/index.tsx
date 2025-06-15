/* eslint-disable react/no-unescaped-entities */

import Metahead from '@/components/MetaHead'
import { siteMap } from '@/lib/config/site-config'
import { Box, Heading, Separator, Stack, Text } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <>
      <Metahead
        title="Home | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={siteMap.home}
      />
      <Stack gap={8} separator={<Separator opacity={0.2} />}>
        <Stack>
          <Heading as="h1" fontSize="3xl" mb={4}>
            Sup, I'm Sidak Dhingra
          </Heading>
          <Text>
            I’m a Software Engineer from Delhi, India, specializing in full-stack development. I build scalable and efficient web solutions, with a strong grasp of modern technologies. I'm adaptive, detail-oriented, and passionate about continuous learning and problem-solving.
          </Text>
        </Stack>
        {chunks.map((item) => (
          <Stack key={item.title}>
            <Heading as="h2">{item.title}</Heading>
            <Box>{item.content}</Box>
          </Stack>
        ))}
      </Stack>
    </>
  )
}

export const chunks = [
  {
    title: 'Professional Work',
    content: (
      <Stack gap={2}>
        <Text>
          I’ve delivered responsive, dynamic, and visually engaging interfaces using TypeScript, Next,js, React.js, Tailwind CSS, and Framer Motion, while ensuring clean code and performance optimization. From integrating Hygraph CMS to enhancing user experience with tools like Recharts and Cloudinary, my work focuses on creating real-world solutions that are both functional and elegant.
        </Text>
        <Text>
          My recent professional contributions include:Studio Marici – A creative agency site built with Next.js and Tailwind CSS.FinCon Research – A finance-oriented platform featuring animated graphs and live data visualizations.FLIB – A high-performance site optimized with SEO and CMS integration.
        </Text>
      </Stack>
    ),
  },
  {
    title: 'Skills',
    content: (
      <Text>
        I have hands-on experience with a wide range of technologies including React.js, Next.js, HTML/CSS, Tailwind CSS, TypeScript, JavaScript, and Python. On the backend, I work with Node.js, Express, MongoDB, and SQL to build robust server-side applications. I’m also proficient with tools and platforms such as Postman, Git, Vercel, and AWS. My skillset includes responsive UI development, API integration, authentication systems, and cloud-based deployments.
      </Text>
    ),
  },
  {
    title: 'Personal Interests',
    content: (
      <Text>
        Beyond work, I enjoy exploring topics in technology, reading about
        personal development, and engaging in creative hobbies like music. I’m also passionate about learning new skills to expand my horizons.
      </Text>
    ),
  },
]