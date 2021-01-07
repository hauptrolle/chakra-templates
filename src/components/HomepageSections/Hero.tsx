import {
  Container,
  Stack,
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { IoArrowForward } from 'react-icons/io5';
import { TextUnderline } from '@/components/TextUnderline';

export const Hero = () => {
  return (
    <Stack
      as={Container}
      maxW={'7xl'}
      h={{ base: '100%', md: '90vh' }}
      py={{ base: 14, sm: 20, md: 32 }}
      spacing={{ base: 10, md: 24 }}
      direction={{ base: 'column', lg: 'row' }}
      alignItems={'center'}>
      <Stack spacing={9} flex={2}>
        <Heading as={'h2'} fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>
          <TextUnderline>Production-ready</TextUnderline> Chakra UI Templates
          for developers
        </Heading>
        <Text color={'gray.500'} fontSize={{ md: 'lg' }}>
          A growing collection of hand-crafted Chakra UI templates ready to drop
          into your React project.
        </Text>
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
          <Button
            colorScheme={'green'}
            background={'green.400'}
            _hover={{ bg: 'green.500' }}
            variant={'solid'}
            size={'lg'}
            rounded={'full'}
            rightIcon={<IoArrowForward />}>
            Browse Templates
          </Button>
          <Button
            colorScheme={'green'}
            variant={'ghost'}
            size={'lg'}
            rounded={'full'}
            color={'green.400'}
            _hover={{ bg: 'green.100' }}>
            Suggest Templates
          </Button>
        </Stack>
      </Stack>

      {/* START Placeholder for the components animation */}
      <Stack position={'relative'} w={384} h={424}>
        <Flex
          position={'absolute'}
          top={0}
          left={0}
          justify={'center'}
          flex={1}
          p={4}
          bg={'white'}
          rounded={'3xl'}
          boxShadow={'xl'}
          minH={332}
          w={384}
          zIndex={4}
        />
        <Flex
          position={'absolute'}
          top={'28px'}
          left={'32px'}
          justify={'center'}
          flex={1}
          p={4}
          bg={'white'}
          rounded={'3xl'}
          boxShadow={'xl'}
          minH={332}
          w={320}
          zIndex={3}
        />
        <Flex
          position={'absolute'}
          top={'60px'}
          left={'48px'}
          justify={'center'}
          flex={1}
          p={4}
          bg={'white'}
          rounded={'3xl'}
          boxShadow={'xl'}
          minH={332}
          w={288}
          zIndex={2}
        />
        <Flex
          position={'absolute'}
          top={'84px'}
          left={'64px'}
          justify={'center'}
          flex={1}
          p={4}
          bg={'white'}
          rounded={'3xl'}
          boxShadow={'xl'}
          minH={332}
          w={256}
          zIndex={1}
        />
      </Stack>
      {/* END Placeholder for the components animation */}
    </Stack>
  );
};