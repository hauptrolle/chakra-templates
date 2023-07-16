'use client'

import {
  Container,
  Heading,
  Text,
  Stack,
  Icon,
  SimpleGrid,
  Wrap,
  WrapItem,
  Link,
  Tooltip,
  Flex,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import Image from 'next/image'
import { IoStar, IoExtensionPuzzle, IoMedal, IoBookmarks } from 'react-icons/io5'

import { CONTRIBUTORS_LINK, GITHUB_LINK } from '../../config/constants'
import { TextUnderline } from '../TextUnderline'
import { Stargazers } from '../../services/stargazers'

export interface Contributor {
  login: string
  name: string
  avatar_url: string
  profile: string
  contributions: string[]
}

export type OpenSourceProps = {
  contributors: Contributor[]
  stargazers: Stargazers
  categoriesCount: number
  templatesCount?: number
}

export const OpenSource = ({
  contributors,
  stargazers,
  categoriesCount,
  templatesCount,
}: OpenSourceProps) => {
  const STATS = [
    {
      icon: IoStar,
      label: 'GitHub Stars',
      count: stargazers.totalCount,
    },
    {
      icon: IoExtensionPuzzle,
      label: 'Templates',
      count: templatesCount,
    },
    {
      icon: IoMedal,
      label: 'Contributors',
      count: contributors.length,
    },
    {
      icon: IoBookmarks,
      label: 'Categories',
      count: categoriesCount,
    },
  ]

  return (
    <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading as={'h3'} mb={2}>
            We&apos;re <TextUnderline>open source</TextUnderline>
          </Heading>
          <Text color={'gray.500'} maxW={'4xl'} fontSize={{ md: 'lg' }}>
            and you can become a part of it! If you’re interested in contributing visit
            our{' '}
            <Link href={GITHUB_LINK} color={'green.400'} target={'_blank'}>
              GitHub repository
            </Link>{' '}
            and take a peek at the Template Development project. There are pre-designed
            templates waiting for you to be implemented.
          </Text>

          <Text color={'gray.500'} maxW={'4xl'} fontSize={{ md: 'lg' }}>
            Go ahead, and join these awesome list of contributors:
          </Text>

          <Wrap>
            {contributors.map((contributor) => (
              <WrapItem p={2} key={contributor.name}>
                <Tooltip label={contributor.name}>
                  <Box
                    as="a"
                    href={CONTRIBUTORS_LINK}
                    rounded={'full'}
                    width={'60px'}
                    height={'60px'}
                    overflow={'hidden'}>
                    <Image
                      src={contributor.avatar_url}
                      alt={`Avatar of ${contributor.name}`}
                      width={60}
                      height={60}
                    />
                  </Box>
                </Tooltip>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>

        <Flex justify={'center'} align={'center'}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 4 }} w={'full'}>
            {STATS.map((stat) => (
              <Stack
                key={stat.label}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                bg={useColorModeValue('gray.100', 'gray.900')}
                rounded={'xl'}
                px={4}
                py={3}
                direction={'row'}
                align={'center'}
                spacing={4}
                justify={'space-between'}>
                <Stack direction={'row'} align={'center'}>
                  <Icon color={'green.400'} as={stat.icon} />
                  <Text>{stat.label}</Text>
                </Stack>
                <Text fontWeight={700}>{stat.count}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
