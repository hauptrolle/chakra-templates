import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

export default function StatsGridWithImage() {
  return (
    <Stack
      minH={'100vh'}
      bg={'gray.800'}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} color={'gray.400'} justify={{ lg: 'center' }}>
        <Container maxW={'3xl'} py={8}>
          <Box mb={{ base: 8, md: 20 }}>
            <Text
              fontFamily={'heading'}
              fontWeight={700}
              textTransform={'uppercase'}
              mb={3}
              fontSize={'xl'}>
              Technology
            </Text>
            <Heading
              color={'white'}
              mb={4}
              fontSize={{ base: '3xl', md: '5xl' }}>
              21st century agriculture
            </Heading>
            <Text fontSize={'xl'}>
              The NewLife™ technology allows you to monitor your crops and get
              complete insights at real time. The proprietary software/hardware
              ecosystem prevents your plants from getting neglected.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {stats.map((stat) => (
              <Box key={stat.title}>
                <Text
                  fontFamily={'heading'}
                  fontSize={'3xl'}
                  color={'white'}
                  mb={3}>
                  {stat.title}
                </Text>
                <Text fontSize={'xl'}>{stat.content}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Stack>

      <Flex
        flex={1}
        display={{ base: 'none', md: 'flex' }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'relative'}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
    </Stack>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '10+',
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: '13%',
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
        their management solution
      </>
    ),
  },
  {
    title: '250M+',
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the
        NewLife™ software
      </>
    ),
  },
];
