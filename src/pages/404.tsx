import {
  Container,
  Icon,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { Logo } from '@/components/Logo';

export const NotFound = () => {
  return (
    <Flex align={'center'} justify={'center'} h={'100vh'} w={'full'}>
      <Stack
        as={Container}
        bg={'gray.50'}
        p={8}
        spacing={6}
        maxW={'lg'}
        align={'center'}
        textAlign={'center'}>
        <Icon as={Logo} w={10} h={10} />
        <Stack spacing={2}>
          <Heading>Page not found</Heading>
          <Text>
            This page was not found. You may have mistyped the address or the
            page may have moved.
          </Text>
        </Stack>
        <Flex>
          <NextLink href={'/'} passHref>
            <Button
              as={'a'}
              colorScheme={'green'}
              rounded={'full'}
              bg={'green.400'}
              _hover={{ bg: 'green.500' }}>
              Take me to the home page
            </Button>
          </NextLink>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default NotFound;
