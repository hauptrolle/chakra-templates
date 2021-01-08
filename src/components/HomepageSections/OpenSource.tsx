import {
  Container,
  Heading,
  Text,
  Stack,
  Icon,
  SimpleGrid,
  Avatar,
  Wrap,
  WrapItem,
  Center,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoStar,
  IoExtensionPuzzle,
  IoMedal,
  IoBookmarks,
} from 'react-icons/io5';

import { CONTRIBUTORS_LINK } from '../../constants';
import { TextUnderline } from '@/components/TextUnderline';
import { Stargazers } from '../../api/stargazers';

export interface Contributor {
  login: string;
  name: string;
  avatar_url: string;
  profile: string;
  contributions: string[];
}

interface OpenSourceProps {
  contributors: Contributor[];
  stargazers: Stargazers;
}

export const OpenSource = ({ contributors, stargazers }: OpenSourceProps) => {
  const STATS = [
    {
      icon: IoStar,
      label: 'GitHub Stars',
      count: stargazers.totalCount,
    },
    {
      icon: IoExtensionPuzzle,
      label: 'Templates',
      count: '10+',
    },
    {
      icon: IoMedal,
      label: 'Contributors',
      count: contributors.length,
    },
    {
      icon: IoBookmarks,
      label: 'Categories',
      count: '3+',
    },
  ];

  return (
    <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
      <Stack spacing={4} mb={{ base: 14, sm: 20 }} align={'center'}>
        <Heading as={'h3'} textAlign={'center'} fontSize={'3xl'}>
          We're <TextUnderline>open source</TextUnderline>
        </Heading>
        <Text
          textAlign={'center'}
          color={'gray.500'}
          maxW={'4xl'}
          fontSize={{ md: 'lg' }}>
          And you can become a part of it. If you’re interested in contributing
          visit our GitHub repository and take a peek at the Template
          Development project. Those are pre-designed templates waiting for you!
        </Text>
      </Stack>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={{ base: 4, md: 8, lg: 14 }}>
        {STATS.map((stat) => (
          <Stack
            key={stat.label}
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

      <Center pt={{ base: 14, sm: 20 }}>
        <Wrap justify={'center'}>
          {contributors.map((contributor) => (
            <WrapItem p={2} key={contributor.name}>
              <Tooltip label={contributor.name}>
                <Avatar
                  as={'a'}
                  href={CONTRIBUTORS_LINK}
                  size={'xl'}
                  bg={useColorModeValue('white', 'gray.900')}
                  name={contributor.name}
                  src={contributor.avatar_url}
                />
              </Tooltip>
            </WrapItem>
          ))}
        </Wrap>
      </Center>
    </Container>
  );
};
