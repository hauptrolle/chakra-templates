'use client'

import {
  Button,
  Container,
  Text,
  Box,
  Stack,
  Icon,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react'
import { DISCORD_INVITE_LINK } from '../../config/constants'
import { IoLogoDiscord } from 'react-icons/io5'

export const DiscordBanner = () => {
  return (
    <Box bg={'discord'} color={'white'}>
      <Container
        as={Stack}
        maxW={'7xl'}
        py={{ base: 6, sm: 10 }}
        spacing={8}
        direction={{ base: 'column', md: 'row' }}>
        <Stack
          spacing={4}
          flex={1}
          direction={{ base: 'column', sm: 'row' }}
          align={{ sm: 'center' }}>
          <Icon as={IoLogoDiscord} w={12} h={12} />
          <Stack spacing={0}>
            <Text fontFamily={'heading'} fontSize={'xl'}>
              Talk with us
            </Text>
            <Text opacity={0.8} fontSize={'md'}>
              We’ve setup a Discord server where you can ask questions, report bugs, or
              request templates!
            </Text>
          </Stack>
        </Stack>
        <Flex align={'center'}>
          <Button
            w={useBreakpointValue({ base: 'full', md: 'inherit' })}
            as={'a'}
            bg={'white'}
            color={'discord'}
            px={8}
            py={7}
            fontSize={'lg'}
            rounded={'full'}
            href={DISCORD_INVITE_LINK}
            target={'_blank'}
            _hover={{
              boxShadow: 'xl'
            }}>
            Join the Discord Server
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}
