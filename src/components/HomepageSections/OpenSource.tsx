import {
  Box,
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
} from '@chakra-ui/react';
import {
  IoStar,
  IoExtensionPuzzle,
  IoMedal,
  IoBookmarks,
} from 'react-icons/io5';

const STATS = [
  {
    icon: IoStar,
    label: 'GitHub Stars',
    count: '10+',
  },
  {
    icon: IoExtensionPuzzle,
    label: 'Templates',
    count: '10+',
  },
  {
    icon: IoMedal,
    label: 'Contributers',
    count: '10+',
  },
  {
    icon: IoBookmarks,
    label: 'Categories',
    count: '3+',
  },
];

// TODO fetch from github on build time
const CONTRIBUTERS = [
  {
    name: 'Achim Rolle',
    avatarUrl:
      'https://avatars2.githubusercontent.com/u/1164541?s=460&u=bdb434dbac51993e61e79d103fadd24eeb9be73f&v=4',
  },
  {
    name: 'Lazar Nikolov',
    avatarUrl:
      'https://avatars1.githubusercontent.com/u/5396211?s=460&u=e9b7489a1e9cf6b4ff4a09ce40a0f2a59c901d07&v=4',
  },
  {
    name: 'Oscar Sirvent',
    avatarUrl:
      'https://avatars3.githubusercontent.com/u/5927133?s=460&u=5532d9e8d3fbebeb27632ca165bb46da966de0fb&v=4',
  },
  {
    name: 'Ilija Boshkov',
    avatarUrl:
      'https://avatars3.githubusercontent.com/u/2392895?s=460&u=06f5bdb7c76ecb4018300eea4911aefca05008ee&v=4',
  },
];

export const OpenSource = () => {
  return (
    <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
      <Stack spacing={4} mb={{ base: 14, sm: 20 }} align={'center'}>
        <Heading as={'h3'} textAlign={'center'} fontSize={'3xl'}>
          We're{' '}
          <Box as={'span'} color={'green.400'}>
            open source
          </Box>
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
            bg={'gray.100'}
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
          {CONTRIBUTERS.map((contributor) => (
            <WrapItem p={2} key={contributor.name}>
              <Tooltip label={contributor.name}>
                <Avatar
                  size={'xl'}
                  bg={'white'}
                  name={contributor.name}
                  src={contributor.avatarUrl}
                />
              </Tooltip>
            </WrapItem>
          ))}
        </Wrap>
      </Center>
    </Container>
  );
};
