'use client'

import { Stack, Heading, Text } from '@chakra-ui/react'

interface Props {
  name?: string
  description?: string
}

export const PageHeading = (props: Props) => {
  const { name, description } = props

  return (
    <Stack mb={10}>
      <Heading size={'xl'}>{name}</Heading>
      {description ? <Text color={'gray.600'}>{description}</Text> : null}
    </Stack>
  )
}
