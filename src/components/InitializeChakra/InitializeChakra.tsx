'use client'

import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '#/styles/theme'

interface Props {
  children: React.ReactNode
}

export const InitializeChakra = (props: Props) => {
  const { children } = props

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
