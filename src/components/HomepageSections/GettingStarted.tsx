import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';

const STEPS = [
  {
    title: 'Find your template',
    text:
      'Every template is embedded within an iframe on the page, so you can easily check what they look like and test the responsive behaviour.',
  },
  {
    title: 'Copy the code',
    text:
      'Just click the code tab to see the actual source code of the template. Copy and paste it into your project and your are ready to go!',
  },
  {
    title: 'Enjoy your free time',
    text:
      'Your just saved yourself a bunch of time not building the same stuff over and over again. Enjoy your free time!',
  },
];

export const GettingStarted = () => {
  return (
    <Box bg={'gray.50'}>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
        <Heading
          as={'h3'}
          textAlign={'center'}
          fontSize={'3xl'}
          mb={{ base: 14, sm: 20 }}>
          Getting started in{' '}
          <Box as={'span'} color={'green.400'}>
            3 easy steps
          </Box>
        </Heading>
        <Flex
          direction={['column', 'column', 'row']}
          justify={'space-between'}
          align={['center', 'center', 'flex-start']}>
          {STEPS.map((step, index) => (
            <Stack
              spacing={4}
              key={step.title}
              maxW={['100%', '100%', 64]}
              mt={[10, 10, 0]}
              px={4}>
              <Flex
                w={8}
                h={8}
                bg={'green.100'}
                color={'green.700'}
                fontWeight={700}
                align={'center'}
                justify={'center'}
                fontSize={'sm'}
                rounded={'md'}>
                0{index + 1}
              </Flex>
              <Text fontFamily={'heading'} color={'gray.700'}>
                {step.title}
              </Text>
              <Text color={'gray.500'}>{step.text}</Text>
            </Stack>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
