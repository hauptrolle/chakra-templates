'use client'

import {
  Container,
  Icon,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'

import { Logo } from '#/components/Logo'

export const NotFound = () => {
  return (
    <Flex align={'center'} justify={'center'} h={'100vh'} w={'full'}>
      <Stack
        as={Container}
        bg={useColorModeValue('gray.50', 'gray.900')}
        rounded={'xl'}
        p={8}
        spacing={6}
        maxW={'lg'}
        align={'center'}
        textAlign={'center'}>
        <Icon as={Logo} w={10} h={10} />
        <Stack spacing={2}>
          <Heading>Page not found</Heading>
          <Text>
            This page was not found. You may have mistyped the address or the page may
            have moved.
          </Text>
        </Stack>
        <Flex>
          <Button
            href="/"
            colorScheme={'green'}
            rounded={'full'}
            bg={'green.400'}
            _hover={{ bg: 'green.500' }}
            as={Link}>
            Take me to the home page
          </Button>
        </Flex>
      </Stack>
    </Flex>
  )
}

export default NotFound
