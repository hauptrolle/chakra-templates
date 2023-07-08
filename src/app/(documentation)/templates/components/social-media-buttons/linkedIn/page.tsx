'use client'

import { SiLinkedin } from 'react-icons/si'
import { Button, Center, Text } from '@chakra-ui/react'

export default function LinkedinButton() {
  return (
    <Center p={8}>
      <Button w={'full'} maxW={'md'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
        <Center>
          <Text>Send to Linkedin</Text>
        </Center>
      </Button>
    </Center>
  )
}
