import {
  Container,
  Heading,
  Text,
  Box,
  Stack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { TextUnderline } from '@/components/TextUnderline';

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
      "You've just saved yourself a bunch of time not building the same stuff over and over again. Enjoy your free time!",
  },
];

export const GettingStarted = () => {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW={'7xl'} py={{ base: 14, sm: 20, md: 32 }}>
        <Heading
          as={'h3'}
          textAlign={'center'}
          fontSize={'3xl'}
          mb={{ base: 14, sm: 16 }}>
          Getting started in <TextUnderline>3 easy steps</TextUnderline>
        </Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={'space-between'}
          align={{ base: 'center', md: 'flex-start' }}>
          {STEPS.map((step, index) => (
            <Stack
              spacing={4}
              key={step.title}
              maxW={{ base: 'full', md: 72 }}
              mt={{ base: 10, md: 0 }}
              px={4}>
              <Flex
                w={8}
                h={8}
                bg={useColorModeValue('green.100', 'green.900')}
                color={useColorModeValue('green.700', 'green.300')}
                fontWeight={700}
                align={'center'}
                justify={'center'}
                fontSize={'sm'}
                rounded={'md'}>
                0{index + 1}
              </Flex>
              <Text
                fontFamily={'heading'}
                fontSize={'lg'}
                color={useColorModeValue('gray.700', 'white')}>
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
